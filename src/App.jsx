import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import SleepWell from "./Pages/SleepWell";
import MoreInfo from "./Component/MoreInfo";
import { DarkModeProvider } from "./Component/DarkMode"; // Import DarkModeProvider
import Experience from "./Pages/Experience";

function App() {
  return (
    <DarkModeProvider> {/* Wrap everything with DarkModeProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/sleepwell" element={<MoreInfo />} />
          <Route path="/project/portfolio-v1" element={<MoreInfo />} />
          <Route path="/about/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;