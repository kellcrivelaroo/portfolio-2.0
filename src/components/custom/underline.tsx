import { cn } from '@/lib/utils'

interface UnderlineProps {
  className?: string
}

const Underline = ({ className }: UnderlineProps) => {
  return (
    <>
      <span
        className={cn(
          `absolute bottom-0 left-0 h-[2px] w-full -translate-y-2 bg-gradient-to-r from-transparent 
      via-sky-500 to-transparent blur-sm`,
          className,
        )}
      />
      <span
        className={cn(
          `absolute bottom-0 left-0 h-px w-full -translate-y-2 bg-gradient-to-r from-transparent 
      via-sky-500 to-transparent`,
          className,
        )}
      />
      <span
        className={cn(
          `absolute -bottom-2 left-[30%] h-[5px] w-2/5 -translate-y-2 bg-gradient-to-r from-transparent 
      via-indigo-400/50 to-transparent blur-sm`,
          className,
        )}
      />
      <span
        className={cn(
          `absolute bottom-0 left-[40%] h-px w-1/4 -translate-y-2 bg-gradient-to-r from-transparent 
      via-sky-300 to-transparent`,
          className,
        )}
      />
    </>
  )
}

export default Underline
