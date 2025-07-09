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
  phone: {
    str_number: '+7 927 830-57-95',
    num_number: 79278305795,
  },
  whatsapp: {
    contact_href: 'https://wa.me/777', // TODO: add number
  },
} as const;
