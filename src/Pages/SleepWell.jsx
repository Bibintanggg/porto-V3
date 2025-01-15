import { data } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

function SleepWell({ sleepWellProject }) {
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
            <button className="bg-slate-300 w-24 h-10 rounded-lg font-jakarta">
              Kembali
            </button>

            <div className="items-center flex font-jakarta gap-2">
              <p className=" text-opacity-40 text-black">Project</p>
              <span>&gt; Website Kesehatan Tidur</span>
            </div>
          </div>

          <div key={sleepWellProject.id} className="pt-10">
            <h1 className="text-4xl font-poppins font-bold block text-balance max-w-[z]">
              {sleepWellProject.title}
            </h1>
          </div>

          <div className="w-36 h-1 rounded-full bg-black mt-2 animate"></div>

          <div className="pt-10">
            <p className="font-jakarta block text-balance max-w-[30rem]">
              {sleepWellProject.desc}
            </p>

            <div>
                <img src={sleepWellProject.image} alt="" className="w-10" />
            </div>

            <div
              className="flex gap-5 pt-10 w-[30rem] h-[6rem] justify-center items-center rounded-lg 
                        bg-gray-50 mt-10"
            >
              <div className="bg-white w-52 h-14 rounded-lg mb-10">
                <div className="flex items-center gap-3 text-sm ml-4 ">
                  <div className="bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center mt-auto">
                    <img
                      src={sleepWellProject.image2_tech}
                      alt=""
                      className="w-7"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <h2>{sleepWellProject.total_tech}</h2>
                    <h1 className="-translate-y-1">
                      {sleepWellProject.tech_text}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="bg-white w-52 h-14 rounded-lg mb-10">
                <div className="flex items-center gap-3 text-sm  ml-4 ">
                  <div className="bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center mt-auto">
                    <img
                      src={sleepWellProject.image2_tech}
                      alt=""
                      className="w-7"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <h2>{sleepWellProject.total_feature}</h2>
                    <h1 className="-translate-y-1">
                      {sleepWellProject.feature_tech}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-10">
                        {sleepWellProject.demo_text.map((text, index) => (
                            <button key={index} className="flex items-center gap-2 mb-2 bg-white w-32 h-10 rounded-lg justify-center ">
                                <img src={sleepWellProject.demo_icon[index]} alt={text} className="w-6 h-6" />
                                <p className="font-jakarta">{text}</p>
                            </button>
                        ))}
            </div>

            <div className="mt-3">
                <div className="flex gap-2 bg-white w-56 h-10 items-center justify-center rounded-lg">
                    <img src={sleepWellProject.image2_tech} alt="" className="w-7"/>
                    <p>{sleepWellProject.title2_tech}</p>
                </div>

                <div className="grid grid-cols-3 mt-4 gap-5 w-[30rem]">
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
      </div>
    </div>
  );
}

export default SleepWell;
