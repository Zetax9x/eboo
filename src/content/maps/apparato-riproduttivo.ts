import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'apparato-riproduttivo',
  chapter: 'anatomia',
  title: 'Apparato riproduttivo',
  subtitle: 'Anatomia, fisiologia e funzioni dell’apparato genitale maschile e femminile',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'Linee guida ACOG e ESHRE sulla salute riproduttiva',
  ],
  blocks: [
    {
      title: 'Apparato genitale maschile',
      accent: 'blue',
      icon: 'User',
      illustration: {
        id: 'riproduttivo-maschile-anatomia',
        alt: 'Anatomia dell’apparato genitale maschile',
        prompt: 'anatomical diagram of the male reproductive system, showing testes, epididymis, vas deferens, seminal vesicles, prostate, urethra and penis',
        icon: 'User',
      },
      inset: {
        label: 'Testicolo',
        illustration: {
          id: 'riproduttivo-testicolo-sezione',
          alt: 'Sezione del testicolo con tubuli seminiferi',
          prompt: 'cross-section of a human testis showing seminiferous tubules and interstitial cells',
          icon: 'CircleDot',
        },
      },
      bullets: [
        '**Gonadi**: testicoli (produzione spermatozoi e testosterone)',
        '**Dotti conduttori**: epididimo, dotto deferente, dotto eiaculatorio',
        '**Glands accessorie**: vescicole seminali, prostata',
        '**Organo copulatore**: pene (corpo spugnoso e cavernoso)',
        'Produzione di **spermatozoi** (spermatogenesi) e **testosterone**',
      ],
    },
    {
      title: 'Apparato genitale femminile',
      accent: 'pink',
      icon: 'User',
      illustration: {
        id: 'riproduttivo-femminile-anatomia',
        alt: 'Anatomia dell’apparato genitale femminile',
        prompt: 'anatomical diagram of the female reproductive system, showing ovaries, fallopian tubes, uterus, cervix, vagina and external genitalia',
        icon: 'User',
      },
      inset: {
        label: 'Ovaio',
        illustration: {
          id: 'riproduttivo-ovaio-sezione',
          alt: 'Sezione dell’ovaio con follicoli',
          prompt: 'cross-section of a human ovary showing follicles at different stages of development',
          icon: 'CircleDot',
        },
      },
      bullets: [
        '**Gonadi**: ovaie (produzione ovociti ed estrogeni/progesterone)',
        '**Dotti conduttori**: tube uterine (salpingi)',
        '**Utero**: corpo e cervice, rivestito dall’endometrio',
        '**Vagina**: canale di copula e parto',
        'Produzione di **ovociti** (ovogenesi) e **ormoni sessuali**',
      ],
    },
    {
      title: 'Ciclo mestruale',
      accent: 'purple',
      icon: 'RefreshCw',
      bullets: [
        'Durata media: **28 giorni** (range 21–35)',
        '**Fase follicolare**: crescita follicolo, aumento estrogeni',
        '**Ovulazione**: giorno 14, picco LH',
        '**Fase luteale**: corpo luteo, produzione progesterone',
        '**Mestruazione**: desquamazione endometrio (giorno 1–5)',
      ],
    },
    {
      title: 'Spermatogenesi',
      accent: 'teal',
      icon: 'Activity',
      illustration: {
        id: 'riproduttivo-spermatogenesi',
        alt: 'Processo di spermatogenesi nei tubuli seminiferi',
        prompt: 'diagram of spermatogenesis in seminiferous tubules, showing spermatogonia, spermatocytes, spermatids and spermatozoa',
        icon: 'Activity',
      },
      bullets: [
        'Avviene nei **tubuli seminiferi** dei testicoli',
        'Durata: circa **64 giorni**',
        'Fasi: **spermatogonia** → **spermatociti** → **spermatidi** → **spermatozoi**',
        'Richiede **temperatura** 2–3 °C inferiore a quella corporea',
        'Regolata da **FSH**, **LH** e **testosterone**',
      ],
    },
    {
      title: 'Fertilità e concepimento',
      accent: 'green',
      icon: 'CircleCheck',
      illustration: {
        id: 'riproduttivo-fertilizzazione',
        alt: 'Fertilizzazione dell’ovocita',
        prompt: 'diagram of fertilization, spermatozoa approaching the ovum in the fallopian tube, formation of the zygote',
        icon: 'CircleCheck',
      },
      bullets: [
        'Fertilità femminile: finestra di **24–48 ore** dopo l’ovulazione',
        'Fertilità maschile: spermatozoi sopravvivono **3–5 giorni** nelle tube',
        'Fertilizzazione: unione spermatozoo + ovocita → **zigote**',
        'Nidificazione: impianto nell’endometrio (giorno 6–10)',
        'Sviluppo embrionale: **blastocisti** → **gastrula**',
      ],
    },
    {
      title: 'Funzioni e regolazione',
      accent: 'orange',
      icon: 'Brain',
      bullets: [
        '**Asse ipotalamo-ipofisi-gonadi**: GnRH → FSH/LH → ormoni sessuali',
        'Funzioni: **riproduzione**, **sviluppo sessuale**, **funzioni metaboliche**',
        'Feedback **negativo** degli ormoni sessuali su ipotalamo e ipofisi',
        'Regolazione: **ciclo mestruale**, **spermatogenesi**',
        'Impatto su: **umore**, **densità ossea**, **funzione cardiaca**',
      ],
    },
  ],
  keyPoints: [
    '**Ciclo mestruale**: 28 giorni (range 21–35)',
    '**Spermatogenesi**: 64 giorni, temperatura 2–3 °C inferiore',
    '**Fertilità**: finestra di 24–48 ore (femminile), 3–5 giorni (maschile)',
  ],
}

export default map
