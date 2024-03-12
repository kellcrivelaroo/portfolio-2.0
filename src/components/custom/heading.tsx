import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import Underline from './underline'

interface HeadingProps {
  className?: string
  children: ReactNode
}

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <div className="relative px-8">
      <h2
        className={cn(
          'font-alt text-3xl font-bold leading-normal tracking-wider lg:text-6xl',
          className,
        )}
      >
        {children}
      </h2>
      <Underline className="-bottom-2 max-w-[80%] lg:-bottom-4 lg:max-w-full " />
    </div>
  )
}

export default Heading
