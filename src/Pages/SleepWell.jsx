import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SleepWellImage from "../assets/Image/sleepwell.png";
import StarIcon from "../assets/Icon/star.svg"
import Sidebar from "../Component/Sidebar";
import CodeIcon from "../assets/Icon/code.svg";
import GithubIcon from "../assets/TechIcon/GitHub.svg";
import ShareIcon from "../assets/Icon/share.svg";
import { useDarkMode } from "../Component/DarkMode";

import BlenderIcon from "../assets/Icon/Blender.svg"
import TailwindIcon from "../assets/TechIcon/TailwindCSS.svg";
import ReactIcon from "../assets/TechIcon/React.svg";
import FirebaseIcon from "../assets/TechIcon/Firebase.svg"
import ThreeJsIcon from "../assets/TechIcon/Three.js.svg"
import CSS3Icon from "../assets/TechIcon/CSS3.svg";
import ChartJSIcon from "../assets/TechIcon/chartjs.svg";
import ViteIcon from "../assets/TechIcon/vitejs.svg";

const valueProject = [
    {
        id: 1,
        title: "Musik Relaksasi",
    },
    {
        id: 2,
        title: "Artikel Kesehatan Tidur",
    },
    {
        id: 3,
        title: "Dongeng Online",
    },
    {
        id: 4,
        title: "Tes Kualitas Tidur",
    }
];

const sleepWellProject = {
    id: 1,
    title: "Website Kesehatan Tidur",
    desc: "Sebuah platform edukasi yang bertujuan meningkatkan kesadaran akan pentingnya tidur yang sehat, khususnya bagi pengidap insomnia dan gangguan tidur. Dibuat sebagai proyek dalam bootcamp untuk eksplorasi pengembangan web.",
    image: SleepWellImage,
    title2_tech: "Technologies Used",
    image2_tech: CodeIcon,
    tech_used: ["TailwindCSS", "ReactJS", "CSS", "DataAOS", "Vite", "Blender", "ThreeJS", "Firebase"],
    tech_icon: [TailwindIcon, ReactIcon, CSS3Icon, ChartJSIcon, ViteIcon, BlenderIcon, ThreeJsIcon, FirebaseIcon],
    total_tech: 8,
    tech_text: "Total Teknologi",
    feature_tech: "Fitur Utama",
    total_feature: 4,
    demo_text: ["Live Demo", "Github"],
    demo_icon: [ShareIcon, GithubIcon],
    path: "https://sleepwell-calypso.vercel.app/",
    gitPath: "https://github.com/mybezen/sleepWell",
};

function SleepWell() {
    const { darkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className={`relative min-h-screen flex transition-all duration-300 ease-in-out 
            overflow-x-hidden
            ${darkMode ? 'text-white bg-[#131523]' : 'text-black bg-[#f2f2fc]'}
            ${isOpen ? "" : "-ml-[65%]"}`}>
            
            <div className={`w-[250px] h-screen fixed z-50
                ${isOpen ? "" : ""}`}>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Main Content */}
            <div className={`w-full md:ml-[250px] overflow-y-auto px-4 md:px-8 z-10`}>
                <div className="bg-transparent py-8">
                    {/* Header */}
                    <div className={`flex  md:flex-row md:justify-between text-left gap-4 md:gap-0
                        ${isOpen ? "" : "flex justify-between items-center"}`}>
                        <h1 className={`text-base font-semibold font-poppins pt-2 
                            ${darkMode ? 'text-white' : 'text-black'} 
                            ${isOpen ? "" : "ml-64"}`}>
                            PROJECT
                        </h1>
                        <div className="text-right">
                            <h2 className={`text-base font-semibold font-poppins 
                                ${darkMode ? 'text-white' : 'text-black'}`}>
                                Hello, Bintang!
                            </h2>
                            <p className="-translate-y-2">Role &gt; Student</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={`w-full h-0.5 mx-auto opacity-25
                        ${darkMode ? 'bg-white' : 'bg-black'}`}>
                    </div>

                    {/* Navigation */}
                    <div className={`flex items-center md:flex-row md:items-center gap-4 pt-7
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
                                ${isOpen ? "" : ""}`}>
                                Project
                            </p>
                            <span className={`${isOpen ? "" : "mt-6 "}`}>&gt; Website Kesehatan Tidur</span>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className={`flex flex-col md:flex-row gap-8 ${isOpen ? "" : "ml-[40%]"}`}>
                        {/* Mobile Image */}
                        <div className="md:hidden w-[100%] pt-6 ">
                            <img
                                src={sleepWellProject.image}
                                alt=""
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>

                        {/* Left Content Section */}
                        <div className="w-full md:w-2/3">
                            <div className="pt-6 md:pt-10">
                                <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-left">
                                    {sleepWellProject.title}
                                </h1>
                                <div className={`w-36 h-1 rounded-full mt-2 mx-auto md:mx-0 
                                    ${darkMode ? 'bg-white' : 'bg-black'}`}>
                                </div>
                            </div>

                            <div className="pt-6 md:pt-10">
                                <p className="font-jakarta text-center md:text-left max-w-[35rem]">
                                    {sleepWellProject.desc}
                                </p>

                                {/* Stats Cards */}
                                <div className={`flex  md:flex-row gap-4 md:gap-5 pt-6 md:pt-10
                                    ${isOpen ? "" : "max-w-96"}`}>
                                    {/* Tech Stats Card */}
                                    <div className={`relative w-full md:w-52 h-14 rounded-lg overflow-hidden
                                        ${darkMode ? 'bg-gradient-to-r from-black/50 to-black/30' : 'bg-gray-100'}`}>
                                        <div className={`relative flex items-center gap-3 text-sm ml-4`}>
                                            <div className={`rounded-full w-10 h-10 flex items-center justify-center mt-auto 
                                                ${darkMode ? 'bg-black/60' : 'bg-slate-200'}`}>
                                                <img src={sleepWellProject.image2_tech} 
                                                    alt="" 
                                                    className={`w-7 ${darkMode ? 'invert brightness-75' : ''}`} 
                                                />
                                            </div>
                                            <div className="flex flex-col mt-2">
                                                <h2 className="relative z-10 font-jakarta">
                                                    {sleepWellProject.total_tech}
                                                </h2>
                                                <h1 className="-translate-y-1 relative z-10 font-jakarta">
                                                    {sleepWellProject.tech_text}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature Stats Card */}
                                    <div className={`relative w-full md:w-40 h-14 rounded-lg overflow-hidden
                                        ${darkMode ? 'bg-gradient-to-r from-black/50 to-black/30' : 'bg-gray-100'}
                                        ${isOpen ? "" : "w-40 "}`}>
                                        <div className="relative flex items-center gap-3 text-sm ml-4">
                                            <div className={`rounded-full w-10 h-10 flex items-center justify-center mt-auto 
                                                ${darkMode ? 'bg-black/60' : 'bg-slate-200'}`}>
                                                <img src={sleepWellProject.image2_tech} 
                                                    alt="" 
                                                    className={`w-7 ${darkMode ? 'invert brightness-75' : ''}`} 
                                                />
                                            </div>
                                            <div className="flex flex-col mt-2">
                                                <h2 className="relative z-10 font-jakarta">
                                                    {sleepWellProject.total_feature}
                                                </h2>
                                                <h1 className="-translate-y-1 relative z-10 font-jakarta">
                                                    {sleepWellProject.feature_tech}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Demo Buttons */}
                                <div className={`mt-6 flex flex-wrap justify-center md:justify-start gap-4
                                    ${isOpen ? "" : "flex"}`}>
                                    {sleepWellProject.demo_text.map((text, index) => (
                                        <button 
                                            key={index}
                                            onClick={() => {
                                                if(text === 'Live Demo') {
                                                    window.open(sleepWellProject.path, '_blank')
                                                } else if (text === "Github") {
                                                    window.open(sleepWellProject.gitPath, '_blank')
                                                }
                                            }}
                                            className={`flex items-center gap-2 w-[8.8rem] h-14 rounded-lg justify-center
                                                ${darkMode ? 'bg-gradient-to-r from-black/50 to-black/30' : 'bg-white'}
                                                ${isOpen ? "" : "w-[26.2vh] flex"}`}
                                        >
                                            <img 
                                                src={sleepWellProject.demo_icon[index]} 
                                                alt={text} 
                                                className={`w-6 h-6 ${darkMode ? 'invert brightness-75' : ''}`} 
                                            />
                                            <p className="font-jakarta">{text}</p>
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <div className={`flex gap-2 w-full md:w-[18.8rem] h-14 items-center justify-center rounded-lg 
                                        ${darkMode ? 'bg-gradient-to-r from-black/50 to-black/30' : 'bg-white'}`}>
                                        <img 
                                            src={sleepWellProject.image2_tech} 
                                            alt="" 
                                            className={`w-7 
                                                ${darkMode ? 'invert brightness-7 ' : ''}
                                                ${isOpen ? "" : ""}`} 
                                        />
                                        <p>{sleepWellProject.title2_tech}</p>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-2 w-full md:w-[29rem]">
                                        {sleepWellProject.tech_used.map((text, index) => (
                                            <div 
                                                key={index} 
                                                className={`flex gap-3 items-center h-10 rounded-lg justify-center
                                                    ${darkMode ? 'bg-gradient-to-r from-black/50 to-black/30' : 'bg-white'}`}
                                            >
                                                <img src={sleepWellProject.tech_icon[index]} alt="" className="w-6" />
                                                <span className="font-jakarta text-sm">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Features Section */}
                                <div className="md:hidden mt-8">
                                    <div className={`w-full rounded-xl p-6
                                        ${darkMode ? 'bg-gradient-to-r from-black/30 to-black/10' : 'bg-white'}`}>
                                        <div className={`rounded-xl p-6
                                            ${darkMode ? 'bg-gradient-to-r from-black/20 to-black/30' : 'bg-gray-50'}`}>
                                            <div className="flex gap-3 items-center mb-4">
                                                <img 
                                                    src={StarIcon} 
                                                    className={`${darkMode ? 'invert brightness-75' : ''}`} 
                                                />
                                                <p className="font-jakarta font-semibold">Fitur Fitur</p>
                                            </div>
                                            
                                            <div className="flex flex-col gap-3">
                                                {valueProject.map((value) => (
                                                    <div 
                                                        key={value.id} 
                                                        className={`flex gap-3 items-center h-10 w-full rounded-lg px-4
                                                            ${darkMode ? 'bg-gradient-to-r from-black/50 to-black/30' : 'bg-gray-100'}`}
                                                    >
                                                        <div className={`w-2 h-2 rounded-full
                                                            ${darkMode ? "bg-white" : "bg-black"}`}>
                                                        </div>
                                                        <p className={`font-jakarta  ${darkMode ? 'text-white' : 'text-black'}`}>
                                                            {value.title}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Section - Desktop Only */}
                        <div className="hidden md:block w-full md:w-[40rem] pt-10">
                            <img
                                src={sleepWellProject.image}
                                alt=""
                                className="w-full h-auto rounded-lg object-cover transform transition-transform 
                                duration-300 group-hover:scale-105"
                            />
                            <div className="flex mt-4">
                                <div className={`w-full h-[21rem] rounded-xl items-center justify-center flex 
                                    ${darkMode ? 'bg-gradient-to-r from-black/30 to-black/10' : 'bg-white'}`}>
                                    <div className={`w-[26rem] h-72 rounded-xl 
                                        ${darkMode ? 'bg-gradient-to-r from-black/20 to-black/30' : 'bg-gray-50'}`}>
                                        <div className="p-10">
                                            <div className="flex gap-3 items-center">
                                                <img
                                                    src={StarIcon}
                                                    className={`${darkMode ? 'invert brightness-75' : ''}`}
                                                />
                                                <p className="font-jakarta font-semibold">Fitur Fitur</p>
                                            </div>

                                            <div className="flex flex-col gap-3 items-center mt-4">
                                                {valueProject.map((value) => (
                                                    <div key={value.id}>
                                                        <div className={`flex gap-3 items-center h-10 w-[21rem] rounded-lg transition-all duration-300
                                                            ${darkMode ? 'bg-gradient-to-r hover:from-[#1B1A55] to-[#9290C3]' : 'bg-gray-100'}`}>
                                                            <div className={`w-[0.80rem] h-[0.60rem] rounded-full ml-3 
                                                                ${darkMode ? "bg-white" : "bg-black"}`}>
                                                            </div>
                                                            <div className="h-8 w-96">
                                                                <p className={`font-jakarta text-base mt-1 
                                                                    ${darkMode ? 'text-white' : 'text-black'}`}>
                                                                    {value.title}
                                                                </p>
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
                </div>
            </div>
        </div>
    );
}

export default SleepWell;