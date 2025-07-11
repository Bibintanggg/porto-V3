import Sidebar from "../Component/Sidebar";
import Dicoding from "../assets/Image/dicoding.png";
import SleepWell from "../assets/Image/sleepwell.png";
import SagasitasIMG from "../assets/Image/saga.jpg";
import PeintagonsIMG from "../assets/Image/peintagons.jpg";
import Porto_V1 from "../assets/Image/portov1.png";
import JejakPemudaIMG from "../assets/Image/jejakpemuda.png";
import ITB from "../assets/Image/itb.png";
import Cyber from "../assets/Image/cysec.jpg";
import Markoding from "../assets/Image/markoding.png";
import Bootcamp from "../assets/Image/bootcamp.png";
import MoneyTrackIMG from "../assets/Image/moneytrack.png";
import ShareIcon from "../assets/Icon/share.svg";
import { isCookie, useNavigate } from "react-router-dom";
import { useDarkMode } from "../Component/DarkMode";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  const projects = [
    {
      id: 1,
      text: "SLEEP HEALTH WEBSITE",
      desc: "An educational platform that aims to raise awareness...",
      image: SleepWell,
      demo: "LIVE DEMO",
      path: "https://sleepwell-calypso.vercel.app/",
      icon: ShareIcon,
      secondText: "DETAILS",
      animation: "fade-left",
      animationDuration: "2000",
    },
    {
      id: 2,
      text: "PORTFOLIO V1",
      desc: "My first project in programming world. I made this website...",
      image: Porto_V1,
      demo: "LIVE DEMO",
      path: "https://portofolio-bin.vercel.app/",
      icon: ShareIcon,
      secondText: "DETAILS",
    },
    {
      id: 3,
      text: "JEJAK PEMUDA",
      desc: "Jejak Pemuda is a project that my team and I developed in a website competition...",
      image: JejakPemudaIMG,
      demo: "LIVE DEMO",
      path: "https://jejakpemuda.vercel.app/",
      icon: ShareIcon,
      secondText: "DETAILS",
    },
    {
      id: 4,
      text: "MONEY TRACK",
      desc: "MoneyTrack is my personal project designed to make it easier...",
      image: MoneyTrackIMG,
      demo: "LIVE DEMO",
      path: "https://github.com/Bibintanggg",
      icon: ShareIcon,
      secondText: "DETAILS",
    },
  ];

  const certificates = [
    {
      id: 1,
      text: "DICODING CERTIFICATE ",
      desc: "This certificate is awarded upon completion of the course...",
      image: Dicoding,
    },
    {
      id: 2,
      text: "SAGASITAS COMPETITION CERTIFICATE",
      desc: "This certificate is given for participation in the competition from the Sagasitas Foundation..",
      image: SagasitasIMG,
    },
    {
      id: 3,
      text: "WEB DEV 3RD PLACE CERTIFICATE",
      desc: "This certificate is given after winning the web development competition at the Tragora Cup event...",
      image: PeintagonsIMG,
    },
    {
      id: 4,
      text: "WEB DEV 3RD PLACE CERTIFICATE",
      desc: "This certificate is given after winning the web development competition at the Tragora Cup event...",
      image: ITB,
    },
    {
      id: 5,
      text: "WEB DEV 3RD PLACE CERTIFICATE",
      desc: "This certificate is given after winning the web development competition at the Tragora Cup event...",
      image: Cyber,
    },
    {
      id: 6,
      text: "WEB DEV 3RD PLACE CERTIFICATE",
      desc: "This certificate is given after winning the web development competition at the Tragora Cup event...",
      image: Markoding,
    },
    {
      id: 7,
      text: "WEB DEV 3RD PLACE CERTIFICATE",
      desc: "This certificate is given after winning the web development competition at the Tragora Cup event...",
      image: Bootcamp,
    },
  ];

  const projectRoutes = {
    1: "sleepwell",
    2: "portfolio-v1",
    3: "moneytrack",
    4: "jejakpemuda",
  };

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const { darkMode, setDarkMode } = useDarkMode();
  const [toggleButton, setToggleButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const toggleView = () => {
    setToggleButton(!toggleButton);
  };

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setIsModalOpen(false);
  };

  const animations = ["fade-right", "fade-down", "fade-left"];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
      once: false,
    });

    AOS.refresh();
  }, [toggleButton, isOpen]);
  return (
    <div
      className={`relative min-h-screen h-screen flex transition-all duration-500 ease-in-out ${
        darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
      } ${isOpen ? "" : "-ml-[65%]"}`}
    >
      <div className="w-[250px] h-screen fixed top-0 ">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={`ml-[250px] w-full overflow-y-auto transition-all duration-300 ${
          isOpen ? "" : "ml-0"
        }`}
      >
        <div className="bg-transparent p-8">
          <div className="flex justify-between text-left">
            <h1
              className={`text-base font-semibold text-gray-800 font-poppins pt-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              PROJECT
            </h1>
            <div className="text-right">
              <h2
                className={`text-base font-semibold text-gray-800 font-poppins ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Hello, Bintang!
              </h2>
              <p
                className={`-translate-y-2 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Role &gt; Student
              </p>
            </div>
          </div>
          <div
            className={`w-full h-0.5 bg-black mx-auto opacity-25 ${
              darkMode ? "bg-white" : "bg-black"
            }`}
          ></div>

          <div>
            <div className="flex flex-col text-center items-center justify-center mt-5">
              <h1
                className={`font-poppins text-3xl font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Projects
              </h1>
              <p
                className={`font-jakarta ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Project showcase
              </p>

              <div>
                <div className="flex gap-2 pt-5 font-jakarta">
                  <button
                    onClick={toggleView}
                    className={`w-40 h-10 rounded-lg ${
                      darkMode
                        ? "text-white bg-gradient-to-r from-black/30 to-black/10"
                        : "bg-white text-black"
                    }`}
                  >
                    Project
                  </button>
                  <button
                    onClick={toggleView}
                    className={`w-40 h-10 rounded-lg ${
                      darkMode
                        ? "text-white bg-gradient-to-r from-black/30 to-black/10"
                        : "text-black bg-white"
                    }`}
                  >
                    Activity
                  </button>
                </div>
              </div>
            </div>
          </div>

          {toggleButton ? (
            <div
              className={`md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10
             ${isOpen ? "grid grid-cols-2" : "grid grid-cols-1"}`}
            >
              {certificates.map((data_certificate, index) => (
                <div
                  key={data_certificate.id}
                  onClick={() => openModal(data_project)}
                  className={`flex justify-center rounded-xl group overflow-hidden
                    hover:outline outline-1 transition duration-300 ease-in-out
                    ${
                      darkMode
                        ? "bg-gradient-to-r from-black/30 to-black/10 hover:outline-blue-500 text-white"
                        : "hover:outline-blue-500 bg-white text-black"
                    }`}
                >
                  <div className="flex justify-center items-center p-4">
                    <div>
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={data_certificate.image}
                          alt=""
                          className="w-full rounded-lg transform transition-transform 
                          duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="font-jakarta text-[1.2rem] font-medium pt-2">
                        {data_certificate.text}
                      </p>
                      <span className="font-jakarta text-sm text-wrap max-w-xs block pt-1">
                        {data_certificate.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {projects.map((data_project, index) => (
                <div
                  key={data_project.id}
                  className={`flex justify-center rounded-xl group overflow-hidden
      hover:outline outline-1 transition duration-300 ease-in-out
      ${
        darkMode
          ? "bg-gradient-to-r from-black/30 to-black/10 hover:outline-blue-500 text-white"
          : "hover:outline-blue-500 bg-white text-black"
      }`}
                >
                  <div className="flex justify-center items-center p-4">
                    <div>
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={data_project.image}
                          alt=""
                          className="w-full rounded-lg transform transition-transform 
            duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="font-jakarta text-[1.2rem] font-medium pt-2">
                        {data_project.text}
                      </p>
                      <span className="font-jakarta text-sm text-wrap max-w-xs block pt-1">
                        {data_project.desc}
                      </span>
                      <div className="flex justify-between items-center w-full gap-4 pt-3">
                        <a
                          href={data_project.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[0.90rem] font-jakarta"
                        >
                          {data_project.demo}
                          <img
                            src={data_project.icon}
                            alt=""
                            className={`w-4 ${darkMode ? "invert" : ""}`}
                          />
                        </a>

                        {/* Tombol Details */}
                        <button
                          onClick={() =>
                            handleNavigate(
                              `/project/${projectRoutes[data_project.id] || ""}`
                            )
                          }
                          className={`flex justify-center items-center ${
                            darkMode ? "bg-gray-700" : "bg-gray-500"
                          } w-28 h-10 rounded-lg`}
                        >
                          <span className="text-xs font-jakarta text-[0.90rem]">
                            {data_project.secondText}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {isModalOpen && (
            <div
              className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
              onClick={closeModal}
            >
              <div
                className={`bg-${
                  darkMode ? "[#131523]" : "white"
                } rounded-lg p-6 w-11/12 max-w-2xl relative`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className={`absolute top-2 right-2 text-gray-500 hover:text-gray-700 `}
                >
                  &times;
                </button>
                <img
                  src={selectedCertificate.image}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4">
                  <h2
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {selectedCertificate.text}
                  </h2>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {selectedCertificate.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
