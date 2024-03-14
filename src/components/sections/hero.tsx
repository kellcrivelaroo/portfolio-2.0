import Image from 'next/image'
import astro from 'public/stack/astro.svg'
import javascript from 'public/stack/javascript.svg'
import next from 'public/stack/next-js.svg'
import node from 'public/stack/node-js.svg'
import react from 'public/stack/react.svg'
import typescript from 'public/stack/typescript.svg'

import { AnimatedTooltip } from '../custom/animated-tooltip'
import MailButton from '../custom/mail-button'
import { Spotlight } from '../custom/spotlight'
import Underline from '../custom/underline'

const heroButton = [
  {
    id: 1,
    title: (
      <div>
        <span className="hidden lg:block">
          Copiar para a área de transferência
        </span>
        <span className="lg:hidden">E-mail copiado!</span>
      </div>
    ),
    element: <MailButton />,
  },
]

const stack = [
  {
    id: 1,
    title: 'JavaScript',
    element: (
      <Image
        src={javascript}
        alt="JavaScript logo"
        width={32}
        height={32}
        className="size-7 rounded-md lg:size-8"
      />
    ),
  },
  {
    id: 2,
    title: 'TypeScript',
    element: (
      <Image
        src={typescript}
        alt="TypeScript logo"
        width={34}
        height={34}
        className="size-7 rounded-md lg:size-[34px]"
      />
    ),
  },
  {
    id: 3,
    title: 'React.js',
    element: (
      <Image
        src={react}
        alt="React.js logo"
        width={32}
        height={32}
        className="size-7 lg:size-8"
      />
    ),
  },
  {
    id: 4,
    title: 'Next.js',
    element: (
      <div className="rounded-md dark:bg-slate-200 dark:p-px">
        <Image
          src={next}
          alt="Next.js logo"
          width={32}
          height={32}
          className="size-7 lg:size-8"
        />
      </div>
    ),
  },
  {
    id: 5,
    title: 'Node.js',
    element: (
      <Image
        src={node}
        alt="Node.js logo"
        width={32}
        height={32}
        className="size-7 lg:size-8"
      />
    ),
  },
  {
    id: 6,
    title: 'Astro',
    element: (
      <div className="rounded-md dark:bg-slate-200 dark:p-px">
        <Image
          src={astro}
          alt="Astro logo"
          width={32}
          height={32}
          className="size-7 lg:size-8"
        />
      </div>
    ),
  },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center bg-white 
      bg-grid-small-black/[0.25] dark:bg-background dark:bg-grid-small-white/[0.25]"
    >
      <Spotlight className="lg:right-1" />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background 
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      />
      <div className="container relative z-20 flex flex-col items-center justify-center">
        <h1 className="mb-6 w-full select-none pl-0.5 text-center text-4xl font-bold leading-snug text-transparent sm:text-[5.5rem] lg:mb-8 lg:leading-none">
          <span
            className="relative bg-gradient-to-b from-slate-600 to-foreground bg-clip-text dark:from-foreground
          dark:to-slate-300 lg:-ml-40"
          >
            Desenvolvedor
            <Underline className="-bottom-2 lg:bottom-0" />
          </span>
          <br />
          <span
            className="relative h-full w-fit bg-gradient-to-b from-slate-600 to-foreground bg-clip-text px-10 
            dark:from-foreground dark:to-slate-300 lg:-mr-[25rem] lg:w-full"
          >
            Full Stack
            <Underline className="-bottom-2 left-1/2 max-w-[60%] -translate-x-1/2 lg:bottom-0 lg:max-w-full" />
          </span>
        </h1>

        <p className="mb-6 max-w-[90%] text-center text-xl lg:mb-10 lg:max-w-[62%] lg:text-2xl ">
          Apaixonado por Pixel Perfect, soluções modernas e por criar
          experiências interativas.
          <br />
          Sócio diretor da{' '}
          <a
            href="https://flametecnologia.com.br"
            target="_blank"
            className="underline underline-offset-4 transition-colors duration-500 hover:text-sky-500"
          >
            Flame Tecnologia
          </a>
          , FreeLancer, e sempre em busca de novos desafios no mundo do
          desenvolvimento web.
        </p>

        <div className="mb-8 flex items-end gap-6 lg:mb-14">
          <span className="leading-none underline underline-offset-4 lg:text-lg">
            Stack:
          </span>
          <AnimatedTooltip items={stack} />
        </div>

        <div className="relative flex w-fit flex-col items-center justify-center">
          <span className="mb-1 text-sm text-muted-foreground lg:hidden">
            Clique para copiar:
          </span>
          <AnimatedTooltip items={heroButton} />
        </div>
      </div>
      <div className="z-20 lg:block">
        <Underline className="max-w-[80%] -translate-y-0.5 opacity-70 lg:left-1/2 lg:-translate-x-1/2" />
      </div>
    </section>
  )
}

export default Hero
