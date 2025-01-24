import React from "react";
import { useNavigate } from "react-router-dom";

const Connect = ({ title, darkMode, platforms, link }) => {
  const navigate = useNavigate()

  const handleButtonClick = (link) => {
    if(link.startsWith('http')) {
      window.open(link, '_blank')
    } else {
      navigate(link)
    }
  }
  return (
    <div className="flex justify-center font-poppins">
      <div
        className={`w-[35rem] min-h-[1rem] rounded-lg ${darkMode ? "" : ""}`}
      >
        <div className="p-10">
          <h1
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h1>
          <button
            className="mt-4 flex items-center"
            onClick={() => handleButtonClick(platforms[0].link)}
          >
            <div
              className={`w-[25rem] h-24 isolate aspect-video bg-white/20 shadow-lg ${
                darkMode ? "" : "bg-gray-100"
              } rounded-lg flex items-center p-4`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center isolate aspect-video bg-white/20 shadow-lg ${
                  darkMode ? "bg-gray-600" : "bg-white"
                }`}
              >
                <img
                  src={platforms[0].icon}
                  className="w-6 h-6"
                  alt={platforms[0].title}
                />
              </div>
              <div className="ml-4">
                <h1 className={`${darkMode ? "text-white" : "text-black"}`}>
                  {platforms[0].title}
                </h1>
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {platforms[0].description}
                </span>
              </div>
            </div>
          </button>
          <div className="mt-6 flex gap-4 cursor-pointer">
            {platforms.slice(1).map((platform, index) => (
              <div
                key={index}
                className={`w-full h-24 isolate aspect-video bg-white/20 shadow-lg ${
                  darkMode ? "" : "bg-gray-100"
                } rounded-lg flex items-center p-4`}
                onClick={() => handleButtonClick(platform.link)}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center isolate aspect-video bg-white/20 shadow-lg ${
                    darkMode ? "" : "bg-white"
                  }`}
                >
                  <img
                    src={platform.icon}
                    className="w-6 h-6"
                    alt={platform.title}
                  />
                </div>
                <div className="ml-2">
                  <h1 className={`${darkMode ? "text-white" : "text-black"}`}>
                    {platform.title}
                  </h1>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {platform.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
