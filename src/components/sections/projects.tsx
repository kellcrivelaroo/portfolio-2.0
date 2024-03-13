import Heading from '../custom/heading'
import ProjectsCarousel from '../custom/projects/projects-carousel'

const Projects = () => {
  return (
    <section
      id="projects"
      className=" bg-gradient-to-b from-background to-slate-900 pt-20"
    >
      <div className="z-30 mx-auto flex flex-col items-center space-y-6 pb-20 lg:space-y-20">
        <Heading>Projetos</Heading>
        <ProjectsCarousel />
      </div>
    </section>
  )
}

export default Projects
