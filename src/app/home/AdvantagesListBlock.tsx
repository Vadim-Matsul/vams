import { FadeContent } from '@/bits/FadeContent'
import { GlareHover } from '@/bits/GlareHover'
import { SplitText } from '@/bits/SplitText'
import { ParallaxCard } from '@/ui/ParallaxCard'
import { cn } from '@/utils/cn'
import Image from 'next/image'

type Props = {}

export function AdvantagesListBlock({ }: Props) {

  return (
    <section
      className={cn(
        'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto overflow-hidden',
        'py-[80px] px-[18px]',
        'md:px-[24px]',
        'xl:px-[0px] xl:py-[120px]',
      )}
    >
      <ul
        className={cn(
          'flex flex-col',
          'gap-9 md:gap-[18px] xl:gap-[16px]'
        )}
      >
        <FadeContent
          blur
          duration={1000}
          threshold={0.7}
          easing="ease-out"
          className='relative w-fit h-fit mx-auto'
        >
          <li
            className={cn(
              'w-[324px]',
              'md:w-auto',
              'xl:w-[1200px] mx-auto'
            )}
          >
            <ParallaxCard>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={1}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={true}
              >
                <div
                  className={cn(
                    'flex w-full',
                    'border-t-[1px] border-l-[1px] border-white',
                    'bg-white/30 backdrop-blur-[30px] shadow-[0_4px_30px_rgba(0,9,69,0.05)] rounded-[8px] overflow-hidden',
                    'flex-col gap-[30px] pt-[24px] mx-auto',
                    'md:flex-row md:pt-0 md:justify-between md:gap-0',
                  )}
                >
                  <div
                    className={cn(
                      'p-[24px] flex flex-col gap-[36px]',
                      'md:h-[282px] md:w-[385px] md:gap-[24px]',
                      'xl:p-9 xl:gap-12 xl:h-[420px] xl:w-[550px]'
                    )}
                  >
                    <h3
                      className={cn(
                        'font-unbounded font-medium text-custom-brand-200',
                        'text-[24px] leading-[100%] text-center',
                        'md:text-left',
                        'xl:text-[36px]'
                      )}
                    >
                      Smart-аналитика
                    </h3>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-brand-000',
                        'text-[14px] leading-[130%]',
                        'md:w-[325px]',
                        'xl:text-[20px] xl:w-[514px]'
                      )}
                    >
                      Используем глубокую аналитику для оценки объектов, учитывая реальную конъюнктуру рынка
                    </p>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-grey-200',
                        'text-[14px] leading-[130%] mx-auto',
                        'md:mt-auto md:ml-0 md:mr-auto',
                        'xl:text-[19px]',
                      )}
                    >
                      1/4
                    </p>
                  </div>

                  <div
                    className={cn(
                      'relative w-full',
                      'h-[262px]',
                      'md:h-[282px] md:w-[335px]',
                      'xl:h-[420px] xl:w-[500px]',
                    )}
                  >
                    <Image
                      src='/images/advantage_smart.png'
                      alt={'Smart-аналитика'} sizes='full'
                      fill quality={100}
                      draggable={false}
                      className='select-none'
                    />
                  </div>
                </div>
              </GlareHover>
            </ParallaxCard>
          </li>
        </FadeContent>

        <FadeContent
          blur
          duration={1000}
          threshold={0.7}
          easing="ease-out"
          className='relative w-fit h-fit mx-auto'
        >
          <li
            className={cn(
              'w-[324px]',
              'md:w-auto',
              'xl:w-[1200px] mx-auto'
            )}
          >
            <ParallaxCard>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={1}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={true}
              >
                <div
                  className={cn(
                    'flex w-full',
                    'border-t-[1px] border-l-[1px] border-white',
                    'bg-white/30 backdrop-blur-[30px] shadow-[0_4px_30px_rgba(0,9,69,0.05)] rounded-[8px] overflow-hidden',
                    'flex-col gap-[30px] pt-[24px] mx-auto',
                    'md:flex-row md:pt-0 md:justify-between md:gap-0',
                  )}
                >
                  <div
                    className={cn(
                      'p-[24px] flex flex-col gap-[36px]',
                      'md:h-[282px] md:w-[385px] md:gap-[24px]',
                      'xl:p-9 xl:gap-12 xl:h-[420px] xl:w-[550px]'
                    )}
                  >
                    <h3
                      className={cn(
                        'font-unbounded font-medium text-custom-brand-200',
                        'text-[24px] leading-[100%] text-center',
                        'md:text-left',
                        'xl:text-[36px]'
                      )}
                    >
                      Доступ к закрытым предложениям
                    </h3>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-brand-000',
                        'text-[14px] leading-[130%]',
                        'md:w-[325px]',
                        'xl:text-[20px] xl:w-[514px]'
                      )}
                    >
                      Эксклюзивные объекты, о которых не узнает обычный покупатель — ваш ключ к самым выгодным и статусным сделкам
                    </p>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-grey-200',
                        'text-[14px] leading-[130%] mx-auto',
                        'md:mt-auto md:ml-0 md:mr-auto',
                        'xl:text-[19px]',
                      )}
                    >
                      2/4
                    </p>
                  </div>

                  <div
                    className={cn(
                      'relative w-full',
                      'h-[262px]',
                      'md:h-[282px] md:w-[335px]',
                      'xl:h-[420px] xl:w-[500px]',
                    )}
                  >
                    <Image
                      src='/images/advantage_access.png'
                      alt={'Доступ к закрытым предложениям'} sizes='full'
                      fill quality={100}
                      draggable={false}
                      className='select-none'
                    />
                  </div>
                </div>
              </GlareHover>
            </ParallaxCard>
          </li>
        </FadeContent>

        <FadeContent
          blur
          duration={1000}
          threshold={0.7}
          easing="ease-out"
          className='relative w-fit h-fit mx-auto'
        >
          <li
            className={cn(
              'w-[324px]',
              'md:w-auto',
              'xl:w-[1200px] mx-auto'
            )}
          >
            <ParallaxCard>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={1}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={true}
              >
                <div
                  className={cn(
                    'flex w-full',
                    'border-t-[1px] border-l-[1px] border-white',
                    'bg-white/30 backdrop-blur-[30px] shadow-[0_4px_30px_rgba(0,9,69,0.05)] rounded-[8px] overflow-hidden',
                    'flex-col gap-[30px] pt-[24px] mx-auto',
                    'md:flex-row md:pt-0 md:justify-between md:gap-0',
                  )}
                >
                  <div
                    className={cn(
                      'p-[24px] flex flex-col gap-[36px]',
                      'md:h-[282px] md:w-[385px] md:gap-[24px]',
                      'xl:p-9 xl:gap-12 xl:h-[420px] xl:w-[550px]'
                    )}
                  >
                    <h3
                      className={cn(
                        'font-unbounded font-medium text-custom-brand-200',
                        'text-[24px] leading-[100%] text-center',
                        'md:text-left',
                        'xl:text-[36px]'
                      )}
                    >
                      Персональный подбор
                    </h3>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-brand-000',
                        'text-[14px] leading-[130%]',
                        'md:w-[325px]',
                        'xl:text-[20px] xl:w-[514px]'
                      )}
                    >
                      Ваши цели — наш ориентир: подбираем недвижимость, которая помогает быстро достигать желаемого
                    </p>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-grey-200',
                        'text-[14px] leading-[130%] mx-auto',
                        'md:mt-auto md:ml-0 md:mr-auto',
                        'xl:text-[19px]',
                      )}
                    >
                      3/4
                    </p>
                  </div>

                  <div
                    className={cn(
                      'relative w-full',
                      'h-[262px]',
                      'md:h-[282px] md:w-[335px]',
                      'xl:h-[420px] xl:w-[500px]',
                    )}
                  >
                    <Image
                      src='/images/advantage_personal.png'
                      alt={'Персональный подбор'} sizes='full'
                      fill quality={100}
                      draggable={false}
                      className='select-none'
                    />
                  </div>

                </div>
              </GlareHover>
            </ParallaxCard>
          </li>
        </FadeContent>

        <FadeContent
          blur
          duration={1000}
          threshold={0.7}
          easing="ease-out"
          className='relative w-fit h-fit mx-auto'
        >
          <li
            className={cn(
              'w-[324px]',
              'md:w-auto',
              'xl:w-[1200px] mx-auto'
            )}
          >
            <ParallaxCard>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={1}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={true}
              >
                <div
                  className={cn(
                    'flex w-full',
                    'border-t-[1px] border-l-[1px] border-white',
                    'bg-white/30 backdrop-blur-[30px] shadow-[0_4px_30px_rgba(0,9,69,0.05)] rounded-[8px] overflow-hidden',
                    'flex-col gap-[30px] pt-[24px] mx-auto',
                    'md:flex-row md:pt-0 md:justify-between md:gap-0',
                  )}
                >
                  <div
                    className={cn(
                      'p-[24px] flex flex-col gap-[36px]',
                      'md:h-[282px] md:w-[385px] md:gap-[24px]',
                      'xl:p-9 xl:gap-12 xl:h-[420px] xl:w-[550px]'
                    )}
                  >
                    <h3
                      className={cn(
                        'font-unbounded font-medium text-custom-brand-200',
                        'text-[24px] leading-[100%] text-center',
                        'md:text-left md:w-[325px]',
                        'xl:text-[36px] xl:w-[514px]'
                      )}
                    >
                      Полное юридическое сопровождение
                    </h3>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-brand-000',
                        'text-[14px] leading-[130%]',
                        'md:w-[325px]',
                        'xl:text-[20px] xl:w-[520px]'
                      )}
                    >
                      Спите спокойно — каждая сделка защищена безупречной юридической поддержкой. Никаких скрытых рисков, только чистое право собственности
                    </p>

                    <p
                      className={cn(
                        'font-geist font-semibold text-custom-grey-200',
                        'text-[14px] leading-[130%] mx-auto',
                        'md:mt-auto md:ml-0 md:mr-auto',
                        'xl:text-[19px]',
                      )}
                    >
                      4/4
                    </p>
                  </div>

                  <div
                    className={cn(
                      'relative w-full',
                      'h-[262px]',
                      'md:h-[282px] md:w-[335px]',
                      'xl:h-[420px] xl:w-[500px]',
                    )}
                  >
                    <Image
                      src='/images/advantage_support.png'
                      alt={'Полное юридическое сопровождение'} sizes='full'
                      fill quality={100}
                      draggable={false}
                      className='select-none'
                    />
                  </div>
                </div>
              </GlareHover>
            </ParallaxCard>
          </li>
        </FadeContent>
      </ul>
    </section>
  )
}
