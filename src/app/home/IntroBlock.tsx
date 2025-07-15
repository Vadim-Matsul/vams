"use client";
import { StarBorder } from '@/bits/animations/StarBorder/StarBorder'
import { ArrowRightIcon, GrowStatisticIcon } from '@/components/icons'
import { homeBlockIDs } from '@/configs/homeBlockIds'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { useInView, motion, useScroll, useTransform } from 'motion/react';
import { SplitText } from '@/bits/SplitText';
import { FadeContent } from '@/bits/FadeContent';
import { CountUp } from '@/bits/CountUp';

type Props = {}

const splitText_options = {
  delay: 30,
  duration: 0.5,
  ease: "power3.out",
  splitType: "chars",
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 },
  threshold: 0,
  rootMargin: "0px",
  textAlign: "center",
} as const;

export function IntroBlock({ }: Props) {
  return (
    <section
      id={homeBlockIDs.INTRO}
      className={cn(
        'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
        'pt-[60px] md:pt-[80px] 1_5lg:pt-[94px]'
      )}
    >
      <FadeContent
        blur
        duration={1000}
        easing="ease-out"
        className='relative'
      >
        <h2
          className={cn(
            'font-unbounded font-medium text-custom-brand_200 text-center',
            'w-[322px] h-[99px] mx-auto overflow-hidden ',
            'md:w-[563px] md:h-[90px]',
            'xl:w-[1100px] xl:h-[100px]',
          )}
        >
          <SplitText
            {...splitText_options}
            className='text-[24px] leading-none md:hidden'
            text={<>
              Премиальная<br />недвижимость<br />с&nbsp;интеллектуальным<br />подходом
            </>}
          />
          <SplitText
            {...splitText_options}
            className='text-[30px] leading-none hidden md:inline xl:hidden'
            text={<>
              Премиальная&nbsp;недвижимость<br />с&nbsp;интеллектуальным<br />подходом
            </>}
          />
          <SplitText
            {...splitText_options}
            className='text-[48px] leading-none hidden xl:inline'
            text={<>
              Премиальная&nbsp;недвижимость<br />с&nbsp;интеллектуальным&nbsp;подходом
            </>}
          />
        </h2>
      </FadeContent>

      <article
        className={cn(
          'relative z-[1] mx-auto',
          'h-[390px] w-[324px]',
          'md:w-[688px] md:h-[310px]',
          'xl:w-[1085px] xl:h-[597px]',
          '1_5xl:w-full 1_5xl:h-[584px] 1_5xl:overflow-hidden'
        )}
      >
        <HouseofHorizons1 />
        <HouseofHorizons2 />
        <Round19_9 />
        <Lavrushensky />
        <Badge_11_3 />
        <Badge_13_3 />
        <Badge_07_1 />
        <Badge_31_9 />
        <LuzhnikiCollection />
        <PhoneBackground />
        <MyDocuments />
      </article>

      <section
        className={cn(
          'mt-[30px] pb-[60px]',
          'md:mt-[52px] md:pb-[80px]',
          '1_5lg:mt-0 1_5lg:pb-[100px]'
        )}
      >
        <h3
          className={cn(
            'text-custom-brand-000 font-unbounded font-bold text-center leading-[110%]',
            'text-[16px] mb-[32px]',
            'md:mb-[42px]',
            '1_5lg:text-[24px] 1_5lg:mb-[54px]',
            // ' bg-red-500'
          )}
        >
          <SplitText
            {...splitText_options}
            delay={40}
            duration={1.5}
            threshold={0.9}
            text={<>
              Создаём&nbsp;современные<br />
              решения&nbsp;для&nbsp;жизни<br />
              и&nbsp;инвестиций
            </>}
          />
        </h3>

        <div
          className={cn(
            'rounded-[90px] overflow-hidden',
            'mx-auto transition-all',
            'hover:scale-[.95] focus:scale-[.95]',
            'w-[288px] h-[44px]'
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
                  'text-[16px]'
                )}
              >
                Запросить консультацию
              </p>

              <div>
                <ArrowRightIcon
                  className={cn(
                    'w-[20px] h-[20px]'
                  )}
                />
              </div>
            </div>
          </StarBorder>
        </div>
      </section>
    </section>
  )
}

function HouseofHorizons1() {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 300], [0, -50])
  const duration_time = 1.2;
  const count_duration_time = 3;

  return (
    <FadeContent
      blur
      duration={duration_time * 1000}
      easing="ease-out"
      className='relative z-[4] md:z-[7]'
    >
      <motion.section
        key='Дом Горизонтов 1'
        style={{ translateY }}
        className={cn(
          "hover:scale-[1.15] transition-all",
          'absolute translate-y-0',
          'z-[4] w-[145px] h-[115px] left-[24px] top-[30px]',
          'md:z-[7] md:w-[175px] md:h-[138px] md:-top-[25px] md:left-[14px]', // md
          'xl:z-[7] xl:w-[324px] xl:h-[257px] xl:top-[10px] xl:-left-[50px]', // xl
          '1_5xl:top-[0px] 1_5xl:left-[133px]' // 1_5xl
        )}
      >
        <div
          style={{
            boxShadow: '0px 9px 9px rgba(40, 108, 97, 0.1)',
            transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
          }}
          className={cn(
            'absolute',
            'rounded-[9px] bg-white/40 -outline-offset-[0.3px] outline-white/60 backdrop-blur-[9px] overflow-hidden"',
            'w-[105px] h-[90px] top-[12px] left-[20px]',
            'md:w-[125px] md:h-[108px] md:top-[15px] md:left-[25px]', //md
            'xl:w-[228px] xl:h-[196px] xl:top-[30px] xl:left-[48px]', // xl
          )}
        >
          <p
            className={cn(
              'tracking-wide text-custom-brand-200 font-medium font-unbounded',
              'text-[6px] leading-[8px] pl-2 pt-2.5',
              'md:text-[7px] md:leading-[9px]', // md
              'xl:text-[13px] xl:leading-[14px] xl:pl-3.5 xl:pt-7' // xl
            )}
          >
            Дом Горизонтов
          </p>

          <div className={cn(
            'w-full h-px',
            'px-2 mt-3',
            'xl:px-3.5 xl:mt-7' // lg
          )}>
            <div className='bg-[#C2C2C2] opacity-60 h-full' />
          </div>

          <p
            className={cn(
              "text-[#707070] font-medium font-geist",
              'text-[5px] leading-[6px] pl-2 pt-0.5',
              'md:text-[6px] md:leading-[7px]', // md
              'xl:text-[11px] xl:leading-[12px] xl:pl-3.5 xl:pt-0.5', // xl
            )}
          >
            Рыночная цена
          </p>

          <p className={cn(
            "whitespace-nowrap text-custom-brand-200 font-medium font-unbounded",
            'text-[9.5px] leading-[12px] pl-2 pt-1',
            'md:text-[11.3px] md:leading-[12px]',
            'xl:text-[21px] xl:leading-[22px] xl:pl-3.5 xl:pt-3', // xl
          )}>
            <CountUp
              from={150_000_000}
              to={190_890_000}
              separator=" "
              direction="up"
              delay={duration_time}
              duration={count_duration_time}
              className={cn(
                'inline-block',
                "w-[77px] min-w-[77px] max-w-[77px]",
                "md:w-[92px] md:min-w-[92px] md:max-w-[92px]",
                "xl:w-[170px] xl:min-w-[170px] xl:max-w-[170px]"
              )}
            />
            &nbsp;₽
          </p>

          <div className={cn(
            'w-full h-px ',
            'px-2 mt-3',
            'xl:px-3.5 xl:mt-7' // xl
          )}>
            <div className='bg-[#C2C2C2] opacity-60 h-full' />
          </div>

          <div
            className={cn(
              'flex justify-between items-center',
              'px-2 mt-1',
              'xl:px-3.5 xl:mt-2', // xl
            )}
          >
            <p
              className={cn(
                "text-[#707070]  font-medium font-geist",
                'text-[5px] leading-[6px]',
                'md:text-[6px] md:leading-[7px]',
                'xl:text-[11px] xl:leading-[7px]', // xl
              )}
            >
              Динамика
            </p>

            <div
              style={{
                boxShadow: '0px 9px 9px rgba(40, 108, 97, 0.1)',
              }}
              className={cn(
                'text-custom-brand-100 items-center rounded-[9px] backdrop-blur-[9px] flex bg-white/40',
                'px-1.5 w-9 h-[10.5px] justify-between',
                'xl:px-1.5 xl:w-[80px] xl:h-[23px] xl:justify-center xl:gap-1', // xl
              )}
            >
              <span
                className={cn(
                  'font-medium font-geist',
                  'text-[5px] leading-[6px]',
                  'md:text-[6px] md:leading-[7px]',
                  'xl:text-[10px] xl:leading-[11px]', // xl
                )}
              >
                +33.7%
              </span>
              <GrowStatisticIcon
                className={cn(
                  '-rotate-[45deg]',
                  'w-[6px] min-w-[6px] h-[5px]',
                  'xl:w-[11px] xl:min-w-[11px] xl:h-[7px]', // xl
                )}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </FadeContent>
  )
}

function HouseofHorizons2() {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 300], [0, -90])
  const duration_time = 1.2;
  const count_duration_time = 3;

  return (
    <FadeContent
      blur
      duration={duration_time * 1000}
      easing="ease-out"
      className='relative z-[3]'
    >
      <motion.section
        key='Дом Горизонтов 2'
        style={{ translateY }}
        className={cn(
          'hidden md:block',
          "hover:scale-[1.15] transition-all",
          'absolute',
          'z-[3] w-[225px] h-[191px] top-[29px] right-0',
          'xl:z-[3] xl:w-[420px] xl:h-[356px] xl:top-[68px] xl:-right-[70px]', // xl
          '1_5xl:top-[68px] 1_5xl:right-[58px]',
        )}
      >
        <div
          style={{
            boxShadow: '0px 9px 9px rgba(0, 69, 58, 0.05)',
            transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
          }}
          className={cn(
            'overflow-hidden',
            'absolute bg-white/40 backdrop-blur-[9px]',
            'z-[7] w-[125px] h-[181px] top-[6px] left-[50px] rounded-[9px]',
            'xl:z-[7] xl:w-[228px] xl:h-[330px] xl:top-[13px] xl:left-[96px] xl:rounded-[16px]', // xl
          )}
        >
          <Image
            src={'/images/card_town_2.png'}
            fill
            quality={100}
            sizes='full'
            priority
            style={{ filter: 'grayscale(20%)' }}
            alt='card_town_1.png'
          />

          <div
            className='absolute inset-0 z-[1]'
          >
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
              }}
              className={cn(
                "absolute z-[1] top-0 left-0 right-0 backdrop-blur-[1.5px]",
                'h-[85px]',
                'xl:h-[130px]' // xl
              )}
            >
              <div
                className={cn(
                  ' absolute bg-gradient-to-b from-black/50 to-transparent inset-0 backdrop-blur-[5.5px]',
                  'bottom-[25%]',
                  'xl:bottom-[10%]' // xl
                )}
              />

              <div
                className='absolute inset-0 backdrop-blur-[3px] bottom-1/3'
              />
            </div>

            <div
              className='absolute z-[2] inset-0 '
            >
              <p
                className={cn(
                  'font-unbounded font-medium text-white',
                  'pl-1.5 pt-1.5 text-[11px] leading-[12px]',
                  'xl:pl-2.5 xl:pt-4 xl:text-[20px] xl:leading-[21px]', // xl
                )}
              >
                Дом Горизонтов
              </p>

              <div className={cn(
                'px-1.5 h-[0.3px] my-[2.5px]',
                'xl:px-2.5 xl:h-[0.3px] xl:my-2.5', // xl
              )}>
                <div className='w-full h-full bg-white' />
              </div>

              <p
                className={cn(
                  'font-geist font-medium text-[#F5F5F5]',
                  'pl-1.5 text-[5px] leading-[6px]',
                  'xl:pl-2.5 xl:text-[9px] xl:leading-[10px]', // xl
                )}
              >
                квартиры от
              </p>
              <p
                className={cn(
                  'whitespace-nowrap font-unbounded font-medium text-white',
                  'text-[7px] leading-[8px] pl-1.5 mt-[1px]',
                  'xl:text-[13px] xl:leading-[14px] xl:pl-2.5 xl:mt-[1px]', // xl
                )}
              >
                <CountUp
                  from={35_211_000}
                  to={50_000_000}
                  separator=" "
                  direction="down"
                  delay={duration_time}
                  duration={count_duration_time}
                  className={cn(
                    'whitespace-nowrap inline-block',
                    'w-[49px] min-w-[49px] max-w-[49px]',
                    'xl:w-[91px] xl:min-w-[91px] xl:max-w-[91px]',
                  )}
                />
                &nbsp;₽
              </p>

              <p
                className={cn(
                  'font-geist font-medium text-[#F5F5F5]',
                  'pl-1.5 mt-[4px] text-[5px] leading-[6px]',
                  'xl:pl-2.5 xl:mt-[8px] xl:text-[9px] xl:leading-[10px]', // xl
                )}
              >
                площадь от
              </p>
              <p
                className={cn(
                  'font-unbounded font-medium  text-white',
                  'pl-1.5 mt-[1px] text-[7px] leading-[8px]',
                  'xl:pl-2.5 xl:mt-[1px] xl:text-[13px] xl:leading-[14px]', // xl
                )}
              >

                <CountUp
                  from={0}
                  to={44}
                  separator=" "
                  direction="up"
                  duration={count_duration_time}
                  delay={duration_time}
                  className={cn(
                    'whitespace-nowrap inline-block',
                    'w-[13px] min-w-[13px] max-w-[13px]',
                    'xl:w-[24px] xl:min-w-[24px] xl:max-w-[24px]',
                  )}
                />
                .14&nbsp;м²
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </FadeContent>
  )
}

function Round19_9() {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 500], [0, -70])

  return (
    <FadeContent
      blur
      duration={1500}
      easing="ease-out"
      className='relative z-[5] md:z-[9]'
    >
      <motion.section
        key='+19.9% round'
        style={{ translateY }}
        className={cn(
          "hover:scale-[1.15] transition-all",
          'absolute overflow-hidden',
          'z-[5] w-[159px] h-[134px] top-[24px] right-[8px]',
          'md:z-[9] md:w-[193px] md:h-[160px] md:top-[153px] md:right-0',// md
          'xl:z-[9] xl:w-[353px] xl:h-[292px] xl:top-[305px] xl:right-0',// xl
          '1_5xl:top-[290px] 1_5xl:right-[55px]',
        )}
      >
        <div
          className={cn(
            'absolute',
            'w-[159px] h-[130px]',
            'md:scale-[1.2]', // md
            'xl:scale-[1] xl:w-auto xl:h-auto' // xl
          )}
        >
          <div
            style={{
              boxShadow: `
              0px 9px 9px rgba(40, 108, 97, 0.1),
              inset 2px 0px 8px rgba(255, 255, 255, .6),
              inset 0px 2px 8px rgba(255, 255, 255, .6)
            `,
              transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
            }}
            className={cn(
              'absolute ml-10 bg-white/10 backdrop-blur-[3px] rounded-[9px]',
              'top-[10px] -left-[13px] w-[105px] h-[109px]',
              'z-[3] md:top-[20px] md:left-[0px] md:w-[105px] md:h-[109px]', // md
              'xl:z-[3] xl:top-[25px] xl:left-[23px] xl:w-[228px] xl:h-[237px]', // xl
            )}
          >
            <div
              className='absolute inset-0 z-1'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="134"
                height="110"
                fill="none"
                viewBox="0 0 138 114"
                style={{
                  transform: 'matrix(0.725, -0.551, 0.725, 0.857, 0, 0)'
                }}
                className='absolute -top-[1px] -left-[14px] xl:hidden'
              >
                <g filter="url(#filter0_i_429_1041)">
                  <path
                    fill="#fff"
                    d="M97.634 23.04c1.215-1.447.806-3.38-1.002-4.2-10.242-4.64-22.295-6.29-34.226-4.63-13.198 1.836-25.293 7.592-33.914 16.139-8.62 8.546-13.144 19.267-12.683 30.058.46 10.791 5.873 20.874 15.174 28.272 9.302 7.398 21.822 11.576 35.105 11.716s26.369-3.771 36.693-10.963 17.14-17.147 19.111-27.913c1.782-9.732-.512-19.49-6.443-27.713-1.047-1.451-3.434-1.74-5.186-.722s-2.205 2.958-1.179 4.42c4.882 6.965 6.75 15.177 5.251 23.366-1.689 9.224-7.529 17.754-16.374 23.915-8.845 6.162-20.058 9.512-31.438 9.393-11.38-.12-22.107-3.7-30.076-10.038S23.84 69.163 23.445 59.917s3.481-18.43 10.867-25.753c7.386-7.322 17.75-12.254 29.057-13.827 10.04-1.398 20.181-.058 28.853 3.758 1.822.8 4.198.391 5.412-1.055"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i_429_1041"
                    width="106.704"
                    height="88.746"
                    x="15.777"
                    y="13.58"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1.928"></feOffset>
                    <feGaussianBlur stdDeviation="0.964"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.519118 0 0 0 0 1 0 0 0 0 0.925132 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_429_1041"></feBlend>
                  </filter>
                </defs>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="233"
                height="190"
                fill="none"
                viewBox="0 0 233 190"
                style={{
                  transform: 'matrix(0.725, -0.551, 0.725, 0.857, 0, 0)'
                }}
                className={cn(
                  'hidden xl:block',
                  'absolute top-[23px] -left-[3px]' // xl
                )}
              >
                <path
                  fill="#fff"
                  d="M178.73 20.891c2.642-3.147 1.754-7.353-2.18-9.136-22.285-10.098-48.512-13.69-74.472-10.078C73.36 5.674 47.041 18.2 28.283 36.795S-.317 78.718.686 102.198s12.779 45.421 33.018 61.518 47.482 25.188 76.383 25.491c28.902.303 57.377-8.204 79.841-23.853s37.294-37.31 41.584-60.735c3.877-21.176-1.113-42.41-14.019-60.301-2.278-3.158-7.471-3.788-11.284-1.572s-4.797 6.437-2.567 9.619c10.623 15.154 14.689 33.023 11.426 50.842-3.675 20.07-16.381 38.629-35.628 52.036-19.246 13.408-43.643 20.697-68.405 20.437s-48.102-8.049-65.443-21.84c-17.34-13.791-27.43-32.589-28.29-52.707-.859-20.117 7.574-40.103 23.645-56.036s38.62-26.664 63.226-30.088c21.845-3.04 43.911-.125 62.781 8.177 3.963 1.744 9.133.852 11.776-2.295"
                ></path>
              </svg>
            </div>

            <div
              style={{
                boxShadow: '0px 3px 3px rgba(40, 108, 97, 0.1)',
              }}
              className={cn(
                'absolute text-custom-brand-100  items-center rounded-[9px] backdrop-blur-[9px] flex bg-white/40',
                'px-1.5 z-[2] top-[36px] left-1/2 justify-between -translate-x-1/2 w-9 h-[11px]',
                'xl:px-1.5 xl:z-[2] xl:top-[85px] xl:left-1/2 xl:justify-center xl:gap-1 xl:-translate-x-1/2 xl:w-[80px] xl:h-[23px]', // xl
              )}
            >
              <span
                className={cn(
                  'font-medium font-geist',
                  'text-[5px] leading-[6px]',
                  'xl:text-[11px] xl:leading-[12px]' // xl
                )}
              >
                +19.9%
              </span>

              <GrowStatisticIcon
                className={cn(
                  '-rotate-[45deg]',
                  'w-[6px] min-w-[6px] h-[5px]',
                  'xl:w-[12px] xl:min-w-[12px] xl:h-[7px]', // xl
                )}
              />
            </div>

            <p
              className={cn(
                'absolute z-[3] left-1/2 -translate-x-1/2',
                'font-geist font-semibold text-custom-black-000 text-center',
                'text-[5px] leading-[6px] top-[50px]',
                'xl:text-[10px] xl:leading-[11px] xl:top-[118px]', // xl
              )}
            >
              Прогнозируемый<br />рост&nbsp;цен<br />обьекта&nbsp;к&nbsp;2028
            </p>
          </div>

          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="130"
              fill="none"
              viewBox="0 0 157 130"
              className={cn(
                'absolute z-[2]',
                'top-[4px]',
                'md:top-[11px] md:left-[14px] md:scale-[1.02]', // md,
                'xl:hidden' // xl
              )}
            >
              <path
                fill="url(#paint0_linear_429_1039)"
                d="M154.371 49.82 78.892 2.166A8.84 8.84 0 0 0 67.797 3.33L1.981 67.359C-1.984 71.34.815 77.9 5.529 80.957l72.125 46.784a8.84 8.84 0 0 0 11.035-1.136l64.091-63.476c4.003-3.965 6.311-10.23 1.591-13.308"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_429_1039"
                  x1="92.284"
                  x2="1.757"
                  y1="138.436"
                  y2="5.736"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BAE6E9"></stop>
                  <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="343"
              height="280"
              fill="none"
              viewBox="0 0 343 280"
              className={cn(
                'hidden xl:block',
                'absolute top-[8px] left-[6px] scale-[1.03]',
              )}
            >
              <path
                fill="url(#paint0_linear_429_831)"
                d="M336.6 107.109 172.365 3.414a19.24 19.24 0 0 0-24.142 2.538L5.014 145.27c-8.628 8.662-2.537 22.934 7.72 29.588l156.938 101.797a19.24 19.24 0 0 0 24.01-2.472l139.455-138.118c8.71-8.627 13.733-22.26 3.463-28.956"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_429_831"
                  x1="201.506"
                  x2="4.527"
                  y1="299.926"
                  y2="11.185"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BAE6E9"></stop>
                  <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
              </defs>
            </svg>
          </>
        </div>
      </motion.section>
    </FadeContent>
  )
}

function Lavrushensky() {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 500], [0, -100])
  const animation_duration = 0.5;
  const count_duration = 1;

  return (

    <FadeContent
      blur
      duration={animation_duration * 1000}
      easing="ease-out"
      className='relative z-[3] md:z-[8]'
    >
      <motion.section
        key='Лаврушенский'
        style={{ translateY }}
        className={cn(
          "hover:scale-[1.15] transition-all",
          'absolute',
          'z-[3] w-[187px] h-[158px] top-[124px] left-[23px]',
          'md:z-[8] md:w-[226px] md:h-[191px] md:top-[93px] md:left-[0px]', // md
          'xl:z-[8] xl:w-[420px] xl:h-[355px] xl:top-[216px] xl:-left-[60px]', // xl
          '1_5xl:top-[195px] 1_5xl:left-[115px]',
        )}
      >
        <div
          style={{
            boxShadow: '0px 9px 9px rgba(0, 69, 58, 0.05)',
            transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
          }}
          className={cn(
            'absolute ',
            'mb-20 overflow-hidden',
            'bg-white/40 rounded-[9px] backdrop-blur-[9px]',
            'w-[104px] h-[151px] top-[3px] left-[42px]',
            'md:w-[125px] md:h-[181px] md:top-[5px] md:left-[51px]', // md
            'xl:w-[228px] xl:h-[330px] xl:top-[12px] xl:left-[96px]', // xl
          )}
        >
          <Image
            src={'/images/card_town_1.png'}
            fill
            sizes='full'
            quality={100}
            priority
            alt='card_town_1.png'
          />

          <div
            className='absolute inset-0 z-[1]'
          >
            <div
              className={cn(
                "absolute z-[1] backdrop-blur-[4px]",
                'top-0 left-0 right-0 h-[85px]',
                'xl:h-[140px]', // xl
              )}
            />

            <div
              className='absolute z-[2] inset-0 '
            >
              <p
                className={cn(
                  'font-unbounded font-medium text-white',
                  'pl-1 pt-1.5 text-[9px] leading-[11px]',
                  'md:text-[11px] md:leading-[12px]', // md
                  'xl:pl-3 xl:pt-4 xl:text-[20px] xl:leading-[21px]', // xl
                )}
              >
                Лаврушенский
              </p>

              <div className={cn(
                'px-1 h-[0.3px] my-[2.5px]',
                'xl:px-3 xl:h-[0.3px] xl:my-2.5', // xl
              )}>
                <div className='w-full h-full bg-white' />
              </div>

              <p
                className={cn(
                  'font-geist font-medium text-[#F5F5F5]',
                  'pl-1 text-[5px] leading-[6px]',
                  'xl:pl-3 xl:text-[9px] xl:leading-[10px]', // xl
                )}
              >
                квартиры от
              </p>
              <p
                className={cn(
                  'whitespace-nowrap font-unbounded font-medium text-white',
                  'pl-1 mt-[1px] text-[6px] leading-[8px]',
                  'md:text-[7px] md:leading-[8px]', // md
                  'xl:l-3 xl:mt-1.5 xl:text-[13px] xl:leading-[14px]', // xl
                )}
              >
                <CountUp
                  from={150_000_000}
                  to={162_170_000}
                  separator=" "
                  direction="up"
                  duration={count_duration}
                  delay={animation_duration}
                  className={cn(
                    'whitespace-nowrap inline-block',
                    'w-[46px] min-w-[46px] max-w-[46px]',
                    'md:w-[55px] md:min-w-[55px] md:max-w-[55px]',
                    'xl:w-[100px] xl:min-w-[100px] xl:max-w-[100px]',
                  )}
                />
                &nbsp;₽
              </p>

              <p
                className={cn(
                  'font-geist font-medium text-[#F5F5F5]',
                  'pl-1 mt-[4px] text-[5px] leading-[6px]',
                  'xl:pl-3 xl:mt-2.5 xl:text-[9px] xl:leading-[10px]', // xl
                )}
              >
                площадь от
              </p>
              <p
                className={cn(
                  'font-unbounded whitespace-nowrap font-medium text-white',
                  'pl-1 mt-[1px] text-[6px] leading-[8px]',
                  'md:text-[7px] md:leading-[8px]', // md
                  'xl:pl-3 xl:mt-1 xl:text-[13px] xl:leading-[14px]', // xl
                )}
              >
                <CountUp
                  from={1}
                  to={65}
                  separator=" "
                  direction="up"
                  duration={count_duration}
                  delay={animation_duration}
                  className={cn(
                    'whitespace-nowrap inline-block',
                  )}
                />
                &nbsp;м²
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </FadeContent>
  )
}

function Badge_11_3() {
  return (
    <FadeContent
      blur
      duration={900}
      easing="ease-out"
      className='z-[9] relative'
    >
      <section
        key='+11.3% | md'
        className={cn(
          'hidden md:block', // md
          "hover:scale-[1.15] transition-all",
          'absolute',
          'z-[9] top-[213px] left-[144px] w-[40px] h-[29px]',
          'xl:z-[9] xl:top-[414px] xl:left-[267px] xl:w-[70px] xl:h-[50px]', // xl
          '1_5xl:top-[414px] 1_5xl:left-[390px]',
        )}
      >
        <div
          style={{
            boxShadow: '0px 19px 19px rgba(0, 69, 58, 0.1)',
            transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
          }}
          className={cn(
            'absolute',
            'flex items-center justify-center gap-[2px] bg-white/40 backdrop-blur-[20px]',
            'rounded-[20px]',
            'top-[8px] -left-[1px] w-[42px] h-[13px]',
            'xl:top-[13px] xl:-left-[3px] xl:w-[76px] xl:h-[23px]', // xl
          )}
        >
          <p
            className={cn(
              'font-geist font-medium text-custom-brand-100',
              'text-[5px] leading-[6px]',
              'xl:text-[11px] xl:leading-[12px]', // xl
            )}
          >
            +11.3%
          </p>

          <GrowStatisticIcon
            className={cn(
              '-rotate-[45deg]',
              'w-[7px] h-[4px]',
              'xl:w-[12px] xl:h-[7px]', // xl
            )}
          />
        </div>
      </section>
    </FadeContent>
  )
}

function Badge_13_3() {
  return (
    <FadeContent
      blur
      duration={400}
      easing="ease-out"
      className='relative z-[6]'
    >
      <section
        key='+13.3%'
        className={cn(
          "hover:scale-[1.15] transition-all",
          'absolute z-[6]',
          'top-[141px] right-[23px] w-[71px] h-[50px]',
          'md:top-[27px] md:right-[177px] md:w-[41px] md:h-[30px]', //md
          'xl:top-[75px] xl:right-[270px] xl:w-[74px] xl:h-[52px]', // xl
          '1_5xl:top-[60px] 1_5xl:right-[387px]',
        )}
      >
        <div
          style={{
            boxShadow: '0px 19px 19px rgba(0, 69, 58, 0.1)',
            transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
          }}
          className={cn(
            'absolute',
            'rounded-[20px] flex items-center justify-between bg-white/40 backdrop-blur-[20px]',
            'top-[13px] -left-[3px] gap-[7px] w-[77px] h-[23px] p-3',
            'md:top-[9px] md:-left-[1px] md:gap-[2px] md:w-[44px] md:h-[13px] md:p-0 md:justify-center', // md
            'xl:top-[14px] xl:-left-[3px] xl:gap-[4px] xl:w-[80px] xl:h-[23px] xl:p-0 xl:justify-center', // xl
          )}
        >
          <p
            className={cn(
              'font-geist font-medium text-custom-brand-100',
              'text-[11px] leading-[13px]',
              'md:text-[6px] md:leading-[7px]', // md
              'xl:text-[11px] xl:leading-[12px]', // xl
            )}
          >
            +13.3%
          </p>

          <GrowStatisticIcon
            className={cn(
              '-rotate-[45deg]',
              'w-[12px] h-[8px]',
              'md:w-[7px] md:h-[4px]', // md
              'xl:w-[12px] xl:h-[7px]', // xl
            )}
          />
        </div>
      </section>
    </FadeContent>
  )
}

function Badge_07_1() {
  return (
    <section
      key='+07.1% | md'
      className={cn(
        'hidden md:block',
        "hover:scale-[1.15] transition-all",
        'absolute',
        'z-[8] top-[121px] right-[26px] w-[41px] h-[30px]', //md
        'xl:z-[8] xl:top-[255px] xl:-right-[28px] xl:w-[70px] xl:h-[51px]', // xl
        '1_5xl:top-[235px] 1_5xl:right-[105px]',
      )}
    >
      <div
        style={{
          boxShadow: '0px 19px 19px rgba(0, 69, 58, 0.1)',
          transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
        }}
        className={cn(
          'absolute',
          'rounded-[20px] flex items-center justify-between bg-white/40 backdrop-blur-[20px]',
          'top-[9px] -left-[1px] gap-[2px] w-[44px] h-[13px] p-0 justify-center', // md
          'xl:top-[14px] xl:-left-[3px] xl:gap-[4px] xl:w-[76px] xl:h-[23px] xl:p-0 xl:justify-center', // xl
        )}
      >
        <p
          className={cn(
            'font-geist font-medium text-custom-brand-100',
            'text-[6px] leading-[7px]', // md
            'xl:text-[11px] xl:leading-[12px]', // xl
          )}
        >
          +07.1%
        </p>

        <GrowStatisticIcon
          className={cn(
            '-rotate-[45deg]',
            'w-[12px] h-[8px]',
            'w-[7px] h-[4px]', // md
            'xl:w-[12px] xl:h-[7px]', // xl
          )}
        />
      </div>
    </section>
  )
}

function Badge_31_9() {
  return (
    <section
      key='+31.9%'
      className={cn(
        "hover:scale-[1.15] transition-all",
        'absolute z-[1]',
        'w-[71px] h-[50px] top-[322px] left-[23px]',
        'md:w-[42px] md:h-[29px] md:top-[76px] md:left-[253px]', // md
        'xl:w-[73px] xl:h-[52px] xl:top-[83px] xl:left-[400px]', // xl
        '1_5xl:top-[160px] 1_5xl:left-[590px]',
      )}
    >
      <div
        style={{
          boxShadow: '0px 19px 19px rgba(0, 69, 58, 0.1)',
          transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
        }}
        className={cn(
          'absolute',
          'rounded-[20px] flex items-center  bg-white/40 backdrop-blur-[20px]',
          'top-[13px] -left-[3px] gap-[7px] justify-between w-[77px] h-[23px] p-3',
          'md:top-[8px] md:-left-[1px] md:gap-[2px] md:justify-center md:w-[44px] md:h-[13px] md:p-0', // md
          'xl:top-[14px] xl:-left-[3px] xl:gap-[4px] xl:justify-center xl:w-[79px] xl:h-[23px] xl:p-0' // xl
        )}
      >
        <p
          className={cn(
            'font-geist font-medium text-custom-brand-100',
            'text-[11px] leading-[13px]',
            'md:text-[6px] md:leading-[7px]', // md
            'xl:text-[11px] xl:leading-[12px]', // xl
          )}
        >
          +
          <CountUp
            from={0}
            to={32}
            separator=" "
            direction="up"
            duration={10}
            className={cn(
              'whitespace-nowrap inline-block text-center',
              'w-[15px] min-w-[15px] max-w-[15px]',
              'md:w-[10px] md:min-w-[10px] md:max-w-[10px]',
              'xl:w-[15px] xl:min-w-[15px] xl:max-w-[15px]',
            )}
          />
          %
        </p>

        <GrowStatisticIcon
          className={cn(
            '-rotate-[45deg]',
            'w-[12px] h-[8px]',
            'md:w-[7px] md:h-[4px]', // md
            'xl:w-[12px] xl:h-[7px]', // xl
          )}
        />
      </div>
    </section>
  )
}

function LuzhnikiCollection() {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 100], [0, -40])
  const animation_duration = 0.3;
  const count_duration = 2;

  return (
    <FadeContent
      blur
      duration={animation_duration * 1000}
      easing="ease-out"
      className='relative z-[2] md:z-[7]'
    >
      <motion.section
        key='Luzhniki Collection'
        style={{ translateY }}
        className={cn(
          "hover:scale-[1.15] transition-all",
          'absolute ',
          'z-[2] w-[189px] h-[164px] top-[226px] right-[28px]',
          'md:z-[7] md:w-[226px] md:h-[196px] md:top-[60px] md:right-[218px]', // md
          'xl:z-[7] xl:w-[415px] xl:h-[356px] xl:top-[134px] xl:right-[335px]', // xl
          '1_5xl:top-[134px] 1_5xl:right-[465px]',
        )}
      >
        <div className={cn(
          'absolute',
          'w-[192px] h-[163px] -left-[3px]',
          'md:scale-[1.2] md:top-[16px] md:left-[15px]', // md
          'xl:scale-[1] xl:w-auto xl:h-auto xl:top-[4px] xl:left-[51px]', // xl
        )}>
          <div
            style={{
              boxShadow: `
              0px 9px 9px rgba(40, 108, 97, 0.1),
              inset 2px 0px 8px rgba(255, 255, 255, .6),
              inset 0px 2px 8px rgba(255, 255, 255, .6)
            `,
              transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
            }}
            className={cn(
              'absolute z-[3]',
              'bg-white/10 backdrop-blur-[9px]',
              'w-[104px] h-[152px] top-[3px] left-[46px] rounded-[9px]',
              'xl:w-[228px] xl:h-[330px] xl:top-[3px] xl:left-[46px] xl:rounded-[20px]', // xl
            )}
          >
            <p
              className={cn(
                'font-unbounded font-medium text-custom-brand-200',
                'pl-[5px] pt-2.5 text-[6px] leading-[8px]',
                'xl:pl-3.5 xl:pt-6 xl:text-[13px] xl:leading-[14px]', // xl
              )}
            >
              Luzhniki Collection
            </p>

            <div className={cn(
              'px-[5px] h-[0.4px] mt-[12px]',
              'xl:px-3.5 xl:h-[0.4px] xl:mt-8', // xl
            )}>
              <div className='h-full bg-[#C2C2C2]' />
            </div>

            <div
              className={cn(
                'flex items-center justify-between',
                'font-geist font-medium text-[#707070]',
                'px-[5px] pt-[2px] text-[5px] leading-[6px]',
                'xl:px-3.5 xl:pt-1.5 xl:text-[11px] xl:leading-[12px]', // xl
              )}
            >
              <p>Годовой рост</p>
              <p>2025</p>
            </div>

            <p
              className={cn(
                'font-unbounded font-medium text-custom-brand-200',
                'pl-[5px] pt-[3px] text-[10px]',
                'xl:pl-3.5 xl:pt-2.5 xl:text-[21px]', // xl
              )}
            >
              <CountUp
                from={0}
                to={896_880_000}
                separator=" "
                direction="up"
                duration={count_duration}
                delay={animation_duration}
                className={cn(
                  'inline-block',
                  "w-[85px] min-w-[85px] max-w-[85px]",
                  "md:w-[85px] md:min-w-[85px] md:max-w-[85px]",
                  "xl:w-[179px] xl:min-w-[179px] xl:max-w-[179px]"
                )}
              />
              &nbsp;₽
            </p>

            <div
              className={cn(
                'relative flex items-end',
                '-left-[9px] top-[24px] gap-[10.5px]',
                'md:top-[40px]', // md
                'xl:-left-[20px] xl:top-[55px] xl:gap-[22px]', // xl
              )}
            >
              <div
                className={cn(
                  'flex flex-col',
                  'gap-1.5',
                  'xl:gap-2.5' // xl
                )}
              >
                <div
                  style={{
                    boxShadow: '0px 8.84278px 8.84278px rgba(0, 69, 58, 0.1)',
                  }}
                  className={cn(
                    'bg-white/40 rounded-[9px]',
                    'w-[6px] h-[28px]',
                    'xl:w-[13px] xl:h-[61px]', // xl
                  )}
                />
                <p
                  className={cn(
                    'font-geist font-medium text-[#AFAFAF]',
                    'text-[4px]',
                    'xl:text-[8px]', // xl
                  )}
                >
                  01
                </p>
              </div>
              <div
                className={cn(
                  'flex flex-col',
                  'gap-1.5',
                  'xl:gap-2.5' // xl
                )}
              >
                <div
                  style={{
                    boxShadow: '0px 8.84278px 8.84278px rgba(0, 69, 58, 0.1)',
                  }}
                  className={cn(
                    'bg-white/40 rounded-[9px]',
                    'w-[6px] h-[28px]',
                    'xl:w-[13px] xl:h-[80px]', // xl
                  )}
                />
                <p
                  className={cn(
                    'font-geist font-medium text-[#AFAFAF]',
                    'text-[4px]',
                    'xl:text-[8px]', // xl
                  )}
                >
                  02
                </p>
              </div>
              <div
                className={cn(
                  'flex flex-col',
                  'gap-1.5',
                  'xl:gap-2.5' // xl
                )}
              >
                <div
                  style={{
                    boxShadow: '0px 8.84278px 8.84278px rgba(0, 69, 58, 0.1)',
                  }}
                  className={cn(
                    'bg-white/40 rounded-[9px]',
                    'w-[6px] h-[28px]',
                    'xl:w-[13px] xl:h-[65px]', // xl
                  )}
                />
                <p
                  className={cn(
                    'font-geist font-medium text-[#AFAFAF]',
                    'text-[4px]',
                    'xl:text-[8px]', // xl
                  )}
                >
                  03
                </p>
              </div>
              <div
                className={cn(
                  'flex flex-col',
                  'gap-1.5',
                  'xl:gap-2.5' // xl
                )}
              >
                <div
                  style={{
                    boxShadow: '0px 8.84278px 8.84278px rgba(0, 69, 58, 0.1)',
                  }}
                  className={cn(
                    'bg-white/40 rounded-[9px]',
                    'w-[6px] h-[28px]',
                    'xl:w-[13px] xl:h-[92px]', // xl
                  )}
                />
                <p
                  className={cn(
                    'font-geist font-medium text-[#AFAFAF]',
                    'text-[4px]',
                    'xl:text-[8px]', // xl
                  )}
                >
                  04
                </p>
              </div>
              <div
                className={cn(
                  'flex flex-col',
                  'gap-1.5',
                  'xl:gap-2.5' // xl
                )}
              >
                <div
                  style={{
                    boxShadow: '0px 8.84278px 8.84278px rgba(0, 69, 58, 0.1)',
                  }}
                  className={cn(
                    'bg-white/40 rounded-[9px]',
                    'w-[6px] h-[28px]',
                    'xl:w-[13px] xl:h-[112px]', // xl
                  )}
                />
                <p
                  className={cn(
                    'font-geist font-medium text-[#AFAFAF]',
                    'text-[4px]',
                    'xl:text-[8px]', // xl
                  )}
                >
                  05
                </p>
              </div>
              <div
                className={cn(
                  'flex flex-col',
                  'gap-1.5',
                  'xl:gap-2.5' // xl
                )}
              >
                <div
                  style={{
                    boxShadow: '0px 8.84278px 8.84278px rgba(0, 69, 58, 0.1)',
                  }}
                  className={cn(
                    'bg-white/40 rounded-[9px]',
                    'w-[6px] h-[28px]',
                    'xl:w-[13px] xl:h-[65px]', // xl
                  )}
                />
                <p
                  className={cn(
                    'font-geist font-medium text-[#AFAFAF]',
                    'text-[4px]',
                    'xl:text-[8px]', // xl
                  )}
                >
                  06
                </p>
              </div>
            </div>
          </div>

          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="188"
              height="160"
              fill="none"
              viewBox="0 0 188 160"
              className={cn(
                'xl:hidden',
                'absolute z-[2] left-[3px] top-[3px]',
              )}
            >
              <path
                fill="url(#paint0_linear_429_1016)"
                d="M184.517 48.2 110.313 2.274a8.84 8.84 0 0 0-11.059 1.164L2.623 97.572c-3.99 3.985-.975 10.697 3.765 13.751l72.642 46.803a8.84 8.84 0 0 0 11.021-1.159l94.466-93.817c4.001-3.974 4.732-11.883 0-14.95"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_429_1016"
                  x1="110.658"
                  x2="-2.6"
                  y1="170.99"
                  y2="10.826"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BAE6E9"></stop>
                  <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="408"
              height="346"
              fill="none"
              viewBox="0 0 408 346"
              className={cn(
                'hidden xl:block',
                'absolute -left-[45px] top-[3px]'
              )}
            >
              <path
                fill="url(#paint0_linear_429_843)"
                d="M400.018 103.581 238.557 3.653a19.24 19.24 0 0 0-24.062 2.53L4.235 211.01c-8.683 8.671-2.122 23.276 8.193 29.922L170.489 342.77a19.24 19.24 0 0 0 23.98-2.522l205.549-204.137c8.706-8.646 10.296-25.855 0-32.53"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_429_843"
                  x1="239.308"
                  x2="-7.131"
                  y1="370.76"
                  y2="22.261"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BAE6E9"></stop>
                  <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
              </defs>
            </svg>
          </>
        </div>
      </motion.section>
    </FadeContent>
  )
}

function PhoneBackground() {
  return (
    <section
      className={cn(
        "hover:scale-[1.15] transition-all",
        'hidden 1_5xl:block',
        'absolute left-[510px] top-[70px]'
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="598"
        height="524"
        fill="none"
        viewBox="0 0 598 524"
      >
        <path
          fill="#F7F9FB"
          fillOpacity="0.6"
          fillRule="evenodd"
          d="M443.761 38.652q2.242 1.474-.098 3.94l-.129.134-3.367 3.409c-5.206 5.271-4.482 12.813 1.585 16.943l.187.126 64.132 42.165c5.988 3.937 14.86 3.197 20.234-1.655l.17-.157a85 85 0 0 1 4.801-4.149c1.085-.87 2.112-1.174 3.968-.55l.182.063 30.588 20.111c15.447 10.156 17.412 29.08 4.387 42.266L237.975 497.86c-13.775 13.948-38.188 16.546-54.527 5.803L34.451 405.699c-16.339-10.742-18.417-30.758-4.641-44.705L362.236 24.432c13.024-13.187 36.106-15.643 51.553-5.486z"
          clipRule="evenodd"
        ></path>
      </svg>
    </section>
  )
}

function MyDocuments() {
  return (
    <FadeContent
      blur
      duration={2400}
      easing="ease-out"
      className='relative z-[2] md:z-[8]'
    >
      <section
        key='Мои документы | md'
        className={cn(
          "hover:scale-[1.15] transition-all",
          'hidden md:block',
          'absolute ',
          'z-[8] w-[119px] h-[82px] top-[76px] left-[182px]',
          'xl:z-[8] xl:w-[220px] xl:h-[153px] xl:top-[145px] xl:left-[305px]', // xl
          '1_5xl:top-[170px] 1_5xl:left-[445px]',
        )}
      >
        <div
          style={{
            boxShadow: '0px 19px 19px rgba(0, 69, 58, 0.1)',
            transform: 'matrix(0.84, 0.54, -0.71, 0.71, 0, 0)',
          }}
          className={cn(
            'absolute z-[2]',
            'bg-white/40 backdrop-blur-[11px] rounded-[6px] flex items-center justify-between',
            'w-[127px] h-[24px] top-[29px] -left-[4px]',
            'xl:w-[229px] xl:h-[43px] xl:top-[55px] xl:-left-[4px]', // xl
          )}
        >
          <div className={cn(
            'flex items-center justify-center bg-white rounded-full',
            'w-[15px] h-[15px] ml-1.5',
            'xl:w-[28px] xl:h-[28px] xl:ml-3', // xl
          )}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill='#4B9488'
              viewBox="0 0 50 50"
              className={cn(
                'w-[8px] h-[10px]',
                'xl:w-[11px] xl:h-[15px]', // xl
              )}
            >
              <path d="m41.707 13.793-11.5-11.5A1 1 0 0 0 29.5 2H11.492A3.49 3.49 0 0 0 8 5.48v38.422C8 46.16 9.844 48 12.113 48h25.774C40.157 48 42 46.16 42 43.902V14.5a1 1 0 0 0-.293-.707M26 38h-9v-2h9Zm7-4H17v-2h16Zm0-4H17v-2h16Zm0-4H17v-2h16Zm-1.332-12A1.667 1.667 0 0 1 30 12.332V4.914L39.086 14Z"></path>
            </svg>
          </div>

          <p
            className={cn(
              'font-unbounded font-medium leading-none text-custom-brand-100',
              'mr-3 text-[7px]',
              'xl:mr-4 xl:text-[13px]', // xl
            )}
          >
            Мои документы
          </p>

          <ArrowRightIcon
            className={cn(
              'mr-1.5 w-[5px] scale-x-[2] scale-y-[1.4] h-[5px]',
              'xl:mr-3.5 xl:w-[10px] xl:scale-x-[2] xl:scale-y-[1.4] xl:h-[10px]', // xl
            )}
          />
        </div>

        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="119"
            height="83"
            fill="none"
            viewBox="0 0 119 83"
            className='absolute left-[0px] top-[3px] xl:hidden'
          >
            <path
              fill="#F0F5FA"
              d="M116.656 63.658 18.158 1.585a5.31 5.31 0 0 0-6.622.68l-10.232 8.14c-2.414 2.39-.65 7.052 2.206 8.89l97.006 62.407a5.31 5.31 0 0 0 6.604-.69l8.564-8.47c2.409-2.383 3.815-7.04.972-8.884"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="215"
            height="149"
            fill="none"
            viewBox="0 0 215 149"
            className='absolute left-[2px] top-[9px] hidden xl:block'
          >
            <path
              fill="#F0F5FA"
              d="M211.965 114.759 33.428 2.246a9.62 9.62 0 0 0-12.002 1.232L2.878 18.234c-4.376 4.33-1.18 12.78 3.998 16.112L182.71 147.465a9.62 9.62 0 0 0 11.97-1.251l15.522-15.353c4.367-4.319 6.915-12.759 1.763-16.102"
            ></path>
          </svg>
        </>
      </section>
    </FadeContent>
  )
}