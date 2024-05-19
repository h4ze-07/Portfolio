import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="relative overflow-hidden">
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <div className="customBg bottomBg" />
      <Footer />
    </div>
  )
}

export default App
