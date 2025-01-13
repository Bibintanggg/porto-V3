import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FotoBintang from "../assets/Image/Image1.png";
import HomeIcon from "../assets/Icon/home.svg";
import AboutIcon from "../assets/Icon/about.svg";
import ProjectIcon from "../assets/Icon/project.svg";
import ContactIcon from "../assets/Icon/contact.svg";
import MoonPNG from "../assets/Image/moon.png"

function Sidebar() {
  const location = useLocation();
  const [activePosition, setActivePosition] = useState("translate-y-0");
  const [timeOfDay, setTimeOfDay] = useState("day");

  const activeRoutes = {
    "/": "-translate-y-10",
    "/about": "translate-y-2",
    "/project": "translate-y-14",
    "/contact": "translate-y-[110px]",
  };

  useEffect(() => {
    const newPosition = activeRoutes[location.pathname] || "translate-y-0";
    setActivePosition(newPosition);
  }, [location.pathname]);

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 18) {
      return "afternoon";
    } else {
      return "night";
    }
  };

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  return (
    <section>
      <div className="relative w-60 h-[100vh] bg-[#ffff]">
        <div className="flex flex-col">
          <div
            className={`w-60 h-40 rounded-b-3xl flex justify-center items-center transition-all duration-1000 ${
              timeOfDay === "morning"
                ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
                : timeOfDay === "afternoon"
                ? "bg-gradient-to-r from-orange-300 to-orange-500"
                : "bg-gradient-to-r from-blue-800 to-indigo-900"
            }`}
          >
            <div className="items-center justify-center flex flex-col pt-40">
              <img
                src={FotoBintang}
                className="w-24 h-24 items-center justify-center rounded-full shadow-black/20 shadow-lg"
              />
              <p className="text-white">Hello</p>
            </div>
            {timeOfDay === "morning" && (
              <div className="absolute inset-0 overflow-hidden">
                {/* Matahari */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-300 rounded-full shadow-lg animate-sunrise"></div>
                {/* Awan */}
                <div className="absolute top-8 left-8 w-16 h-8 bg-white rounded-full animate-cloud"></div>
                <div className="absolute top-12 left-16 w-20 h-10 bg-white rounded-full animate-cloud-2"></div>
              </div>
            )}
            {timeOfDay === "afternoon" && (
              <div className="absolute inset-0 overflow-hidden">
                {/* Angin */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full animate-wind"></div>
                {/* Burung */}
                <div className="absolute top-8 left-8 w-8 h-8 bg-white rounded-full animate-bird"></div>
              </div>
            )}
            {timeOfDay === "night" && (
              <div className="absolute inset-0 overflow-hidden">
                {/* Bulan */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full animate-moon">
                  <img src={MoonPNG}/>
                </div>
                {/* Bintang */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                <div className="absolute top-12 left-16 w-2 h-2 bg-white rounded-full animate-twinkle-2"></div>
              </div>
            )}
          </div>
        </div>

        <div className="w-48 h-0.5 bg-gray-50 mx-auto mt-20"></div>

        <div className="relative">
          <span
            className={`absolute top-10 right-0 w-0.5 h-10 bg-[#1d3557] rounded-full transition-transform duration-500 ease-in-out ${activePosition}`}
          ></span>

          <ul className="text-center space-y-6 mt-6 font-jakarta">
            <li className="flex">
              <Link
                to="/"
                className="flex items-center justify-center text-black text-lg mx-auto gap-4 relative group duration-300"
              >
                <img src={HomeIcon} alt="Home Icon" className="w-6 h-6" />
                Home
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1d3557] transition-all duration-300 group-hover:w-full translate-y-2"></span>
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/about"
                className="flex items-center justify-center text-black text-lg mx-auto gap-4 relative group duration-300"
              >
                <img src={AboutIcon} alt="About Icon" className="w-6 h-6" />
                About
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1d3557] transition-all duration-300 group-hover:w-full translate-y-2"></span>
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/project"
                className="flex items-center text-black justify-center text-lg mx-auto gap-4 relative group duration-300"
              >
                <img src={ProjectIcon} alt="Project Icon" className="w-6 h-6" />
                Project
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1d3557] transition-all duration-300 group-hover:w-full translate-y-2"></span>
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/contact"
                className="flex items-center text-black justify-center text-lg mx-auto gap-4 relative group duration-300"
              >
                <img src={ContactIcon} alt="Contact Icon" className="w-6 h-6" />
                Contact
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1d3557] transition-all duration-300 group-hover:w-full translate-y-2"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
