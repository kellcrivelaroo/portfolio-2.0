import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import Underline from './underline'

interface LinkProps {
  href: string
  className?: string
  children: ReactNode
}

const Link = ({ href, className, children }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        `relative flex w-fit items-center justify-center gap-1 rounded-full border border-foreground/30 
      bg-slate-900/95 px-2 py-1 text-sm font-normal text-slate-200 brightness-110 transition-all duration-500 
      hover:border-slate-700 hover:brightness-150 lg:gap-3 lg:px-7 lg:py-1.5 lg:text-xl`,
        className,
      )}
    >
      {children}
      <Underline className="translate-y-px" />
    </a>
  )
}

export default Link
