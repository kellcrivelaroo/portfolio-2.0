import Image from 'next/image'

import { Project } from '@/data/projects-data'

import { MovingBorderCard } from '../moving-border-card'
import Underline from '../underline'
import ProjectImage from './project-image'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <MovingBorderCard
      containerClassName="w-full h-fit items-center justify-center shadow-lg container"
      borderClassName="w-[480px] h-[180px]"
      duration={7000}
      borderRadius="1rem"
    >
      <div className="flex h-[580px] w-full items-center justify-center gap-10 p-10">
        <div className="flex h-full w-full flex-col items-center justify-start pt-10">
          <div className="relative mb-4 w-fit px-8">
            <h3 className="text-3xl font-medium leading-loose">
              {project.title}
            </h3>
            <Underline className="opacity-50" />
          </div>
          <p className="text-lg">{project.content}</p>
        </div>
        <div>
          <ProjectImage {...project.images} />
        </div>
      </div>
    </MovingBorderCard>
  )
}

export default ProjectCard
