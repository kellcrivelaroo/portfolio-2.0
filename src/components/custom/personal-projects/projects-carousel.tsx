import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { projectsData } from '@/data/projects-data'

import ProjectCard from './project-card'

const ProjectsCarousel = () => {
  return (
    <Carousel
      className="relative w-full"
      opts={{
        align: 'center',
        skipSnaps: true,
        loop: true,
      }}
    >
      <CarouselContent>
        {projectsData.map((project) => (
          <CarouselItem
            key={project.id}
            className="container pl-10 pr-6 lg:px-20"
          >
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="container relative">
        <CarouselPrevious className="left-1/2 -translate-x-14 translate-y-3 lg:-left-0 lg:-translate-x-0 lg:-translate-y-[300px]" />
        <CarouselNext className="right-1/2 translate-x-14 translate-y-3 lg:-right-0 lg:-translate-x-0 lg:-translate-y-[300px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-40 hidden w-full gap-10 lg:flex">
        <div className="flex flex-1 bg-gradient-to-r from-black/50 to-transparent to-80%" />
        <div className="container w-full" />
        <div className="flex flex-1 bg-gradient-to-l from-black/50 to-transparent to-80%" />
      </div>
    </Carousel>
  )
}

export default ProjectsCarousel
