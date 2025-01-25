import { useNavigate } from "react-router-dom";
import StarIcon from "../assets/Icon/star.svg";
import Sidebar from "../Component/Sidebar";
import { useDarkMode } from "../Component/DarkMode";

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
    },
];

function Portfolio_V1({ portfolioInfo }) {
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className={`relative min-h-screen h-screen flex ${darkMode ? "text-white bg-[#131523]" : "text-black bg-[#f2f2fc]"}`}>
            <div className="w-[250px] h-screen fixed top-0 left-0">
                <Sidebar />
            </div>

            <div className="ml-[250px] w-full overflow-y-auto">
                <div className="bg-transparent p-8">
                    <div className="flex justify-between text-left">
                        <h1 className={`text-base font-semibold text-gray-800 font-poppins pt-2 ${darkMode ? "text-white" : "text-black"}`}>
                            PROJECT
                        </h1>
                        <div className="text-right">
                            <h2 className={`text-base font-semibold text-gray-800 font-poppins ${darkMode ? "text-white" : "text-black"}`}>
                                Hello, Bintang!
                            </h2>
                            <p className="-translate-y-2">Role &gt; Student</p>
                        </div>
                    </div>
                    <div className={`w-full h-0.5 bg-black mx-auto opacity-25 ${darkMode ? "bg-white" : "bg-black"}`}></div>

                    <div className="pt-7 flex gap-2">
                        <button
                            className={`w-24 h-10 rounded-lg font-jakarta ${darkMode ? "text-white bg-gradient-to-r from-black/30 to-black/30" : "text-black bg-white"}`}
                            onClick={() => handleNavigate("/project")}
                        >
                            Kembali
                        </button>

                        <div className="items-center flex font-jakarta gap-2">
                            <p className={`text-opacity-40 text-black ${darkMode ? "text-white" : "text-black"}`}>Project</p>
                            <span>&gt; {portfolioInfo.title}</span> {/* Dinamis */}
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div className="w-2/3">
                            <div key={portfolioInfo.id} className="pt-10">
                                <h1 className="text-4xl font-poppins font-bold block text-balance">
                                    {portfolioInfo.title}
                                </h1>
                                <div className={`w-36 h-1 rounded-full mt-2 animate ${darkMode ? "bg-white" : "bg-black"}`}></div>
                            </div>

                            <div className="pt-10">
                                <p className="font-jakarta block text-balance max-w-[35rem]">
                                    {portfolioInfo.desc}
                                </p>

                                <div className={`flex gap-5 pt-10 w-[30rem] h-[6rem] justify-center items-center rounded-lg mt-10 ${darkMode ? "text-white bg-gradient-to-r from-black/30 to-black/10" : "text-black bg-white"}`}>
                                    <div className={`relative w-52 h-14 rounded-lg mb-10 overflow-hidden group ${darkMode ? "bg-gradient-to-r from-black/50 to-black/30" : "text-black bg-gray-100"}`}>
                                        <div className="relative flex items-center gap-3 text-sm ml-4">
                                            <div className={`rounded-full w-10 h-10 flex items-center justify-center mt-auto ${darkMode ? "bg-gradient-to-r from-black/60" : "text-black bg-slate-200"}`}>
                                                <img src={portfolioInfo.image2_tech} alt="" className={`w-7 ${darkMode ? "invert brightness-75" : ""}`} />
                                            </div>
                                            <div className="flex flex-col mt-2">
                                                <h2 className="relative z-10 font-jakarta">{portfolioInfo.total_tech}</h2>
                                                <h1 className="-translate-y-1 relative z-10 font-jakarta">{portfolioInfo.tech_text}</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`relative w-52 h-14 rounded-lg mb-10 overflow-hidden group ${darkMode ? "bg-gradient-to-r from-black/50 to-black/30" : "text-black bg-gray-100"}`}>
                                        <div className="relative flex items-center gap-3 text-sm ml-4">
                                            <div className={`rounded-full w-10 h-10 flex items-center justify-center mt-auto ${darkMode ? "bg-gradient-to-r bg-black/60" : "bg-slate-200"}`}>
                                                <img src={portfolioInfo.image2_tech} className={`w-7 ${darkMode ? "invert brightness-75" : ""}`} />
                                            </div>
                                            <div className="flex flex-col mt-2">
                                                <h2 className="relative z-10 font-jakarta">{portfolioInfo.total_feature}</h2>
                                                <h1 className="-translate-y-1 relative z-10 font-jakarta">{portfolioInfo.feature_tech}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-5">
                                    {portfolioInfo.demo_text.map((text, index) => (
                                        <button
                                            key={index}
                                            className={`flex items-center gap-2 mb-2 w-[8.8rem] h-14 rounded-lg justify-center ${darkMode ? "bg-gradient-to-r from-black/50 to-black/30" : "text-black bg-white"}`}
                                        >
                                            <img src={portfolioInfo.demo_icon[index]} alt={text} className={`w-6 h-6 ${darkMode ? "invert brightness-75" : ""}`} />
                                            <p className="font-jakarta">{text}</p>
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <div className={`flex gap-2 w-[18.8rem] h-14 items-center justify-center rounded-lg ${darkMode ? "bg-gradient-to-r from-black/50 to-black/30" : "text-black bg-white"}`}>
                                        <img src={portfolioInfo.image2_tech} alt="" className={`w-7 ${darkMode ? "invert brightness-75" : ""}`} />
                                        <p>{portfolioInfo.title2_tech}</p>
                                    </div>

                                    <div className="grid grid-cols-3 mt-4 gap-2 w-[29rem]">
                                        {portfolioInfo.tech_used.map((text, index) => (
                                            <div
                                                key={index}
                                                className={`flex gap-3 items-center w-36 h-10 rounded-lg justify-center ${darkMode ? "bg-gradient-to-r from-black/50 to-black/30" : "text-black bg-white"}`}
                                            >
                                                <img src={portfolioInfo.tech_icon[index]} alt="" className="w-6" />
                                                <span className="font-jakarta text-sm">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[40rem] pt-10 group overflow-hidden rounded-lg">
                            <img
                                src={portfolioInfo.image} // Gunakan gambar dari prop
                                alt=""
                                className="w-full h-auto rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="flex">
                                <div className={`w-[40rem] h-[21rem] mt-4 rounded-xl items-center justify-center flex ${darkMode ? "bg-gradient-to-r from-black/30 to-black/10" : "text-black bg-white"}`}>
                                    <div className={`w-[26rem] h-72 rounded-xl ${darkMode ? "bg-gradient-to-r from-black/20 to-black/30" : "text-black bg-gray-50"}`}>
                                        <div className="p-10">
                                            <div className="flex gap-3 items-center">
                                                <img src={StarIcon} className={`${darkMode ? "invert brightness-75" : ""}`} />
                                                <p className="font-jakarta font-semibold">Fitur Fitur</p>
                                            </div>

                                            <div className="flex flex-col gap-3 items-center mt-4">
                                                {valueProject.map((value) => (
                                                    <div key={value.id}>
                                                        <div className={`flex gap-3 items-center h-10 w-[21rem] rounded-lg ${darkMode ? "bg-gradient-to-r hover:from-[#1B1A55] to-[#9290C3] transition-all duration-300 ease-in-out" : "bg-gray-100"}`}>
                                                            <div className={`w-[0.80rem] h-[0.60rem] rounded-full items-center ml-3 ${darkMode ? "bg-white" : "bg-black"}`}></div>
                                                            <div className="text-black h-8 w-96">
                                                                <p className={`font-jakarta text-base mt-1 ${darkMode ? "text-white" : "text-black"}`}>{value.title}</p>
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

export default Portfolio_V1;