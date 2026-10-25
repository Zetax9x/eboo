import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'scompenso-cardiaco',
  chapter: 'patologie',
  title: 'Scompenso cardiaco',
  subtitle: 'Il cuore non riesce a soddisfare le richieste dell’organismo',
  icon: 'Heart',
  status: 'bozza',
  sources: [
    'ESC 2021 Guidelines for the diagnosis and treatment of acute and chronic heart failure + Focused Update 2023 (Eur Heart J)',
    'NYHA — classificazione funzionale dello scompenso cardiaco',
  ],
  definition:
    'Sindrome clinica con **sintomi** (dispnea, astenia) e **segni** (edemi, congestione) dovuti ad alterazione strutturale e/o funzionale del cuore, con **pressioni intracardiache elevate** e/o **gittata ridotta**.',
  illustration: {
    id: 'scompenso-cardiaco-cuore-dilatato',
    alt: 'Cuore dilatato con congestione polmonare ed edemi declivi',
    prompt: 'enlarged dilated human heart, lungs with fluid congestion, swollen lower legs and ankles',
    icon: 'Heart',
  },
  types: [
    { name: 'HFrEF', text: 'FE **ridotta ≤ 40%**: deficit di contrazione (sistolico).' },
    { name: 'HFmrEF', text: 'FE **lievemente ridotta 41–49%**.' },
    { name: 'HFpEF', text: 'FE **conservata ≥ 50%**: deficit di rilasciamento (anziani, ipertesi).' },
    { name: 'Classi NYHA', text: '**I** nessun limite · **II** sforzi abituali · **III** sforzi lievi · **IV** a riposo.' },
  ],
  sections: [
    {
      title: 'Cause',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Cardiopatia ischemica** (infarto pregresso)',
        '**Ipertensione** arteriosa',
        'Valvulopatie, cardiomiopatie',
        'Aritmie (es. **fibrillazione atriale**)',
        'Tossici: **alcol**, chemioterapici',
        'Riacutizzazioni: infezioni, eccesso di sale/liquidi, scarsa aderenza',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Sinistro**: dispnea da sforzo, **ortopnea**, dispnea parossistica notturna, rantoli',
        '**Destro**: **edemi declivi**, turgore giugulare, epatomegalia, ascite',
        '**Aumento di peso** rapido, astenia, nicturia',
        'Bassa portata: estremità fredde, oliguria',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**BNP ≥ 35 pg/mL** o **NT-proBNP ≥ 125 pg/mL** (cronico)',
        '**Ecocardiogramma**: frazione di eiezione',
        'ECG, Rx torace (congestione, cardiomegalia)',
        'Esami: creatinina, elettroliti, emocromo, ferro',
      ],
    },
    {
      title: 'Terapia HFrEF',
      icon: 'Pill',
      accent: 'teal',
      items: [
        '“**4 pilastri**”: **ARNI** (o ACE-i), **beta-bloccante**, **MRA**, **SGLT2-i**',
        '**Diuretici dell’ansa** (furosemide) per la congestione',
        'Titolazione graduale fino alle dosi massime tollerate',
        'HFpEF: SGLT2-i + diuretici',
      ],
    },
    {
      title: 'Dispositivi e altro',
      icon: 'Zap',
      accent: 'navy',
      items: [
        '**ICD**: prevenzione della morte improvvisa',
        '**CRT** (resincronizzazione) se QRS largo',
        'Correzione della **carenza marziale** (ferro ev)',
        'Casi avanzati: assistenza ventricolare, trapianto, cure palliative',
      ],
    },
    {
      title: 'Autogestione',
      icon: 'ListChecks',
      accent: 'green',
      items: [
        '**Pesarsi ogni giorno**, stessa ora, dopo minzione',
        'Sale ridotto; restrizione liquidi solo se prescritta',
        'Attività fisica regolare, **vaccinazioni** (influenza, pneumococco)',
        'Riconoscere i sintomi di peggioramento',
      ],
    },
  ],
  nursing: [
    'Monitorare **peso quotidiano**, bilancio idrico, diuresi, edemi',
    'Posizione **semi-seduta/Fowler** se dispnea; O₂ se ipossiemia, secondo prescrizione',
    'Con diuretici e ACE-i/MRA: controllo di **potassio**, creatinina e PA',
    'Beta-bloccanti: verificare FC e PA prima della somministrazione',
    'Educazione al **self-care** e continuità ospedale-territorio',
  ],
  redFlags: [
    'Aumento di peso **> 2 kg in 3 giorni**: contattare il medico',
    'Dispnea a riposo, ortopnea ingravescente, schiuma rosata: **edema polmonare acuto**',
    'Ipotensione, oliguria, confusione: **bassa portata**',
    'Iperkaliemia (K⁺ > 5,5 mmol/L) con MRA/ACE-i',
  ],
}

export default map
