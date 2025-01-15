import Sidebar from "../Component/Sidebar";
import Dicoding from "../assets/Image/dicoding.png";
import SleepWell from "../assets/Image/sleepwell.png";
import ShareIcon from "../assets/Icon/share.svg";
import MoreInfo from "../Component/MoreInfo";
import { useNavigate } from "react-router-dom";




function Project() {
  const projects = [
    {
      id: 1,
      text: "WEBSITE KESEHATAN TIDUR",
      desc: "Web ini dirancang untuk membuat para pengidap aowkodkawd...",
      image: SleepWell,
      path: "LIVE DEMO",
      icon: ShareIcon,
      secondText: "DETAILS",
    },
  ];
const navigate = useNavigate();
const handleNavigate = (path) => {
  navigate(path)
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

          {/* Container Kotak Putih */}
          <div className="bg-white w-[30rem] h-[24rem] flex justify-center rounded-xl group overflow-hidden
          hover:outline hover:outline-blue-500 outline-1 transition duration-300 ease-in-out">
            {projects.map((data_project) => (
              <div key={data_project.id} className="flex justify-center items-center">
                <div>
                  {/* Container Gambar dengan Efek Zoom */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={data_project.image}
                      alt=""
                      className="w-[26rem] rounded-lg transform transition-transform 
                      duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-jakarta text-[1.2rem] font-medium pt-2">
                    {data_project.text}
                  </p>
                  <span className="font-jakarta text-sm text-wrap max-w-xs block pt-1">
                    {data_project.desc}
                  </span>
                  {/* Container untuk tombol LIVE DEMO dan DETAILS */}
                  <div className="flex justify-between items-center w-[26rem] gap-4 pt-3">
                    {/* Tombol LIVE DEMO */}
                    <button className="flex items-center gap-2" >
                      <a href="https://sleepwell-calypso.vercel.app/" className="text-[0.90rem] font-jakarta">
                        {data_project.path}
                      </a>
                      <img src={data_project.icon} alt="" className="w-4" />
                    </button>
                    {/* Tombol DETAILS */}
                    <button className="flex justify-center items-center bg-gray-500 w-28 h-10 rounded-lg"
                    onClick={() => handleNavigate("/project/sleepwell")}>
                      <a href="" className="text-xs font-jakarta text-[0.90rem]">
                        {data_project.secondText}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;