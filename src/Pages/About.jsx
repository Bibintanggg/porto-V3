import Sidebar from "../Component/Sidebar.jsx";
import FotoBintang from "../assets/Image/Image1.png";

function About() {
  return (
    <div className="relative min-h-screen h-screen flex">
      {/* Sidebar */}
      <div className="w-[250px] h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-[250px] w-full overflow-y-auto">
        <div className="bg-transparent p-8">
          {/* Header */}
          <div className="flex justify-between text-left">
            <h1 className="text-base font-semibold text-gray-800 font-poppins pt-2">
              About
            </h1>
            <div className="text-right">
              <h2 className="text-base font-semibold text-gray-800 font-poppins">
                Hello, Bintang!
              </h2>
              <p className="-translate-y-2">Role &gt; Student</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-black mx-auto opacity-25"></div>

          {/* About Me Section */}
          <div className="flex flex-col items-center h-auto gap-5 p-10">
            <div className="flex items-center gap-5">
              <div className="w-[60rem] h-[19rem] items-center mx-auto rounded-3xl bg-white/60">
                <div className="p-6 flex items-center gap-4">
                  <h1 className="font-jakarta font-bold text-xl">About Me</h1>
                  <div className="relative flex items-center">
                    <div className="absolute w-24 h-0.5 bg-black left-1"></div>
                  </div>
                </div>
                <div className="px-16">
                  <div className="flex items-start gap-32">
                    <img
                      src={FotoBintang}
                      className="w-48 h-48 rounded-full"
                      alt="Bintang"
                    />
                    <div className="pt-3">
                      <p className="max-w-lg tracking-wide font-jakarta text-sm">
                        <span className="ml-10">Hello There!</span> I’m Bintang
                        Yudha Putra Purnomo, a creative front-end developer and
                        detail-oriented UI/UX designer based in the bustling
                        city of Jakarta, Indonesia. With a strong foundation in
                        Software Engineering from SMK Negeri 46 Jakarta,
                      </p>
                      <p className="max-w-lg tracking-wide font-jakarta mt-5 text-sm">
                        <span className="ml-10">I’m passionate</span> about
                        turning innovative ideas into functional designs and
                        writing clean, efficient code to create seamless user
                        experiences.
                      </p>
                      <button className="">View Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Black Box */}
            <div className="w-96 h-96 bg-black mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
