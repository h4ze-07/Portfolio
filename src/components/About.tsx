import { Spotlight } from "./ui/Spotlight"


const About = () => {
  return (
    <section className="relative" id="about">
        <article className="absolute h-full w-full z-[-1] customBg"/>

        <Spotlight className="left-20" />
        <Spotlight className="hidden md:block left-[20%] top-10" fill="#aba5f8" />
        <Spotlight className="left-[80%] -top-50" fill="#cbacf9" />


        <div className="pt-[90px] md:pt-[120px] lg:pt-[220px] pb-[50px]">
            <h1 className="max-w-[938px] text-[32px] min-[400px]:text-[41px] md:text-6xl font-bold mx-auto text-center text-white">
                Transforming Concepts into Seamless
                <span className="text-[#cbacf9]"> User Experiences</span>
            </h1>
            <p className="text-center text-wText text-[16px] lg:text-[24px] mt-[30px]">Hi! My name is Vlad and i'm Front-End Developer based in Ukraine.</p>
            <div className="mt-[40px] flex flex-col min-[400px]:flex-row gap-3 items-center justify-center">
                <a className="block animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] py-3 px-7 font-medium text-[#cbacf9] transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-wText hover:font-bold hover:scale-110"
                href="#projects"
                >
                    See my work
                </a>
                <a className="block animate-shimmer2 items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] py-3 px-7 font-medium text-[#cbacf9] transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-wText hover:font-bold hover:scale-110"
                href="/cv.pdf" target="_blank" download={true}
                >
                    Download resume
                </a>

            </div>

        </div>
    </section>
  )
}

export default About