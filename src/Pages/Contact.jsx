import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import ShareContactIcon from "../assets/Icon/shareContact.svg";
import LinkedinIcon from "../assets/Icon/linkedin.svg";
import GithubIcon from "../assets/TechIcon/GitHub.svg";
import InstagramIcon from "../assets/Icon/instagram.svg";
import { useDarkMode } from "../Component/DarkMode";
import Input from "../Component/Input";
import Connect from "../Component/Connect";
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

  const [isOpen, setIsOpen] = useState(true)


  return (
    <div
      className={`relative min-h-screen transition-all duration-500 ease-in-out ${
        darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
      } ${isOpen ? "" : "-ml-[70%] flex flex-col"}`}
    >
      <div className="flex relative z-10">
        <div
          className={`w-1 h-screen fixed top-0 left-0 ${
            darkMode ? "bg-[#131523]" : "bg-[#f2f2fc]"
          }`}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="flex-1 bg-transparent p-8 ml-64">
          <div className={`flex justify-between text-left`}>
            <h1
              className={`text-base font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              } font-poppins pt-2`}
            >
              Contact
            </h1>
            <div className={`text-right ${isOpen ? "" : "mr-32"}`}>
              <h2
                className={`text-base font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                } font-poppins`}
              >
                Hello, Bintang !
              </h2>
              <p
                className={`-translate-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Role &gt; Student
              </p>
            </div>
          </div>

          <div
            className={`w-full h-0.5 ${
              darkMode ? "bg-white" : "bg-black"
            } mx-auto opacity-25`}
          ></div>

          <div>
            <div>
              <p
                className={`text-center text-3xl font-jakarta font-bold mt-10 ${
                  darkMode ? "text-white" : "text-black"
                } ${isOpen ? "" : " text-xl"}`}
              >
                Contact Me
              </p>
              <span
                className={`flex justify-center font-jakarta pt-1 ${
                  darkMode ? "text-white" : ""
                } ${isOpen ? "" : " text-sm"}`}
              >
                Feel free to reach out to me anytime!
              </span>
            </div>
            <div
              className={`flex mt-10 gap-10 items-center justify-center ${
                isOpen ? "" : "flex flex-col"
              }`}
            >
              <div
                className={`w-[30rem] min-h-[30rem] isolate rounded-3xl bg-gradient-to-b 
                from-black/20 to-black/30 shadow-lg ${
                  isOpen ? "" : "w-[20rem] "
                } `}
              >
                <div className="p-10">
                  <div className="flex items-center justify-between">
                    <h1
                      className={`font-poppins text-2xl font-bold 
                        ${darkMode ? "text-white" : "text-black"}`}
                    >
                      Get In Touch
                    </h1>
                    <img
                      src={ShareContactIcon}
                      className={`w-8 
                        ${darkMode ? "invert " : ""}`}
                      alt="Share Contact"
                    />
                  </div>

                  <p
                    className={`font-poppins text-sm mt-2 
                      ${darkMode ? "text-white" : "text-black"}
                  `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="font-poppins text-sm"
                  >
                    <Input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      label="Username"
                      error={errors.username}
                      darkMode={darkMode}
                      className="mt-4"
                    />
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      label="Email"
                      error={errors.email}
                      darkMode={darkMode}
                      className="mt-1"
                    />
                    <Input
                      type="text"
                      name="Message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="your message"
                      label="Message"
                      darkMode={darkMode}
                      className="mt-2"
                    />
                    <button
                      type="submit"
                      className={`w-full mt-6 py-2 px-4 rounded-md ${
                        darkMode
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div
                  className={`w-60 h-1 rounded-full mx-auto ${
                    darkMode ? "bg-white" : ""
                  }`}
                ></div>
                <div>
                  <Connect darkMode={darkMode} platforms={platforms} />
                </div>
              </div>

              <div className={` h-[35rem] rounded-lg ${darkMode ? "bg-gradient-to-b from-black/20 to-black/30" : ""}
              ${isOpen ? "w-[30rem]" : "w-[20rem]"}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
