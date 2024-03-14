import { Github, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import flame from 'public/assets/flame-logo.svg'
import { PropsWithChildren, ReactNode } from 'react'

import { AnimatedTooltip } from './animated-tooltip'

interface LinkProps {
  href: string
  children: ReactNode
}

const Link = ({ href, children }: LinkProps) => (
  <a
    href={href}
    target="_blank"
    className="group relative flex size-14 cursor-pointer items-center justify-center transition duration-500 
            group-hover:z-30 group-hover:scale-105"
  >
    {children}
  </a>
)

export const social = [
  {
    id: 1,
    title: 'Github',
    subtitle: '/kellcrivelaroo',
    element: (
      <Link href="https://github.com/kellcrivelaroo">
        <Github className="size-7 transition-colors duration-300 group-hover:text-sky-500" />
      </Link>
    ),
  },
  {
    id: 2,
    title: 'LinkedIn',
    subtitle: '/in/kellcrivelaro',
    element: (
      <Link href="https://www.linkedin.com/in/kellcrivelaro">
        <Linkedin className="size-7 transition-colors duration-300 group-hover:text-sky-500" />
      </Link>
    ),
  },
  {
    id: 3,
    title: 'Instagram',
    subtitle: '/kellcrivelaro',
    element: (
      <Link href="https://instagram.com/kellcrivelaro">
        <Instagram className="size-7 transition-colors duration-300 group-hover:text-sky-500" />
      </Link>
    ),
  },
  {
    id: 4,
    title: 'Flame Tecnologia',
    subtitle: 'flametecnologia.com.br',
    href: 'https://flametecnologia.com.br',
    element: (
      <Link href="https://flametecnologia.com.br">
        <Image
          src={flame}
          alt="Logo Flame Tecnologia"
          width={28}
          className="brightness-50 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0 hover:invert-0 dark:brightness-0 dark:invert"
        />
      </Link>
    ),
  },
]

const Social = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={social} />
    </div>
  )
}

export default Social
