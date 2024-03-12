import { motion } from 'framer-motion'
import { ExternalLink, RotateCcw, X } from 'lucide-react'

import { Card } from '@/data/portfolio-data'

import Underline from '../underline'

interface PortfolioCardProps {
  card: Card | null
  close: VoidFunction
}

const PortfolioCard = ({ card, close }: PortfolioCardProps) => {
  return (
    <div className="relative z-[60] flex h-full w-full flex-col justify-end bg-transparent">
      <header
        className="absolute left-0 top-0 z-[60] grid h-6 w-full grid-cols-[auto_1fr_auto] items-center gap-1 border-b border-gray-600 
        bg-[#363636] px-2 text-slate-300 lg:gap-1.5 lg:px-5 "
      >
        <div className="flex gap-1 lg:gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5e57]" />
          <span className="h-2 w-2 rounded-full bg-[#febb2c]" />
          <span className="h-2 w-2 rounded-full bg-[#28cb3e]" />
        </div>

        <div
          className="relative mx-auto h-[15px] w-full max-w-[89%] rounded bg-[#444444] pt-px text-center text-[9px]
        lg:max-w-[60%] lg:text-[11px]"
        >
          <RotateCcw className="absolute left-2 top-[3px] hidden size-2.5 sm:block" />
          {card?.url}
        </div>

        <a
          href={card?.url}
          target="_blank"
          className="hidden hover:text-slate-100 sm:block"
        >
          <ExternalLink className="size-3" />
        </a>

        <button
          className="z-[60] rounded border border-gray-400/50 p-px sm:hidden"
          onClick={close}
        >
          <X className="size-3.5" />
        </button>
      </header>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.2,
        }}
        className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-black to-transparent to-40%"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: 'easeInOut',
        }}
        className="relative z-[70] mx-auto pb-6"
      >
        <a
          href={card?.url}
          target="_blank"
          className="relative flex w-fit items-center gap-1 rounded-full border border-foreground/30 bg-slate-900/95 
          px-2 py-1 text-xs font-normal text-slate-200 brightness-110 transition-all duration-500 hover:border-slate-700 
          hover:brightness-150 lg:gap-3 lg:px-7 lg:py-1.5 lg:text-xl"
        >
          <ExternalLink className="size-3 lg:size-5" />
          {card?.url}
          <Underline className="translate-y-px" />
        </a>
      </motion.div>
    </div>
  )
}

export default PortfolioCard
