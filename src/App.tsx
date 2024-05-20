import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

function App() {

  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <div className="relative overflow-hidden">
        <div className="customBg bottomBg" />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
