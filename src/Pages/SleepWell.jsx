import { data, useNavigate } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

function SleepWell({ sleepWellProject }) {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }
    return (
        <div className="relative min-h-screen h-screen flex">
            <div className="w-[250px] h-screen fixed top-0 left-0">
                <Sidebar />
            </div>

            <div className="ml-[250px] w-full overflow-y-auto">
                <div className="bg-transparent p-8">
                    <div className="flex justify-between text-left">
                        <h1 className="text-base font-semibold text-gray-800 font-poppins pt-2">
                            PROJECT
                        </h1>
                        <div className="text-right">
                            <h2 className="text-base font-semibold text-gray-800 font-poppins">
                                Hello, Bintang!
                            </h2>
                            <p className="-translate-y-2">Role &gt; Student</p>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-black mx-auto opacity-25"></div>

                    <div className="pt-7 flex gap-2">
                        <button className="bg-slate-300 w-24 h-10 rounded-lg font-jakarta"
                        onClick={() => handleNavigate("/project")}>
                            Kembali
                        </button>

                        <div className="items-center flex font-jakarta gap-2">
                            <p className="text-opacity-40 text-black">Project</p>
                            <span>&gt; Website Kesehatan Tidur</span>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div className="w-2/3">
                            <div key={sleepWellProject.id} className="pt-10">
                                <h1 className="text-4xl font-poppins font-bold block text-balance">
                                    {sleepWellProject.title}
                                </h1>
                                <div className="w-36 h-1 rounded-full bg-black mt-2 animate"></div>
                            </div>

                            <div className="pt-10">
                                <p className="font-jakarta block text-balance max-w-[35rem]">
                                    {sleepWellProject.desc}
                                </p>

                                <div className="flex gap-5 pt-10 w-[30rem] h-[6rem] justify-center items-center rounded-lg bg-gray-50 mt-10">
                                    <div className="relative bg-white w-52 h-14 rounded-lg mb-10 overflow-hidden group">
                                        <div className="absolute top-0 left-0 h-full bg-slate-200 w-0 
                      transition-all duration-500 group-hover:w-full"></div>

                                        <div className="absolute top-0 left-0 h-full bg-gray-400 w-0 
                      transition-all duration-700 delay-100 group-hover:w-full"></div>

                                        <div className="relative flex items-center gap-3 text-sm ml-4">
                                            <div className="bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center mt-auto">
                                                <img src={sleepWellProject.image2_tech} alt="" className="w-7" />
                                            </div>
                                            <div className="flex flex-col mt-2">
                                                <h2 className="relative z-10">{sleepWellProject.total_tech}</h2>
                                                <h1 className="-translate-y-1 relative z-10">{sleepWellProject.tech_text}</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative bg-white w-52 h-14 rounded-lg mb-10 overflow-hidden group">
                                        <div className="absolute top-0 left-0 h-full bg-slate-200 w-0 
                      transition-all duration-500 group-hover:w-full"></div>

                                        <div className="absolute top-0 left-0 h-full bg-gray-400 w-0 
                      transition-all duration-700 delay-100 group-hover:w-full"></div>

                                        <div className="relative flex items-center gap-3 text-sm ml-4">
                                            <div className="bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center mt-auto">
                                                <img src={sleepWellProject.image2_tech} alt="" className="w-7" />
                                            </div>
                                            <div className="flex flex-col mt-2">
                                                <h2 className="relative z-10">{sleepWellProject.total_feature}</h2>
                                                <h1 className="-translate-y-1 relative z-10">{sleepWellProject.feature_tech}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-5">
                                    {sleepWellProject.demo_text.map((text, index) => (
                                        <button key={index} className="flex items-center gap-2 mb-2 bg-white w-[8.8rem] h-10 
                                        rounded-lg justify-center">
                                            <img src={sleepWellProject.demo_icon[index]} alt={text} className="w-6 h-6" />
                                            <p className="font-jakarta">{text}</p>
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-5">
                                    <div className="flex gap-2 bg-white w-[18.8rem] h-10 items-center justify-center rounded-lg">
                                        <img src={sleepWellProject.image2_tech} alt="" className="w-7" />
                                        <p>{sleepWellProject.title2_tech}</p>
                                    </div>

                                    
                                    <div className="grid grid-cols-3 mt-7 gap-2 w-[29rem]">
                                        {sleepWellProject.tech_used.map((text, index) => (
                                            <div key={index} className="flex gap-3 items-center bg-white w-36 h-10 rounded-lg justify-center">
                                                <img src={sleepWellProject.tech_icon[index]} alt="" className="w-6" />
                                                <span className="font-jakarta text-sm">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[40rem] pt-10 group overflow-hidden rounded-lg">
                            <img
                                src={sleepWellProject.image}
                                alt=""
                                className="w-full h-auto rounded-lg object-cover transform transition-transform 
                      duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SleepWell;
