'use client';

import { Header } from '@/components/header/Header'
import { IntroBlock } from './IntroBlock'
import { KPIBlock } from './KPIBlock'
import { AdvantagesListBlock } from './AdvantagesListBlock'
import { ReviewsBlock } from './ReviewsBlock'
import { TeamBlock } from './TeamBlock'
import { ContactBlock } from './ContactBlock'
import { ContactForm } from './ContactForm'
import { Footer } from '@/components/footer/Footer'
import { StepperBlock } from './StepperBlock'
import { ScrollUpMarginWrapper } from '@/ui/ScrollUpTranslateWrapper';
import { cn } from '@/utils/cn';


type Props = {}

export default function HomePage({ }: Props) {

  return (
    <>
      <Header />
      <IntroBlock />
      <ScrollUpMarginWrapper
        options={{
          distanse: 'base:60vh',
          scroll_gap: 'base:30vh'
        }}
        inView={{
          margin: 100
        }}
        className={cn(
          'z-[3] relative',
        )}
      >
        <KPIBlock />
        <AdvantagesListBlock />

        <ScrollUpMarginWrapper
          options={{
            distanse: 'base:40vh',
            scroll_gap: 'base:50vh'
          }}
          inView={{
            margin: 100
          }}
          className={cn(
            'z-[4] relative',
          )}
        >
          <ReviewsBlock />
          <StepperBlock />
          <TeamBlock />

          <div className='flex flex-col xl:flex-col-reverse pb-[60px] overflow-hidden'>
            <ContactForm />
            <ContactBlock />
          </div>

          <ScrollUpMarginWrapper
            options={{
              distanse: 'base:50vh',
              scroll_gap: 'base:25vh'
            }}
            inView={{
              margin: 100
            }}
            className={cn(
              'z-[5] relative',
            )}
          >
            <Footer />
          </ScrollUpMarginWrapper>
        </ScrollUpMarginWrapper>
      </ScrollUpMarginWrapper>
    </>
  )
}
