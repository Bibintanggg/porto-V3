import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
import SleepWell from "./Pages/SleepWell"
import MoreInfo from "./Component/MoreInfo"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/project/sleepwell" element={<MoreInfo />} />

      </Routes>
      </BrowserRouter>
  )
}

export default App
