import { Copy } from 'lucide-react'

import { Spotlight } from '../custom/spotlight'
import Underline from '../custom/underline'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const Hero = () => {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-white 
      bg-grid-small-black/[0.25] dark:bg-background dark:bg-grid-small-white/[0.25]"
    >
      <Spotlight className="right-1" />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background 
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      />
      <div className="container relative z-20 flex flex-col items-center justify-center">
        <h1 className="mb-5 select-none px-40 text-end text-4xl font-bold text-transparent sm:text-7xl">
          <span
            className="relative -ml-32 bg-gradient-to-b from-slate-600 to-foreground bg-clip-text
          dark:from-foreground dark:to-slate-300"
          >
            Desenvolvedor
            <Underline />
          </span>
          <br />
          <span
            className="relative -mr-[8.3rem] h-full w-full bg-gradient-to-b from-slate-600 to-foreground 
            bg-clip-text px-10 dark:from-foreground dark:to-slate-300"
          >
            Full Stack
            <Underline />
          </span>
        </h1>
        <p className="mb-10 max-w-[60%] text-center text-xl">
          Desenvolvedor front-end, apaixonado por Pixel Perfect e por criar
          experiências interativas. Sócio diretor da Flame Tecnologia,
          freelancer, e sempre em busca de novos desafios no mundo do
          desenvolvimento web.
        </p>
        <Button className="gap-1 px-4 py-1.5 text-xl">
          <span className="pl-2">kellcrivelaro92@gmail.com</span>
          <Separator orientation="vertical" className="h-6" />
          <Copy className="size-5" />
        </Button>
      </div>
      <Underline className="max-w-[80%] translate-x-[13%] translate-y-0" />
    </div>
  )
}

export default Hero
