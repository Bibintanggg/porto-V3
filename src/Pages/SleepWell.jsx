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

                    <div key={sleepWellProject.id} className="pt-8">
                        <h1 className="text-4xl font-poppins font-bold block text-balance max-w-[z]">{sleepWellProject.title}</h1>
                    </div>

                    <div className="w-36 h-1 rounded-full bg-black mt-2 animate"></div>

                    <div className="pt-3">
                        <p className="font-jakarta block text-balance max-w-96">{sleepWellProject.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SleepWell;