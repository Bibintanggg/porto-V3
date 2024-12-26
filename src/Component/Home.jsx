import Sidebar from "../Component/Sidebar.jsx";
import Particle from "./particle.jsx";

function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Particle sebagai background */}
            <Particle className="absolute top-0 left-0 w-full h-full -z-10" />

            {/* Layout dengan flex */}
            <div className="flex relative z-10">
                {/* Sidebar di kiri */}
                <Sidebar />

                {/* Konten utama di kanan */}
                <div className="flex-1 bg-transparent p-8">
                    <div className="flex justify-between text-left ">
                        <h1 className="text-base font-semibold text-gray-800 font-poppins pt-2">Home</h1>
                        <div className="text-right">
                            <h2 className="text-base font-semibold text-gray-800 font-poppins">Hello, Bintang !</h2>
                            <p className="-translate-y-2">Role &gt; Student </p>
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-black mx-auto opacity-25"></div>

                    <div>
                      <div>
                        <div>
                          <h1 className="text-4xl font-poppins font-bold ">It's Me Bintang Yudha</h1>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
