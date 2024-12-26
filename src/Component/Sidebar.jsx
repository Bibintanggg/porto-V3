import FotoBintang from "../assets/Image/Image1.png";
import HomeIcon from "../assets/Icon/home.svg";
import AboutIcon from "../assets/Icon/about.svg";
import ProjectIcon from "../assets/Icon/project.svg";
import ContactIcon from "../assets/Icon/contact.svg";

function Sidebar() {
  return (
    <section>
      <div className="relative w-60 h-[100vh] bg-[#B7B7B7] pt-10">
        <div className="bg-red-50 w-32 h-32 rounded-full items-center mx-auto overflow-hidden">
          <img
            src={FotoBintang}
            className="w-full h-full bg-repeat bg-cover"
            alt="Foto Bintang"
          />
        </div>

        <div>
          <h1 className="text-white text-center mt-4 text-xl font-jakarta font-medium">Bintang Yudha</h1>
        </div>

        <div className="w-48 h-0.5 bg-gray-50 mx-auto mt-8"></div>

        <ul className="text-center space-y-6 mt-6 font-jakarta">
          <li>
            <button className="flex items-center text-white text-lg mx-auto gap-4 relative group 
            duration-300">
              <img src={HomeIcon} alt="Home Icon" className="w-6 h-6" />
              Home
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all 
              duration-300 group-hover:w-full translate-y-2"></span>
            </button>
          </li>

          <li>
            <button className="flex items-center text-white text-lg mx-auto gap-4 relative group 
            duration-300">
              <img src={AboutIcon} alt="About Icon" className="w-6 h-6" />
              About
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all 
              duration-300 group-hover:w-full translate-y-2"></span>
            </button>
          </li>
          <li>
            <button className="flex items-center text-white text-lg mx-auto gap-4 relative group 
            duration-300">
              <img src={ProjectIcon} alt="Project Icon" className="w-6 h-6" />
              Project
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all 
              duration-300 group-hover:w-full translate-y-2"></span>
            </button>
          </li>
          <li>
            <button className="flex items-center text-white text-lg mx-auto gap-4 relative group 
            duration-300">
              <img src={ContactIcon} alt="Contact Icon" className="w-6 h-6 opacity-70" />
              Contact
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all 
              duration-300 group-hover:w-full translate-y-2"></span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
