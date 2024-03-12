'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100 // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--sky-500),
          transparent 70%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/textArea rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `shadow-textArea flex w-full resize-none rounded-md border-none bg-slate-950/85 px-3 py-2
            text-base transition-all duration-300 file:bg-transparent file:text-sm
            file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1
            focus-visible:ring-cyan-500/60 disabled:cursor-not-allowed disabled:opacity-50
            group-hover/textArea:shadow-none dark:shadow-[0px_0px_1px_1px_var(--slate-800)]
           `,
            className,
          )}
          rows={5}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  },
)
TextArea.displayName = 'TextArea'

export { TextArea }
