import { footerLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="maxWidth flex flex-col-reverse gap-6 min-[500px]:flex-row justify-between items-center px-20 mt-[50px] md:mt-[80px] mb-[30px] max-w-[1050px]">
      <p className="font-light">Copyright ©2024</p>

      <div className="flex gap-4">
        {footerLinks.map((i) => (
          <a className="flex justify-center items-center w-[45px] h-[45px] border border-slate-800 rounded-xl overflow-hidden bg-[#9093eb21] hover:scale-[1.35] hover:bg-[#cbacf9]/[0.6] transition-all" key={i.title} href={i.link} target="_blank">
            <img src={i.img} alt={i.title} className="w-[22px] h-[20px]" />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer