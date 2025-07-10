import { cn } from '@/utils/cn'


type Props = {}

export function KPI({ }: Props) {

  return (
    <div
      style={{
        background: 'linear-gradient(158.29deg, #006B5B 5.78%, #02251F 79.69%)',
      }}
    >
      <section
        className={cn(
          'max-w-[var(--breakpoint-1_5xl)] 1_5xl:mx-auto',
          'rounded-[8px]',
          'pt-[80px] pb-[80px] px-[18px]',
          'md:px-[24px]',
          'lg:py-[100px]'
        )}
      >
        <div
          className={cn(
            'flex',
            'flex-col gap-[80px]',
            'sm:flex-row sm:gap-[24px]',
            'md:justify-around',
            'lg:justify-center lg:gap-[60px]',
            'xl:gap-[36px]'
          )}
        >
          <div
            className={cn(
              'flex',
              'flex-col gap-[24px] w-[324px] mx-auto',
              'md:w-[348px] md:mx-0',
              'xl:w-[582px]'
            )}
          >
            <section
              style={{
                boxShadow: '0px 4px 30px rgba(0, 9, 69, 0.05)',
              }}
              className={cn(
                'flex flex-col',
                'backdrop-blur-[30px] bg-red-500/20',
                'h-[342px] rounded-[8px] p-[18px]',
                'md:h-[354px] md:p-[24px]',
                'xl:h-[486px] xl:py-[60px] xl:px-[111px]',
              )}
            >
              <div
                style={{
                  boxShadow: 'inset -1px -3px 3px rgba(255, 255, 255, 0.1)',
                }}
                className={cn(
                  'rounded-full mx-auto bg-white/5 flex items-center justify-center',
                  'w-[66px] min-h-[36px] h-[36px]',
                  'md:w-[68px] md:min-h-[38px] md:h-[38px]',
                )}
              >
                <p
                  className={cn(
                    'text-custom-white-000 font-semibold font-geist leading-none',
                    'text-[16px]',
                    'md:text-[18px]',
                  )}
                >
                  01
                </p>
              </div>

              <div
                className={cn(
                  'grow text-custom-white-100',
                  'py-[68px]',
                  'md:py-[71px]',
                  'xl:pt-[104px]'
                )}
              >
                <p
                  className={cn(
                    'font-medium -tracking-[2px] font-unbounded leading-none text-center',
                    'text-[40px] mb-[24px]',
                    'md:text-[40px] md:mb-[24px]',
                    'xl:text-[80px]',
                  )}
                >
                  25%
                </p>

                <p
                  className={cn(
                    'font-medium font-unbounded leading-[100%] text-center',
                    'text-[24px]',
                    'md:text-[20px]',
                    'xl:text-[24px]',
                  )}
                >
                  Средняя&nbsp;годовая<br />
                  доходность<br />
                  от&nbsp;инвестиций<br />
                </p>
              </div>
            </section>

            <p
              className={cn(
                'text-custom-white-100 font-geist font-semibold',
                'text-[14px] leading-[130%]',
                'xl:text-[20px] xl:w-[520px]'
              )}
            >
              VSR — агентство недвижимости нового поколения. Где каждый объект рассматривается не только как пространство для жизни, но и как инвестиционный актив с потенциалом роста.
            </p>
          </div>

          <div
            className={cn(
              'flex',
              'flex-col gap-[24px] w-[324px] mx-auto',
              'md:w-[348px] md:mx-0',
              'xl:w-[582px]'
            )}
          >
            <section
              style={{
                boxShadow: '0px 4px 30px rgba(0, 9, 69, 0.05)',
              }}
              className={cn(
                'flex flex-col',
                'backdrop-blur-[30px] bg-red-500/20',
                'h-[342px] rounded-[8px] p-[18px]',
                'md:h-[354px] md:p-[24px]',
                'xl:h-[486px] xl:py-[60px] xl:px-[111px]',
              )}
            >
              <div
                style={{
                  boxShadow: 'inset -1px -3px 3px rgba(255, 255, 255, 0.1)',
                }}
                className={cn(
                  'rounded-full mx-auto bg-white/5 flex items-center justify-center',
                  'w-[66px] min-h-[36px] h-[36px]',
                  'md:w-[68px] md:min-h-[38px] md:h-[38px]',
                )}
              >
                <p
                  className={cn(
                    'text-custom-white-000 font-semibold font-geist leading-none',
                    'text-[16px]',
                    'md:text-[18px]',
                  )}
                >
                  02
                </p>
              </div>

              <div
                className={cn(
                  'grow text-custom-white-100',
                  'py-[68px]',
                  'md:py-[71px]',
                  'xl:pt-[104px]'
                )}
              >
                <p
                  className={cn(
                    'font-medium -tracking-[2px] font-unbounded leading-none text-center',
                    'text-[40px] mb-[24px]',
                    'md:text-[40px] md:mb-[24px]',
                    'xl:text-[80px]',
                  )}
                >
                  300+
                </p>

                <p
                  className={cn(
                    'font-medium font-unbounded leading-[100%] text-center',
                    'text-[24px]',
                    'md:text-[20px]',
                    'xl:text-[24px]',
                  )}
                >
                  Проектов,<br />
                  с&nbsp;которыми<br />
                  мы&nbsp;работаем<br />
                </p>
              </div>
            </section>

            <p
              className={cn(
                'text-custom-white-100 font-geist font-semibold',
                'text-[14px] leading-[130%]',
                'xl:text-[20px] xl:w-[520px]'
              )}
            >
              Мы создаём новые стандарты, сочетая глубокую аналитику, экспертные знания рынка и клиентоориентированный сервис. Наши решения для тех, кто ценит стратегический подход.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
