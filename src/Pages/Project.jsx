import Sidebar from "../Component/Sidebar"
import Dicoding from "../assets/Image/dicoding.png"
import SleepWell from "../assets/Image/sleepwell.png"

const projects = [
    {
        id: 1,
        text: "WEBSITE KESEHATAN TIDUR",
        desc: "Web ini dirancang untuk membuat para pengidap",
        icon: SleepWell,
    }
]
function Project() {
    return (
      <div className="relative min-h-screen h-screen flex">
        <div className="w-[250px] h-screen fixed top-0 left-0">
          <Sidebar />
        </div>

        <div className="ml-[250px] w-full overflow-y-auto">
          <div className="bg-transparent p-8">
            <div className="flex justify-between text-left">
              <h1 className="text-base font-semibold text-gray-800 font-poppins pt-2">
                Project
              </h1>
              <div className="text-right">
                <h2 className="text-base font-semibold text-gray-800 font-poppins">
                  Hello, Bintang!
                </h2>
                <p className="-translate-y-2">Role &gt; Student</p>
              </div>
            </div>
            <div className="w-full h-0.5 bg-black mx-auto opacity-25"></div>

            <div>

            </div>
          </div>
        </div>
      </div>
    );
}

export default Project