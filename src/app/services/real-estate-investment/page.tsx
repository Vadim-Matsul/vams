import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { cn } from '@/utils/cn';
import { HeroBlock } from './HeroBlock';
import { Breadcrumbs } from './Breadcrumbs';
import { LiquidGlass } from '@/ui/LiquidGlass';
import { KPIBlock } from './KPIBlock';
import { ReviewsBlock } from '@/app/home/ReviewsBlock';
import { StepperBlock } from './StepperBlock';
import { TeamBlock } from '@/app/home/TeamBlock';
import { ContactForm } from '@/app/home/ContactForm';
import { ContactBlock } from '@/app/home/ContactBlock';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Инвестиции в недвижимость в Москве — персональная стратегия и аналитика | VAMS SMART REALTY',
  description: 'Инвестиции в премиальную недвижимость Москвы с просчётом и аналитикой: персональная стратегия под ваши цели, глубокий анализ рынка и рисков, сопровождение сделки от выбора объекта до получения прибыли.',
  alternates: { canonical: '/services/real-estate-investment' },
  openGraph: {
    url: '/services/real-estate-investment',
    images: [{ url: '/images/services_investment.jpg', width: 1200, height: 630, alt: 'Инвестиции в недвижимость — VAMS SMART REALTY' }],
  },
};

export default function RealEstateInvestment() {

  return (
    <div className='font-unbounded'>
      <Header />
      <div className='relative z-[2]'>
        <Breadcrumbs />
        <HeroBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] py-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:py-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <h2
                className={cn(
                  'text-[20px] text-center font-semibold',
                  'sm:text-[22px]',
                  'xl:text-[26px]'
                )}
              >
                Для кого предназначена услуга и какие задачи решает
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Агентство VAMS работает с частными клиентами, инвесторами и предпринимателями, которые рассматривают рынок недвижимости как способ сохранить капитал и увеличить его стоимость. Вложения в жилые и коммерческие объекты требуют не только эмоционального выбора, но и точного расчёта. Мы соединяем эмоциональное восприятие недвижимости с анализом её будущей ликвидности, чтобы каждая сделка приносила и комфорт, и финансовую выгоду.
              </p>
            </div>
          </LiquidGlass>
        </div>

        <KPIBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] py-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:py-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <h2
                className={cn(
                  'text-[20px] text-center font-semibold',
                  'sm:text-[22px]',
                  'xl:text-[26px]'
                )}
              >
                Инвестиции в жилую и коммерческую недвижимость: стратегии
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Жилой и коммерческий сегменты имеют разные правила игры. Инвестиции в жилую недвижимость во многом зависят от факторов, влияющих на спрос: транспортная доступность. Качество строительства. Удобство эксплуатации. Всё это напрямую отражается на ликвидности и окупаемости. Инвестиции в коммерческую недвижимость требуют анализа арендного потока, стабильности арендаторов и особенностей локации. VAMS готовит для клиентов сценарии, показывающие, какие объекты подойдут для долгосрочного удержания, а какие будут выгодны при краткосрочной стратегии. Это помогает выстраивать сбалансированный инвестиционный портфель, в котором сочетаются премиум-квартиры, офисные и торговые площади.
              </p>
            </div>
          </LiquidGlass>
        </div>

        <ReviewsBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] py-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:py-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <h2
                className={cn(
                  'text-[20px] text-center font-semibold',
                  'sm:text-[22px]',
                  'xl:text-[26px]'
                )}
              >
                Результаты и преимущества работы с VAMS для инвесторов
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Мы сопровождаем клиента на каждом этапе сделки. Работа начинается с подбора объектов и заканчивается согласованием условий с девелопером. Агентства недвижимости часто обещают доходность, не раскрывая деталей. VAMS показывает, какие факторы формируют прибыль и что влияет на её сохранение. Мы объясняем, как соотносятся стоимость входа, уровень арендной доходности и перспективы роста цены. Такой подход снимает неопределённость и превращает процесс покупки в управляемую стратегию инвестирования.
              </p>
            </div>
          </LiquidGlass>
        </div>

        <StepperBlock />
        <TeamBlock />

        <div
          className={cn(
            'px-[18px] md:px-[32px] pb-[60px]',
            '1_5xl:max-w-[1440px] 1_5xl:mx-auto xl:pb-[80px]'
          )}
        >
          <LiquidGlass
            displacementScale={1200}
            blur={10}
            className={cn(
              'rounded-[20px] p-4',
              'max-w-[420px] w-full mx-auto',
              'sm:max-w-[500px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <h3
                className={cn(
                  'text-[20px] text-center font-semibold',
                  'sm:text-[22px]',
                  'xl:text-[26px]'
                )}
              >
                Хотите надёжно инвестировать в недвижимость? Обратитесь в VAMS - мы подготовим персональный план вложений, учитывающий рынок новостроек, премиальные квартиры и объекты с высоким потенциалом роста.
              </h3>
            </div>
          </LiquidGlass>
        </div>

        <div className='flex flex-col xl:flex-col-reverse pb-[60px] overflow-hidden'>
          <ContactBlock />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

