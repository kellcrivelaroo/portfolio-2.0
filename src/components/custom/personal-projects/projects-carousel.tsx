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
          <CarouselItem key={project.id} className="container px-20">
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="container relative">
        <CarouselPrevious className="-left-0 -translate-y-[300px]" />
        <CarouselNext className="right-4 -translate-y-[300px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-40 flex w-full gap-10">
        <div className="flex flex-1 bg-gradient-to-r from-black/50 to-transparent to-80%" />
        <div className="container w-full" />
        <div className="flex flex-1 bg-gradient-to-l from-black/50 to-transparent to-80%" />
      </div>
    </Carousel>
  )
}

export default ProjectsCarousel
