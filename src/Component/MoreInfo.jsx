import SleepWellImage from "../assets/Image/sleepwell.png";
import CodeIcon from "../assets/Icon/code.svg";
import SleepWell from "../Pages/SleepWell";

function MoreInfo() {
    const sleepWellProject = {
        id: 1,
        title: "Website Kesehatan Tidur",
        desc: "Web ini dirancang untuk membuat para pengidap insomnia atau gangguan tidur dan memahami pentingnya tidur yang cukup dan berkualitas, project ini dibuat atas kebutuhan untuk bootcamp",
        image: SleepWellImage,

        title2_tech: "Technologies Used",
        image2_tech: CodeIcon,

        tech_used: ["ReactJS", "Vite", "TailwindCSS", "DataAOS", "CSS", "ChartJS"],
    };

    return (
        <SleepWell sleepWellProject={sleepWellProject}/>
    );
}

export default MoreInfo;