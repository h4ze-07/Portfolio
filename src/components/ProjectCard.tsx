import { CardBody, CardContainer, CardItem } from "./ui/3d-card"

type ProjectCardTypes = {
    title: string,
    img: string,
    desciption: string,
    codeLink: string,
    siteLink: string,
}


const ProjectCard = ({title, img, desciption, codeLink, siteLink}: ProjectCardTypes) => {
  return (
    <div>
        <CardContainer className="border border-slate-800 rounded-xl px-3 py-2 max-w-[350px] md:max-w-full w-[90%] bg-white/10">
            <CardBody className="h-fit w-fit">

                <CardItem as='a' translateZ="70" className="block w-full mt-5 px-2" href={siteLink} target='_blank'>
                    <img src={img} alt={title} className="rounded-2xl overflow-hidden w-full object-cover h-[300px]" />
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
                        className="text-[20px] text-[#CBACF9] hover:font-semibold hover:underline underline-offset-4 transition-all text-center"
                        href={codeLink}
                        target='_blank'
                    >
                        See The Code
                    </CardItem>
                    <CardItem
                        as='a'
                        translateZ='70'
                        className="text-[20px] text-[#CBACF9] hover:font-semibold hover:underline underline-offset-4 transition-all text-center"
                        href={siteLink}
                        target='_blank'
                    >
                        Check Live Site
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    </div>
  )
}

export default ProjectCard