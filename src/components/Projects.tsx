import { projectsInfo } from "../constants";
import { transitionV, variant } from "../constants/variants";
import ProjectCard from "./ProjectCard";
import {motion} from 'framer-motion';


const Projects = () => {
  return (
    <section className="maxWidth mt-[60px] md:mt-[150px]" id="projects">

      <motion.h2 className="max-w-[938px] text-[16px] min-[400px]:text-[26px] md:text-[40px] font-bold mx-auto text-center text-white mb-[40px]"
        variants={variant('top')}
        initial='initial'
        whileInView='inView'
        viewport={{once: false}}
        transition={transitionV()}
      >
        A small selection of <span className="text-[#cbacf9]"> recent projects</span>
      </motion.h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto md:max-w-[85%]">
        {projectsInfo.map((i) => (
          <ProjectCard key={i.id} id={i.id} title={i.title} img={i.img} desciption={i.description} codeLink={i.codeLink} siteLink={i.siteLink}  />
        ))}
      </div>

      <motion.p className="text-[#C1C2D3] tracking-tighter text-center mt-[15px]"
        variants={variant('top')}
        initial='initial'
        whileInView='inView'
        viewport={{once: false}}
        transition={transitionV()}
      >See more on my <a className="font-bold text-[#cbacf9] text-[17px] hover:text-white transition-all"
        target="_blank"
        href="https://github.com/h4ze-07?tab=repositories"
      >GitHub</a></motion.p>
    </section>
  )
}

export default Projects