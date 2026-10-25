import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'alimentazione-e-idratazione',
  chapter: 'fondamenti',
  title: 'Alimentazione e idratazione',
  subtitle: 'Bisogno fisiologico: valutazione, assistenza e rischi',
  icon: 'Utensils',
  status: 'bozza',
  sources: [
    'LARN — Livelli di Assunzione di Riferimento di Nutrienti ed energia per la popolazione italiana (SINU, IV revisione 2014)',
    'OMS — Strategia globale su alimentazione, attività fisica e salute (2004)',
    'Codice Deontologico delle Professioni Infermieristiche (FNOPI, 2019)',
  ],
  intro:
    'L’alimentazione e l’idratazione sono **bisogni primari** (Maslow) essenziali per la vita. L’infermiere valuta lo stato nutrizionale, assiste l’assunzione e previene complicanze come disidratazione o malnutrizione.',
  columns: 2,
  blocks: [
    {
      title: 'Bisogno di alimentazione',
      icon: 'Apple',
      accent: 'green',
      items: [
        'Fornisce **energia** (kcal) e **substrati** per la sintesi tissutale',
        'Macronutrienti: **carboidrati** (4 kcal/g), **proteine** (4 kcal/g), **lipidi** (9 kcal/g)',
        'Micronutrienti: **vitamine** e **minerali** (es. Fe, Ca, Zn)',
        'Ruolo: crescita, riparazione, **immunità**, termoregolazione',
        'Deficit → **malnutrizione**, catabolismo, ritardo di guarigione',
        'Eccesso → **obesità**, sindrome metabolica, diabete',
        'Bisogno calorico adulto: **2000–2500 kcal/die** (variabile)',
      ],
    },
    {
      title: 'Bisogno di idratazione',
      icon: 'Droplet',
      accent: 'blue',
      items: [
        'L’acqua è il **principale costituente** del corpo umano (~60%)',
        'Funzioni: **trasporto** di nutrienti, termoregolazione, lubrificazione',
        'Bilancio idrico: **introito** (bevande, alimenti, metabolismo) = **escreto** (urina, sudore, feci, respiro)',
        'Fabbisogno medio adulto: **1,5–2 L/die** (variabile per peso, età, attività)',
        'Disidratazione: **iponatriemia** o **ipernatriemia** a seconda del tipo di perdita',
        'Segni di disidratazione: **turgore cutaneo** ridotto, mucose secche, oliguria',
        'Rischio elevato in: anziani, neonati, pazienti con **febbre** o **diarrea**',
      ],
    },
    {
      title: 'Valutazione infermieristica',
      icon: 'ClipboardCheck',
      accent: 'purple',
      items: [
        'Anamnesi: **abitudini** alimentari, restrizioni, intolleranze, allergie',
        'Misura **peso** e **altezza** → calcolo **BMI** (kg/m²)',
        'Valutazione **soggettiva**: appetito, nausea, disfagia, dolore',
        'Valutazione **oggettiva**: turgore cutaneo, mucose, **diuresi**, stato di coscienza',
        'Screening nutrizionale: **MUST** (Malnutrition Universal Screening Tool)',
        'Monitoraggio **bilancio idrico** (introito/escreto) in pazienti critici',
        'Rilevare **fattori di rischio**: età, patologie croniche, stato psicologico',
      ],
    },
    {
      title: 'Assistenza infermieristica',
      icon: 'Hand',
      accent: 'orange',
      items: [
        'Assistere l’assunzione: **posizione** corretta (semi-seduta), ambiente tranquillo',
        'Adattare la **consistenza** degli alimenti (semiliquidi, liquidi) in caso di disfagia',
        'Somministrare **fluidi** per via orale, enterale o parenterale secondo prescrizione',
        'Monitorare **tolleranza** e **reazioni** (nausea, vomito, diarrea)',
        'Educazione terapeutica: **dieta** personalizzata, importanza dell’idratazione',
        'Coinvolgere **familiari** e **caregiver** nella gestione quotidiana',
        'Documentare **introito** e **escreto** nella cartella infermieristica',
      ],
    },
    {
      title: 'Rischi e complicanze',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Malnutrizione**: perdita di peso >5% in 1 mese, BMI <18,5',
        '**Disidratazione**: tachicardia, ipotensione, **oliguria**, alterazioni elettrolitiche',
        '**Sovralimentazione**: obesità, iperglicemia, ipertrigliceridemia',
        '**Aspirazione**: rischio in pazienti con disfagia, alterata coscienza, sedati',
        '**Carenze vitaminiche**: es. **vit. B12** (anemia megaloblastica), **vit. D** (osteomalacia)',
        '**Elettroliti**: squilibri di **Na⁺**, **K⁺**, **Ca²⁺** → aritmie, convulsioni',
        'Prevenzione: **screening** regolare, **dieta** equilibrata, **idratazione** adeguata',
      ],
    },
    {
      title: 'Linee guida e normativa',
      icon: 'BookOpen',
      accent: 'navy',
      checks: [
        { text: '**LARN**: livelli di assunzione di riferimento per nutrienti ed energia', kind: 'ok' },
        { text: '**OMS**: raccomandazioni su sale (<5 g/die), zuccheri (<10% kcal), grassi saturi', kind: 'ok' },
        { text: '**Codice Deontologico**: rispetto della **dignità** e delle preferenze alimentari', kind: 'ok' },
        { text: '**DM 739/1994**: compiti dell’infermiere includono l’assistenza nutrizionale', kind: 'ok' },
        { text: '**Screening MUST**: raccomandato in tutti i pazienti ricoverati', kind: 'ok' },
        { text: '**Bilancio idrico**: obbligatorio in terapia intensiva e chirurgia', kind: 'ok' },
        { text: '**Educazione sanitaria**: parte integrante dell’assistenza infermieristica', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Alimentazione e idratazione sono **bisogni primari** (Maslow) e **diritti** della persona',
    'Valutazione: **BMI**, **MUST**, **bilancio idrico**, stato di coscienza e **disfagia**',
    'Prevenzione: **dieta** equilibrata, **idratazione** adeguata, **educazione** terapeutica',
  ],
}

export default map
