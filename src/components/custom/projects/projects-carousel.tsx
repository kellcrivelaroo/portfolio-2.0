'use client'
import { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { projectsData } from '@/data/projects-data'

import ProjectCard from './project-card'

const ProjectsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      className="relative z-30 w-full"
      opts={{
        align: 'center',
        skipSnaps: true,
        loop: true,
        inViewThreshold: 1,
      }}
    >
      <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem
            key={project.id}
            className="container select-none pl-11 pr-7 lg:px-9"
          >
            <ProjectCard project={project} index={index} current={current} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="container relative">
        <CarouselPrevious className="left-1/2 -translate-x-14 translate-y-3 lg:-left-10 lg:-translate-x-0 lg:-translate-y-[300px]" />
        <CarouselNext className="right-1/2 translate-x-14 translate-y-3 lg:-right-6 lg:-translate-x-0 lg:-translate-y-[300px]" />
      </div>
    </Carousel>
  )
}

export default ProjectsCarousel
