import { footerLinks } from "../constants";
import {motion} from 'framer-motion';
import { transitionV, variant } from '../constants/variants';


const Footer = () => {
  return (
    <footer className="maxWidth flex flex-col-reverse gap-6 min-[500px]:flex-row justify-between items-center px-20 mt-[50px] md:mt-[80px] mb-[30px] max-w-[1050px]">
      <motion.p className="font-light"
        variants={variant('left')}
        initial='initial'
        whileInView='inView'
        viewport={{once: false}}
        transition={transitionV()}
      >Copyright ©2024</motion.p>

      <div className="flex gap-4">
        {footerLinks.map((i, ind) => (
          <motion.a className="flex justify-center items-center w-[45px] h-[45px] border border-slate-800 rounded-xl overflow-hidden bg-[#9093eb21] hover:bg-[#cbacf9]/[0.6]" key={i.title} href={i.link} 
          target="_blank"
          variants={variant('right')}
          initial='initial'
          whileInView='inView'
          viewport={{once: false}}
          transition={transitionV((++ind * 0.15), 0.2)}
          whileHover={{scale: 1.2, transition: {delay: 0, duration: 0.2}}}         
          >
            <img src={i.img} alt={i.title} className="w-[22px] h-[20px]" />
          </motion.a>
        ))}
      </div>
    </footer>
  )
}

export default Footer