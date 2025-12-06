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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Подбор премиальных новостроек в Москве — экспертный доступ и сопровождение сделки | VAMS SMART REALTY',
  description: 'Экспертный доступ к премиальным новостройкам Москвы: глубокая оценка девелоперов, анализ проектов, переговоры на выгодных условиях и расчёт потенциала роста стоимости. Помогаем выбрать элитную недвижимость с учётом ваших целей и получить лучшие предложения от застройщиков.'
};

export default function LuxuryRealEstateDevelopers() {

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
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
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
                Экспертный доступ к премиальным новостройкам Москвы
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                VAMS SMART REALTY объединяет опыт агентства и глубокое знание столичного рынка, чтобы клиент получал не просто квартиру, а полноценное решение для жизни и инвестиций. Мы понимаем, как работают девелоперы премиального жилья в Москве, знаем их стратегию выхода новых комплексов и особенности реализации редких лотов. Это позволяет нашим клиентам первыми получать доступ к премиальным новостройкам и трезво оценивать их перспективы. Элитное жильё в центре Москвы от надёжных застройщиков ценится не только за престиж, но и за устойчивость в долгосрочной перспективе. Наша цель - соединить эмоциональное восприятие будущего дома с прогнозом его капитализации, чтобы покупка стала не только комфортной, но и рациональной.
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
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
              'lg:px-8 lg:py-6'
            )}
          >
            <div
              className='flex flex-col gap-6'
            >
              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px] font-bold text-center',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Почему клиенты выбирают VAMS ны рынке элитной недвижимости Москвы
              </p>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                VAMS SMART REALTY ценят за прозрачность и внимание к деталям. Мы объективно сравниваем проекты внутри одного сегмента, показывая, где цена соответствует качеству, а где переплата не оправдана. Наши партнёрские отношения со строительными компаниями премиум-сегмента дают доступ к закрытым условиям и особым предложениям.
              </p>
              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Мы понимаем, что для клиента важна не только престижная локация, но и удобство будущей жизни, а также сохранение и приумножение капитала. Поэтому каждую московскую новостройку мы рассматриваем одновременно как жильё и как инвестицию.
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
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
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
                Что получает клиент от сотрудничества с VAMS SMART REALTY и застройщиками
              </h2>

              <p
                className={cn(
                  'text-[16px] leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Сотрудничая с VAMS SMART REALTY, клиент получает комплексную поддержку при выборе и покупке элитной недвижимости: мы ведём переговоры с девелоперами, контролируем ключевые условия сделки и предоставляем аналитику, которая помогает принимать решения на основе фактов.
              </p>

              <p
                className={cn(
                  'text-[16px] mt-5 leading-[18px] font-medium tracking-[0.5px] opacity-80',
                  'sm:text-[18px]',
                  'xl:text-[20px] xl:leading-[22px]'
                )}
              >
                Клиент получает:
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
              'md:max-w-[700px]',
              'lg:max-w-[1000px]',
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
                Если вы хотите понять, какие проекты элитного строительства в Москве действительно заслуживают внимания, обратитесь в VAMS SMART REALTY - мы подготовим подробный обзор премиальных новостроек и подскажем, как правильно вести переговоры с застройщиком.
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

