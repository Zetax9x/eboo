import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'ipotermia-e-colpo-di-calore',
  chapter: 'emergenze',
  title: 'Ipotermia e Colpo di Calore',
  subtitle: 'Emergenze da temperatura corporea: riconoscimento, stadi e gestione infermieristica',
  icon: 'Thermometer',
  status: 'bozza',
  sources: [
    'ERC — European Resuscitation Council Guidelines 2021 (Hypothermia)',
    'OMS — Linee guida per la gestione delle emergenze da calore',
    'Ministero della Salute — Raccomandazioni per la gestione delle ondate di calore',
  ],
  columns: 2,
  blocks: [
    {
      title: 'Ipotermia: Definizione e Stadi',
      icon: 'Thermometer',
      accent: 'blue',
      items: [
        'Temperatura centrale **< 35 °C**',
        '**Lieve (32–35 °C)**: tremore, confusione, bradicardia',
        '**Moderata (28–32 °C)**: perdita di coscienza, aritmie, rigidità',
        '**Grave (< 28 °C)**: coma, asistolia, rischio di fibrillazione ventricolare',
        'Causa principale: esposizione al freddo, immersione, stato di incoscienza',
      ],
    },
    {
      title: 'Colpo di Calore: Definizione e Stadi',
      icon: 'Thermometer',
      accent: 'red',
      items: [
        'Temperatura centrale **> 40 °C** con alterazione neurologica',
        '**Colpo di calore classico**: esposizione a caldo umido, assenza di sudorazione',
        '**Colpo di calore da sforzo**: attività fisica intensa, sudorazione presente',
        'Sintomi: confusione, convulsioni, collasso circolatorio, aritmie',
        'Causa principale: incapacità di termoregolazione, disidratazione, farmaci',
      ],
    },
    {
      title: 'Gestione Ipotermia: Priorità',
      icon: 'Thermometer',
      accent: 'blue',
      checks: [
        { text: 'Rimuovere dal freddo, asciugare, coprire con coperte asciutte', kind: 'ok' },
        { text: 'Riscaldamento passivo esterno (coperte, imbottitura)', kind: 'ok' },
        { text: 'Se cosciente: bevande calde zuccherate (non alcoliche)', kind: 'ok' },
        { text: 'Se incosciente: posizione laterale di sicurezza', kind: 'warn' },
        { text: 'Monitorare ECG: rischio di aritmie (FV, asistolia)', kind: 'alert' },
        { text: 'Trasporto in ambiente caldo, evitare manovre brusche', kind: 'warn' },
      ],
    },
    {
      title: 'Gestione Colpo di Calore: Priorità',
      icon: 'Thermometer',
      accent: 'red',
      checks: [
        { text: 'Rimuovere dal caldo, spostare in ambiente fresco/ombreggiato', kind: 'ok' },
        { text: 'Raffreddamento attivo: impacchi di ghiaccio, spruzzo d’acqua', kind: 'ok' },
        { text: 'Idratazione orale se cosciente e non nauseato', kind: 'ok' },
        { text: 'Se incosciente: aprire vie aeree, valutare respiro', kind: 'warn' },
        { text: 'Monitorare temperatura e stato neurologico', kind: 'alert' },
        { text: 'Trasporto urgente: rischio di danno d’organo multipli', kind: 'alert' },
      ],
    },
    {
      title: 'Segnali d’Allarme (Red Flags)',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Ipotermia: **aritmie cardiache**, apnea, rigidità muscolare',
        'Colpo di calore: **convulsioni**, coma, ematuria (rabdomiolisi)',
        'Entrambi: **instabilità emodinamica**, ipotensione refrattaria',
        'Entrambi: **coagulopatia** (DIC), insufficienza renale acuta',
        'Entrambi: **alterazione della coscienza** che peggiora',
      ],
    },
    {
      title: 'Ruolo Infermieristico',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'Valutare temperatura centrale (rettale o esofagea) e stato neurologico',
        'Monitorare ECG continuo: cercare aritmie (bradicardia, FV, asistolia)',
        'Somministrare ossigeno ad alto flusso se disponibile',
        'Preparare farmaci: antiaritmici (amiodarone), fluidi endovena',
        'Documentare temperatura, interventi, risposta del paziente',
        'Comunicare al team medico: stadio, tempo di esposizione, comorbidità',
      ],
    },
  ],
  keyPoints: [
    'Ipotermia: **riscaldamento passivo** e monitoraggio ECG',
    'Colpo di calore: **raffreddamento attivo** immediato',
    'Entrambi: **emergenza medica** con rischio di aritmie e danno d’organo',
  ],
}

export default map
