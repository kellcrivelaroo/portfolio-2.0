import { Github, Monitor } from 'lucide-react'

import { Project } from '@/data/projects-data'
import { cn } from '@/lib/utils'

import Link from '../link'
import { MovingBorderCard } from '../moving-border-card'
import Underline from '../underline'
import ProjectImage from './project-image'

interface ProjectCardProps {
  project: Project
  index: number
  current: number
}

const ProjectCard = ({ project, index, current }: ProjectCardProps) => {
  const currentSlide = index === current
  return (
    <MovingBorderCard
      containerClassName={cn(
        'w-full h-full items-center justify-center shadow-lg container transition-all duration-500 scale-100',
        !currentSlide ? 'scale-[0.85]' : '',
      )}
      borderClassName="w-[480px] h-[180px]"
      duration={7000}
      borderRadius="1rem"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 pt-5 lg:flex-row lg:gap-7 lg:px-7 lg:py-10">
        <div className="w-full lg:order-2 lg:w-fit">
          <ProjectImage alt={project.title} {...project.images} />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-start lg:py-4">
          <div className="relative mb-6 w-fit lg:px-4 ">
            <h3 className="text-center text-xl font-medium leading-none lg:text-3xl">
              {project.title}
            </h3>
            <Underline className="-bottom-4 opacity-50" />
          </div>
          <div className="mb-4 h-full w-fit text-balance text-center font-normal leading-snug tracking-wider lg:mb-8 lg:text-xl lg:leading-relaxed">
            {project.content.map((content, i) => (
              <p key={i}>{content}</p>
            ))}
          </div>

          <div className="mb-2 flex flex-col gap-2 lg:mb-0 lg:flex-row lg:gap-4">
            <Link
              href={project.liveUrl}
              className="min-w-[200px] gap-2 font-medium lg:min-w-[260px]"
            >
              <Monitor className="size-4 lg:size-5" />
              Live Project
            </Link>
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="min-w-[200px] gap-2 font-medium lg:min-w-[260px]"
              >
                <Github className="size-4 lg:size-5" />
                Código Fonte
              </Link>
            )}
          </div>
        </div>
      </div>
    </MovingBorderCard>
  )
}

export default ProjectCard
