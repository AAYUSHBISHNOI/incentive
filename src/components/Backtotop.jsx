import React, { useEffect, useState } from "react";
import backtotop from "../assets/image/svg/backbutton.svg";

const BackToTop = ({
  isFixed = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isFixed) {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    } else {
      setIsVisible(true);  
    }
  }, [isFixed]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button onClick={scrollToTop} className={`bg-[#f68a74] absolute rounded-full z-50 cursor-pointer transition-all duration-500 ease-linear p-2 -top-[10%] md:top-[-22%] right-[10%] xl:right-0`} >
      <img src={backtotop} alt="Back-to-top" />
    </button>
  ) : null;
};

export default BackToTop;
