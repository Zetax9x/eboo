import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'antibiotici-classi-principali',
  chapter: 'farmacologia',
  title: 'Antibiotici: classi principali',
  subtitle: 'Meccanismo d’azione, spettro e punti chiave per l’assistenza',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'AIFA — Farmaci essenziali e linee guida per l’uso appropriato degli antibiotici',
    'OMS — Global Guidelines on the Selection and Use of Essential Medicines',
    'Testi di farmacologia clinica e microbiologia per infermieristica (edizioni recenti)',
  ],
  intro: 'La scelta dell’antibiotico dipende da **spettro**, **meccanismo** e **profilo di sicurezza**. L’infermiere verifica allergie, interazioni e monitora gli effetti avversi.',
  tableTitle: 'Classi di antibiotici: panoramica',
  tableIcon: 'TestTubes',
  columns: ['Classe', 'Esempi', 'Meccanismo d’azione', 'Spettro / Note cliniche'],
  widths: [1.2, 1.5, 1.8, 2.5],
  rows: [
    ['Penicilline', 'Amoxicillina, Ampicillina, Piperacillina', 'Inibizione sintesi parete cellulare (PBPs)', 'Batteri Gram+ e alcuni Gram-; rischio allergia (anafilassi)'],
    ['Cefalosporine', 'Ceftriaxone, Cefepime, Cefazolina', 'Inibizione sintesi parete cellulare', 'Generazioni 1-4: spettro crescente verso Gram-; cross-allergia con penicilline'],
    ['Aminoglicosidi', 'Gentamicina, Amikacina', 'Inibizione sintesi proteica (sottounità 30S)', 'Gram- aerobi; ototossicità e nefrotossicità; monitoraggio livelli'],
    ['Fluorochinoloni', 'Ciprofloxacina, Levofloxacina', 'Inibizione DNA girasi e topoisomerasi IV', 'Ampio spettro; rischio tendinopatia, QT lungo; evitare in gravidanza'],
    ['Macrolidi', 'Azitromicina, Claritromicina', 'Inibizione sintesi proteica (sottounità 50S)', 'Atipici, Gram+; interazioni CYP3A4; aritmie (QT)'],
    ['Tetracicline', 'Doxiciclina, Minociclina', 'Inibizione sintesi proteica (sottounità 30S)', 'Ampio spettro; fotosensibilità; evitare in gravidanza e < 8 anni'],
    ['Glicopeptidi', 'Vancomicina', 'Inibizione sintesi parete cellulare', 'MRSA, enterococchi resistenti; "Red Man Syndrome"; nefrotossicità'],
    ['Carbapenemi', 'Meropenem, Imipenem', 'Inibizione sintesi parete cellulare', 'Ampio spettro (Gram+, Gram-, anaerobi); uso in infezioni gravi/resistenti'],
  ],
  notes: [
    {
      title: 'Monitoraggio infermieristico',
      icon: 'ClipboardCheck',
      accent: 'green',
      items: [
        'Verificare **allergie** e storia di reazioni avverse prima della somministrazione',
        'Monitorare **funzione renale** (creatinina, eGFR) per aminoglicosidi e vancomicina',
        'Controllare **livelli ematici** (picco/trough) per farmaci con finestra terapeutica stretta',
        'Segnalare **diarrea**, eruzioni cutanee o segni di shock anafilattico',
        'Educare il paziente: completare il ciclo, non condividere farmaci',
      ],
    },
    {
      title: 'Effetti avversi comuni',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Penicilline/Cefalosporine: **reazioni allergiche** (orticaria, anafilassi)',
        'Aminoglicosidi: **ototossicità** (ipoacusia, vertigini) e nefrotossicità',
        'Fluorochinoloni: **tendinopatia** (Achilleo), aritmie, fotosensibilità',
        'Macrolidi: **disturbi GI**, interazioni farmacologiche, QT lungo',
        'Vancomicina: **eritema cutaneo** (Red Man), nefrotossicità',
      ],
    },
    {
      title: 'Punti chiave per l’esame',
      icon: 'Lightbulb',
      accent: 'purple',
      items: [
        'Penicilline e cefalosporine agiscono sulla **parete cellulare**',
        'Aminoglicosidi e macrolidi agiscono sulla **sintesi proteica**',
        'Fluorochinoloni agiscono sul **DNA** (girasi/topoisomerasi)',
        'Vancomicina è il farmaco di scelta per **MRSA**',
        'Carbapenemi sono riserbati per infezioni **multiresistenti**',
      ],
    },
  ],
  keyPoints: [
    'L’uso appropriato degli antibiotici riduce il rischio di **resistenza**',
    'Sempre verificare **allergie** e **funzione renale** prima di somministrare',
  ],
}

export default map
