import { portfolioCards } from '@/data/portfolio-data'

import { PortfolioGrid } from '../custom/portfolio-grid/portfolio-grid'
import Underline from '../custom/underline'

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-background to-slate-300 pr-4 pt-16 dark:to-slate-800">
      <div className="relative px-8">
        <h2 className="font-alt text-6xl font-bold leading-normal tracking-wider">
          Portfólio
        </h2>
        <Underline className="-bottom-1" />
      </div>

      <div className="mx-auto h-screen w-full px-20">
        <PortfolioGrid cards={portfolioCards} />
      </div>
    </div>
  )
}

export default Portfolio
