import React from "react";
import blueimg from "../assets/image/webp/comman-bg-blue.webp";
import commanimg from "../assets/image/svg/comman-m-img-2.svg";
import mobile from "../assets/image/webp/win-mobile.webp";
import winelipse from "../assets/image/webp/win-elipse.webp";

const Win = () => {
  return (
    <div className=" max-w-[1920px] mx-auto relative">
      <img className="absolute -z-10 xl:w-[1000px] xl:h-[1000px] right-0 top-[70%] lg:top-[20%] xl:top-[20%]" src={winelipse} alt="elipse-win" />
      <div className="max-w-[1144px] mx-auto px-[20px] xl:px-0 pt-[60px] lg:pt-[80px] xl:pt-[120px] relative">
        <img
          className="absolute w-[349px] md:w-[300px] lg:h-[450px] h-[327px] md:h-[300px] left-3 md:left-[60%] lg:left-0 top-[39%] md:top-[25%] lg:top-[20%] lg:w-[466px] xl:w-[571px] xl:h-[535px] xl:top-[23%] xl:left-[-12%] -z-10"
          src={blueimg}
          alt="blue-bg"
        />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[48%] order-2 lg:order-1 flex flex-col justify-center items-center mt-[20px] md:mt-0 md:items-end lg:items-center xl:items-start">
            <img
              className="w-[210px] xl:w-[322px] lg:w-[300px] h-[429px] lg:h-[550px] xl:h-[658px]"
              src={mobile}
              alt="chat-mobile"
            />
            <button className="font-circular hover:bg-[#ffa852] duration-500 ease-in-out md:hidden text-lg font-normal leading-[126%] md:pt-[17px] md:pb-[20px] py-[17px] px-[117px] md:px-[50px] bg-darkblue text-white rounded-[10px] mt-[25px]">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-[45%] order-1 lg:order-2">
            <div className="relative">
              <h2 className="font-circular text-[28px] lg:text-md text-[#000000] font-black leadiong-[110%] z-10 relative max-w-[335px] md:max-w-[517px]">
                Win Cash to Venmo
              </h2>
              <p className="text-xl font-circular font-semibold leading-[110%] text-[#5271f0]">
                (Coming Soon!)
              </p>
              <img
                className="absolute top-0 left-[-8%] md:left-[0%] lg:left-[0%] xl:left-[-8%] -z-10 h-[35px] md:h-[55px] xl:w-[170px]"
                src={commanimg}
                alt="comman-img-m"
              />
            </div>
            <p className="font-circular font-light text-lg leading-[150%] text-[#797979] !mt-[20px] max-w-[535px]">
              Eligible participants can join automated contests to win
              Incentives/Cash Prizes¹.
            </p>
            <button className="font-circular hidden hover:bg-[#ffa852] duration-500 ease-in-outhidden md:block text-lg font-normal leading-[126%] md:pt-[17px] md:pb-[20px] py-[17px] px-[30px] md:px-[50px] bg-darkblue text-white rounded-[10px] md:mt-[15px] lg:mt-[25px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win;
