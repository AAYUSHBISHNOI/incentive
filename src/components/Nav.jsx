import React, { useEffect, useState } from "react";
import Logo from "../assets/image/svg/nav-logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.remove("overflow-hidden");
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setShow(false);
  };

  return (
    <div className="overflow-hidden bg-[#5271FF] max-w-[1920px] mx-auto">
      <div className="mx-auto max-w-[1144px] px-[20px] xl:px-0">
        <div className="flex items-center justify-between h-[71px] z-50 relative">
          <div>
            <a href="/" className="z-50 relative">
              <img
                src={Logo}
                alt=""
                className="w-[99px] h-[37px] md:w-[149px] md:h-[58px]"
              />
            </a>
          </div>
          <ul
            className={`${
              show ? "left-0" : ""
            } duration-500 bg-[#5271FF] w-full h-[375px] top-[0] -left-full fixed gap-[25px] lg:gap-[50px] flex flex-col justify-center items-center lg:bg-transparent lg:flex-row lg:static lg:w-auto lg:h-full z-40`}
          >
            <div className="bg-[#758dff] h-[2px] w-[90%] lg:hidden mt-[52px] lg:mt-0"></div>
            {["Menu", "Menu", "Menu", "Menu"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handleLinkClick(index)}
                  className={`relative transition-all ease-in-out duration-500 text-white font-circular font-medium text-base leading-[126%] hover:text-[#ffa852] hover:after:w-[57px] ${
                    (activeLink === index && !show) || (activeLink === index && show)
                      ? "text-[#ffa852] after:w-[57px]"
                      : "after:w-0"
                  } after:absolute after:top-[-28px] after:left-[-5px] after:h-[3px] after:rounded-b-full after:ease-in-out after:duration-300 after:bg-[#ffa852]`}
                >
                  {item}
                </a>
              </li>
            ))}
            <button className="font-circular lg:hidden font-light text-base leading-[126%] text-white hover:text-[#ffa852] bg-[#ffa852] hover:bg-white duration-500 ease-in-out py-[15px] px-[147px] lg:px-[37px] rounded-[10px]">
              Login
            </button>
          </ul>
          <button className="font-circular hidden lg:block font-light text-base leading-[126%] text-white hover:text-[#ffa852] bg-[#ffa852] hover:bg-white duration-500 ease-in-out py-[15px] px-[147px] lg:px-[37px] rounded-[10px]">
            Login
          </button>
          <button
            className="lg:hidden z-50 transition-all duration-300 ease-in-out sm:mr-[25px]"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <div className="z-20 relative">
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative flex flex-col justify-end items-end">
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-4 mt-1"></span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
