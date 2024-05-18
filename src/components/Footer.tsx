import { footerLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="maxWidth flex flex-col min-[400px]:flex-row justify-between items-center px-8 mt-[50px] mb-[20px]">
      <p className="font-light">Copyright ©2024</p>

      <div className="flex gap-4">
        {footerLinks.map((i) => (
          <a className="flex justify-center items-center w-[40px] h-[40px] border border-slate-800 rounded-xl overflow-hidden bg-[#9093eb21]" key={i.title} href={i.link} target="_blank">
            <img src={i.img} alt={i.title} className="w-[19px] h-[18px]" />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer