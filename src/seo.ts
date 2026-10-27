import type { LanguageCode } from './languages'
import { languages } from './languages'

const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

const metaByLang: Record<
  LanguageCode,
  { title: string; description: string; keywords: string }
> = {
  en: {
    title: 'Lazare Osiashvili | FEI Level 1 Steward Jumping Georgia',
    description:
      'Lazare Osiashvili — FEI Level 1 Jumping Steward and equestrian operations specialist in Tbilisi, Georgia. Show jumping, arena management, World Cup Qualifiers.',
    keywords:
      'FEI Steward, FEI Level 1 Steward, Jumping Steward, Lazare Osiashvili, equestrian Georgia, show jumping, course design, arena management, Georgian Equestrian Federation, Tbilisi',
  },
  ka: {
    title: 'ლაზარე ოსიაშვილი | FEI დონე 1 სტიუარდი ჯამპინგი',
    description:
      'ლაზარე ოსიაშვილი — FEI დონე 1 ჯამპინგის სტიუარდი და ცხენოსნობის ოპერაციების სპეციალისტი თბილისში. შოუ-ჯამპინგი, არენის მართვა, მსოფლიო თასის საკვალიფიკაციოები.',
    keywords:
      'FEI სტიუარდი, FEI Level 1, ჯამპინგი, ლაზარე ოსიაშვილი, ცხენოსნობა საქართველო, შოუ ჯამპინგი, საქართველოს ცხენოსნობის ფედერაცია, თბილისი',
  },
  fr: {
    title: 'Lazare Osiashvili | Steward FEI Niveau 1 Saut d’obstacles',
    description:
      'Lazare Osiashvili — Steward FEI Niveau 1 Saut d’obstacles et spécialiste des opérations équestres à Tbilissi, Géorgie.',
    keywords:
      'Steward FEI, FEI Niveau 1, saut d’obstacles, Lazare Osiashvili, équitation Géorgie, Tbilissi',
  },
  es: {
    title: 'Lazare Osiashvili | Steward FEI Nivel 1 Salto',
    description:
      'Lazare Osiashvili — Steward FEI Nivel 1 de Salto y especialista en operaciones ecuestres en Tbilisi, Georgia.',
    keywords:
      'Steward FEI, FEI Nivel 1, salto ecuestre, Lazare Osiashvili, equitación Georgia, Tbilisi',
  },
  de: {
    title: 'Lazare Osiashvili | FEI Level-1-Steward Springen',
    description:
      'Lazare Osiashvili — FEI Level-1 Springen-Steward und Spezialist für equestrianische Operationen in Tbilissi, Georgien.',
    keywords:
      'FEI Steward, FEI Level 1, Springreiten, Lazare Osiashvili, Reitsport Georgien, Tbilissi',
  },
  it: {
    title: 'Lazare Osiashvili | Steward FEI Livello 1 Salto Ostacoli',
    description:
      'Lazare Osiashvili — Steward FEI Livello 1 Salto Ostacoli e specialista di operazioni equestri a Tbilisi, Georgia.',
    keywords:
      'Steward FEI, FEI Livello 1, salto ostacoli, Lazare Osiashvili, equitazione Georgia, Tbilisi',
  },
  sv: {
    title: 'Lazare Osiashvili | FEI nivå 1-steward hoppning',
    description:
      'Lazare Osiashvili — FEI nivå 1 hoppsteward och specialist inom ryttarsportens verksamhet i Tbilisi, Georgien.',
    keywords:
      'FEI steward, FEI nivå 1, hoppning, Lazare Osiashvili, ryttarsport Georgien, Tbilisi',
  },
  zh: {
    title: 'Lazare Osiashvili | FEI 一级场地障碍赛事管理官',
    description:
      'Lazare Osiashvili — FEI 一级场地障碍赛事管理官，格鲁吉亚第比利斯马术运营专家。',
    keywords:
      'FEI Steward, FEI Level 1, 场地障碍, Lazare Osiashvili, 格鲁吉亚马术, 第比利斯',
  },
  ru: {
    title: 'Лазаре Осиашвили | Стюард FEI уровня 1 конкур',
    description:
      'Лазаре Осиашвили — стюард FEI уровня 1 по конкуру и специалист по организации конноспортивных мероприятий в Тбилиси, Грузия.',
    keywords:
      'стюард FEI, FEI уровень 1, конкур, Лазаре Осиашвили, конный спорт Грузия, Тбилиси',
  },
}

function upsertMeta(
  attr: 'name' | 'property',
  key: string,
  content: string
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  )
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function applySeo(lang: LanguageCode) {
  const meta = metaByLang[lang]
  const pageUrl = SITE_URL ? `${SITE_URL}/${lang}` : `/${lang}`
  const imageUrl = SITE_URL ? `${SITE_URL}/og-image.jpg` : '/og-image.jpg'

  document.title = meta.title
  document.documentElement.lang = lang

  upsertMeta('name', 'description', meta.description)
  upsertMeta('name', 'keywords', meta.keywords)
  upsertMeta('name', 'author', 'Lazare Osiashvili')
  upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
  upsertMeta('property', 'og:title', meta.title)
  upsertMeta('property', 'og:description', meta.description)
  upsertMeta('property', 'og:url', pageUrl)
  upsertMeta('property', 'og:locale', lang === 'zh' ? 'zh_CN' : lang)
  upsertMeta('property', 'og:image', imageUrl)
  upsertMeta('name', 'twitter:title', meta.title)
  upsertMeta('name', 'twitter:description', meta.description)
  upsertMeta('name', 'twitter:image', imageUrl)

  if (SITE_URL) {
    upsertLink('canonical', pageUrl)
    for (const l of languages) {
      upsertLink('alternate', `${SITE_URL}/${l.code}`, l.code)
    }
    upsertLink('alternate', `${SITE_URL}/en`, 'x-default')
  }

  upsertJsonLd('person-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lazare Osiashvili',
    jobTitle: 'FEI Level 1 Jumping Steward',
    description: meta.description,
    url: pageUrl,
    image: imageUrl,
    email: 'mailto:lazare.osiashvili9@gmail.com',
    telephone: '+995555999572',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tbilisi',
      addressCountry: 'GE',
    },
    nationality: 'Georgian',
    knowsAbout: [
      'FEI Stewarding',
      'Show Jumping',
      'Arena Management',
      'Equestrian Event Organisation',
      'Course Design Assistance',
    ],
    sameAs: [],
  })
}
