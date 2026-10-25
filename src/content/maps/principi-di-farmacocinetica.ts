import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'principi-di-farmacocinetica',
  chapter: 'farmacologia',
  title: 'Principi di farmacocinetica',
  subtitle: 'Che cosa fa l’organismo al farmaco: il percorso ADME',
  icon: 'Route',
  status: 'bozza',
  sources: [
    'Katzung B.G., Vanderah T.W. — Farmacologia generale e clinica, Piccin',
    'Rang H.P., Dale M.M. et al. — Farmacologia, Edra',
    'Clayton B.D., Willihnganz M.J. — Farmacologia per infermieri, Edra',
  ],
  intro:
    'La **farmacocinetica** studia il destino del farmaco nell’organismo: **A**ssorbimento, **D**istribuzione, **M**etabolismo, **E**liminazione. Determina **concentrazione** plasmatica, **durata** d’azione e **intervallo** tra le dosi.',
  columns: 3,
  blocks: [
    {
      title: 'A · Assorbimento',
      icon: 'ArrowDown',
      accent: 'blue',
      items: [
        'Passaggio dal sito di somministrazione al **circolo**',
        'Via **EV**: assorbimento assente, effetto immediato',
        'Dipende da: liposolubilità, pH, flusso ematico, superficie',
        'Ridotto da **shock**, edema, ipoperfusione periferica',
        '**Effetto di primo passaggio** epatico: riduce la quota orale attiva',
        'Evitato da vie **sublinguale**, rettale (in parte), parenterali',
        'Cibo e antiacidi possono ridurre o ritardare l’assorbimento',
      ],
    },
    {
      title: 'D · Distribuzione',
      icon: 'Waves',
      accent: 'teal',
      items: [
        'Trasporto dal sangue a **tessuti** e organi bersaglio',
        'Legame con **albumina**: solo la quota **libera** è attiva',
        '**Ipoalbuminemia** (anziano, cirrosi, malnutrizione) → più farmaco libero, più tossicità',
        'Barriere: **ematoencefalica** e **placentare**',
        '**Volume di distribuzione** (Vd): quanto il farmaco si diffonde nei tessuti',
        'Farmaci liposolubili si accumulano nel **tessuto adiposo**',
        'Competizione per l’albumina: un farmaco ne **sposta** un altro (es. FANS e warfarin)',
        'Disidratazione o edemi modificano la concentrazione',
      ],
    },
    {
      title: 'M · Metabolismo',
      icon: 'FlaskConical',
      accent: 'purple',
      items: [
        'Sede principale: **fegato** (enzimi del **citocromo P450**)',
        'Fase I (ossidazione, riduzione, idrolisi) e fase II (**coniugazione**)',
        'Rende il farmaco più **idrosolubile** ed eliminabile',
        '**Profarmaco**: diventa attivo solo dopo metabolismo (es. **clopidogrel**, codeina)',
        '**Induttori** enzimatici (rifampicina, carbamazepina) → meno effetto',
        '**Inibitori** (claritromicina, fluconazolo, pompelmo) → accumulo',
        'Ridotto in **epatopatia**, neonato, anziano',
      ],
    },
    {
      title: 'E · Eliminazione',
      icon: 'Droplets',
      accent: 'orange',
      items: [
        'Via principale: **rene** (filtrazione e secrezione tubulare)',
        'Altre vie: **bile/feci**, polmoni, sudore, **latte materno**',
        'Insufficienza renale → **accumulo**: dosi adeguate alla **clearance della creatinina**',
        'Attenzione a farmaci renali: **digossina**, aminoglicosidi, vancomicina, EBPM',
        'Monitorare **diuresi** e **creatinina**',
        'Molti farmaci passano nel latte: verificare la compatibilità con l’**allattamento**',
        'Il pH urinario modifica l’escrezione di acidi e basi deboli',
      ],
    },
    {
      title: 'Parametri chiave',
      icon: 'Gauge',
      accent: 'navy',
      items: [
        '**Biodisponibilità** (F): quota che raggiunge il circolo immodificata; EV = **100%**',
        '**Emivita** (t½): tempo per dimezzare la concentrazione plasmatica',
        '**Steady state**: raggiunto dopo **4–5 emivite** di somministrazione regolare',
        'Eliminazione quasi completa dopo **4–5 emivite** dalla sospensione',
        '**Dose di carico**: raggiunge subito la concentrazione utile',
        '**Clearance**: volume di plasma depurato nell’unità di tempo',
      ],
    },
    {
      title: 'Finestra terapeutica',
      icon: 'Target',
      accent: 'red',
      items: [
        'Intervallo tra concentrazione **minima efficace** e **minima tossica**',
        '**Finestra stretta**: digossina, litio, fenitoina, vancomicina, gentamicina, teofillina, warfarin',
        '**TDM**: dosaggio plasmatico del farmaco',
        'Prelievo a **valle** (trough, subito prima della dose) o al **picco**',
        'Annotare **orario** di prelievo e di ultima somministrazione',
        'Segnalare subito segni di **tossicità** (es. nausea, bradicardia, visione gialla con digossina)',
      ],
    },
  ],
  keyPoints: [
    'Anziano: meno funzione **renale** ed **epatica**, meno albumina → “**start low, go slow**”',
    'Il tempo per lo steady state dipende **solo dall’emivita**, non dalla dose',
  ],
}

export default map
