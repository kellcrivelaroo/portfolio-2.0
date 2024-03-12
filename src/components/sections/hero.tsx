import { AnimatedTooltip } from '../custom/animated-tooltip'
import MailButton from '../custom/mail-button'
import { Spotlight } from '../custom/spotlight'
import Underline from '../custom/underline'

const heroButton = [
  {
    id: 1,
    title: 'Copiar para a área de transferência',
    link: <MailButton />,
  },
]

const Hero = () => {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-white 
      bg-grid-small-black/[0.25] dark:bg-background dark:bg-grid-small-white/[0.25]"
    >
      <Spotlight className="lg:right-1" />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background 
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      />
      <div className="container relative z-20 flex flex-col items-center justify-center">
        <h1 className="mb-8 w-full select-none pl-0.5 text-center text-4xl font-bold leading-snug text-transparent sm:text-[5.5rem] lg:leading-none">
          <span
            className="relative bg-gradient-to-b from-slate-600 to-foreground bg-clip-text dark:from-foreground
          dark:to-slate-300 lg:-ml-52"
          >
            Desenvolvedor
            <Underline className="-bottom-2 lg:bottom-0" />
          </span>
          <br />
          <span
            className="relative h-full w-fit bg-gradient-to-b from-slate-600 to-foreground bg-clip-text px-10 
            dark:from-foreground dark:to-slate-300 lg:-mr-[22.2rem] lg:w-full"
          >
            Full Stack
            <Underline className="-bottom-2 left-1/2 max-w-[60%] -translate-x-1/2 lg:bottom-0 lg:max-w-full" />
          </span>
        </h1>
        <p className="mb-10 max-w-[90%] text-center text-xl lg:max-w-[60%] lg:text-2xl">
          Desenvolvedor front-end, apaixonado por Pixel Perfect e por criar
          experiências interativas. Sócio diretor da Flame Tecnologia,
          freelancer, e sempre em busca de novos desafios no mundo do
          desenvolvimento web.
        </p>
        <div className="relative flex w-fit flex-row items-center justify-center">
          <AnimatedTooltip items={heroButton} />
        </div>
      </div>
      <div className="z-20 lg:block">
        <Underline className="max-w-[80%] -translate-y-16 opacity-70 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-0.5" />
      </div>
    </div>
  )
}

export default Hero
