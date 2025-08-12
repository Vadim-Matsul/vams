'use client';

import { links, pageLinkKeys, pageLinks } from '@/configs/links'
import { cn } from '@/utils/cn'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


type Props = {}

const includePages = [
  pageLinkKeys.ABOUT,
  pageLinkKeys.OBJECTS,
  pageLinkKeys.SERVICES,
  pageLinkKeys.AGENCY,
  pageLinkKeys.CONTACTS,
]
const pageBlocks = Object.values(pageLinks).filter(link => includePages.includes(link.key))

const contacts = [
  {
    title: links.phone.str_number,
    href: `tel:${links.phone.num_number}`
  },
  {
    title: links.mail.email,
    href: `mailto:${links.mail.email}`
  },
  {
    title: links.office_address.location_name,
    href: links.office_address.yandex_href
  },
]

const politics = [
  {
    title: 'Политика обработки персональных данных',
    href: pageLinks[pageLinkKeys.PRIVACY_POLICY].href,
    is: pageLinks[pageLinkKeys.PRIVACY_POLICY].is,
  },
  {
    title: 'Пользовательское соглашение',
    href: pageLinks[pageLinkKeys.TERMS_OF_USE].href,
    is: pageLinks[pageLinkKeys.TERMS_OF_USE].is,
  },
  {
    title: 'Согласие Пользователя сайта на обработку персональных данных',
    href: pageLinks[pageLinkKeys.PERSONAL_DATA_CONSENT].href,
    is: pageLinks[pageLinkKeys.PERSONAL_DATA_CONSENT].is,
  },
  // {
  //   title: 'Файлы Cookie',
  //   href: links.cookie_policy.href
  // }
]

export function Footer({ }: Props) {
  const pathname = usePathname();

  return (
    <div
      style={{
        background: 'linear-gradient(158.29deg, #006B5B 5.78%, #02251F 79.69%)',
      }}
    >
      <section
        className={cn(
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto ',
          'rounded-[8px] mx-auto flex',
          'py-[80px] w-[324px] flex-col gap-[64px]',
          'md:py-[36px] md:w-[732px] md:flex-row md:gap-3',
          'xl:py-[80px] xl:w-[1200px] xl:justify-between xl:gap-0'
        )}
      >
        <div
          className={cn(
            'flex',
            'justify-around',
            'md:gap-3 md:w-2/3',
            'xl:flex-row-reverse xl:justify-end xl:grow xl:gap-0'
          )}
        >
          <ul
            key='blocks'
            className={cn(
              'flex flex-col',
              'gap-6 w-[160px]',
              'md:w-1/2',
              'xl:w-[83px] xl:ml-[282px]'
            )}
          >
            {pageBlocks.map(pageBlock => {

              return (
                <li
                  key={pageBlock.title}
                  className={cn(
                    'font-geist font-semibold text-custom-white-100',
                    'text-[14px] leading-[130%]',
                    'xl:text-[16px]',
                  )}
                >
                  <a
                    href={pageBlock.href}
                    className={cn(
                      'cursor-pointer',
                      'transition-all hover:opacity-80 focus:opac-80'
                    )}
                  >
                    {pageBlock.title}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul
            key='contacts'
            className={cn(
              'flex flex-col',
              'gap-6',
              'md:w-1/2',
              'xl:w-[170px]'
            )}
          >
            {contacts.map((contact, idx) => {
              const isAdress = idx === 2;

              return (
                <li
                  key={contact.title}
                  className={cn(
                    'font-geist font-semibold text-custom-white-100',
                    'text-[14px] leading-[130%]',
                    'xl:text-[16px]',
                    isAdress ? 'w-[160px]' : ''
                  )}
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'cursor-pointer',
                      'transition-all hover:opacity-80 focus:opac-80'
                    )}
                  >
                    {contact.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul
          key='contacts'
          className={cn(
            'flex flex-col',
            'gap-6',
            'md:w-1/2',
            'xl:w-[364px]'
          )}
        >
          {politics.map((politic) => {
            const isCurrentPage = politic.is(pathname);

            return (
              <li
                key={politic.title}
                className={cn(
                  'font-geist font-semibold',
                  'text-[14px] leading-[130%]',
                  'xl:text-[16px]',
                  'text-custom-white-100',
                  isCurrentPage ? 'underline underline-offset-2 decoration-custom-white-100' : ''
                )}
              >
                <a
                  onClick={(evt) => {
                    if (isCurrentPage) evt.preventDefault()
                  }}
                  href={politic.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  className={cn(
                    'transition-all ',
                    isCurrentPage ? 'cursor-auto' : 'cursor-pointer hover:opacity-80 focus:opacity-80'
                  )}
                >
                  {politic.title}
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </div >
  )
}
