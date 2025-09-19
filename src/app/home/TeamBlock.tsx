
'use client';
import { cn } from '@/utils/cn'
import { StarBorder } from '@/bits/animations/StarBorder/StarBorder'
import { ArrowRightIcon } from '@/components/icons';
import Image from 'next/image';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { screensData } from '@/configs/screens';
import { AnimatePresence, motion, useAnimation, useInView } from 'motion/react';
import { BlurText } from '@/bits/BlurText';
import { FadeContent } from '@/bits/FadeContent';
import { ParallaxCard } from '@/ui/ParallaxCard';
import { homeBlockIDs } from '@/configs/homeBlockIds';
import { useRouter } from 'next/navigation';
import { pageLinkKeys, pageLinks } from '@/configs/links';

export const TEAM_KEYS = {
  hakobyan: 'Hakobyan_Minas_Oganesovich',
  zakharova: 'Zakharova_Yana_Mikhailovna',
  platonova: 'Platonova_Mariya_Andreevna',
  bredyuk: 'Bredyuk_Kristina_Vladimirovna',
  nikulnikova: 'Nikulnikova_Mariya_Olegovna',
  zholobova: 'Zholobova_Elena_Vasilevna',
  varlakova: 'Varlakova_Valeria_Alexandrovna'
};

const DESKTOP_WIDTH = screensData.md.num;
const LG_1_5_WIDTH = screensData['1_5lg'].num;

export const team_config = [
  {
    key: TEAM_KEYS.hakobyan,
    name: 'Акопян Минас Оганесович',
    desc: 'Основатель и руководитель VSR. Полиглот и экономист, владеющий инвестиционной экспертизой. 10 лет успешно развивает бизнес-проекты в разных сферах.',
    badge: 'Стаж 10 лет',
    role: 'Основатель и руководитель',
    img: '/images/team_hakobyan_new.png',
  },
  {
    key: TEAM_KEYS.zakharova,
    name: 'Захарова Яна Михайловна',
    desc: 'Как управляющий партнёр создает новые стандарты работы с премиальной недвижимостью. Тонко чувствует баланс между эстетикой и выгодой.',
    role: 'Управляющий партнёр',
    badge: '',
    img: '/images/team_zakharova_new.png',
  },
  {
    key: TEAM_KEYS.platonova,
    name: 'Платонова Мария Андреевна',
    desc: 'Специалист с экономическим образованием и вниманием к деталям. Превращает сложные процессы в чёткие и организованные системы. Ваши документы всегда в идеальном порядке.',
    role: 'Секретарь',
    badge: '',
    img: '/images/team_platonova_new.png',
  },
  {
    key: TEAM_KEYS.bredyuk,
    name: 'Бредюк Кристина Владимировна',
    desc: 'Координатор с медицинским образованием. Быстро анализирует детали и находит оптимальные решения. Подходит к каждому клиенту со взглядом исследователя.',
    role: 'Координатор',
    badge: '',
    img: '/images/team_bredyuk_new.jpg',
  },
  {
    key: TEAM_KEYS.nikulnikova,
    name: 'Никульникова Мария Олеговна',
    desc: 'Опытный координатор с 6-летним стажем в продажах. Превращает ваши потребности в идеальные предложения.',
    role: 'Опытный Координатор',
    badge: '',
    img: '/images/team_nikulnikova_new.png',
  },
  {
    key: TEAM_KEYS.zholobova,
    name: 'Жолобова Елена Васильевна',
    desc: 'Эффективно решает даже самые сложные финансовые задачи. Находит решения, которые другие считают невозможными.',
    role: 'Ипотечный специалист',
    badge: '',
    img: '/images/team_zholobova_new.png',
  },
  {
    key: TEAM_KEYS.varlakova,
    name: 'Варлакова Валерия Александровна',
    desc: 'Юрист по образованию, перфекционист по призванию. Обеспечивает безупречную точность документооборота и юридическую чистоту каждой сделки.',
    role: 'Юрист',
    badge: '',
    img: '/images/team_varlakova_new.png',
  },
];

const mobile_requireshowteam = [
  TEAM_KEYS.hakobyan,
  TEAM_KEYS.zakharova,
]

const desktop_requireshowteam = [
  TEAM_KEYS.hakobyan,
  TEAM_KEYS.zakharova,
  TEAM_KEYS.platonova,
  TEAM_KEYS.bredyuk
]

const lg_1_5_requireshowteam = [
  TEAM_KEYS.hakobyan,
  TEAM_KEYS.zakharova,
  TEAM_KEYS.platonova,
  TEAM_KEYS.bredyuk,
  TEAM_KEYS.nikulnikova,
  TEAM_KEYS.zholobova,
]

type Props = {}

export function TeamBlock({ }: Props) {
  const [isMobile, setIsMobile] = useState(
    typeof window === 'undefined'
      ? false
      : window.innerWidth < DESKTOP_WIDTH
  );
  const [is1_5LG, setIs1_5LG] = useState(
    typeof window === 'undefined'
      ? false
      : window.innerWidth >= LG_1_5_WIDTH
  );
  const [showFullTeam, setShowFullTeam] = useState(false);
  const accessComplete = useRef(false);
  const [isCompleteBTNAnimation, setIsCompleteBTNAnimation] = useState(false);

  useEffect(() => {
    // следит за mobile шириной экрана
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(min-width: ${DESKTOP_WIDTH}px)`);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(!e.matches);

    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    // следит за 1_5lg шириной экрана
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(min-width: ${LG_1_5_WIDTH}px)`);
    const onChange = (e: MediaQueryListEvent) => {
      setIs1_5LG(e.matches)
    };

    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);


  const requireTeamKeys = isMobile
    ? mobile_requireshowteam
    : is1_5LG
      ? lg_1_5_requireshowteam
      : desktop_requireshowteam;
  const showTeam = team_config.filter((person) => requireTeamKeys.includes(person.key));
  const hiddenTeam = team_config.filter((person) => !requireTeamKeys.includes(person.key));

  const shouldShowFullTeam = showFullTeam && isCompleteBTNAnimation;

  return (
    <section
      id={homeBlockIDs.TEAM}
      className={cn(
        'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
        'py-[80px] px-[18px]',
        'md:px-[24px]',
        'xl:py-[120px]',
        '1_5xl:px-[120px]'
      )}
    >
      <h3
        className={cn(
          'font-unbounded whitespace-nowrap text-custom-brand-100 font-medium text-center tracking-[-1px]',
          'text-[34px] leading-[96%] mb-[60px]',
          'xl:text-[37px] xl:mb-[90px]'
        )}
      >
        Команда VSR
      </h3>

      <ul
        className={cn(
          'flex',
          'flex-col gap-4 items-center',
          'md:flex-row md:flex-wrap md:justify-center',
          'xl:w-[1200px] xl:mx-auto'
        )}
      >
        {showTeam.map(person => {
          return (
            <TeamPerson
              key={person.name}
              person={person}
            />
          )
        })}

        <AnimatePresence mode='sync'>
          {shouldShowFullTeam && (
            hiddenTeam.map(person => {
              return (
                <TeamPerson
                  key={person.name}
                  person={person}
                />
              )
            })
          )}
        </AnimatePresence>
      </ul>

      <AnimatePresence mode='sync'>
        {!showFullTeam && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .7, transition: { duration: 1 } }}
            onAnimationComplete={() => {
              if (accessComplete.current === true) {
                console.log('complete')
                setIsCompleteBTNAnimation(true)
              }
            }}
            onClick={() => {
              accessComplete.current = true
              setShowFullTeam(true)
            }}
            className={cn(
              'rounded-[90px] overflow-hidden',
              'mx-auto transition-all',
              'hover:scale-[.95] focus:scale-[.95]',
              'w-[270px] h-[44px] mt-[60px]',
              'xl:w-[377px] xl:h-[60px] xl:mt-[90px]'
            )}
          >
            <StarBorder
              as="button"
              color="var(--color-custom-brand-200)"
              speed="3s"
              thickness={1.5}
              className={cn(
                'cursor-pointer'
              )}
            >
              <div
                className={cn(
                  'bg-custom-white-100 text-custom-brand-100',
                  'w-full h-full rounded-[90px]',
                  'border-[1px] border-custom-brand-100',
                  'flex items-center justify-center',
                  'gap-2.5'
                )}
              >
                <p
                  className={cn(
                    'font-geist font-semibold leading-none',
                    'text-[16px]',
                    'xl:text-[18px]'
                  )}
                >
                  Смотреть всю команду
                </p>

                <div>
                  <ArrowRightIcon
                    className={cn(
                      'w-[20px] h-[20px]',
                      'xl:w-[26px] xl:h-[26px]'
                    )}
                  />
                </div>
              </div>
            </StarBorder>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function TeamPerson({ person }: { person: typeof team_config[number] }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return (
    <FadeContent
      blur={true}
      duration={500}
      easing="ease-out"
      threshold={.7}
      initialOpacity={0}
      className={cn(
        'relative',
        isActive ? 'z-[3]' : 'z-[1]'
      )}
    >
      <motion.li
        onMouseMove={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onClick={(evt) => {
          evt.preventDefault();
          const key = pageLinkKeys.TEAM_PERSON as keyof typeof pageLinks;
          router.push(pageLinks[key!].make(person.key));
        }}
        tabIndex={1}
        className={cn(
          'relative rounded-[8px] overflow-hidden cursor-pointer',
          'hover:scale-[1.04] transition-all focus:scale-[1.04]',
          'w-[324px] h-[458px]',
          'md:w-[352px] md:h-[550px]',
          'xl:w-[389px]'
        )}
      >
        <div
          className={cn(
            'flex items-end justify-center',
            'absolute left-0 right-0 bottom-0 z-[2]',
            'h-[248px]'
          )}
        >
          <section
            className='absolute inset-0 z-[1]'
          >
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[248px] bg-gradient-to-t from-black/40 to-transparent z-[2]"
            />

            <div
              className='absolute inset-0 bg-gradient-to-b from-transparent to-black/15'
            />

            <article
              className='absolute z-[3] inset-0 backdrop-blur-[2px]'
            >

            </article>
          </section>

          <h3
            className={cn(
              'flex flex-col',
              'relative z-[2] text-custom-white-000 font-unbounded font-bold text-center uppercase',
              'text-[20px] leading-[116%] pb-[33px]',
              isActive ? 'blur-[10px]' : ''
            )}
          >
            {person.name.split(' ').map(part => <span key={part}>{part}</span>)}
          </h3>
        </div>

        <div
          className={cn(
            'absolute inset-0 z-[1]',
          )}
        >
          <Image
            quality={100}
            fill
            alt={person.name}
            src={person.img}
            draggable={false}
            sizes='full'
            loading='lazy'
            decoding='async'
            className={cn(
              'object-cover select-none',
              isActive ? 'blur-[10px]' : ''
            )}
          />
        </div>

        <AnimatePresence mode='popLayout'>
          {isActive && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className={cn(
                'absolute inset-0 z-[4] flex flex-col justify-between',
                'px-6 py-9'
              )}
            >
              <div className='relative w-[89px] h-[43px]'>
                <Image
                  src='/images/logo_vsr.png'
                  alt=''
                  loading='lazy'
                  decoding='async'
                  fill
                  quality={100}
                  className=''
                />
              </div>

              <div
                className={cn(
                  'font-geist font-medium text-[#E3EDF2] leading-[130%]',
                  'text-[16px]',
                  'md:text-[18px]'
                )}
              >
                <BlurText
                  text={person.desc}
                  delay={20}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => { }}
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.li>
    </FadeContent>
  )
}
