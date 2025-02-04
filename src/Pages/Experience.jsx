import { useState} from "react";
import Sidebar from "../Component/Sidebar";
import { useDarkMode } from "../Component/DarkMode";


function Experience() {
    const { darkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`relative min-h-screen ${darkMode ? 'bg-[#131523]' : 'bg-[#f2f2fc]'}`}>
        <div className="flex relative z-10">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
  
          <div className={`flex-1 p-8 transition-all duration-300 ${isOpen ? '' : '-ml-[17rem]'}`}>
            <div className={`flex justify-between text-left ${isOpen ? 'opacity-100' : 'opacity-100'}`}>
              <h1 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} 
              ${isOpen ? "ml-10" : "ml-10"} font-poppins pt-2`}>
                EXPERIENCE
              </h1>
              <div className={`text-right ${isOpen ? "" : "mr-10"}`}>
                <h2 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} font-poppins`}>
                  Hello, Bintang !
                </h2>
                <p className={`-translate-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Role &gt; Student
                </p>
              </div>
            </div>
            <div className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-black'} ${isOpen ? "" : "w-[100%]"} mx-auto opacity-25`}></div>
  
            
          </div>
        </div>
      </div>
    )
}

export default Experience;