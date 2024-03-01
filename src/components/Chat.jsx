import React from "react";
import blueimg from "../assets/image/webp/comman-bg-blue.webp";
import commanimg from "../assets/image/svg/comman-m-img-2.svg";
import mobile from "../assets/image/webp/chat-mobile.webp";
import chatelipse from "../assets/image/webp/chat-elipse.webp";

const Chat = () => {
  return (
    <div className=" max-w-[1920px] mx-auto relative">
      <img className="absolute -z-10 lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] left-0 top-[50%] lg:top-[70%] xl:top-[30%]" src={chatelipse} alt="elipse-chat" />
      <div className="max-w-[1144px] mx-auto px-[20px] xl:px-0 pt-[60px] lg:pt-[80px] xl:pt-[100px] relative">
        <img
          className="absolute w-[349px] md:w-[300px] h-[327px] md:h-[300px] lg:h-[450px] lg:w-[466px] xl:h-[535px] right-3 md:right-[60%] top-[39%] md:top-[25%] lg:right-0 lg:top-[20%] xl:w-[571px] xl:top-[23%] xl:right-[-10%] -z-10"
          src={blueimg}
          alt="blue-bg"
        />
        <div className="md:flex items-center justify-between">
          <div className="w-full md:w-[50%] md:order-2 lg:order-1">
            <div className="relative">
              <h2 className="font-circular text-[28px] lg:text-4-xl text-[#000000] font-black leadiong-[110%] z-10 relative max-w-[335px] md:max-w-[517px]">
                Chat With Others
              </h2>
              <img
                className="absolute top-0 left-[-8%] md:left-[0%] lg:left-[0%] xl:left-[-8%] -z-10 h-[38px] md:h-[50px] xl:h-[60px] xl:w-[170px]"
                src={commanimg}
                alt="comman-img-m"
              />
            </div>
            <p className="font-circular lg:hidden font-light text-lg leading-[150%] text-[#797979] !mt-[20px] max-w-[571px]">
              Eligible participants can join automated contests to win
              Incentives/Cash Prizes¹.
            </p>
            <p className="font-circular hidden lg:block font-light text-lg leading-[150%] text-[#797979] !mt-[20px] max-w-[571px]">
              Chat easily with people interested and the business all in one
              place. All chats are group chats so business hosts can build
              excitment and guide customers before a promo.
            </p>
            <button className="font-circular hidden md:block text-lg font-normal hover:bg-[#ffa852] duration-300 leading-[126%] md:pt-[17px] md:pb-[20px] py-[17px] px-[30px] md:px-[50px] bg-darkblue text-white rounded-[10px] md:mt-[15px] lg:mt-[25px]">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-[48%] md:order-1 lg:order-2 flex flex-col items-center justify-center md:justify-start md:items-start lg:justify-center lg:items-center xl:items-end xl:justify-end mt-[20px] md:mt-0">
            <img
              className="w-[210px] xl:w-[322px] lg:w-[300px] h-[429px] lg:h-[550px] xl:h-[658px]"
              src={mobile}
              alt="chat-mobile"
            />
            <button className="font-circular md:hidden text-lg font-normal hover:bg-[#ffa852] duration-300 leading-[126%] md:pt-[17px] md:pb-[20px] py-[16px] px-[117px] md:px-[50px] bg-darkblue text-white rounded-[10px] mt-[25px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
