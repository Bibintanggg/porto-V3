import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FotoBintang from "../assets/Image/Image1.png";
import HomeIcon from "../assets/Icon/home.svg";
import AboutIcon from "../assets/Icon/about.svg";
import ProjectIcon from "../assets/Icon/project.svg";
import ContactIcon from "../assets/Icon/contact.svg";
import MoonPNG from "../assets/Image/moon.png";
import { useDarkMode } from '../Component/DarkMode';

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [activePosition, setActivePosition] = useState("translate-y-0");
  const [timeOfDay, setTimeOfDay] = useState("day");
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const activeRoutes = {
    "/": "-translate-y-10",
    "/about": "translate-y-2",
    "/project": "translate-y-14",
    "/contact": "translate-y-[110px]",
  };

  useEffect(() => {
    const newPosition = activeRoutes[location.pathname] || "translate-y-0";
    setActivePosition(newPosition);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 18) {
      return "afternoon";
    } else {
      return "night";
    }
  };

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  // animation sidebar | smooth
  const sidebarVariants = {
    closed: {
      x: "-100%",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        borderRadius: { duration: 0.30, ease: "easeInOut" }
      }
    },
    open: {
      x: 0,
      borderTopRightRadius: ["0px", "250px", "150px", "50px", "30px"],
      borderBottomRightRadius: ["0px", "250px", "150px", "50px", "30px"],
      transition: {
        x: {
          type: "spring",
          stiffness: 400,
          damping: 40,
          restDelta: 0.5
        },
        borderTopRightRadius: {
          times: [0, 0.2, 0.5, 0.8, 1],
          duration: 0.8,
          ease: "easeOut"
        },
        borderBottomRightRadius: {
          times: [0, 0.2, 0.5, 0.8, 1],
          duration: 0.8,
          ease: "easeOut"
        }
      }
    }
  };

  // header wather & animation | Smoooth
  const weatherHeaderVariants = {
    closed: {
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "24px", 
      transition: {
        duration: 0.35,
        ease: "easeInOut"
      }
    },
    open: {
      borderTopRightRadius: ["0px", "250px", "150px", "50px", "30px"],
      borderBottomRightRadius: "24px",
      transition: {
        borderTopRightRadius: {
          times: [0, 0.2, 0.5, 0.8, 1],
          duration: 0.8,
          ease: "easeOut"
        }
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    open: index => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + index * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  // Overlay untuk background
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    },
    open: {
      opacity: 0.5,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const menuItems = [
    { to: "/", icon: HomeIcon, text: "Home" },
    { to: "/about", icon: AboutIcon, text: "About" },
    { to: "/project", icon: ProjectIcon, text: "Project" },
    { to: "/contact", icon: ContactIcon, text: "Contact" }
  ];

  return (
    <section>
      {/* Overlay untuk mobile */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 bg-black z-10"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      )}

      <motion.div
        className={`fixed z-20 w-60 h-[100vh] ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg md:shadow-none transition-colors duration-300 md:relative md:translate-x-0 overflow-hidden`}
        initial={isMobile ? "closed" : "open"}
        animate={isOpen ? "open" : "closed"}
        variants={isMobile ? sidebarVariants : {}}
      >
        <div className="flex flex-col">
          <motion.div
            className={`w-60 h-40 rounded-b-3xl flex justify-center items-center transition-colors duration-1000 ${timeOfDay === "morning"
                ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
                : timeOfDay === "afternoon"
                  ? "bg-gradient-to-r from-orange-300 to-orange-500"
                  : "bg-gradient-to-r from-blue-800 to-indigo-900"
              }`}
            variants={isMobile ? weatherHeaderVariants : {}}
            initial={isMobile ? "closed" : "open"}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div
              className="items-center justify-center flex flex-col pt-40"
              initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 1 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: isMobile ? 0 : 1, y: isMobile ? 20 : 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={FotoBintang}
                className="w-24 h-24 items-center justify-center rounded-full shadow-black/20 shadow-lg"
                alt="Profile"
              />
              <p className={`${darkMode ? 'text-white' : 'text-black'} pt-2 font-poppins `}>Bintang Yudha</p>
            </motion.div>

            {timeOfDay === "morning" && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-300 rounded-full shadow-lg animate-sunrise"></div>
                <div className="absolute top-8 left-8 w-16 h-8 bg-white rounded-full animate-cloud"></div>
                <div className="absolute top-12 left-16 w-20 h-10 bg-white rounded-full animate-cloud-2"></div>
              </div>
            )}
            {timeOfDay === "afternoon" && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full animate-wind"></div>
                <div className="absolute top-8 left-8 w-8 h-8 bg-white rounded-full animate-bird"></div>
              </div>
            )}
            {timeOfDay === "night" && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full animate-moon">
                  <img src={MoonPNG} alt="Moon" />
                </div>
                <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                <div className="absolute top-12 left-16 w-2 h-2 bg-white rounded-full animate-twinkle-2"></div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          className="w-48 h-0.5 bg-gray-50 mx-auto mt-20"
          initial={isMobile ? { opacity: 0, scaleX: 0 } : { opacity: 1 }}
          animate={isOpen ? { opacity: 1, scaleX: 1 } : { opacity: isMobile ? 0 : 1, scaleX: isMobile ? 0 : 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        <div className="relative">
          <motion.span
            className={`absolute top-10 right-0 w-0.5 h-10 ${darkMode ? 'bg-white' : 'bg-[#1d3557]'} rounded-full`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isOpen ? 1 : (isMobile ? 0 : 1),
              y: activePosition === "translate-y-0" ? 0 :
                activePosition === "-translate-y-10" ? -40 :
                  activePosition === "translate-y-2" ? 8 :
                    activePosition === "translate-y-14" ? 56 :
                      activePosition === "translate-y-[110px]" ? 110 : 0
            }}
            transition={{
              opacity: { delay: 0.4, duration: 0.3 },
              y: { type: "spring", stiffness: 300, damping: 30 }
            }}
          ></motion.span>

          <ul className="text-center space-y-6 mt-6 font-jakarta">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.to}
                className="flex"
                custom={index}
                variants={isMobile ? menuItemVariants : {}}
                initial={isMobile ? "closed" : "open"}
                animate={isOpen ? "open" : "closed"}
              >
                <Link
                  to={item.to}
                  className={`flex items-center justify-center ${darkMode ? 'text-white' : 'text-black'} text-lg mx-auto gap-4 relative group duration-300`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <img src={item.icon} alt={`${item.text} Icon`} className={`w-6 h-6 ${darkMode ? 'invert brightness-75' : ''}`} />
                  {item.text}
                  <span className={`absolute bottom-0 left-0 h-[2px] w-0 ${darkMode ? 'bg-white' : 'bg-[#1d3557]'} transition-all duration-300 group-hover:w-full translate-y-2`}></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.button
          onClick={toggleDarkMode}
          className="absolute bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full"
          initial={isMobile ? { opacity: 0, scale: 0.8 } : { opacity: 1 }}
          animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: isMobile ? 0 : 1, scale: isMobile ? 0.8 : 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "backOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? '☀️' : '🌙'}
        </motion.button>
      </motion.div>

      {/* Toggle button untuk mobile dengan animasi */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full z-30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          initial={false}
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✖️' : '☰'}
        </motion.span>
      </motion.button>
    </section>
  );
}

export default Sidebar;