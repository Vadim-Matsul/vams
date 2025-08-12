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
import { useEffect, useRef } from 'react';
import Lenis from "lenis"

type Props = {}


export default function HomePage({ }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // дольше → плавнее
      easing: t => 1 - Math.pow(1 - t, 3), // плавный ease-out
      smoothWheel: true,
    })


    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <IntroBlock />

      <KPIBlock />
      <AdvantagesListBlock />

      <ReviewsBlock />
      <StepperBlock />
      <TeamBlock />

      <div className='flex flex-col xl:flex-col-reverse pb-[60px] overflow-hidden'>
        <ContactForm />
        <ContactBlock />
      </div>

      <Footer />
    </>
  )
}
