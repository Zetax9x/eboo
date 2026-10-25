import type { MapPageProps } from '../../templates/PageFrame'
import { EcgTemplate } from '../../templates/ecg-template'
import { EcgStrip } from '../../components/EcgStrip'

const props: MapPageProps = {
  id: 'ritmo-sinuale',
  title: 'ECG: le basi e il ritmo sinusale',
  subtitle: 'Il tracciato di riferimento per ogni interpretazione cardiaca',
  icon: 'Activity',
  status: 'bozza',
  illustrationId: 'ecg-ritmo-sinuale',
  illustrationPrompt: 'ECG waveform pattern showing normal sinus rhythm, cardiac rhythm strip, medical monitoring display, white background, no text, clinical illustration',
  sources: [
    'NHS ECG Library - Normal Sinus Rhythm',
    'AHA Guidelines for ECG Interpretation (2023)',
    'Textbook of Medical Physiology, Guyton & Hall, 14th ed.',
  ],
}

export function RitmoSinualePage() {
  return (
    <EcgTemplate {...props}>
      Il ritmo sinusale è il normale ritmo cardiaco, caratterizzato da una sequenza regolare di depolarizzazioni che partono dal nodo seno-atriale. Rappresenta lo standard di riferimento per l'interpretazione di qualsiasi tracciato ECG.

      **Caratteristiche fondamentali:**
      - Frequenza: 60-100 bpm (battiti per minuto)
      - Ritmo: regolare, intervalli RR costanti
      - Onde P: presenti prima di ogni QRS, morfologia normale
      - Intervallo PR: 120-200 ms (3-5 quadretti piccoli)
      - Complesso QRS: stretto (<120 ms), morfologia normale
    </EcgTemplate>
  )
}

export default RitmoSinualePage
