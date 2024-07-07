import { transitionV, variant } from "../constants/variants";
import GridSection from "./GridSection"
import { Spotlight } from "./ui/Spotlight"
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="relative overflow-hidden" id="about">
            <motion.article className="absolute h-[60%] w-full z-[-1] customBg"
                initial='initial'
                animate='inView'
                transition={transitionV()}
                variants={variant('top')}
                viewport={{ once: false }}
            />

            <Spotlight className="left-20 h-[80vh]" />
            <Spotlight className="hidden md:block left-[25%] h-[50vh] top-52" fill="#aba5f8" />
            <Spotlight className="left-[80%] -top-50" fill="#cbacf9" />


            <div className="pt-[90px] md:pt-[120px] lg:pt-[220px] pb-[50px]">
                <motion.h1 className="max-w-[938px] text-[32px] min-[400px]:text-[41px] md:text-6xl font-bold mx-auto text-center text-white"
                    variants={variant("top")}
                    initial='initial'
                    whileInView='inView'
                    transition={transitionV(0.5, 0.8)}
                    viewport={{ once: false }}
                >
                    Transforming Concepts into Seamless
                    <span className="text-[#cbacf9]"> User Experiences</span>
                </motion.h1>
                <motion.p className="text-center text-wText text-[16px] lg:text-[24px] mt-[30px] mx-4"
                    variants={variant("top")}
                    initial='initial'
                    whileInView='inView'
                    transition={transitionV(0.8, 0.8)}
                    viewport={{ once: false }}
                >Hi! My name is Vlad and i'm Front-End Developer based in Ukraine.</motion.p>
                <motion.div className="mt-[40px] flex flex-col min-[400px]:flex-row gap-3 items-center justify-center"
                    variants={variant('bottom')}
                    initial='initial'
                    whileInView='inView'
                    transition={transitionV(0.8, 0.8)}
                    viewport={{ once: false }}
                >
                    <a className="block animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] py-3 px-7 font-medium text-[#cbacf9] transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-wText hover:font-bold hover:scale-110"
                        href="#projects"
                    >
                        See my work
                    </a>
                    <a className="block animate-shimmer2 items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] py-3 px-7 font-medium text-[#cbacf9] transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-wText hover:font-bold hover:scale-110"
                        href="/CV_Vladyslav_Bondarenko.pdf" target="_blank" download={true}
                    >
                        Download resume
                    </a>
                </motion.div>

                <GridSection />
            </div>
        </section>
    )
}

export default About