import { useState } from "react";
import {motion} from 'framer-motion';
import { transitionV, variant } from "../../constants/variants";

type GridItemProps = {
    id: number,
    title: string,
    subtitle?: string,
    className: string,
    img?: string,
    animate: string,
}

export const CustomGridItem = ({id, title, subtitle, className, img, animate}: GridItemProps) => {

    const [copyBtn, setCopyBtn] = useState(true);
    const email = 'vlad0109031@gmail.com';

    const handleCopyBtnClick = () => {
        navigator.clipboard.writeText(email);
        setCopyBtn(false)
        setTimeout(() => setCopyBtn(true), 4000)
    }

    return (
        <motion.div className={`${className} border border-slate-600 rounded-[23px] relative overflow-hidden row-span-1 `}
            variants={variant(animate)}
            initial='initial'
            whileInView='inView'
            viewport={{once: true}}
            transition={transitionV(0.10 * id, 0.5, 'easeInOut')}
        >
            {id == 1 && (
                <div>
                    <h3 className="z-[1] relative mt-[50%] mb-5 mr-1 ml-6 text-[20px] md:text-[25px] font-bold max-w-[350px] md:max-w-[540px]">{title}</h3>
                    <img src={img} alt="laptop" className="absolute object-cover w-full h-full top-0" />
                </div>
            )}


            {id == 2 && (
                <div className="">
                    <h3 className="text-[18px] font-bold mt-5 ml-4 mr-2 mb-20 md:mb-0 lg:mb-[85px] max-w-[360px]">{title}</h3>
                    <img src={img} alt="globe" className="absolute object-contain w-full left-0 bottom-0" />
                </div>
            )}


            {id == 3 && (
                <div className="relative overflow-hidden"
                style={{
                    'background': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(45,45,119,1) 55%, rgba(36,51,96,1) 100%)'
                }}
                >
                    <div className="pl-[15px] py-[60px] lg:py-[85px] relative z-[3]">
                        <p className="text-[10px] lg:text-[14px] leading-none text-[#C1C2D3] mb-[10px] tracking-tighter">{subtitle}</p>
                        <h3 className="text-white text-[20px] md:text-[25px] font-bold leading-none">{title}</h3>
                    </div>

                    <div className="flex gap-1 lg:gap-2 w-fit absolute top-0 -right-3 lg:-right-2">
                        <div className="flex flex-col gap-3 relative top-1">
                            {["JavaScript", "Tailwind", "ReactJS"].map((i => (
                                <span 
                                    key={i}
                                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                >{i}</span>
                            )))}
                            <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E] opacity-50 lg:opacity-100"></span>
                        </div>
                        <div className="flex flex-col gap-3 relative -top-3">
                            <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E] opacity-50 lg:opacity-100"></span>
                            {["Typescript", "NextJs", "SCSS"].map((i => (
                                <span 
                                    key={i}
                                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                >{i}</span>
                            )))}
                        </div>
                    </div>

                </div>
            )}

            {id == 4 && (
                <div className="flex flex-col relative pt-[20px] px-[22px] gap-2">
                    <h3 className="text-white font-bold md:text-[22px] max-w-[300px]">{title}</h3>
                    <img src={img} alt="code window" className="self-end -mt-3 -ml-4 md:w-[200px] object-contain"/>
                    <div className="customBg absolute top-0 left-0 w-full h-full" />
                </div>
            )}

            {id == 5 && (
                <div className="relative w-full h-full">
                    <div className="flex flex-col items-start justify-center h-full w-full py-[50px] md:py-0">
                        <h3 className="text-white font-bold ml-[15px] md:ml-[25px] max-w-[180px] md:text-[24px] md:max-w-[240px] lg:max-w-[320px] lg:text-[32px]">{title}</h3>
                    </div>
                    <img src={img} alt="coding" className="absolute top-0 -right-[5%] lg:-right-52 md:-top-20 object-contain top opacity-30 h-[200px] md:h-[550px]"/>
                </div>
            )}
            {id == 6 && (
                <div className="overflow-hidden"
                style={{
                    'background': 'linear-gradient(90deg, rgba(82,58,131,0.4) 35%, rgba(41,44,162,0.3) 69%)'
                }}
                >
                    <div className="backdrop-blur-md bg-white/10 flex flex-col items-center gap-3 py-6 overflow-hidden">
                        <h3 className="text-[18px] text-center md:text-[24px] font-bold max-w-[260px] ">{title}</h3>
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        onClick={handleCopyBtnClick}
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-[#b281ff] transition-all hover:font-semibold ${copyBtn ? 'px-3' : 'px-12'} py-1 text-sm font-medium text-white backdrop-blur-3xl`}>
                                {copyBtn ? "Copy my email address" : "Email copied!"}
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    )
}
