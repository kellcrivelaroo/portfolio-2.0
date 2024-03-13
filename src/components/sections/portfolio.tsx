import { portfolioCards } from '@/data/portfolio-data'

import Heading from '../custom/heading'
import { PortfolioGrid } from '../custom/portfolio-grid/portfolio-grid'

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center bg-gradient-to-b from-slate-100 to-slate-300 pt-20 dark:from-slate-900 
    dark:to-slate-800 lg:pb-12 lg:pr-4"
    >
      <Heading>Portfólio</Heading>

      <div className="mx-auto h-[90vh] w-full px-4 lg:px-20">
        <PortfolioGrid cards={portfolioCards} />
      </div>
    </div>
  )
}

export default Portfolio
