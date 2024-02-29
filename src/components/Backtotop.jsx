import React, { useEffect, useState } from "react";
import backtotop from "../assets/image/svg/backbutton.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-2 right-2 bg-[#f68a74] rounded-full px-[10px] py-[10px] z-50 cursor-pointer transition-all duration-500 ease-linear 
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
    >
        <img src={backtotop} alt="Bac-kto-top" />
    </button>
  );
};

export default BackToTop;
