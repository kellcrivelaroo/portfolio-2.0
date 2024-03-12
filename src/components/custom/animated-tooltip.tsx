'use client'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useState } from 'react'

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    title: string
    subtitle?: string
    link: JSX.Element
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  )
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative"
          key={item.title}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className="absolute -top-16 left-0 z-50 flex flex-col items-center justify-center 
                rounded-md border border-foreground/10 bg-background px-4 py-2 text-xs shadow-xl"
              >
                <div
                  className="absolute inset-x-[20%] -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent 
                via-emerald-500 to-transparent "
                />
                <div
                  className="absolute -bottom-px left-[10%] z-30 h-px w-[60%] bg-gradient-to-r from-transparent 
                via-sky-500 to-transparent "
                />
                <div className="relative z-30 text-base font-bold ">
                  {item.title}
                </div>
                {!!item.subtitle && (
                  <div className="text-xs ">{item.subtitle}</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {item.link}
        </div>
      ))}
    </>
  )
}
