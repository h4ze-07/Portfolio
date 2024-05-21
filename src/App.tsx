import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import {motion} from 'framer-motion';

function App() {

  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <div className="relative overflow-hidden">
        <motion.div className="customBg bottomBg" 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.2, delay: 0.5}}
          viewport={{once: false}}
        />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
