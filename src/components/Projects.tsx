import { projectsInfo } from "../constants"
import ProjectCard from "./ProjectCard"


const Projects = () => {
  return (
    <section className="maxWidth mt-[60px] md:mt-[110px]" id="projects">

      <h2 className="max-w-[938px] text-[16px] min-[400px]:text-[26px] md:text-[40px] font-bold mx-auto text-center text-white">
        A small selection of <span className="text-[#cbacf9]"> recent projects</span>
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto md:max-w-[85%]">
        {projectsInfo.map((i) => (
          <ProjectCard key={i.id} title={i.title} img={i.img} desciption={i.description} codeLink={i.codeLink} siteLink={i.siteLink}  />
        ))}
      </div>

    </section>
  )
}

export default Projects