import { useState} from "react";
import Sidebar from "../Component/Sidebar";
import { useDarkMode } from "../Component/DarkMode";
import { useNavigate } from "react-router-dom";
import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
import { BentoDemo } from "../Component/Bento";


function Experience() {
    const { darkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate()
    const handleNavigate = (path) => {
      navigate(path)
    }

    return (
      <div
        className={`relative min-h-screen ${
          darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
        }`}
      >
        <div className="flex relative z-10">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          <div
            className={`flex-1 p-8 transition-all duration-300 ${
              isOpen ? "" : "-ml-[17rem]"
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
                EXPERIENCE
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

            <div
              className={`flex items-center md:flex-row md:items-center gap-4 pt-7 text-base
                        ${isOpen ? "" : "flex items-center justify-center"}`}
            >
              <button
                className={`w-24 h-10 rounded-lg font-jakarta
                              ${
                                darkMode
                                  ? "text-white bg-gradient-to-r from-black/30 to-black/30"
                                  : "text-black bg-white"
                              }
                              ${isOpen ? "" : "ml-64"}`}
                onClick={() => handleNavigate("/project")}
              >
                Kembali
              </button>
              <div className="flex items-center font-jakarta gap-2 text-center md:text-left">
                <p
                  className={`text-opacity-40 
                                ${darkMode ? "text-white" : "text-black"}
                                ${isOpen ? "text-white" : "text-white"}`}
                >
                  About
                </p>
                <span
                  className={`${isOpen ? "text-white " : "mt-6 text-white "}`}
                >
                  &gt; Experience
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <BentoDemo />
              <div className="w-1 h-32 bg-white -mt-44 ml-32"></div>
              <div className="w-44 h-1 bg-white -mt-1 ml-32 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Experience;