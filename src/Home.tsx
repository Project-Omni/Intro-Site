import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'

export default function Home() {
  return (
    <>
      <head>
        <title>Project Omni - A Better Search Engine.</title>
        <meta
          name="description"
          content="Organize the worlds information while guiding user's to signal and away from noise in a very loud world."
        />
      </head>
      <main>
        <Hero showBetaReq={true}/>
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
