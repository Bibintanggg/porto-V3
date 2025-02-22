import React from 'react';
import FotoBintang from "../assets/Image/Image1.png";

function BadgesProfile(){
    const badges = [
        { id: 1, label: "Frontend Developer", color: "bg-blue-500" },
        { id: 2, label: "Backend Developer", color: "bg-green-500" },
        { id: 3, label: "UI/UX Designer", color: "bg-purple-500" }
    ];

    return (
        <div className="relative inline-block">
            <div className="relative w-48 h-48">
                <img
                    src={FotoBintang}
                    className="w-full h-full rounded-full object-cover"
                    alt="Profile"
                />

                <div className="absolute -right-4 top-0 flex flex-col gap-2">
                    {badges.map((badge, index) => (
                        <div
                            key={badge.id}
                            className={`${badge.color} text-white px-4 py-1 rounded-full text-sm font-medium
                transform transition-all duration-300 hover:scale-105
                shadow-lg backdrop-blur-sm
                translate-x-${index * 4} -translate 
                animate-fadeIn`}
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
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
