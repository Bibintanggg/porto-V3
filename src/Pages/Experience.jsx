import { useState } from "react";
import Sidebar from "../Component/Sidebar";
import { useDarkMode } from "../Component/DarkMode";
import { useNavigate } from "react-router-dom";
import { BentoDemo } from "../Component/Bento";

function Experience() {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <div
      className={`relative min-h-screen ${darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
        }`}
    >
      <div className="flex relative z-10">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div
          className={`flex-1 p-8 transition-all duration-300 ${isOpen ? "" : "-ml-[17rem]"
            }`}
        >
          <div
            className={`flex justify-between text-left ${isOpen ? "opacity-100" : "opacity-100"
              }`}
          >
            <h1
              className={`text-base font-semibold ${darkMode ? "text-white" : "text-gray-800"
                } 
                            ${isOpen ? "ml-10" : "ml-10"} font-poppins pt-2`}
            >
              EXPERIENCE
            </h1>
            <div className={`text-right ${isOpen ? "" : "mr-10"}`}>
              <h2
                className={`text-base font-semibold ${darkMode ? "text-white" : "text-gray-800"
                  } font-poppins`}
              >
                Hello, Bintang !
              </h2>
              <p
                className={`-translate-y-2 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Role &gt; Student
              </p>
            </div>
          </div>
          <div
            className={`w-full h-0.5 ${darkMode ? "bg-white" : "bg-black"} ${isOpen ? "" : "w-[100%]"
              } mx-auto opacity-25`}
          ></div>

          <div
            className={`flex items-center md:flex-row md:items-center gap-4 pt-7 text-base
                                    ${isOpen ? "" : "flex items-center justify-center"}`}
          >
            <button
              className={`w-24 h-10 rounded-lg font-jakarta
                                        ${darkMode
                  ? "text-white bg-gradient-to-r from-black/30 to-black/30"
                  : "text-black bg-white"
                }
                                        ${isOpen ? "" : "ml-64"}`}
              onClick={() => handleNavigate("/about")}
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
                className={`${isOpen ? "text-white" : "text-white"}`}
              >
                &gt; Experience
              </span>
            </div>
          </div>

          {/* Timeline Section - Horizontal ZigZag dengan Connector */}
          <div className="mt-24 px-8">
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute left-0 w-full h-1 bg-white opacity-70" style={{ top: '50%' }}></div>

              {/* Timeline Items Container */}
              <div className="flex justify-between relative z-10">
                {/* Timeline Item 1 - Top */}
                <div className="flex flex-col items-center">
                  <div className="w-64 mb-6">
                    <BentoDemo />
                  </div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="h-16 w-1 bg-white opacity-0"></div>
                </div>

                {/* Timeline Item 2 - Bottom */}
                <div className="flex flex-col items-center">
                  <div className="h-16 w-1 bg-white opacity-0"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="w-64 mt-6">
                    <BentoDemo />
                  </div>
                </div>

                {/* Timeline Item 3 - Top */}
                <div className="flex flex-col items-center">
                  <div className="w-64 mb-6">
                    <BentoDemo />
                  </div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="h-16 w-1 bg-white opacity-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;