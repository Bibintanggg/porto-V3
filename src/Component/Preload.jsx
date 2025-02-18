
import { AnimatePresence , motion} from "framer-motion";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "../components/magicui/terminal";
import { useEffect, useState } from "react";

function Preload({ onLoaded }) {
    const [time, setTIme] = useState("");
    const [isVisible, setIsVisible] = useState(true)
    
     useEffect(() => {
        const interval = setInterval(() => {
            setTIme((preview) => (preview.length < 3 ? preview + "." : ""));
        }, 500)

        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => {
            onLoaded();
          }, 3000)
        }, 7000)

        return () => clearInterval(interval);
    }, [onLoaded]);
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-r 
      from-[#160a1f] to-[#131523]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Terminal className="p-4 w-fit max-w-md text-white">
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
          </motion.div>
        )}
      </AnimatePresence>
    );
}

export default Preload