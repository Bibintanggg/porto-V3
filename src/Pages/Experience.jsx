import { useState} from "react";
import Sidebar from "../Component/Sidebar";
import { useDarkMode } from "../Component/DarkMode";
import { useNavigate } from "react-router-dom";
import { BentoGrid } from "../components/magicui/bento-grid";
import { Calendar } from "lucide-react";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";


function Experience() {

  const files = [
    {
      name: "bitcoin.pdf",
      body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
      name: "finances.xlsx",
      body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
      name: "logo.svg",
      body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
      name: "keys.gpg",
      body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
      name: "seed.txt",
      body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
  ];
   
  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      ),
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get notified when something happens.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
      ),
    },
    {
      Icon: Share2Icon,
      name: "Integrations",
      description: "Supports 100+ integrations and counting.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: "Learn more",
      background: (
        <Calendar
          mode="single"
          selected={new Date(2022, 4, 11, 0, 0, 0)}
          className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
        />
      ),
    },
  ];
 

    const { darkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate()
    const handleNavigate = (path) => {
      navigate(path)
    }

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

            <div className={`flex items-center md:flex-row md:items-center gap-4 pt-7 text-base
                        ${isOpen ? "" : "flex items-center justify-center"}`}>
                        <button 
                            className={`w-24 h-10 rounded-lg font-jakarta
                            ${darkMode ? 'text-white bg-gradient-to-r from-black/30 to-black/30' : 'text-black bg-white'}
                            ${isOpen ? "" : "ml-64"}`}
                            onClick={() => handleNavigate("/project")}>
                            Kembali
                        </button>
                        <div className="flex items-center font-jakarta gap-2 text-center md:text-left">
                            <p className={`text-opacity-40 
                                ${darkMode ? 'text-white' : 'text-black'}
                                ${isOpen ? "text-white" : "text-white"}`}>
                                About 
                            </p>
                            <span className={`${isOpen ? "text-white " : "mt-6 text-white "}`}>&gt; Experience</span>
                        </div>
                    </div>
                    
            
          </div>
        </div>
      </div>
    )
}

export default Experience;