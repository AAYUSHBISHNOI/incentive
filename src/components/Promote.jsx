import React from "react";
import image_one from "../assets/image/webp/promote-section-img-one.webp";
import image_two from "../assets/image/webp/promote-sec-bg-img.webp";
import commanimg from "../assets/image/svg/comman-m-img-2.svg";

const Promote = () => {
  return (
    <div className="relative max-w-[1920px] mx-auto">
      <img
        className="absolute w-[229px] xl:w-[571px] h-[307px] md:h-[407px] lg:h-[535px] left-0 top-[55%] md:top-[20%] -z-10"
        src={image_two}
        alt="promote-bg-image"
      />
      <div className="max-w-[1144px] mx-auto px-[20px] xl:px-0 py-[60px] md:py-[60px] lg:py-[80px] xl:py-[100px] z-10">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="w-full md:w-[48%] order-2 md:order-1 mt-[25px] md:mt-0 flex flex-col justify-center items-center">
            <img
              className="rounded-2xl w-[295px] md:w-[527px] h-[353px] md:h-[470px] lg:h-[631px]"
              src={image_one}
              alt="girl-image"
            />
            <button className="font-circular hover:bg-[#ffa852] duration-500 ease-in-out md:hidden text-lg font-normal leading-[126%] md:pt-[17px] md:pb-[20px] py-[17px] px-[117px] md:px-[50px] bg-darkblue text-white rounded-[10px] mt-[25px]">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-[47%] order-1 md:order-2">
            <div className="relative">
              <h2 className="font-circular text-[28px] lg:text-md text-[#000000] font-black leadiong-[110%] z-10 relative max-w-[335px] md:max-w-[517px]">
                Promote Great Products and Create a Community Around Your
                Product or Venue
              </h2>
              <img
                className="absolute top-0 left-[-10%] md:left-[-5%] lg:left-[-5%] xl:left-[-8%] -z-10 h-[50px] md:h-[60px] xl:w-[160px]"
                src={commanimg}
                alt="comman-img-m"
              />
            </div>
            <p className="max-w-[480px] font-circular font-light text-base leading-[150%] text-[#797979] !mt-[14px] lg:!mt-[20px]">
              Incentive allows businesses to promote their locations, products
              or websites and boost customers with promotions. Use custom links
              to invite or allow others to invite. Customers can request
              redemption or joining of an event/promo to get a discount. After
              the event, reviews can boost visibility around your brand or
              product.
            </p>
            <p className="font-circular font-light text-base leading-[150%] text-[#000000] !mt-[15px]">
              Sign up and start getting customers with great offers.
            </p>
            <button className="font-circular hover:bg-[#ffa852] duration-500 ease-in-out hidden md:block text-lg font-normal leading-[126%] md:pt-[17px] md:pb-[20px] py-[17px] px-[30px] md:px-[50px] bg-darkblue text-white rounded-[10px] md:mt-[15px] lg:mt-[25px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promote;
