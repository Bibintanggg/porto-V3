import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Project from "./Component/Project"
import Contact from "./Component/Contact"
import Preload from "./Component/Preload"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
