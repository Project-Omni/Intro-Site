import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'

export default function Home() {
  return (
    <>
      <main>
        <Hero showBetaReq={true}/>
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
