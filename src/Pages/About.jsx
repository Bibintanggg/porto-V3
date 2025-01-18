import { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar.jsx";
import FotoBintang from "../assets/Image/Image1.png";
import CertiIcon from "../assets/Icon/medal.svg";
import ProjectIcon from "../assets/Icon/dashboard.svg";
import ExperienceIcon from "../assets/Icon/experience.svg";
import ShareIcon from "../assets/Icon/share.svg";
import TechIcon from "../assets/Icon/tech.svg";
import FrameworkIcon from "../assets/Icon/framework.svg";
import ToolsIcon from "../assets/Icon/tools.svg";
import { useDarkMode } from "../Component/DarkMode.jsx";

import BootstrapIcon from "../assets/TechIcon/Bootstrap.svg";
import CSS3Icon from "../assets/TechIcon/CSS3.svg";
import Figma from "../assets/TechIcon/Figma.svg";
import GithubIcon from "../assets/TechIcon/GitHub.svg";
import HTML5Icon from "../assets/TechIcon/HTML5.svg";
import JavaScriptIcon from "../assets/TechIcon/JavaScript.svg";
import LaravelIcon from "../assets/TechIcon/Laravel.svg";
import MaterialUiIcon from "../assets/TechIcon/Material UI.svg";
import MYSQLIcon from "../assets/TechIcon/MYSQL.svg";
import PHPIcon from "../assets/TechIcon/PHP.svg";
import ReactIcon from "../assets/TechIcon/React.svg";
import TailwindIcon from "../assets/TechIcon/TailwindCSS.svg";
import TrelloIcon from "../assets/TechIcon/Trello.svg";

function About() {
  const [activeStack, setActiveStack] = useState("FRAMEWORK");
  const { darkMode, toggleDarkMode } = useDarkMode();

  const dataProject = [
    {
      id: 1,
      title: "TOTAL PROJECTS",
      value: 5,
      desc: "TOTAL PROJECT I HAVE COMPLETED",
      icon: ProjectIcon,
    },
    {
      id: 2,
      title: "CERTIFICATES",
      value: 5,
      desc: "TOTAL CERTIFICATES I HAVE ACHIEVED",
      icon: CertiIcon,
    },
    {
      id: 3,
      title: "EXPERIENCE",
      value: 5,
      desc: "TOTAL EXPERIENCES I HAVE GAINED",
      icon: ExperienceIcon,
    },
  ];

  const stack = [
    {
      id: 1,
      title: "TECH STACK",
      icon: FrameworkIcon,
    },
    {
      id: 2,
      title: "TOOLS",
      icon: ToolsIcon,
    },
  ];

  const toolsStack = [
    { id: 1, name: "GITHUB", icon: GithubIcon },
    { id: 2, name: "TRELLO", icon: TrelloIcon },
  ];

  const TechStack = [
    { id: 1, name: "BOOTSTRAP", icon: BootstrapIcon },
    { id: 2, name: "CSS", icon: CSS3Icon },
    { id: 3, name: "FIGMA", icon: Figma },
    { id: 4, name: "HTML", icon: HTML5Icon },
    { id: 5, name: "JAVASCRIPT", icon: JavaScriptIcon },
    { id: 6, name: "LARAVEL", icon: LaravelIcon },
    { id: 7, name: "MATERIALUI", icon: MaterialUiIcon },
    { id: 8, name: "MYSQL", icon: MYSQLIcon },
    { id: 9, name: "PHP", icon: PHPIcon },
    { id: 10, name: "REACT", icon: ReactIcon },
    { id: 11, name: "TAILWINDCSS", icon: TailwindIcon },
  ];

  const displayedStack = activeStack === "TOOLS" ? toolsStack : TechStack;

  return (
    <div className={`relative min-h-screen h-screen flex ${darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"}`}>
      <div className="w-[250px] h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      <div className="ml-[250px] w-full overflow-y-auto">
        <div className="bg-transparent p-8">
          <div className="flex justify-between text-left">
            <h1 className={`text-base font-semibold font-poppins pt-2 ${darkMode ? "text-white" : "text-black"}`}>
              ABOUT
            </h1>
            <div className={`text-right ${darkMode ? "text-white" : "text-black"}`}>
              <h2 className={`text-base font-semibold font-poppins ${darkMode ? "text-white" : "text-black"}`}>
                Hello, Bintang!
              </h2>
              <p className={`-translate-y-2 ${darkMode ? "text-white" : "text-black"}`}>Role &gt; Student</p>
            </div>
          </div>
          <div className={`w-full h-0.5 mx-auto opacity-25 ${darkMode ? "bg-white" : "bg-black"}`}></div>

          <div className="flex flex-col items-center h-auto gap-5 p-10">
            <div className="flex items-center gap-5">
              <div
                className={`w-[60rem] h-[19rem] items-center mx-auto rounded-3xl backdrop-blur-md backdrop-brightness-75 ${darkMode
                    ? "bg-gradient-to-r from-black/50 to-black/20 "
                    : "bg-white"
                  }`}
              >
                <div className="p-6 flex items-center gap-4">
                  <h1 className={`font-bold text-xl font-jakarta ${darkMode ? 'text-white' : 'text-black'}`}>About Me</h1>
                  <div className="relative flex items-center">
                    <div className={`absolute w-24 h-0.5 left-1 ${darkMode ? "bg-white" : "bg-black"}`}></div>
                  </div>
                </div>
                <div className="px-16">
                  <div className="flex items-start gap-32">
                    <img src={FotoBintang} className="w-48 h-48 rounded-full" />
                    <div className="pt-3">
                      <p className={`max-w-lg tracking-wide text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                        <span className="ml-10 font-jakarta">Hello There!</span> I'm Bintang Yudha Putra Purnomo, a
                        creative front-end developer and detail-oriented UI/UX designer based in the bustling city of
                        Jakarta, Indonesia.
                      </p>
                      <p className={`max-w-lg tracking-wide mt-5 text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                        <span className="ml-10 font-jakarta">I'm passionate</span> about turning innovative ideas into
                        functional designs and writing clean, efficient code to create seamless user experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`w-[60rem] h-48 mt-10 rounded-3xl flex gap-10 items-center justify-center backdrop-blur-md backdrop-brightness-75 ${darkMode
                  ? "bg-gradient-to-r from-black/30 to-black/10"
                  : "bg-white"
                }`}
            >
              {dataProject.map((project) => (
                <div
                  key={project.id}
                  className={`p-4 rounded-lg h-36 w-[17rem] backdrop-blur-md backdrop-brightness-75 ${darkMode
                      ? "bg-gradient-to-r from-black/40 to-black/20 "
                      : "bg-[#f2f2fc]"
                    }`}
                >
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-[9.75rem]">
                      <div className={`w-14 h-14 rounded-full justify-center items-center flex 
                        ${darkMode ? 'bg-gray-50/20 invert brightness-75' : 'bg-slate-50'}`}>
                        <img src={project.icon}/>
                      </div>
                      <p className={`font-poppins ${darkMode ? 'text-white' : 'text-black'}`}>{project.value}</p>
                    </div>
                    <p className={`text-sm translate-y-3 font-poppins ${darkMode ? 'text-white' : 'text-black'}`}>{project.title}</p>
                    <div className="translate-y-4 font-poppins flex gap-5">
                      <span className={`text-[0.65rem] ${darkMode ? 'text-white' : 'text-black'}`}>{project.desc}</span>
                      <img src={ShareIcon} alt="" className="w-3 opacity-45" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-center">
                <p className={`text-xl font-bold mt-10 font-poppins ${darkMode ? 'text-white' : 'text-black'}`}>Tech Stack</p>
                <span className={`text-sm font-jakarta ${darkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>

              <div>
                <div className="items-center justify-center flex pt-5">
                  <div className={`w-24 h-14 rounded-lg flex justify-center items-center backdrop-blur-xl backdrop-brightness-100
                    ${darkMode ? 'bg-gradient-to-r from-black/50 to-black/20' : 'bg-white'}`}>
                    <div className={`w-20 h-10 rounded-lg flex justify-center items-center backdrop-blur-md backdrop-brightness-75
                      ${darkMode ? 'bg-gradient-to-r from-black/30 to-black/10' : 'bg-gray-100'}`}>
                      <img src={TechIcon} alt="Tech" className={`w-7 ${darkMode ? 'invert brightness-75' : 'text-black'}`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-2">
                  <button className={`flex items-center justify-center gap-11 w-[360px] h-[65px] rounded-lg backdrop-blur-xl backdrop-brightness-100
                    ${darkMode ? 'bg-gradient-to-r from-black/30 to-black/10' : 'bg-white'}`}>
                    {stack.map((items) => (
                      <div
                        key={items.id}
                        onClick={() => setActiveStack(items.title)}
                        className={`flex items-center gap-2 w-36 h-10 rounded-md cursor-pointer ${activeStack === items.title ? "bg-blue-100" : ""
                          } ${darkMode ? 'text-white bg-gradient-to-r from-black/50 to-black/30' : 'text-black bg-gray-100 '}`}
                      >
                        <div className="flex items-center justify-center mx-auto gap-2">
                          <img src={items.icon} alt="" className={`w-6 h-6 ${darkMode ? 'invert brightness-75' : ''}`} />
                          <p className="text-sm">{items.title}</p>
                        </div>
                      </div>
                    ))}
                  </button>
                </div>

                <div className="grid grid-cols-6 gap-4 mt-5 rounded-lg">
                  {displayedStack.map((icons) => (
                    <div key={icons.id} className="flex items-center justify-center">
                      <div
                        className={`relative flex items-center justify-center w-48 h-6 rounded p-10 gap-3 overflow-hidden group transition-all duration-300 ease-in-out backdrop-blur-md backdrop-brightness-75 ${darkMode
                            ? "bg-gradient-to-r from-black/30 to-black/20 border border-white/10"
                            : "bg-white"
                          }`}
                      >
                        <div className="absolute top-0 left-0 h-full bg-gray-200 w-0 transition-all duration-500 group-hover:w-[100%]"></div>

                        <div className="relative flex items-center justify-center gap-3">
                          <img
                            src={icons.icon}
                            alt={icons.name}
                            className="w-10 h-20 transition-transform duration-700 ease-in-out group-hover:-translate-x-1"
                          />
                          <span className="text-xs text-black mt-2 font-poppins transition-transform duration-700 ease-in-out group-hover:translate-x-2">
                            {icons.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;