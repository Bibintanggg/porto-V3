
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
        <Terminal>
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
        <span>✔ Checking registry.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Updating tailwind.config.ts</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Updating app/globals.css</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ Installing dependencies.</span>
      </AnimatedSpan>

 
      <TypingAnimation delay={6500} className="text-muted-foreground">
      Success! Portfolio is ready to explore.
      </TypingAnimation>
    </Terminal>
    )
}

export default Preload