import { useState, useEffect } from "react";
import LoadingVideo from '../assets/Video/preload.webm'

function Preload() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); 
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!isLoaded && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center 
                items-center z-50">
                    <video autoPlay loop muted className="absolute w-full h-full object-cover">
                        <source src={LoadingVideo} type="video/webm" />
                    </video>
                </div>
            )}
        </>
    );
}

export default Preload;
