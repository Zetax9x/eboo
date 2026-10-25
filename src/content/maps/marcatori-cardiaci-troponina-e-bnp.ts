import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'marcatori-cardiaci-troponina-e-bnp',
  chapter: 'laboratorio',
  title: 'Marcatori cardiaci: troponina e BNP',
  subtitle: 'Valori di riferimento, interpretazione e ruolo infermieristico',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ESC Guidelines for the management of acute coronary syndromes (2023)',
    'ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (2021)',
    'Fabbri et al. — Biochimica clinica, 4ª ed.',
  ],
  intro: 'I valori di riferimento variano in base al **saggio utilizzato** dal laboratorio. Consultare sempre il referto specifico.',
  rows: [
    {
      name: 'Troponina I',
      symbol: 'cTnI',
      range: '< 0,04',
      unit: 'ng/mL',
      accent: 'red',
      low: {
        name: 'Normale',
        signs: 'Assenza di danno miocardico acuto',
        causes: 'Valore basale in soggetti sani',
      },
      high: {
        name: 'Elevata',
        signs: 'Dolore toracico, dispnea, segni di scompenso',
        causes: 'Infarto miocardico acuto (IMA), miocardite, embolia polmonare',
      },
      nursing: 'Prelievo **immediato** al sospetto IMA; ripetere a 3-6 ore; monitorare ECG continuo.',
    },
    {
      name: 'Troponina T',
      symbol: 'cTnT',
      range: '< 0,01',
      unit: 'ng/mL',
      accent: 'orange',
      low: {
        name: 'Normale',
        signs: 'Assenza di danno miocardico acuto',
        causes: 'Valore basale in soggetti sani',
      },
      high: {
        name: 'Elevata',
        signs: 'Dolore toracico, sincope, segni di shock',
        causes: 'IMA, aritmie gravi, sepsi, insufficienza renale',
      },
      nursing: 'Attenzione ai falsi positivi in **insufficienza renale**; correlare con quadro clinico.',
    },
    {
      name: 'BNP',
      symbol: 'BNP',
      range: '< 100',
      unit: 'pg/mL',
      accent: 'blue',
      low: {
        name: 'Normale',
        signs: 'Assenza di scompenso cardiaco acuto',
        causes: 'Funzione cardiaca conservata',
      },
      high: {
        name: 'Elevato',
        signs: 'Dispnea, edemi, tosse, ortopnea',
        causes: 'Scompenso cardiaco acuto, miocardiopatia, valvulopatia',
      },
      nursing: 'Valore > 400 pg/mL suggerisce **scompenso**; monitorare peso, diuresi, SpO₂.',
    },
    {
      name: 'NT-proBNP',
      symbol: 'NT-proBNP',
      range: '< 300',
      unit: 'pg/mL',
      accent: 'purple',
      low: {
        name: 'Normale',
        signs: 'Assenza di scompenso cardiaco acuto',
        causes: 'Funzione cardiaca conservata',
      },
      high: {
        name: 'Elevato',
        signs: 'Dispnea, affaticamento, edemi periferici',
        causes: 'Scompenso cardiaco, età > 75 anni, insufficienza renale',
      },
      nursing: 'Soglia di esclusione < 300 pg/mL (età < 50); > 900 pg/mL (età 50-75); > 1800 pg/mL (età > 75).',
    },
  ],
  tips: [
    'Troponina: **cinetica** importante (picco a 4-12 h, normalizzazione in 7-10 giorni)',
    'BNP/NT-proBNP: influenzati da **età, sesso, funzione renale**; interpretare in contesto clinico',
  ],
}

export default map
