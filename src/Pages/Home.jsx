import Sidebar from "../Component/Sidebar.jsx";
import Particle from "../Component/particle.jsx"
import WavingHand from '../assets/Image/wavinghand.png'
import InstagramIcon from '../assets/Icon/instagram.svg'
import Linkedinicon from '../assets/Icon/linkedin.svg'
import FotoBintang from '../assets/Image/Image1.png'
import preload from "../Component/Preload.jsx"
import ProjectIcon from "../assets/Icon/project.svg";
import { useNavigate } from "react-router-dom";

const hire = [
    { 
        id: 1, 
        text: "Project", 
        logo: ProjectIcon, 
        path: "/project" 
    },
    { 
        id: 2, 
        text: "Hire Me", 
        logo: ProjectIcon,
        path: "/about"
    },
]

function Home() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path)
    }
    return (
        <div className="relative min-h-screen">
            <Particle className="absolute top-0 left-0 w-full h-full -z-10" />

            <div className="flex relative z-10">
                <Sidebar />

                <div className="flex-1 bg-transparent p-8">
                    <div className="flex justify-between text-left ">
                        <h1 className="text-base font-semibold text-gray-800 font-poppins pt-2">Home</h1>
                        <div className="text-right">
                            <h2 className="text-base font-semibold text-gray-800 font-poppins">Hello, Bintang !</h2>
                            <p className="-translate-y-2">Role &gt; Student </p>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-black mx-auto opacity-25"></div>

                    <div className="flex items-center justify-between h-96 gap-5 p-10">

                        <div className="pt-16 flex items-center gap-5">
                            <div className="w-4 h-4 bg-[#1d3557] rounded-full">
                                <div className="w-1 h-36 mx-auto rounded-full bg-gradient-to-b from-[#1d3557] to-transparent"></div>
                            </div>

                            <div className="pt-20">
                            <h1 className="text-3xl font-poppins font-bold flex gap-2 text-[#1d3557]">
                                Hii, I'm Bintang Yudha!
                                <img
                                    src={WavingHand}
                                    className="w-8 h-8"
                                />
                            </h1>

                            <p className="font-jakarta">
                                A student with a passion in programming
                            </p>

                            <div className="flex gap-5 pt-2 mb-2">
                                    {hire.map((nav) => (
                                        <button
                                        key={nav.id}
                                        className="flex w-32 bg-white h-[30px] rounded-full group animation ease-in-out duration-300 
                                        hover:bg-slate-400 hover:w-20 "
                                        onClick={() => handleNavigate(nav.path)}>
                                            <div className="flex gap-2 mx-auto justify-center items-center">
                                                <p className="text-base font-jakarta ">{nav.text}</p>
                                                <img src={nav.logo} alt="" className="w-6 group-hover:rotate-90 transition 
                                                ease-in-out duration-300"/>
                                            </div>
                                        </button>
                                    ))}

                                    
                            </div>

                            <div className="flex gap-3 translate-y-3">
                            <a href="">
                                <img src={InstagramIcon} 
                                className="w-6 animate-bounce duration-100 ease-in-out 
                                hover:opacity-20 transition hover:duration-100"/>
                            </a>

                                <a href="">
                                    <img src={Linkedinicon}
                                        className="w-6 animate-bounce duration-100 ease-in-out 
                                hover:opacity-20 transition hover:duration-100"/>
                                </a>
                            </div>
                            </div>
                        </div>

                        <div className="mx-auto pt-20 rounded-md">
                            <img src={FotoBintang} 
                            className="w-72 h-72" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Home;
