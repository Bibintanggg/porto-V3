import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connect = ({ title, darkMode, platforms }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <div className="flex justify-center font-poppins">
      <div className={`w-[35rem] min-h-[1rem] rounded-lg`}>
        <div className="p-10">
          <h1
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h1>


          {isOpen && (
            <div className="mt-6 flex flex-col gap-4 cursor-pointer">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`w-full h-24 isolate aspect-video shadow-lg ${
                    darkMode
                      ? "bg-gradient-to-r from-black/20 to-black/30 "
                      : "bg-gray-100"
                  } rounded-lg flex items-center p-4`}
                  onClick={() => handleButtonClick(platform.link)}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${
                      darkMode ? "bg-gray-50 bg-opacity-15" : "bg-white"
                    }`}
                  >
                    <img
                      src={platform.icon}
                      className="w-6 h-6 invert"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Connect;
