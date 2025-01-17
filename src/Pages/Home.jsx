import Sidebar from "../Component/Sidebar.jsx";
import Particle from "../Component/particle.jsx";
import WavingHand from "../assets/Image/wavinghand.png";
import InstagramIcon from "../assets/Icon/instagram.svg";
import Linkedinicon from "../assets/Icon/linkedin.svg";
import FotoBintang from "../assets/Image/Image1.png";
import ProjectIcon from "../assets/Icon/project.svg";
import ShareIcon from "../assets/Icon/share.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDarkMode } from "../Component/DarkMode.jsx"; 

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

function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode(); 

  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Particle className="absolute top-0 left-0 w-full h-full -z-10" />

      <div className="flex relative z-10">
        <Sidebar />

        <div className="flex-1 bg-transparent p-8">
          <div className="flex justify-between text-left">
            <h1 className={`text-base font-semibold ${darkMode ? 'text-black' : 'text-gray-800'} font-poppins pt-2`}>
              HOME
            </h1>
            <div className="text-right">
              <h2 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} font-poppins`}>
                Hello, Bintang !
              </h2>
              <p className={`-translate-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Role &gt; Student
              </p>
            </div>
          </div>
          <div className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-black'} mx-auto opacity-25`}></div>

          <div className="flex items-center justify-between h-96 gap-5 p-10">
            <div className="pt-16 flex items-center gap-5">
              <div
                className={`w-4 h-4 ${darkMode ? 'bg-white' : 'bg-[#1d3557]'} rounded-full`}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0"
              >
                <div className={`w-1 h-36 mx-auto rounded-full bg-gradient-to-b ${darkMode ? 'from-white' : 'from-[#1d3557]'} to-transparent`}></div>
              </div>

              <div className="pt-20">
                <h1
                  className={`text-3xl font-poppins font-bold flex gap-2 ${darkMode ? 'text-white' : 'text-[#1d3557]'}`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Hii, I'm Bintang Yudha!
                  <img src={WavingHand} className="w-8 h-8" />
                </h1>

                <p
                  className={`font-jakarta ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  A student with a passion in programming
                </p>

                <div className="flex gap-5 pt-2 mb-2">
                  {hire.map((nav) => (
                    <button
                      key={nav.id}
                      className={`relative flex items-center w-32 h-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg overflow-hidden group transition-all duration-300 ease-in-out`}
                      onClick={() => handleNavigate(nav.path)}
                      data-aos={nav.animation}
                      data-aos-duration="2000"
                    >
                      <div
                        className={`absolute top-0 left-0 h-full ${darkMode ? 'bg-gray-700' : 'bg-slate-300'} w-0 transition-all duration-500 group-hover:w-[100%] skew-x-12`}
                      ></div>
                      <div className="relative flex items-center justify-center w-full gap-2">
                        <p className="text-base font-jakarta">{nav.text}</p>
                        <img
                          src={nav.logo}
                          className="w-4 transition-transform duration-700 ease-in-out group-hover:rotate-45"
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 translate-y-3">
                  <a href="" data-aos="fade-up" data-aos-duration="2500">
                    <img
                      src={InstagramIcon}
                      className="w-6 animate-bounce duration-100 ease-in-out hover:opacity-20 transition hover:duration-100"
                    />
                  </a>

                  <a href="" data-aos="fade-up" data-aos-duration="3000">
                    <img
                      src={Linkedinicon}
                      className="w-6 animate-bounce duration-100 ease-in-out hover:opacity-20 transition hover:duration-100"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto pt-20 rounded-md">
              <img src={FotoBintang} className="w-72 h-72" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;