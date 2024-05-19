const contactURL = 'https://www.linkedin.com/in/vlad-bondarenko-1034b3287/';

const Contact = () => {
  return (
    <section id="contact" className="maxWidth mt-[60px] md:mt-[120px] text-center">

      <h3 className="max-w-[720px] text-white font-bold text-[32px] md:text-[46px] mb-[16px] md:mb-[24px] text-center mx-auto">Ready to take <span className="text-[#CBACF9]">your</span> digital presence to <span className="text-[#CBACF9]">new heights</span>?</h3>
      <p className=" text-[#C1C2D3]">Reach out today, and let's chat about how I can help you succeed</p>
      <a className="p-[3px] relative mt-7 inline-block cursor-pointer" target="_blank" href={contactURL}>
        <div className="absolute animate-bouncingLight inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-9 py-3 rounded-[6px] bg-[#06091f] relative group transition duration-200 text-white hover:bg-transparent"
        >
          Contact me
        </div>
      </a>

    </section>
  )
}

export default Contact