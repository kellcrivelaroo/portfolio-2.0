import { TracingBeam } from '@/components/custom/tracing-beam'
import About from '@/components/sections/about'
import Hero from '@/components/sections/hero'
import Portfolio from '@/components/sections/portfolio'

export default function Home() {
  return (
    // <TracingBeam>
    <div className="w-screen">
      <Hero />
      <About />
      <Portfolio />
      <div className="to-slate-background min-h-[600px] bg-gradient-to-b from-slate-300 dark:from-slate-800 dark:to-slate-900" />
    </div>
    // </TracingBeam>
  )
}
