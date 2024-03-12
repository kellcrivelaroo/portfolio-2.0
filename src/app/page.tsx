import { TracingBeam } from '@/components/custom/tracing-beam'
import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import Hero from '@/components/sections/hero'
import PersonalProjects from '@/components/sections/personal-projects'
import Portfolio from '@/components/sections/portfolio'

export default function Home() {
  return (
    <>
      <TracingBeam>
        <Hero />
        <About />
        <PersonalProjects />
        <Portfolio />
        <Contact />
        <Footer />
      </TracingBeam>
    </>
  )
}
