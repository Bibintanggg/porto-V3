import Sidebar from "../Component/Sidebar";
import { useDarkMode } from "../Component/DarkMode";

function Contact() {
  const { darkMode, toggleDarkMode } = useDarkMode();

    
    return (
        <div>
            <Sidebar>

                <div>
                    
                </div>
            </Sidebar>
        </div>
    )
}

export default Contact;