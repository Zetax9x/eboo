#!/usr/bin/env node

/**
 * Generatore illustrazioni AI per Mappe Visive di Infermieristica
 * Usa fal.ai (più economico e veloce) o OpenAI come fallback
 * 
 * Uso:
 *   npm run generate-illustrations -- --map-id <id> --prompt "<prompt>"
 *   node scripts/illustrations.mjs --all
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

// Carica variabili d'ambiente
try {
  const env = readFileSync(join(__dirname, '..', '.env'), 'utf8')
  for (const line of env.split('\n')) {
    const [key, ...valueParts] = line.split('=')
    if (key && valueParts[0]) {
      process.env[key.trim()] = valueParts.join('=').trim()
    }
  }
} catch {}

// Configurazione API
const API_CONFIG = {
  fal: {
    endpoint: 'fal-ai/fast-lcm',
    apiKeyEnv: 'FAL_KEY',
  },
  openai: {
    model: 'dall-e-3',
    apiKeyEnv: 'OPENAI_API_KEY',
  }
}

// Template prompt per ogni tipo di mappa (solo soggetto, nessun testo)
const PROMPT_TEMPLATES = {
  overview: (title) => `Medical illustration of ${title}, clean educational style, white background, no text, flat design, professional nursing textbook`,
  disease: (title) => `Medical illustration showing pathology of ${title}, anatomical diagram style, cross-section view, white background, no text, educational medical illustration`,
  procedure: (title) => `Step-by-step medical procedure illustration for ${title}, clinical setting, healthcare worker performing action, white background, no text, instructional diagram`,
  lab: (title) => `Medical laboratory test visualization for ${title}, blood sample or diagnostic equipment, clean clinical style, white background, no text, educational chart`,
  ecg: (title) => `ECG waveform pattern showing ${title}, cardiac rhythm strip, medical monitoring display, white background, no text, clinical illustration`
}

// Mappa slug → tipo di mappa
const MAP_TYPES = {
  overview: ['overview', 'disease'],
  procedure: ['procedure'],
  lab: ['lab'],
  ecg: ['ecg']
}

async function generateIllustration(prompt, provider = 'fal') {
  const apiKey = process.env[API_CONFIG[provider].apiKeyEnv]
  
  if (!apiKey) {
    throw new Error(`Chiave API mancante per ${provider}. Imposta ${API_CONFIG[provider].apiKeyEnv} in .env`)
  }

  try {
    if (provider === 'fal') {
      const response = await fetch('https://api.fal.ai/v1/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Key ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: prompt,
          model: API_CONFIG.fal.endpoint,
          n: 1,
          size: '1024x1024'
        })
      })

      if (!response.ok) {
        throw new Error(`Fal.ai API error: ${response.status} ${response.statusText}`)
      }

      const result = await response.json()
      return result.images?.[0]?.url || null
    } else if (provider === 'openai') {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: API_CONFIG.openai.model,
          prompt: prompt,
          n: 1,
          size: '1024x1024'
        })
      })

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`)
      }

      const result = await response.json()
      return result.data?.[0]?.url || null
    }
  } catch (error) {
    console.error(`Errore generazione ${provider}:`, error.message)
    throw error
  }
}

async function downloadImage(url, outputPath) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Download fallito: ${response.status}`)
  }
  
  const buffer = await response.arrayBuffer()
  writeFileSync(outputPath, Buffer.from(buffer))
}

function getPromptForMap(mapId, mapType) {
  // Estrai titolo dal mapId (es: "ipertensione" → "Ipertensione arteriosa")
  const title = mapId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  
  const template = PROMPT_TEMPLATES[mapType] || PROMPT_TEMPLATES.overview
  return template(title)
}

async function processMap(mapId, mapType, provider = 'fal') {
  const prompt = getPromptForMap(mapId, mapType)
  console.log(`\n📝 Prompt per ${mapId}: "${prompt}"`)
  
  try {
    const imageUrl = await generateIllustration(prompt, provider)
    
    if (!imageUrl) {
      throw new Error('Nessuna immagine restituita dall\'API')
    }

    // Scarica e salva come WebP
    const outputDir = join(__dirname, '..', 'src', 'assets', 'illustrations')
    mkdirSync(outputDir, { recursive: true })
    
    const outputPath = join(outputDir, `${mapId}.webp`)
    await downloadImage(imageUrl, outputPath)
    
    console.log(`✅ Salvato: ${outputPath}`)
    return true
  } catch (error) {
    console.error(`❌ Errore per ${mapId}:`, error.message)
    return false
  }
}

// Legge l'indice delle mappe
function loadMapIndex() {
  try {
    const indexPath = join(__dirname, '..', 'src', 'book', 'outline.ts')
    const content = readFileSync(indexPath, 'utf8')
    
    // Estrai id e tipo da ogni voce dell'indice
    const mapPattern = /id:\s*['"]([^'"]+)['"].*?type:\s*['"]([^'"]+)['"]/gs
    const maps = []
    let match
    
    while ((match = mapPattern.exec(content)) !== null) {
      maps.push({ id: match[1], type: match[2] })
    }
    
    return maps
  } catch (error) {
    console.error('Errore lettura indice:', error.message)
    return []
  }
}

// Legge stato illustrazioni esistenti
function loadIllustrationState() {
  try {
    const statePath = join(__dirname, '..', 'src', 'assets', 'illustrations', '.state.json')
    if (existsSync(statePath)) {
      return JSON.parse(readFileSync(statePath, 'utf8'))
    }
  } catch {}
  return { generated: [], failed: [] }
}

function saveIllustrationState(state) {
  const statePath = join(__dirname, '..', 'src', 'assets', 'illustrations', '.state.json')
  writeFileSync(statePath, JSON.stringify(state, null, 2))
}

// CLI principale
async function main() {
  const args = process.argv.slice(2)
  const mapId = args.find(a => a.startsWith('--map-id='))?.split('=')[1]
  const prompt = args.find(a => a.startsWith('--prompt='))?.split('=')?.slice(1).join('=')
  const all = args.includes('--all')
  const provider = args.find(a => a.startsWith('--provider='))?.split('=')[1] || 'fal'

  if (!mapId && !all) {
    console.log('Uso:')
    console.log('  node scripts/illustrations.mjs --map-id <id> [--prompt "<prompt>"]')
    console.log('  node scripts/illustrations.mjs --all')
    console.log('  node scripts/illustrations.mjs --provider=openai')
    process.exit(1)
  }

  const state = loadIllustrationState()
  
  if (mapId) {
    // Genera singola illustrazione
    const mapType = 'overview' // default, può essere sovrascritto se si legge dall'indice
    await processMap(mapId, mapType, provider)
    
    if (!state.generated.includes(mapId)) {
      state.generated.push(mapId)
      saveIllustrationState(state)
    }
  } else if (all) {
    // Genera tutte le illustrazioni mancanti
    const maps = loadMapIndex()
    let generated = 0
    let failed = 0
    
    for (const map of maps) {
      if (state.generated.includes(map.id)) {
        console.log(`⏭️  Saltato ${map.id} (già generata)`)
        continue
      }
      
      const success = await processMap(map.id, map.type, provider)
      if (success) {
        state.generated.push(map.id)
        generated++
      } else {
        state.failed.push(map.id)
        failed++
      }
    }
    
    saveIllustrationState(state)
    console.log(`\n📊 Riepilogo: ${generated} generate, ${failed} fallite`)
  }
}

main().catch(error => {
  console.error('Errore critico:', error)
  process.exit(1)
})
