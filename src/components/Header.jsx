import React from "react";
import commanimg from "../assets/image/svg/comman-m-image.svg";
import girlimage from "../assets/image/webp/header-img.webp";
import yellowimg from "../assets/image/webp/header-bg.webp";
import herorelpise from "../assets/image/webp/hero-elipse.webp";
import yellow from "../assets/image/webp/header-elipse.webp";

const Header = () => {
  return (
    <div className=" max-w-[1920px] mx-auto relative">
        <img className="absolute top-[50%] left-0 md:top-[20%] lg:top-[10%] xl:top-[25%] xl:w-[1000px] xl:h-[1000px] -z-10" src={herorelpise} alt="elipse-hero" />
        <img className="absolute right-0 top-0 -z-10" src={yellow} alt="elipse-yellow" />
        <img
          className="absolute w-[329px] md:w-[380px] xl:w-[586px] h-[307px] md:h-[390px] xl:h-[549px] right-0 xl:right-[0%] top-[35%] xl:top-[15%] md:top-[10%] -z-10"
          src={yellowimg}
          alt="blue-bg"
        />
      <div className="max-w-[1144px] mx-auto px-[20px] xl:px-0 pt-[60px] lg:pt-[80px] xl:pt-[104px] relative">
        <div className="md:flex items-center justify-between">
          <div className="w-full md:w-[50%]">
            <div className="relative">
              <h1 className="font-circular text-[30px] lg:text-md text-black font-black leading-[110%] z-10 relative max-w-[495px]">
                <span className="text-[#5271ff]">Redeem Discounts for </span>
                Amazing Products: Engage with a{" "}
                <span className="text-[#5271ff]">Community</span> and
                <span className="text-[#5271ff]"> Win Cash Prizes</span>
              </h1>
              <img
                className="absolute top-[-5%] left-[-7%] h-[180px] md:left-[-5%] lg:left-[-6%] xl:left-[-5%] -z-10 md:h-[245px] md:top-[-35%] lg:top-[-20%] md:w-[70px] w-[86px] xl:w-[80px] xl:top-[-20%]"
                src={commanimg}
                alt="comman-img-m"
              />
            </div>
            <div className="hidden md:block">
              <p className="font-circular font-light text-lg leading-[150%] text-[#797979] !mt-[15px]">
                Use Incentive to list and find promotional discounts and win
                prizes for helping support businesses. Chat and connect with
                others and then privately review the promotion.
              </p>
              <button className="bg-[#5271ff] flex items-center hover:bg-[#ffa852] duration-500 ease-in-out gap-[15px] font-circular font-normal text-lg text-white pt-[17px] pb-[20px] px-[50px] rounded-[10px] mt-[25px]">
                Find Promotions/Contests
                <span>
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.44444 12.4444V5.55556H2.22222C1 5.55556 0 6.55556 0 7.77778V14.4444C0 15.6667 1 16.6667 2.22222 16.6667H3.33333V20L6.66667 16.6667H12.2222C13.4444 16.6667 14.4444 15.6667 14.4444 14.4444V12.4222C14.3714 12.4379 14.2969 12.4457 14.2222 12.4456H6.44444V12.4444ZM20 0H10C8.77778 0 7.77778 1 7.77778 2.22222V11.1111H15.5556L18.8889 14.4444V11.1111H20C21.2222 11.1111 22.2222 10.1122 22.2222 8.88889V2.22222C22.2222 1 21.2222 0 20 0Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-[48%] mt-[25px] md:mt-0">
            <img
              className="rounded-2xl w-[295px] md:w-[390px] lg:w-[558px] h-[281px] md:h-[390px] lg:h-[533px]"
              src={girlimage}
              alt="girl-img"
            />
            <div className="md:hidden">
              <p className="font-circular font-light text-lg leading-[150%] text-[#797979] !mt-[20px]">
                Use Incentive to list and find promotional discounts and win
                prizes for helping support businesses. Chat and connect with
                others and then privately review the promotion.
              </p>
              <button className="bg-[#5271ff] flex items-center hover:bg-[#ffa852] duration-500 ease-in-out gap-[15px] font-circular font-normal text-lg text-white pt-[17px] pb-[20px] px-[40px] rounded-[10px] mt-[25px]">
                Find Promotions/Contests
                <span>
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.44444 12.4444V5.55556H2.22222C1 5.55556 0 6.55556 0 7.77778V14.4444C0 15.6667 1 16.6667 2.22222 16.6667H3.33333V20L6.66667 16.6667H12.2222C13.4444 16.6667 14.4444 15.6667 14.4444 14.4444V12.4222C14.3714 12.4379 14.2969 12.4457 14.2222 12.4456H6.44444V12.4444ZM20 0H10C8.77778 0 7.77778 1 7.77778 2.22222V11.1111H15.5556L18.8889 14.4444V11.1111H20C21.2222 11.1111 22.2222 10.1122 22.2222 8.88889V2.22222C22.2222 1 21.2222 0 20 0Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
