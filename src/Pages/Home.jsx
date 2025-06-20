import { useState, useEffect } from "react";
import Sidebar from "../Component/Sidebar.jsx";
import WavingHand from "../assets/Image/wavinghand.png";
import InstagramIcon from "../assets/Icon/instagram.svg";
import Linkedinicon from "../assets/Icon/linkedin.svg";
import FotoBintang from "../assets/Image/Image1.png";
import ProjectIcon from "../assets/Icon/project.svg";
import ShareIcon from "../assets/Icon/share.svg";
import Particles from "../Component/Particles.jsx";
import { IconCloud } from "../components/magicui/icon-cloud.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../Component/DarkMode.jsx";
import { Meteors } from "../components/magicui/meteors.jsx";
import { motion } from "framer-motion";

const hire = [
  {
    id: 1,
    text: "Project",
    logo: ShareIcon,
    path: "/project",
    animation: "fade-up",
    duration: 5000,
  },
  {
    id: 2,
    text: "Hire Me",
    logo: ProjectIcon,
    path: "/about",
    animation: "fade-up",
    duration: 2000,
  },
];

const slugs = [
  "javascript",
  "dart",
  "react",
  "html5",
  "css3",
  "firebase",
  "vercel",
  "git",
  "laravel",
  "tailwindcss",
  "materialui",
  "bootstrap",
  "github",
  "visualstudiocode",
  "figma",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

function Home() {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    AOS.init();
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleClick = (nav) => {
  if (item.text === 'Hire Me') {
    const link = document.createElement('a');
    link.href = nav.path;
    link.download = 'cv.pfg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (nav.text === 'My CV') {
    window.open(nav.path, '_blank');
  }
};

  return (
    <div
      className={`relative min-h-screen ${
        darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
      }`}
    >
      <div className="flex relative z-10 min-h-screen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <Meteors number={30} />
        </div>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: fadeIn ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`flex-1 p-8 transition-all duration-500 ease-in-out ${
            isOpen ? "" : "-ml-[2rem]"
          }`}
        >
          <div
            className={`flex justify-between text-left ${
              isOpen ? "opacity-100" : "opacity-100"
            }`}
          >
            <h1
              className={`text-base font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              } 
            ${isOpen ? "ml-10" : "ml-10"} font-poppins pt-2`}
            >
              HOME
            </h1>
            <div className={`text-right ${isOpen ? "" : "mr-10"}`}>
              <h2
                className={`text-base font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                } font-poppins`}
              >
                Hello, Bintang !
              </h2>
              <p
                className={`-translate-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Role &gt; Student
              </p>
            </div>
          </div>
          <div
            className={`w-full h-0.5 ${darkMode ? "bg-white" : "bg-black"} ${
              isOpen ? "" : "w-[100%]"
            } mx-auto opacity-25`}
          ></div>

          <div className="flex items-center justify-between h-96 gap-5 p-10">
            <div className="pt-16 flex items-center gap-5">
              <div className="w-1 h-10 bg-black rounded-full"></div>
              <div className="pt-20">
                <h1
                  className={`text-3xl font-poppins font-bold flex gap-2 ${
                    darkMode ? "text-white" : "text-[#1d3557]"
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Hii, I'm Bintang Yudha!
                  <img
                    src={WavingHand}
                    className="w-8 h-8 transition-all origin-[70%_70%] animate-wave"
                  />
                </h1>

                <p
                  className={`font-jakarta ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  A student with a passion in programming
                </p>

                <div className="flex gap-5 pt-2 mb-2">
                  {hire.map((nav) => (
                    <a
                      key={nav.id}
                      className={`relative flex items-center w-32 h-10 ${
                        darkMode
                          ? "bg-gray-50 text-black"
                          : "bg-white text-black"
                      } rounded-lg overflow-hidden group transition-all duration-300 ease-in-out`}
                      onClick={() => handleNavigate(nav.path, '_blank')}
                      data-aos={nav.animation}
                      data-aos-duration="2000"
                    >
                      <div
                        className={`absolute top-0 left-0 h-full ${
                          darkMode ? "bg-gray-300" : "bg-slate-300"
                        } w-0 transition-all duration-500 group-hover:w-[100%]`}
                      ></div>
                      <div className="relative flex items-center justify-center w-full gap-2">
                        <p className="text-base font-jakarta">{nav.text}</p>
                        <img
                          src={nav.logo}
                          className="w-4 transition-transform duration-700 ease-in-out group-hover:rotate-45"
                        />
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex gap-3 translate-y-3">
                  <a href="http://instagram.com/bintang.ydha_" target="_blank" data-aos="fade-up" data-aos-duration="2500">
                    <img
                      src={InstagramIcon}
                      className={`w-6 animate-bounce ease-in-out hover:opacity-20 
                      transition hover:duration-100 ${
                        darkMode ? "invert brightness-200" : ""
                      }`}
                    />
                  </a>

                  <a href="https://www.linkedin.com/in/bintang-yudha-putra-purnomo-120117324/" target="_blank" data-aos="fade-up" data-aos-duration="3000">
                    <img
                      src={Linkedinicon}
                      className={`w-6 animate-bounce  ease-in-out hover:opacity-20 
                      transition hover:duration-100 ${
                        darkMode ? "invert brightness-200" : ""
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto pt-20 rounded-md">
              <IconCloud images={images} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
