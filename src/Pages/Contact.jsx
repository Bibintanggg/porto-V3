import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import ShareContactIcon from "../assets/Icon/shareContact.svg";
import LinkedinIcon from "../assets/Icon/linkedin.svg";
import GithubIcon from "../assets/TechIcon/GitHub.svg";
import InstagramIcon from "../assets/Icon/instagram.svg";
import { useDarkMode } from "../Component/DarkMode";
import Input from "../Component/Input";
import Connect from "../Component/Connect";
import InstagramImage from "../assets/Image/insta.jpg"
import GithubImage from "../assets/Image/github.jpg"
import TiktokImage from "../assets/Image/tiktok.jpg"
import YoutubeImage from "../assets/Image/youtube.jpg"
import { useNavigate } from "react-router-dom";

const platforms = [
  {
    icon: LinkedinIcon,
    title: "Linkedin",
    description: "Lets Networking On Me",
    link: "https://www.instagram.com/bintang.ydha_/",
  },
  {
    icon: GithubIcon,
    title: "Github",
    description: "Check Out My Projects",
    link: "https://www.instagram.com/bintang.ydha_/",
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    description: "Check Out My Projects",
    link: "https://www.instagram.com/bintang.ydha_/",
  },
];

const medSosial = [
  { title: "Instagram", icon: InstagramIcon, image: InstagramImage },
  { title: "Tiktok", icon: InstagramIcon, image: TiktokImage },
  { title: "Github", icon: GithubIcon, image: GithubImage },
  { title: "Linkedin", icon: LinkedinIcon },
  { title: "YouTube", icon: InstagramIcon, image: YoutubeImage },
]

function Contact() {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) newErrors.username = "Membutuhkan Username";
    if (!formData.email) newErrors.email = "Membutuhkan email";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Data:", formData);
    }
  };

  const [isOpen, setIsOpen] = useState(true);
  const [positionActive, setPositionActive] = useState("instagram");
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div
      className={`relative min-h-screen transition-all duration-500 ease-in-out ${darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
        } ${isOpen ? "" : "-ml-[70%] flex flex-col"}`}
    >
      <div className="flex relative z-10">
        <div
          className={`w-1 h-screen fixed top-0 left-0 ${darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
            }`}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="flex-1 bg-transparent p-8 ml-64">
          <div className={`flex justify-between text-left`}>
            <h1
              className={`text-base font-semibold ${darkMode ? "text-white" : "text-gray-800"
                } font-poppins pt-2`}
            >
              Contact
            </h1>
            <div className={`text-right ${isOpen ? "" : "mr-32"}`}>
              <h2
                className={`text-base font-semibold ${darkMode ? "text-white" : "text-gray-800"
                  } font-poppins`}
              >
                Hello, Bintang !
              </h2>
              <p
                className={`-translate-y-2 ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                Role &gt; Student
              </p>
            </div>
          </div>

          <div
            className={`w-full h-0.5 ${darkMode ? "bg-white" : "bg-black"
              } mx-auto opacity-25`}
          ></div>

          <div>
            <div>
              <p
                className={`text-center text-3xl font-jakarta font-bold mt-10 ${darkMode ? "text-white" : "text-black"
                  } ${isOpen ? "" : " text-xl"}`}
              >
                Contact Me
              </p>
              <span
                className={`flex justify-center font-jakarta pt-1 ${darkMode ? "text-white" : ""
                  } ${isOpen ? "" : " text-sm"}`}
              >
                Feel free to reach out to me anytime!
              </span>
            </div>

            <div className="flex justify-center gap-10 mt-10">
              <div className={`w-[30rem] rounded-3xl ${darkMode ? "" : "bg-"}`}>
                <div className="flex justify-center py-10">
                  <div className="relative flex">
                    <div className="flex flex-col gap-3">
                      {medSosial.map((media, index) => (
                        <div key={index} className="flex items-center gap-3 h-10">
                          <img src={media.icon} className="w-5" alt={media.title} />
                          <button
                            onClick={() => {
                              setPositionActive(media.title.toLowerCase());
                              setSelectedImage(media.image);
                            }}
                            className={`font-poppins text-lg transition-all duration-300 ${positionActive === media.title.toLowerCase()
                                ? "text-white"
                                : "text-black"
                              }`}
                          >
                            {media.title}
                          </button>
                        </div>
                      ))}
                    </div>

                    <hr className="w-0.5 bg-black h-60 rounded-full mx-4" />

                    {selectedImage && (
                      <img
                        src={selectedImage}
                        className="object-cover w-56 h-96 rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </div>

                <div className={`w-[30rem] rounded-3xl ${darkMode ? "" : "bg-"}`}>
                <div className="p-10">
                  <div className="flex items-center justify-between">
                    <h1
                      className={`font-poppins text-2xl font-bold ${darkMode ? "text-white" : "text-black"
                        }`}
                    >
                      Get In Touch
                    </h1>
                    <img
                      src={ShareContactIcon}
                      className={`w-8 ${darkMode ? "invert" : ""}`}
                    />
                  </div>

                  <p
                    className={`font-poppins text-sm mt-2 ${darkMode ? "text-white" : "text-black"
                      }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>

                  <form onSubmit={handleSubmit} className="font-poppins text-sm">
                    <Input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      label="Username"
                      darkMode={darkMode}
                      className="mt-4"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      label="Email"
                      darkMode={darkMode}
                      className="mt-1"
                    />
                    <Input
                      type="text"
                      name="message"
                      placeholder="Your message"
                      label="Message"
                      darkMode={darkMode}
                      className="mt-2"
                    />
                    <button
                      type="submit"
                      className={`w-full mt-6 py-2 px-4 rounded-md ${darkMode
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;