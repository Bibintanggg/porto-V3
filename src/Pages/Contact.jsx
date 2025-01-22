import React, { isValidElement, useState } from 'react';
import Sidebar from "../Component/Sidebar";
import ShareContactIcon from "../assets/Icon/shareContact.svg";
import { useDarkMode } from "../Component/DarkMode";
import Input from "../Component/Input"; 

function Contact() {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    username : '',
    email : '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    setErrors({
      ...errors,
      [name]: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if(!formData.username) newErrors.username = "username this already"
    if(!formData.email) newErrors.email = "Email Is Required"

    if(Object.keys)
  }

  return (
    <div className={`relative min-h-screen ${darkMode ? 'bg-[#131523]' : 'bg-[#f2f2fc]'}`}>
      <div className="flex relative z-10">
        <div
          className={`w-64 h-screen fixed top-0 left-0 ${darkMode ? 'bg-[#131523]' : 'bg-[#f2f2fc]'}`}
        >
          <Sidebar />
        </div>

        <div className="flex-1 bg-transparent p-8 ml-64">
          <div className="flex justify-between text-left">
            <h1 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} font-poppins pt-2`}>
              Contact
            </h1>
            <div className="text-right">
              <h2 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} font-poppins`}>
                Hello, Bintang !
              </h2>
              <p className={`-translate-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Role &gt; Student
              </p>
            </div>
          </div>

          <div className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-black'} mx-auto opacity-25`}></div>

          <div>
            <div>
              <p className={`text-center text-3xl font-jakarta font-bold mt-10 ${darkMode ? "text-white" : "text-black"}`}>
                Contact Me
              </p>
              <span className={`flex justify-center font-jakarta text-sm pt-1 ${darkMode ? "text-white" : ""}`}>
                Feel free to reach out to me anytime!
              </span>
            </div>
            <div className={`flex mt-10 gap-10 items-center justify-center`}>
              <div className={`w-[23rem] h-[35rem] bg-gradient-to-r from-[#0A1D56] to-[#000957] rounded-md bg-clip-padding 
                backdrop-filter backdrop-blur-md bg-opacity-10 `}>
                <div className="p-10">
                  <div className="flex items-center justify-between">
                    <h1 className={`font-poppins text-2xl font-bold 
                        ${darkMode ? "text-white" : "text-black"}`}>Get In Touch</h1>
                    <img src={ShareContactIcon} className={`w-8 
                        ${darkMode ? "invert " : ""}`} alt="Share Contact" />
                  </div>

                  <p className={`font-poppins text-sm mt-2 
                      ${darkMode ? "text-white" : "text-black"}
                  `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                  {/* <Input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={inputValue}
                    onChange={handleInputChange}
                    darkMode={darkMode} 
                    className="mt-4 w-full" 
                  /> */}
                </div>
              </div>

              <div className={`w-[30rem] h-[35rem] bg-white rounded-lg`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;