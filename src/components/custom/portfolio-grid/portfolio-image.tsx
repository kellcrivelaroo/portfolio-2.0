import Image from 'next/image'
import { useState } from 'react'

import { Card } from '@/data/portfolio-data'
import { cn } from '@/lib/utils'

interface PortfolioImageProps {
  card: Card
  selectedId: number
}

const PortfolioImage = ({ card, selectedId }: PortfolioImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src={card.thumbnail}
      onLoad={() => setLoaded(true)}
      className={cn(
        'absolute inset-0 h-full w-full  object-cover transition duration-200',
        loaded ? 'blur-none' : 'blur-md',
        card.id === selectedId
          ? 'object-[50%_23px]'
          : 'border border-slate-400/50 object-[0_-1px] brightness-[0.8] transition-[filter] hover:brightness-100 dark:border-none dark:brightness-[0.55] hover:dark:brightness-100',
      )}
      quality={90}
      fill
      alt="thumbnail"
    />
  )
}

export default PortfolioImage
