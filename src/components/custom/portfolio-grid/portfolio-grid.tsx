'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { Card } from '@/data/portfolio-data'
import { cn } from '@/lib/utils'

import PortfolioCard from './portfolio-card'
import PortfolioImage from './portfolio-image'

export const PortfolioGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)

  const handleClick = (card: Card) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  return (
    <div className="relative mx-auto grid h-full w-full grid-cols-1 gap-4 p-6 px-4 md:max-h-[89vh] md:grid-cols-25 md:grid-rows-15 md:gap-5 3xl:max-h-[91vh] 3xl:max-w-[2000px]">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              'relative cursor-pointer overflow-hidden',
              selected?.id === card.id
                ? `absolute inset-0 z-50 m-auto flex aspect-square h-full max-h-[90vh] w-full max-w-[600px] cursor-default flex-col flex-wrap
                items-center justify-center rounded-t-lg border border-gray-700/15 shadow-2xl shadow-white/10 brightness-100 md:-mt-7`
                : lastSelected?.id === card.id
                  ? 'z-40 h-full w-full bg-white'
                  : 'h-full w-full bg-white',
            )}
            layout
          >
            {selected?.id === card.id ? (
              <PortfolioCard card={selected} />
            ) : (
              <div
                className={cn(
                  `pointer-events-none absolute bottom-2 left-2 z-30 flex rounded-full border border-foreground/30 bg-slate-900/90 px-4 
                  py-0.5 font-normal text-slate-50 transition-all duration-300`,
                  selected ? 'opacity-70 brightness-[0.7]' : '',
                )}
              >
                {card.name}
                <span
                  className="absolute -bottom-px left-[10%] h-px w-[80%] bg-gradient-to-r from-sky-500/0 via-sky-500/90 to-sky-500/0 
                  transition-opacity duration-500"
                />
              </div>
            )}

            <PortfolioImage card={card} selectedId={selected?.id || 0} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          `absolute left-0 top-0 z-30 h-full w-screen scale-150 opacity-0`,
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      />
    </div>
  )
}
