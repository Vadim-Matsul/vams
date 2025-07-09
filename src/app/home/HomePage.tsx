import { Header } from '@/components/header/Header'
import IntroBlock from './intro/IntroBlock'

type Props = {}

export function HomePage({ }: Props) {

  return (
    <>
      <Header />

      <IntroBlock />
    </>
  )
}
