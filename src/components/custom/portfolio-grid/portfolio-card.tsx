import { ReloadIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

import { Card } from '@/data/portfolio-data'

import Underline from '../underline'

interface PortfolioCardProps {
  card: Card | null
}

const PortfolioCard = ({ card }: PortfolioCardProps) => {
  return (
    <div className="relative z-[60] flex h-full w-full flex-col justify-end rounded-xl bg-transparent">
      <header
        className="absolute left-0 top-0 z-30 grid h-6 w-full grid-cols-[auto_1fr_auto] items-center gap-1.5 border-b border-gray-600 
        bg-[#363636] px-5 text-slate-300"
      >
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5e57]" />
          <span className="h-2 w-2 rounded-full bg-[#febb2c]" />
          <span className="h-2 w-2 rounded-full bg-[#28cb3e]" />
        </div>

        <div className="relative mx-auto h-[15px] w-full max-w-[60%] rounded bg-[#444444] text-center text-[11px]">
          <ReloadIcon className="absolute left-2 top-[3px] size-2.5" />
          {card?.url}
        </div>
        <a href={card?.url} target="_blank" className="hover:text-slate-100">
          <ExternalLink className="size-3" />
        </a>
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
          className="relative flex w-fit items-center gap-3 rounded-full border border-foreground/30 bg-slate-900/95 px-7 py-1.5 text-xl
          font-normal text-slate-200 brightness-110 transition-all duration-500 hover:border-slate-700 hover:brightness-150"
        >
          <ExternalLink className="size-5" />
          {card?.url}
          <Underline className="translate-y-px" />
        </a>
      </motion.div>
    </div>
  )
}

export default PortfolioCard
