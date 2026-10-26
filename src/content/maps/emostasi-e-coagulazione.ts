import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'emostasi-e-coagulazione',
  chapter: 'anatomia',
  title: 'Emostasi e coagulazione',
  subtitle: 'Meccanismi di arresto del sanguinamento: vascolare, piastrinico e coagulativo',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guideline ESC 2020 sulla gestione dell’anticoagulazione in fibrillazione atriale',
    'Linee guida AIFA 2021 sulla terapia anticoagulante orale (NOAC) e raccomandazioni ministeriali',
  ],
  blocks: [
    {
      title: 'Emostasi vascolare',
      accent: 'red',
      icon: 'Waves',
      illustration: {
        id: 'emostasi-vascolare',
        alt: 'Vaso sanguigno lesionato con vasocostrizione',
        prompt: 'cross-section of a blood vessel with a tear, showing vasoconstriction and smooth muscle contraction around the injury site',
        icon: 'Waves',
      },
      bullets: [
        '**Vasocostrizione** immediata: riduce il flusso ematico',
        'Mediata da **endotelina** e **trombossano A2**',
        'Dura **15–30 minuti**',
        'Prima risposta difensiva contro l’emorragia',
      ],
    },
    {
      title: 'Emostasi piastrinica',
      accent: 'purple',
      icon: 'CircleDot',
      illustration: {
        id: 'emostasi-piastrinica',
        alt: 'Piastrine che aderiscono e aggregano sulla lesione',
        prompt: 'platelets adhering to exposed collagen in a damaged vessel wall, forming a platelet plug, magnified view',
        icon: 'CircleDot',
      },
      inset: {
        label: 'Trombocita',
        illustration: {
          id: 'emostasi-trombocita',
          alt: 'Singola piastrina con granuli',
          prompt: 'single platelet with granules and pseudopods, magnified biological illustration',
          icon: 'CircleDot',
        },
      },
      bullets: [
        '**Aderenza**: piastrine → **collagene** esposto (via **vWF**)',
        '**Attivazione**: forma pseudopodi, rilascia **ADP**, **trombossano A2**',
        '**Aggregazione**: legame **GPIIb/IIIa** con **fibrinogeno**',
        'Formazione del **tappo piastrinico** (tappo bianco)',
      ],
    },
    {
      title: 'Cascata della coagulazione',
      accent: 'blue',
      icon: 'Workflow',
      bullets: [
        '**Via estrinseca**: fattore **VII** + tissuto → **complesso TF-VIIa**',
        '**Via intrinseca**: fattori **XII, XI, IX, VIII**',
        '**Via comune**: attivazione **fattore X** → **trombina**',
        'La **trombina** converte **fibrinogeno** → **fibrina**',
      ],
    },
    {
      title: 'Fattori della coagulazione',
      accent: 'teal',
      icon: 'ListChecks',
      bullets: [
        '**13 fattori** (I–XIII) + **vWF** (fattore von Willebrand)',
        'Fattori **II, VII, IX, X**: dipendenti dalla **vitamina K**',
        '**Fattore VIII**: deficit → **emofilia A**',
        '**Fattore IX**: deficit → **emofilia B**',
      ],
    },
    {
      title: 'Fibrinolisi',
      accent: 'green',
      icon: 'RefreshCw',
      illustration: {
        id: 'emostasi-fibrinolisi',
        alt: 'Degradazione del coagulo di fibrina',
        prompt: 'fibrin clot being broken down by plasmin, showing degradation of the mesh structure',
        icon: 'RefreshCw',
      },
      bullets: [
        '**Plasminogeno** → **plasmina** (attivo)',
        'La **plasmina** degrada la **fibrina**',
        'Regolata da **PAI** (inibitore) e **t-PA** (attivatore)',
        'Previene la formazione di trombi eccessivi',
      ],
    },
    {
      title: 'Esami di coagulazione',
      accent: 'orange',
      icon: 'TestTube',
      illustration: {
        id: 'emostasi-esami',
        alt: 'Provette per esami di coagulazione',
        prompt: 'blood collection tubes with different colored caps for coagulation tests, laboratory setting',
        icon: 'TestTube',
      },
      bullets: [
        '**PT/INR**: via estrinseca (fattori VII, X, V, II, fibrinogeno)',
        '**aPTT**: via intrinseca (fattori XII, XI, IX, VIII, X, V, II)',
        '**INR** target: **2,0–3,0** per warfarin',
        '**Fibrinogeno**: 200–400 mg/dL',
      ],
    },
  ],
  keyPoints: [
    '**Emostasi primaria**: vasocostrizione + tappo piastrinico',
    '**Emostasi secondaria**: cascata della coagulazione + fibrina',
    '**Fibrinolisi**: elimina il coagulo dopo la riparazione',
  ],
}

export default map
