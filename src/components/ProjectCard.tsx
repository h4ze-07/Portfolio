import { transitionV, variant } from "../constants/variants";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import {motion} from 'framer-motion';

type ProjectCardTypes = {
    id: number,
    title: string,
    img: string,
    desciption: string,
    codeLink: string,
    siteLink: string,
}


const ProjectCard = ({title, img, desciption, codeLink, siteLink, id}: ProjectCardTypes) => {
  return (
    <motion.div
        variants={variant('left')}
        initial='initial'
        whileInView='inView'
        viewport={{once: false}}
        transition={transitionV(0.25 * id, 0.6)}
    >
        <CardContainer className="border border-slate-800 rounded-xl px-3 py-2 max-w-[350px] md:max-w-full w-[90%] bg-white/10">
            <CardBody className="h-fit w-fit">

                <CardItem as='a' translateZ="70" className="block w-full mt-5 px-2" href={siteLink} target='_blank'>
                    <div className="rounded-2xl overflow-hidden border border-slate-700 h-[250px]">
                        <img src={img} alt={title} className="w-full h-full object-cover" />
                    </div>
                </CardItem>

                <CardItem
                    as='h3'
                    translateZ="80"
                    className="text-[25px] font-bold mt-[30px]"
                >
                    {title}
                </CardItem>

                <CardItem 
                    as='p'
                    translateZ="70" 
                    className="mt-[10px] text-[18px]"
                >
                    {desciption}
                </CardItem>

                <div className="flex items-center justify-evenly my-[30px]">
                    <CardItem
                        as='a'
                        translateZ='70'
                        className="text-[16px] text-[#CBACF9] hover:font-semibold hover:underline underline-offset-4 transition-all text-center"
                        href={codeLink}
                        target='_blank'
                    >
                        See The Code
                    </CardItem>
                    <CardItem
                        as='a'
                        translateZ='70'
                        className="text-[16px] text-[#CBACF9] hover:font-semibold hover:underline underline-offset-4 transition-all text-center"
                        href={siteLink}
                        target='_blank'
                    >
                        Check Live Site
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    </motion.div>
  )
}

export default ProjectCard