import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import enHero from './locales/en/hero.json'
import enExperience from './locales/en/experience.json'
import enCredentials from './locales/en/credentials.json'
import enContact from './locales/en/contact.json'

import kaCommon from './locales/ka/common.json'
import kaHero from './locales/ka/hero.json'
import kaExperience from './locales/ka/experience.json'
import kaCredentials from './locales/ka/credentials.json'
import kaContact from './locales/ka/contact.json'

import frCommon from './locales/fr/common.json'
import frHero from './locales/fr/hero.json'
import frExperience from './locales/fr/experience.json'
import frCredentials from './locales/fr/credentials.json'
import frContact from './locales/fr/contact.json'

import esCommon from './locales/es/common.json'
import esHero from './locales/es/hero.json'
import esExperience from './locales/es/experience.json'
import esCredentials from './locales/es/credentials.json'
import esContact from './locales/es/contact.json'

import deCommon from './locales/de/common.json'
import deHero from './locales/de/hero.json'
import deExperience from './locales/de/experience.json'
import deCredentials from './locales/de/credentials.json'
import deContact from './locales/de/contact.json'

import itCommon from './locales/it/common.json'
import itHero from './locales/it/hero.json'
import itExperience from './locales/it/experience.json'
import itCredentials from './locales/it/credentials.json'
import itContact from './locales/it/contact.json'

import svCommon from './locales/sv/common.json'
import svHero from './locales/sv/hero.json'
import svExperience from './locales/sv/experience.json'
import svCredentials from './locales/sv/credentials.json'
import svContact from './locales/sv/contact.json'

import zhCommon from './locales/zh/common.json'
import zhHero from './locales/zh/hero.json'
import zhExperience from './locales/zh/experience.json'
import zhCredentials from './locales/zh/credentials.json'
import zhContact from './locales/zh/contact.json'

import ruCommon from './locales/ru/common.json'
import ruHero from './locales/ru/hero.json'
import ruExperience from './locales/ru/experience.json'
import ruCredentials from './locales/ru/credentials.json'
import ruContact from './locales/ru/contact.json'

import { languageCodes } from './languages'

export const defaultNS = 'common'
export const namespaces = [
  'common',
  'hero',
  'experience',
  'credentials',
  'contact',
] as const

const resources = {
  en: {
    common: enCommon,
    hero: enHero,
    experience: enExperience,
    credentials: enCredentials,
    contact: enContact,
  },
  ka: {
    common: kaCommon,
    hero: kaHero,
    experience: kaExperience,
    credentials: kaCredentials,
    contact: kaContact,
  },
  fr: {
    common: frCommon,
    hero: frHero,
    experience: frExperience,
    credentials: frCredentials,
    contact: frContact,
  },
  es: {
    common: esCommon,
    hero: esHero,
    experience: esExperience,
    credentials: esCredentials,
    contact: esContact,
  },
  de: {
    common: deCommon,
    hero: deHero,
    experience: deExperience,
    credentials: deCredentials,
    contact: deContact,
  },
  it: {
    common: itCommon,
    hero: itHero,
    experience: itExperience,
    credentials: itCredentials,
    contact: itContact,
  },
  sv: {
    common: svCommon,
    hero: svHero,
    experience: svExperience,
    credentials: svCredentials,
    contact: svContact,
  },
  zh: {
    common: zhCommon,
    hero: zhHero,
    experience: zhExperience,
    credentials: zhCredentials,
    contact: zhContact,
  },
  ru: {
    common: ruCommon,
    hero: ruHero,
    experience: ruExperience,
    credentials: ruCredentials,
    contact: ruContact,
  },
} as const

void i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: [...languageCodes],
  defaultNS,
  ns: [...namespaces],
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng)
  document.documentElement.lang = lng
})

export default i18n
