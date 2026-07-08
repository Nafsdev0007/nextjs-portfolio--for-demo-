"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    // cleanup: return a function to remove the listener on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
  }

  return (
    <div className="fixed animate-pulse bottom-4 right-4">
       {isVisible && (
           <button
             aria-label="Scroll to top"
             className="bg-blue-700 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
             onClick={scrollToTop}
           >
             <ArrowUp size={20} />
           </button>
       )}
    </div>
  );
};

export default ScrollToTop;
