import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FotoBintang from "../assets/Image/Image1.png";
import HomeIcon from "../assets/Icon/home.svg";
import AboutIcon from "../assets/Icon/about.svg";
import ProjectIcon from "../assets/Icon/project.svg";
import ContactIcon from "../assets/Icon/contact.svg";

function Sidebar() {
  const location = useLocation(); // Mengambil lokasi rute saat ini
  const [activePosition, setActivePosition] = useState("translate-y-0"); // State posisi garis vertikal

  // Mapping rute ke posisi vertikal
  const activeRoutes = {
    "/": "-translate-y-10",
    "/about": "translate-y-2",
    "/project": "translate-y-14",
    "/contact": "translate-y-[110px]",
  };

  // Update posisi garis saat lokasi berubah
  useEffect(() => {
    const newPosition = activeRoutes[location.pathname] || "translate-y-0";
    setActivePosition(newPosition);
  }, [location.pathname]);

  return (
    <section>
      <div className="relative w-60 h-[100vh] bg-[#ffff] pt-10">
      
        <div className="bg-red-50 w-32 h-32 rounded-full items-center mx-auto overflow-hidden">
          <img
            src={FotoBintang}
            className="w-full h-full bg-repeat bg-cover"
            alt="Foto Bintang"
          />
        </div>

        <div>
          <h1 className="text-black text-center mt-4 text-xl font-jakarta font-medium">
            Bintang Yudha
          </h1>
        </div>

        <div className="w-48 h-0.5 bg-gray-50 mx-auto mt-8"></div>

        <div className="relative">
          {/* Garis vertikal */}
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
