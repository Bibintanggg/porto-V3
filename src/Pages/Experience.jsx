import { useState } from "react";
import Sidebar from "../Component/Sidebar";
import { useDarkMode } from "../Component/DarkMode";
import { useNavigate } from "react-router-dom";
import { BentoDemo } from "../Component/Bento";

function Experience() {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [toggleButton, setToggleButton] = useState(false);

  const toggleView = () => {
    setToggleButton(!toggleButton);
  }

  const openModal = (education) => {
    setSelectedEducation(true)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedEducation(null)
    setIsModalOpen(false)
  }

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

          <div className="flex flex-col items-center ">
          <p className={`font-poppins text-3xl text-center font-bold text-white`}>Experience</p>
          <hr className="w-20 h-1 rounded-full bg-white mt-2"/>
          </div>

          <div className="flex justify-center items-center mt-5">
            <div className="text-white flex">
              <div className="bg-red-500 flex gap-10 text-xl font-poppins w-96 rounded-2xl justify-center 
              h-10 items-center">
                <button 
                onClick={toggleView}
                className="hover:bg-black rounded-2xl w-96 h-8 ml-3 transition-all duration-300 ease-in-out">01 ⎯ Experience</button>

                <button 
                onClick={toggleView}
                className="hover:bg-black rounded-2xl w-96 h-8 mr-3 transition-all duration-300 ease-in-out">Education ⎯ 02</button>
              </div>
            </div>
          </div>

          {toggleButton ? (
            <div>
              
            </div>
          ) : (
            <div>
              
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Experience;