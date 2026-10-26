import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'sondino-naso-gastrico',
  chapter: 'procedure',
  title: 'Sondino naso-gastrico',
  subtitle: 'Posizionamento e gestione per decompressione o nutrizione',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'NICE — Nasogastric tube insertion (NGT) in adults (2023)',
    'RCN — Guidelines for the safe use of enteral nutrition (2022)',
    'Ministero della Salute — Raccomandazioni per la sicurezza del paziente',
  ],
  materials: [
    { label: 'Sondino NG (Fr 12–18)', icon: 'Droplet' },
    { label: 'Siringa 20 mL', icon: 'Syringe' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Lubrificante idrosolubile', icon: 'Droplet' },
    { label: 'Morse o nastro adesivo', icon: 'Sticker' },
    { label: 'Bacinella / vaschetta', icon: 'Box' },
    { label: 'Cappuccio di protezione', icon: 'CircleDot' },
    { label: 'Fonendoscopio', icon: 'Stethoscope' },
  ],
  sites: {
    title: 'Misurazione della lunghezza',
    illustration: {
      id: 'ng-misura',
      alt: 'Percorso del sondino: naso, esofago, stomaco',
      prompt: 'adult seen from the side, a thin feeding tube held along the face from the tip of the nose to the earlobe and then down the chest to the lower tip of the breastbone',
      icon: 'Ruler',
    },
    items: [
      '**NEX**: naso → lobo dell’orecchio → **processo xifoideo**',
      'Segnare la lunghezza sul sondino con **nastro adesivo**',
      'Calibro: **8–12 Fr** per nutrizione, **14–18 Fr** per drenaggio/decompressione',
    ],
  },
  safety: [
    { text: 'Verificare **prescrizione medica** e consenso', kind: 'ok' },
    { text: 'Controllare **controindicazioni**: trauma facciale, stenosi esofagea', kind: 'warn' },
    { text: 'Posizionare il paziente in **sedia alta** (45°–90°)', kind: 'ok' },
    { text: '**Mai** inserire se il paziente è incosciente senza intubazione', kind: 'no' },
    { text: 'Monitorare **respiro** durante l’inserimento', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: [
        'Spiegare la procedura al paziente',
        'Igiene delle mani, guanti monouso',
        'Preparare il materiale sul carrello',
      ],
      icon: 'Box',
    },
    {
      title: 'Posizione',
      items: [
        'Paziente seduto, tronco **eretto**',
        'Testa leggermente **flessa** in avanti',
        'Bacinella sotto il mento',
      ],
      icon: 'User',
    },
    {
      title: 'Inserimento',
      items: [
        'Lubrificare la punta del sondino',
        'Inserire per via **nasale**',
        'Chiedere al paziente di **deglutire** a ogni 5–10 cm',
      ],
      icon: 'Hand',
    },
    {
      title: 'Verifica posizione',
      items: [
        'Aspirare con siringa: **pH ≤ 5,5** = gastrico',
        '**Non affidabile da solo** il test dell’aria con fonendoscopio',
        'Se dubbio: **radiografia** o pH-metria',
      ],
      icon: 'Syringe',
    },
    {
      title: 'Fissaggio',
      items: [
        'Fissare con **morse** o nastro adesivo sulla guancia',
        'Assicurare che non sia **tensionato**',
      ],
      icon: 'Sticker',
    },
    {
      title: 'Documentazione',
      items: [
        'Data, ora, calibro, lunghezza',
        'Metodo di verifica (pH, radiografia)',
        'Tolleranza del paziente',
      ],
      icon: 'ClipboardList',
    },
  ],
  complications: [
    { label: 'Malposizione polmonare', sub: 'rischio di polmonite chimica' },
    { label: 'Perforazione esofagea', sub: 'dolore toracico, ematema' },
    { label: 'Ostruzione nasale', sub: 'congestione, sanguinamento' },
    { label: 'Aspirazione', sub: 'se il paziente vomita' },
    { label: 'Irritazione laringea', sub: 'tosse, disfonia' },
  ],
  nurseRole: [
    'Verificare la **posizione** prima di ogni somministrazione',
    'Monitorare **pH gastrico** e segni di aspirazione',
    'Igiene orale frequente per ridurre il rischio di **VAP**',
    'Rimuovere il sondino se **non più necessario**',
  ],
}

export default map
