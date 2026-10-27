export const languages = [
  { code: 'en', label: 'English', flagCode: 'gb' },
  { code: 'ka', label: 'ქართული', flagCode: 'ge' },
  { code: 'fr', label: 'Français', flagCode: 'fr' },
  { code: 'es', label: 'Español', flagCode: 'es' },
  { code: 'de', label: 'Deutsch', flagCode: 'de' },
  { code: 'it', label: 'Italiano', flagCode: 'it' },
  { code: 'sv', label: 'Svenska', flagCode: 'se' },
  { code: 'zh', label: '中文', flagCode: 'cn' },
  { code: 'ru', label: 'Русский', flagCode: 'ru' },
] as const

export type LanguageCode = (typeof languages)[number]['code']

export const languageCodes = languages.map((l) => l.code)

export function isLanguageCode(value: string): value is LanguageCode {
  return (languageCodes as readonly string[]).includes(value)
}

export function getDefaultLanguage(): LanguageCode {
  const saved = localStorage.getItem('lang')
  if (saved && isLanguageCode(saved)) return saved

  const browser = navigator.language.slice(0, 2).toLowerCase()
  if (isLanguageCode(browser)) return browser

  return 'en'
}

export function flagUrl(flagCode: string, width = 40) {
  return `https://flagcdn.com/w${width}/${flagCode}.png`
}
