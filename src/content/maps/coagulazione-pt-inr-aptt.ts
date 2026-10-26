import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'coagulazione-pt-inr-aptt',
  chapter: 'laboratorio',
  title: 'Coagulazione: PT, INR, aPTT',
  subtitle: 'Valori di riferimento, alterazioni e gestione infermieristica',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ISTH — International Society on Thrombosis and Haemostasis, Guidelines for anticoagulation monitoring',
    'AIFA — Agenzia Italiana del Farmaco, Raccomandazioni per il monitoraggio degli anticoagulanti',
    'ESC 2019 — Linee guida per la diagnosi e il trattamento dell’embolia polmonare acuta',
  ],
  intro: 'I range variano tra laboratori e sistemi di analisi. Fa sempre fede il **referto del proprio laboratorio** e la prescrizione medica.',
  rows: [
    {
      name: 'PT (Tempo di Protrombina)',
      symbol: 'PT',
      range: '11–13',
      unit: 's',
      accent: 'blue',
      low: {
        name: 'PT abbreviato',
        signs: 'raro; possibile ipercoagulabilità',
        causes: 'trombosi, stato procoagulante, errore preanalitico',
      },
      high: {
        name: 'PT prolungato',
        signs: 'sanguinamento, ecchimosi, ematomi',
        causes: 'anticoagulanti orali (warfarin), deficit fattori VII, X, V, II, fibrinogeno; cirrosi, carenza vitamina K',
      },
      nursing: 'Monitorare segni di sanguinamento (gengive, urine, feci). Verificare l’aderenza alla terapia anticoagulante. Comunicare PT > 15 s o INR > 4,5 al medico.',
    },
    {
      name: 'INR (International Normalized Ratio)',
      symbol: 'INR',
      range: '0,8–1,2',
      unit: '—',
      accent: 'purple',
      low: {
        name: 'INR basso',
        signs: 'rischio tromboembolico',
        causes: 'dose insufficiente di warfarin, interazioni con farmaci (vitamina K, barbiturici), non aderenza',
      },
      high: {
        name: 'INR alto',
        signs: 'sanguinamento attivo (epistassi, ematuria, melena), ematomi',
        causes: 'dose eccessiva di warfarin, interazioni (antibiotici, amiodarone), epatopatia, carenza vitamina K',
      },
      nursing: 'Target terapeutico: **2,0–3,0** (tromboembolia), **2,5–3,5** (valvole meccaniche). Educazione al paziente su dieta costante in vitamina K. Controllare INR prima di ogni visita. Segnalare INR > 4,5 o sanguinamento attivo.',
    },
    {
      name: 'aPTT (Tempo di Tromboplastina Parziale Attivato)',
      symbol: 'aPTT',
      range: '25–35',
      unit: 's',
      accent: 'teal',
      low: {
        name: 'aPTT abbreviato',
        signs: 'raro; possibile ipercoagulabilità',
        causes: 'trombosi, stato procoagulante, errore preanalitico',
      },
      high: {
        name: 'aPTT prolungato',
        signs: 'sanguinamento, ecchimosi, ematomi',
        causes: 'eparina (non frazionata), emofilia A/B, lupus anticoagulante, deficit fattori VIII, IX, XI, XII',
      },
      nursing: 'Monitorare aPTT durante terapia eparinica: target **1,5–2,5 volte** il valore di base. Verificare segni di sanguinamento. Comunicare aPTT > 60 s o sanguinamento attivo al medico.',
    },
  ],
  tips: [
    'PT/INR e aPTT sono **complementari**: PT valuta la via estrinseca, aPTT la via intrinseca',
    'Comunicare **subito** valori critici (INR > 4,5, aPTT > 60 s) o segni di sanguinamento al medico',
  ],
}

export default map
