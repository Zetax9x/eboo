import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'cute-e-annessi',
  chapter: 'anatomia',
  title: 'Cute e annessi',
  subtitle: 'Struttura, funzioni, termoregolazione e cura della pelle',
  icon: 'Layers',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guida pratica alla cura della pelle e prevenzione delle lesioni da pressione — OMS, 2021',
    'Linee guida internazionali sulla prevenzione e gestione delle lesioni da pressione (NPIAP/EPUAP/PPPIA) – 2020',
  ],
  blocks: [
    {
      title: 'Strati della cute',
      accent: 'red',
      icon: 'Layers',
      illustration: {
        id: 'cute-strati',
        alt: 'Sezione della pelle con epidermide, derma e ipoderma',
        prompt: 'cross-section of human skin showing epidermis, dermis and hypodermis layers, hair follicle and sweat gland',
        icon: 'Layers',
      },
      inset: {
        label: 'Epidermide',
        illustration: {
          id: 'cute-epidermide',
          alt: 'Dettaglio degli strati dell’epidermide',
          prompt: 'close-up cross-section of the outer layer of human skin, flat cells on the surface becoming plump cube-shaped cells at the bottom',
          icon: 'Layers',
        },
      },
      bullets: [
        '**Epidermide**: strato esterno, 0,1–0,2 mm, si rinnova ogni 28–40 giorni',
        '**Derma**: tessuto connettivo, 1–2 mm, contiene vasi, nervi, ghiandole',
        '**Ipoderma** (tessuto sottocutaneo): grasso, isolamento termico e meccanico',
        'Spessore totale: **1–3 mm** a seconda della sede',
      ],
    },
    {
      title: 'Annessi cutanei',
      accent: 'purple',
      icon: 'CircleDot',
      illustration: {
        id: 'cute-annessi',
        alt: 'Follicoli piliferi, ghiandole sebacee e sudoripare',
        prompt: 'skin cross-section showing hair follicles, sebaceous glands, eccrine and apocrine sweat glands, arrector pili muscles',
        icon: 'CircleDot',
      },
      bullets: [
        '**Follicoli piliferi**: producono il pelo, muscolo erettore del pelo',
        '**Ghiandole sebacee**: secernono sebo, lubrificazione e protezione',
        '**Ghiandole sudoripare eccrine**: termoregolazione, 2–4 milioni su tutto il corpo',
        '**Ghiandole apocrine**: ascelle, inguine, attive dopo la pubertà',
        '**Unghie**: placca cornea, crescono 3–4 mm/mese',
      ],
    },
    {
      title: 'Funzioni protettive',
      accent: 'blue',
      icon: 'ShieldCheck',
      illustration: {
        id: 'cute-protezione',
        alt: 'Barriera cutanea e difesa immunitaria',
        prompt: 'skin surface with keratinocytes forming a barrier, immune cells defending against pathogens, waterproof lipid layer',
        icon: 'ShieldCheck',
      },
      bullets: [
        '**Barriera fisica**: strato corneo impermeabile, pH acido 4,5–5,5',
        '**Difesa immunitaria**: cellule di Langerhans, macrofagi, linfociti T',
        '**Protezione UV**: melanina, strato corneo',
        '**Microbioma cutaneo**: batteri commensali, competizione con patogeni',
        '**Prevenzione infezioni**: sebo, sudore, IgA secretoria',
      ],
    },
    {
      title: 'Termoregolazione',
      accent: 'orange',
      icon: 'Thermometer',
      illustration: {
        id: 'cute-termoregolazione',
        alt: 'Vasi sanguigni e ghiandole sudoripare nella regolazione della temperatura',
        prompt: 'skin cross-section showing blood vessels dilating and constricting, sweat glands active, thermoregulation process',
        icon: 'Thermometer',
      },
      bullets: [
        '**Vasodilatazione**: aumenta il flusso sanguigno cutaneo, dispersione di calore',
        '**Vasoconstrizione**: riduce il flusso, conservazione del calore',
        '**Sudorazione**: evaporazione del sudore, raffreddamento efficace',
        '**Piloerezione**: ispessimento del pelo, isolamento (meno efficace nell’uomo)',
        '**Metabolismo basale**: produzione di calore nei tessuti',
      ],
    },
    {
      title: 'Sensibilità e percezione',
      accent: 'teal',
      icon: 'Activity',
      illustration: {
        id: 'cute-sensibilita',
        alt: 'Recettori tattili, termici e dolorifici nella pelle',
        prompt: 'skin cross-section showing Meissner corpuscles, Pacini corpuscles, free nerve endings, Merkel discs, sensory receptors',
        icon: 'Activity',
      },
      bullets: [
        '**Tatto**: corpuscoli di Meissner (tatto leggero), corpuscoli di Pacini (vibrazione)',
        '**Pressione**: corpuscoli di Merkel (pressione lenta), corpuscoli di Ruffini (stiramento)',
        '**Temperatura**: recettori termici (caldo e freddo)',
        '**Dolore**: terminazioni nervose libere, nocicettori',
        '**Propriocezione**: recettori nei muscoli e tendini',
      ],
    },
    {
      title: 'Cura e prevenzione',
      accent: 'green',
      icon: 'Hand',
      illustration: {
        id: 'cute-cura',
        alt: 'Idratazione e protezione della pelle',
        prompt: 'hands applying moisturizer to skin, protective barrier, hydration, skin care routine',
        icon: 'Hand',
      },
      bullets: [
        '**Idratazione**: emollienti, ceramidi, acido ialuronico',
        '**Protezione solare**: SPF 30+, applicazione ogni 2 ore',
        '**Prevenzione LPP**: cambio posizione ogni 2 ore, materassi antidecubito',
        '**Igiene**: detersione delicata, pH fisiologico',
        '**Nutrizione**: proteine, vitamine A, C, E, zinco',
      ],
    },
  ],
  keyPoints: [
    '**Rinnovamento epidermico**: 28–40 giorni',
    '**pH cutaneo**: 4,5–5,5 (barriera acida)',
    '**Prevenzione LPP**: cambio posizione q2h, valutazione Braden',
  ],
}

export default map
