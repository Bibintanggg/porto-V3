import React from "react";

const Connect = ({ title, darkMode, platforms }) => {
  return (
    <div className="mt-10 flex justify-center font-poppins">
      <div className={`w-[35rem] h-[30rem] rounded-lg ${darkMode ? "" : ""}`}>
        <div className="p-10">
          <h1 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
            {title}
          </h1>

          <div className="mt-4">
                      <div className={`w-full h-24 isolate aspect-video bg-white/20 shadow-lg ${darkMode ? "" : "bg-gray-100"} rounded-lg flex items-center p-4`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center 
                isolate aspect-video bg-white/20 shadow-lg ${darkMode ? "bg-gray-600" : "bg-white"}`}>
                <img src={platforms[0].icon} className="w-6 h-6" alt={platforms[0].title} />
              </div>
              <div className="ml-4">
                <h1 className={`${darkMode ? "text-white" : "text-black"}`}>{platforms[0].title}</h1>
                <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{platforms[0].description}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <div className={`w-full h-24 isolate aspect-video bg-white/20 shadow-lg   ${darkMode ? "" : "bg-gray-100"} rounded-lg flex items-center p-4`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center 
                isolate aspect-video bg-white/20 shadow-lg ${darkMode ? "" : "bg-white"}`}>
                <img src={platforms[1].icon} className="w-6 h-6" alt={platforms[1].title} />
              </div>
              <div className="ml-2">
                <h1 className={`${darkMode ? "text-white" : "text-black"}`}>{platforms[1].title}</h1>
                <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{platforms[1].description}</span>
              </div>
            </div>

            <div className={`w-full h-24 isolate aspect-video bg-white/20 shadow-lg ${darkMode ? "" : "bg-gray-100"} rounded-lg flex items-center p-4`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center 
                isolate aspect-video bg-white/20 shadow-lg ${darkMode ? "" : "bg-white"}`}>
                <img src={platforms[2].icon} className="w-6 h-6" alt={platforms[2].title} />
              </div>
              <div className="ml-2">
                <h1 className={`${darkMode ? "text-white" : "text-black"}`}>{platforms[2].title}</h1>
                <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{platforms[2].description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;