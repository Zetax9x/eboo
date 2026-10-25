import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'neonato-punteggio-di-apgar',
  chapter: 'specialistica',
  title: 'Punteggio di Apgar',
  subtitle: 'Valutazione del neonato a 1 e 5 minuti dalla nascita',
  icon: 'Baby',
  status: 'bozza',
  sources: [
    'American Academy of Pediatrics, ACOG — The Apgar Score, Committee Opinion n. 644 (2015, riaffermato)',
    'ERC — Linee guida 2021: supporto vitale neonatale (Newborn Life Support)',
  ],
  intro:
    'Ideato da **Virginia Apgar** (1952): 5 parametri, ciascuno da **0 a 2**, totale **0–10**. Si assegna a **1 e 5 minuti**; se < 7 si ripete **ogni 5 minuti fino a 20 minuti**.',
  tableTitle: 'Parametri (acronimo A-P-G-A-R)',
  tableIcon: 'ClipboardList',
  columns: ['Parametro', '0', '1', '2'],
  widths: [1.4, 1, 1.4, 1.4],
  rows: [
    ['**A**ppearance · Colorito', 'Cianosi o **pallore** generalizzato', 'Corpo roseo, estremità cianotiche (**acrocianosi**)', 'Completamente **roseo**'],
    ['**P**ulse · Frequenza cardiaca', '**Assente**', '**< 100** bpm', '**≥ 100** bpm'],
    ['**G**rimace · Reattività agli stimoli', 'Nessuna risposta', '**Smorfia**', 'Pianto vigoroso, tosse o starnuto'],
    ['**A**ctivity · Tono muscolare', '**Flaccido**', 'Lieve flessione degli arti', '**Movimenti attivi**, arti flessi'],
    ['**R**espiration · Respiro', '**Assente**', 'Debole, lento, irregolare', '**Pianto valido**, respiro regolare'],
  ],
  notes: [
    {
      title: 'Interpretazione',
      icon: 'Gauge',
      accent: 'green',
      items: [
        '**7–10**: rassicurante',
        '**4–6**: moderatamente anormale',
        '**0–3**: basso, neonato depresso',
        'Il punteggio a **5 min** è il più indicativo dell’adattamento',
      ],
    },
    {
      title: 'Attenzione',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Non serve a decidere la **rianimazione**: non aspettare il 1° minuto',
        'Decisioni basate su **respiro, FC e tono**',
        'Influenzato da prematurità, farmaci materni, malformazioni',
        'Da solo **non** diagnostica asfissia',
      ],
    },
    {
      title: 'Primi minuti di vita',
      icon: 'Thermometer',
      accent: 'blue',
      items: [
        '**Asciugare** e stimolare, prevenire l’ipotermia (T **36,5–37,5 °C**)',
        'Clampaggio del cordone **ritardato** (≥ 60 s) se il neonato sta bene',
        '**Contatto pelle a pelle** e attacco precoce al seno',
        'Profilassi: **vitamina K** e profilassi oftalmica',
      ],
    },
  ],
  keyPoints: [
    'Il colorito è il segno meno affidabile: l’**acrocianosi** nelle prime ore è normale',
    'FC **< 100 bpm** alla nascita o respiro assente: iniziare subito la **ventilazione**',
  ],
}

export default map
