import Heading from '../custom/heading'
import ProjectsCarousel from '../custom/personal-projects/projects-carousel'

const PersonalProjects = () => {
  return (
    <div className=" bg-gradient-to-b from-background to-slate-900 pt-10">
      <div className="z-20 mx-auto flex flex-col items-center space-y-6 pb-20 lg:space-y-20">
        <Heading>Projetos Pessoais</Heading>
        <ProjectsCarousel />
      </div>
    </div>
  )
}

export default PersonalProjects
