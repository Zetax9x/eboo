import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'valutazione-abcde',
  chapter: 'emergenze',
  title: 'Valutazione ABCDE',
  subtitle: 'Approccio sistematico al paziente critico',
  icon: 'ListChecks',
  status: 'bozza',
  sources: [
    'European Resuscitation Council (ERC) – Guidelines for Resuscitation 2023, Chapter “ABCDE assessment”',
    'Società Italiana di Medicina d’Emergenza (SIMEU) – Linee guida per la valutazione ABCDE in emergenza, 2022',
  ],
  intro:
    'Valuta e **tratta subito** ogni problema prima di passare alla lettera successiva; **rivaluta** dopo ogni intervento e chiedi aiuto precocemente.',
  steps: [
    { kind: 'start', title: 'Sicurezza e prima impressione', text: 'Scena sicura, DPI; il paziente **parla**? Colorito, respiro, emorragie evidenti' },
    {
      kind: 'action',
      title: 'A · Airway (vie aeree)',
      text: 'Parla normalmente = A pervia. Cerca **stridore**, gorgoglii, russamento, respiro paradosso; aspira, **iperestensione-sollevamento del mento**, cannula, O₂',
    },
    {
      kind: 'action',
      title: 'B · Breathing (respiro)',
      text: '**FR**, SpO₂, uso dei muscoli accessori, espansione toracica, auscultazione; O₂ per **SpO₂ 94–98%** (88–92% se rischio di ipercapnia)',
    },
    {
      kind: 'action',
      title: 'C · Circulation (circolo)',
      text: '**FC**, PA, polsi, **refill capillare** (> 2 s = alterato), cute, diuresi, ECG; 2 accessi venosi, prelievi, fluidi secondo prescrizione',
    },
    {
      kind: 'action',
      title: 'D · Disability (neurologico)',
      text: 'Coscienza con **AVPU/ACVPU** o **GCS**, pupille, deficit di lato, **glicemia capillare**; considera farmaci e tossici',
    },
    {
      kind: 'action',
      title: 'E · Exposure (esposizione)',
      text: 'Scopri il paziente rispettando la privacy: lesioni, sanguinamenti, eruzioni, edemi; **temperatura**; previeni l’**ipotermia**',
    },
    {
      kind: 'decision',
      title: 'Problema che minaccia la vita?',
      branches: [
        { label: 'Sì', text: 'Trattalo **subito**, chiama aiuto (MET/118), ricomincia da **A**' },
        { label: 'No', text: 'Anamnesi (**AMPLE**), esame testa-piedi, rivaluta a intervalli regolari' },
      ],
    },
    { kind: 'end', title: 'Rivaluta e comunica', text: 'Ripeti l’ABCDE a ogni cambiamento e passa le consegne con **SBAR**' },
  ],
  side: [
    {
      title: 'Segni d’allarme',
      icon: 'Siren',
      accent: 'red',
      items: [
        'A: **stridore**, gorgoglio, respiro paradosso “a bilanciere”',
        'B: FR **< 8 o > 25/min**, SpO₂ < 90%, cianosi',
        'C: PAS **< 90 mmHg**, FC > 130 o < 40, cute fredda e marezzata',
        'D: **P o U** all’AVPU, GCS ≤ 8, confusione di nuova insorgenza',
        'E: porpora, emorragie nascoste, temperatura **< 35 o > 40 °C**',
        'Respiro **agonico** = arresto cardiaco: avvia **RCP**',
      ],
    },
    {
      title: 'Strumenti utili',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        '**AVPU**: Alert, Voice, Pain, Unresponsive (ACVPU: + Confusione)',
        '**NEWS2**: punteggio ≥ 5 o un parametro a 3 = risposta urgente',
        '**AMPLE**: Allergie, Medicine, Patologie, Last meal, Evento',
        'Monitor: SpO₂, ECG, PA non invasiva, ETCO₂ se disponibile',
        'Trauma: schema **<C>ABCDE** (prima l’emorragia catastrofica)',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'User',
      accent: 'green',
      items: [
        'Riconosce il **deterioramento** e attiva il team',
        'Posiziona il paziente (semiseduto se dispnoico, **PLS** se incosciente e respira)',
        'Prepara **carrello d’emergenza**, aspiratore e defibrillatore',
        'Documenta parametri e **orari** degli interventi',
        'Rassicura e informa il paziente cosciente',
      ],
    },
  ],
  keyPoints: ['Ordine **A → B → C → D → E**: si tratta ciò che uccide prima', '**Rivaluta** dopo ogni intervento'],
}

export default map
