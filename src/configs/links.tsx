import { team_config, TEAM_KEYS } from '@/app/home/TeamBlock';

export enum pageLinkKeys {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  AGENCY = 'AGENCY',
  CONTACTS = 'CONTACTS',
  /** Согласие на обработку персональных данных */
  PERSONAL_DATA_CONSENT = 'PERSONAL_DATA_CONSENT',
  /** Политика конфиденциальности */
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  /** Пользовательское соглашение */
  TERMS_OF_USE = 'TERMS_OF_USE',
  /** Страница команды */
  TEAM = 'TEAM',
  /** Страница члена команды */
  TEAM_PERSON = 'TEAM_PERSON',
  /** Услуги */
  SERVICES = 'SERVICES',
  /** Услуга инвестиций в недвижимость*/
  SERVICES_REAL_ESTATE_INVESTMENT = 'SERVICES_REAL_ESTATE_INVESTMENT',
  /** Услуга юридическое сопровождение сделок */
  SERVICES_REAL_ESTATE_SUPPORT = 'SERVICES_REAL_ESTATE_SUPPORT',
}

export const pageLinks = {
  [pageLinkKeys.HOME]: {
    key: pageLinkKeys.HOME,
    title: '',
    href: '/',
    make: (t: string) => '',
    is: () => { },
  },
  [pageLinkKeys.ABOUT]: {
    key: pageLinkKeys.ABOUT,
    title: 'О нас',
    href: '/',
    make: (t: string) => '',
    is: () => { },
  },
  [pageLinkKeys.AGENCY]: {
    key: pageLinkKeys.AGENCY,
    title: 'Агентство',
    href: '/',
    make: (t: string) => '',
    is: () => { },
  },
  [pageLinkKeys.CONTACTS]: {
    key: pageLinkKeys.CONTACTS,
    title: 'Контакты',
    href: '/',
    make: (t: string) => '',
    is: () => { },
  },
  /** Согласие на обработку персональных данных */
  [pageLinkKeys.PERSONAL_DATA_CONSENT]: {
    key: pageLinkKeys.PERSONAL_DATA_CONSENT,
    title: '',
    href: '/personal-data-consent',
    make: (t: string) => '',
    is: (url: string) => url.endsWith('/personal-data-consent'),
  },
  /** Политика конфиденциальности */
  [pageLinkKeys.PRIVACY_POLICY]: {
    key: pageLinkKeys.PRIVACY_POLICY,
    title: '',
    href: '/privacy-policy',
    make: (t: string) => '',
    is: (url: string) => url.endsWith('/privacy-policy'),
  },
  /** Пользовательское соглашение */
  [pageLinkKeys.TERMS_OF_USE]: {
    key: pageLinkKeys.TERMS_OF_USE,
    title: '',
    href: '/terms-of-use',
    make: (t: string) => '',
    is: (url: string) => url.endsWith('/terms-of-use'),
  },
  /** Страница команды */
  [pageLinkKeys.TEAM]: {
    key: pageLinkKeys.TEAM,
    title: '',
    href: '/team',
    make: (t: string) => '',
    is: (url: string) => url.endsWith('/team'),
  },
  /** Страница члена команды  */
  [pageLinkKeys.TEAM_PERSON]: {
    key: pageLinkKeys.TEAM_PERSON,
    title: '',
    href: '/team/[id]',
    make: (team_person_id: string) => `/team/${team_person_id}`,
    is: (url: string) => {
      if (!url.startsWith('/team/')) {
        return false
      }

      const key = url.split('/')[2]
      const existTeamConfigKeys = team_config.map(person => person.key);
      return existTeamConfigKeys.includes(key as string)
    },
  },
  /** Услуги */
  [pageLinkKeys.SERVICES]: {
    key: pageLinkKeys.SERVICES,
    title: '',
    href: '/services',
    make: (t: string) => '/services',
    is: (url: string) => url.endsWith('/services'),
  },
  /** Услуга инвестиций в недвижимость*/
  [pageLinkKeys.SERVICES_REAL_ESTATE_INVESTMENT]: {
    key: pageLinkKeys.SERVICES_REAL_ESTATE_INVESTMENT,
    title: 'Инвестиции',
    href: '/services/real-estate-investment',
    make: (t: string) => '/services/real-estate-investment',
    is: (url: string) => url.endsWith('/services/real-estate-investment'),
  },
  /** Услуга юридическое сопровождение сделок */
  [pageLinkKeys.SERVICES_REAL_ESTATE_SUPPORT]: {
    key: pageLinkKeys.SERVICES_REAL_ESTATE_SUPPORT,
    title: 'Юридическое сопровождение',
    href: '/services/real-estate-support',
    make: (t: string) => '/services/real-estate-support',
    is: (url: string) => url.endsWith('/services/real-estate-support'),
  },
} as const;

export const links = {
  telegram: {
    channel_name: 'vamssmartrealty',
    channel_href: 'https://t.me/vamssmartrealty',
  },
  youtube: {
    channel_href: '#', // TODO
  },
  telegram_bot: {
    bot_href: 'https://t.me/vamssmartrealtybot'
  },
  whatsapp: {
    contact_href: 'https://wa.me/79672172297',
  },
  instagram: {
    account_href: 'https://www.instagram.com/vsr.smartrealty',
  },
  phone: {
    str_number: '+7 (967) 217-22-97',
    num_number: 79672172297,
  },
  office_address: {
    yandex_href: 'https://yandex.ru/maps/-/CHhMIPM6',
    location_name: 'Москва, Проектируемый пр. № 4062, д.6, стр.16, оф.3.15',
    location_el: <div>
      Москва <br />
      Проектируемый пр. № 4062<br />
      д.6, стр.16, оф.3.15
    </div>
  },
  mail: {
    email: 'info@vamsrealty.ru',
    href: 'mailto:info@vamsrealty.ru'
  },
} as const;
