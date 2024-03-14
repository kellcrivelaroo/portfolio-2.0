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
        `relative flex w-fit items-center justify-center gap-1 rounded-full border border-foreground/30 bg-background px-2 py-1
      text-sm font-semibold transition-all duration-500 hover:scale-[1.03] hover:brightness-[1.15] dark:bg-slate-900/95 dark:font-normal dark:text-slate-200 dark:brightness-110 
      hover:dark:border-slate-700 hover:dark:brightness-150 lg:gap-3 lg:px-7 lg:py-1.5 lg:text-xl`,
        className,
      )}
    >
      {children}
      <Underline className="translate-y-px" />
    </a>
  )
}

export default Link
