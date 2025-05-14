import React, { useEffect } from 'react';
import FotoBintang from "../assets/Image/Image1.png";
import { useDarkMode } from './DarkMode';
import AOS from 'aos';
import "aos/dist/aos.css";

function BadgesProfile(){
    const badges = [
        { id: 1, label: "Frontend Developer", color: "bg-gray-700 rounded-full bg-clip-padding backdrop-filter bg-opacity-50", 
            offset:  "translate-x-15", animation: "fade-left", duration: 2000 },
        { id: 2, label: "UI/UX Designer", color: "bg-gray-700 rounded-full bg-clip-padding backdrop-filter bg-opacity-50", 
            offset:  "translate-x-0", animation: "fade-left", duration: 3000 }
    ];

    const {darkMode} = useDarkMode()
    useEffect(() => {
        AOS.init({
            once: false,
        })
    })

    return (
        <div className="relative inline-block">
            <div className="relative w-48 h-48">
                <img
                    src={FotoBintang}
                    className="w-full h-full rounded-full object-cover"
                    alt="Profile"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                />

                <div className="absolute -right-14 top-0 flex flex-col gap-2">
                    {badges.map((badge, index) => (
                        <div
                            key={badge.id}
                            data-aos={badge.animation}
                            data-aos-duration={badge.duration}
                            className={`
                                ${badge.color}
                                ${badge.offset}
                                ${darkMode ? "text-white" : "text-black"} px-4 py-1 rounded-full 
                                text-sm font-medium hover:scale-105 shadow-lg backdrop-blur-sm
                                translate-x-${index * 5} font-poppins text-center my-2 hover:scale-105 transform
                                transition-all duration-300 ease-in-out`}
                        >
                            {badge.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BadgesProfile;
