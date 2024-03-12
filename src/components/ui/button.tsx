import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className="group relative inline-block w-fit cursor-pointer rounded-full bg-primary/10 px-0.5 py-px font-alt
      text-lg font-medium tracking-wider text-foreground no-underline shadow-xl shadow-foreground/5 transition-colors
      duration-500 hover:bg-primary/25 disabled:cursor-not-allowed disabled:opacity-70 hover:dark:bg-primary/15"
        ref={ref}
        {...props}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span
            className="absolute inset-0 rounded-full 
          bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,215,248,0.8)_0%,rgba(56,215,248,0)_60%)] opacity-0 
          transition-opacity duration-500 group-hover:opacity-100"
          />
        </span>
        <div
          className={cn(
            `relative z-10 flex items-center space-x-2 rounded-full bg-slate-200/80 px-7 py-1 ring-1 dark:bg-slate-950/70
          dark:ring-slate-950/25`,
            className,
          )}
        >
          {children}
        </div>
        <span
          className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r 
        from-sky-500/0 via-sky-500/90 to-sky-500/0 transition-opacity duration-500 group-hover:opacity-40"
        />
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button }
