import {motion} from 'framer-motion';
import { transitionV, variant } from '../constants/variants';

const contactURL = 'https://www.linkedin.com/in/haze07/';

const Contact = () => {
  return (
    <section id="contact" className="maxWidth mt-[60px] md:mt-[150px] text-center">

      <motion.h3 className="max-w-[720px] text-white font-bold text-[32px] md:text-[46px] mb-[12px] md:mb-[18px] text-center mx-auto"
        variants={variant('top')}
        initial='initial'
        whileInView='inView'
        viewport={{once: false}}
        transition={transitionV()}
      >Ready to take <span className="text-[#CBACF9]">your</span> digital presence to <span className="text-[#CBACF9]">new heights</span>?</motion.h3>
      <motion.p className="text-[12px] md:text-[16px] text-[#C1C2D3]"
        variants={variant('top')}
        initial='initial'
        whileInView='inView'
        viewport={{once: false}}
        transition={transitionV(0.8, 1.2)}
      >Reach out today, and let's chat about how I can help you succeed</motion.p>
      <motion.a className="p-[3px] relative mt-7 inline-block cursor-pointer" target="_blank" href={contactURL}
        variants={variant('bottom')}
        initial='initial'
        whileInView='inView'
        viewport={{once: false}}
        transition={transitionV()}
      >
        <div className="absolute animate-bouncingLight inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-9 py-3 rounded-[6px] bg-[#06091f] relative group transition duration-200 text-white hover:bg-transparent"
        >
          Contact me
        </div>
      </motion.a>

    </section>
  )
}

export default Contact