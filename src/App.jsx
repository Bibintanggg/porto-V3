import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import SleepWell from "./Pages/SleepWell";
import { DarkModeProvider } from "./Component/DarkMode"; // Import DarkModeProvider
import Experience from "./Pages/Experience";
import Portfolio_V1 from "./Pages/Portfolio_V1";
import { useEffect, useState } from "react";
import Preload from "./Component/Preload";
import JejakPemuda from "./Pages/JejakPemuda";
import MoneyTrack from "./Pages/MoneyTrack";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <DarkModeProvider>
      {loading ? (
        <Preload />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/sleepwell" element={<SleepWell />} />
            <Route path="/project/portfolio-v1" element={<Portfolio_V1 />} />
            <Route path="/project/moneytrack" element={<JejakPemuda />} />
            <Route path="/project/jejakpemuda" element={<MoneyTrack />} />
            <Route path="/about/experience" element={<Experience />} />
          </Routes>
        </BrowserRouter>
      )}
    </DarkModeProvider>
  );
}

export default App;
