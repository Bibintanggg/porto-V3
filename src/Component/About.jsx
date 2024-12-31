import Sidebar from "../Component/Sidebar.jsx";
import FotoBintang from "../assets/Image/Image1.png";


function About() {
  return (
    <div className="relative min-h-screen">
      <div className="flex relative z-10">
        <Sidebar />

        <div className="flex-1 bg-transparent p-8">
          <div className="flex justify-between text-left ">
            <h1 className="text-base font-semibold text-gray-800 font-poppins pt-2">
              About
            </h1>
            <div className="text-right">
              <h2 className="text-base font-semibold text-gray-800 font-poppins">
                Hello, Bintang !
              </h2>
              <p className="-translate-y-2">Role &gt; Student </p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-black mx-auto opacity-25"></div>

          <div className="flex items-center justify-between h-96 gap-5 p-10">
            <div className="pt-36 flex items-center gap-5">

              <div className="w-[80rem] h-[28rem] items-center mx-auto rounded-3xl bg-white">
                <div className="p-10 flex items-center gap-4">
                  <h1 className="font-jakarta font-bold text-xl">About Me</h1>
                  <div className="relative flex items-center">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                    <div className="absolute w-24 h-0.5 bg-black left-1"></div>
                  </div>
                </div>

                <div className="px-16">
                  <div className="flex items-start gap-32">
                    <img src={FotoBintang} className="w-72 h-72 rounded-2xl" />
                    <div className="pt-10">

                      <p className=" max-w-2xl tracking-wide font-jakarta">
                        <span className="ml-10">Lorem ipsum</span> dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea
                      </p>
                      <p className=" max-w-2xl tracking-wide font-jakarta mt-5">
                        <span className="ml-10">Lorem ipsum</span> dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea
                      </p>
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

export default About;
