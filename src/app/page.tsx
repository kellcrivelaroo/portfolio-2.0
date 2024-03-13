import { TracingBeam } from '@/components/custom/tracing-beam'
import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import Hero from '@/components/sections/hero'
import Portfolio from '@/components/sections/portfolio'
import Projects from '@/components/sections/projects'

export default function Home() {
  return (
    <>
      <TracingBeam>
        <Hero />
        <About />
        <Projects />
        <Portfolio />
        <Contact />
        <Footer />
      </TracingBeam>
    </>
  )
}
