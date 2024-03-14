import { cn } from '@/lib/utils'

interface UnderlineProps {
  className?: string
}

const Underline = ({ className }: UnderlineProps) => {
  return (
    <>
      <span
        className={cn(
          `absolute bottom-0 left-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-2 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent blur-sm
      dark:via-sky-500 lg:left-0 lg:translate-x-0`,
          className,
        )}
      />
      <span
        className={cn(
          `absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 -translate-y-2 bg-gradient-to-r from-transparent via-sky-500 to-transparent 
      lg:left-0 lg:translate-x-0`,
          className,
        )}
      />
      <span
        className={cn(
          `absolute -bottom-2 left-1/2 h-[5px] w-2/5 -translate-x-1/2 -translate-y-2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm 
      dark:via-indigo-400/50 lg:left-[30%] lg:translate-x-0`,
          className,
        )}
      />
      <span
        className={cn(
          `absolute bottom-0 left-1/2 h-px w-1/4 -translate-x-1/2 -translate-y-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent 
      lg:left-[40%] lg:translate-x-0`,
          className,
        )}
      />
    </>
  )
}

export default Underline
