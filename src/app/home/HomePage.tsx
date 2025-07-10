import { Header } from '@/components/header/Header'
import IntroBlock from './intro/IntroBlock'
import { KPI } from './intro/KPI'
import { AdvantagesList } from './intro/AdvantagesList'
import { Reviews } from './intro/Reviews'

type Props = {}

export function HomePage({ }: Props) {

  return (
    <>
      <Header />

      <IntroBlock />
      <KPI />
      <AdvantagesList />
      <Reviews />
    </>
  )
}
