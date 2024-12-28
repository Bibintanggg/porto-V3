import Sidebar from "../Component/Sidebar.jsx";
import Particle from "./particle.jsx";
import WavingHand from '../assets/Image/wavinghand.png'

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

                    <div className="flex items-center justify-start h-96">
                        <div>
                            <h1 className="text-2xl font-poppins font-bold flex gap-2">
                                Hello, It's Me Bintang!
                                <img
                                    src={WavingHand}
                                    className="w-8 h-8"
                                />
                            </h1>
                            <p className="text-2xl font-poppins font-bold">
                                I'm Front End Developer
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;
