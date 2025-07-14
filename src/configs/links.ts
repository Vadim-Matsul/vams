export enum pageLinkKeys {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  OBJECTS = 'OBJECTS',
  SERVICES = 'SERVICES',
  AGENCY = 'AGENCY',
  CONTACTS = 'CONTACTS',
}

export const pageLinks = {
  [pageLinkKeys.HOME]: {
    key: pageLinkKeys.HOME,
    title: '',
    href: '/',
    is: () => {},
  },
  [pageLinkKeys.ABOUT]: {
    key: pageLinkKeys.ABOUT,
    title: 'О нас',
    href: '/',
    is: () => {},
  },
  [pageLinkKeys.OBJECTS]: {
    key: pageLinkKeys.OBJECTS,
    title: 'Объекты',
    href: '/',
    is: () => {},
  },
  [pageLinkKeys.SERVICES]: {
    key: pageLinkKeys.SERVICES,
    title: 'Сервисы',
    href: '/',
    is: () => {},
  },
  [pageLinkKeys.AGENCY]: {
    key: pageLinkKeys.AGENCY,
    title: 'Агентство',
    href: '/',
    is: () => {},
  },
  [pageLinkKeys.CONTACTS]: {
    key: pageLinkKeys.CONTACTS,
    title: 'Контакты',
    href: '/',
    is: () => {},
  },
} as const;

export const links = {
  telegram: {
    channel_name: 'vsrealty',
    channel_href: 'https://t.me/vsrealty',
  },
  whatsapp: {
    contact_href: 'https://wa.me/777', // TODO: add number
  },
  instagram: {
    account_href: 'https://www.instagram.com/vsr.smartrealty',
  },
  phone: {
    str_number: '+7 927 830-57-95',
    num_number: 79278305795,
  },
  office_address: {
    yandex_href: 'https://yandex.ru/maps/?text=Москва%2C%20Большая%20Никитская%20улица%2C%2015%20стр%202',
    location_name: 'Большая Никитская улица, 15 стр 2 Москва',
  },
  mail: {
    email: 'office@vams-realty.ru',
  },
  policy_personal_data: {
    href: '#',
  },
  consent_marketing: {
    href: '#',
  },
  consent_personal_data: {
    href: '#',
  },
  cookie_policy: {
    href: '#',
  },
} as const;
