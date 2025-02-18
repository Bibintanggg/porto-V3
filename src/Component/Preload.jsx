
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "../components/magicui/terminal";
import { useEffect, useState } from "react";

function Preload({ onLoaded }) {
    const [time, setTIme] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            setTIme((preview) => (preview.length < 3 ? preview + "." : ""));
        }, 500)

        setTimeout(() => {
            onLoaded();
        }, 3000)

        return () => clearInterval(interval);
    }, [onLoaded]);
    return (
        <div className="fixed inset-0 flex items-center justify-center">

        <Terminal className="p-4 w-fit max-w-md ">
      <TypingAnimation>&gt; Initializing Portfolio...</TypingAnimation>
 
      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Setting up the framework... Found React.js</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Validating Tailwind CSS.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Loading creative animations....</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Validating import alias.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Writing components.json.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Updating tailwind.config.ts</span>
      </AnimatedSpan>
 
      <TypingAnimation delay={4500} className="text-muted-foreground">
      Success! Portfolio is ready to explore.
      </TypingAnimation>
    </Terminal>
        </div>
    )
}

export default Preload