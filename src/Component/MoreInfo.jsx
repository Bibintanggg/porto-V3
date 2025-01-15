import SleepWellImage from "../assets/Image/sleepwell.png";
import CodeIcon from "../assets/Icon/code.svg";
import SleepWell from "../Pages/SleepWell";
import GithubIcon from "../assets/TechIcon/GitHub.svg"
import ShareIcon from "../assets/Icon/share.svg"

import TailwindIcon from "../assets/TechIcon/TailwindCSS.svg"
import ReactIcon from "../assets/TechIcon/React.svg"
import CSS3Icon from "../assets/TechIcon/CSS3.svg"
import ChartJSIcon from "../assets/TechIcon/chartjs.svg"
import ViteIcon from "../assets/TechIcon/vitejs.svg"

function MoreInfo() {
    const sleepWellProject = {
        id: 1,
        title: "Website Kesehatan Tidur",
        desc: "Web ini dirancang untuk membuat para pengidap insomnia atau gangguan tidur dan memahami pentingnya tidur yang cukup dan berkualitas, project ini dibuat atas kebutuhan untuk bootcamp",
        image: SleepWellImage,

        title2_tech: "Technologies Used",
        image2_tech: CodeIcon,

        tech_used: ["ReactJS", "Vite", "TailwindCSS", "DataAOS", "CSS", "ChartJS"],
        tech_icon: [TailwindIcon, ReactIcon, CSS3Icon, ChartJSIcon, ViteIcon],

        total_tech: 5,
        tech_text: "Total Teknologi",

        feature_tech: "Fitur Utama",
        total_feature: 5,

        demo_text: ["Live Demo", "Github"],
        demo_icon: [ShareIcon, GithubIcon],
    };

    return (
        <SleepWell sleepWellProject={sleepWellProject}/>
    );
}

export default MoreInfo;