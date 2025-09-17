'use client';
import dynamic from 'next/dynamic';
import { Header } from '@/components/header/Header'
import { ContactForm } from './ContactForm'
import { Footer } from '@/components/footer/Footer'

const IntroBlock = dynamic(() => import('./IntroBlock').then(mod => mod.IntroBlock));
const KPIBlock = dynamic(() => import('./KPIBlock').then(mod => mod.KPIBlock));
const AdvantagesListBlock = dynamic(() => import('./AdvantagesListBlock').then(mod => mod.AdvantagesListBlock));
const ReviewsBlock = dynamic(() => import('./ReviewsBlock').then(mod => mod.ReviewsBlock));
const TeamBlock = dynamic(() => import('./TeamBlock').then(mod => mod.TeamBlock));
const ContactBlock = dynamic(() => import('./ContactBlock').then(mod => mod.ContactBlock));
const StepperBlock = dynamic(() => import('./StepperBlock').then(mod => mod.StepperBlock));

type Props = {}


export default function HomePage({ }: Props) {

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.3,
  //     easing: t => 1 - Math.pow(1 - t, 3),
  //     smoothWheel: true,
  //   })

  //   let currentDir: 1 | -1 | 0 = 0
  //   let animating = false

  //   const offScroll = lenis.on('scroll', (e: any) => {
  //     currentDir = e.direction ?? 0
  //     animating = Math.abs(e.velocity ?? 0) > 0.01
  //   })

  //   const onWheel = (ev: WheelEvent) => {
  //     const dy = ev.deltaY
  //     if (!dy) return
  //     const inputDir: 1 | -1 = dy > 0 ? 1 : -1

  //     if (animating && currentDir !== 0 && inputDir === -currentDir) {
  //       lenis.stop()

  //       try {
  //         lenis.scrollTo(window.scrollY, { immediate: true })
  //       } catch {
  //       }

  //       requestAnimationFrame(() => {
  //         lenis.start()
  //       })
  //     }
  //   }

  //   window.addEventListener('wheel', onWheel, { passive: true })

  //   function raf(time: number) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)

  //   return () => {
  //     window.removeEventListener('wheel', onWheel)
  //     offScroll?.()
  //     lenis.destroy()
  //   }
  // }, [])

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
