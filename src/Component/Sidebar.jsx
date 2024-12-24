import FotoBintang from "../assets/Image/Image1.png";
import HomeIcon from "../assets/Icon/home.svg";
import AboutIcon from "../assets/Icon/about.svg";
import ProjectIcon from "../assets/Icon/project.svg";
import ContactIcon from "../assets/Icon/contact.svg";

function Sidebar() {
  return (
    <section>
      <div className="w-60 h-[100vh] bg-gray-400">
        <div className="bg-red-50 w-40 h-40 rounded-full items-center mx-auto overflow-hidden">
          <img
            src={FotoBintang}
            className="w-full h-full bg-repeat bg-cover"
            alt="Foto Bintang"
          />
        </div>

        <div>
          <h1 className="text-white text-center mt-4 text-xl">Bintang Yudha</h1>
        </div>

        <div className="w-48 h-0.5 bg-gray-50 mx-auto mt-10"></div>

        <ul className="text-center space-y-4 mt-6">
          <li>
            <button className="flex items-center text-white text-2xl mx-auto gap-1">
              <img src={HomeIcon} alt="Home Icon" className="w-16 h-16" />
              Home
            </button>
          </li>
          <li>
            <button className="flex items-center text-white text-2xl mx-auto gap-4">
              <img src={AboutIcon} alt="About Icon" className="w-10 h-10" />
              About
            </button>
          </li>
          <li>
            <button className="flex items-center text-white text-2xl mx-auto gap-4">
              <img src={ProjectIcon} alt="Project Icon" className="w-6 h-6" />
              Project
            </button>
          </li>
          <li>
            <button className="flex items-center text-white text-2xl mx-auto gap-4">
              <img src={ContactIcon} alt="Contact Icon" className="w-6 h-6" />
              Contact
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
