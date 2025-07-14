import PixelTrail, { Header } from '@/components/header/Header'
import { IntroBlock } from './IntroBlock'
import { KPIBlock } from './KPIBlock'
import { AdvantagesListBlock } from './AdvantagesListBlock'
import { ReviewsBlock } from './ReviewsBlock'
import { TeamBlock } from './TeamBlock'
import { ContactBlock } from './ContactBlock'
import { ContactForm } from './ContactForm'
import { Footer } from '@/components/footer/Footer'
import { StepperBlock } from './StepperBlock'


type Props = {}

export default function HomePage({ }: Props) {

  return (
    <>
      <Header />
      <IntroBlock />
      {/* <KPIBlock />
      <AdvantagesListBlock />
      <ReviewsBlock />
      <StepperBlock />
      <TeamBlock />

      <div className='flex flex-col xl:flex-col-reverse'>
        <ContactForm />
        <ContactBlock />
      </div>
      <Footer /> */}
    </>
  )
}
