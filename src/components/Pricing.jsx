import React from "react";
import commanimg from "../assets/image/svg/comman-m-img-2.svg";
import pricingfirst from "../assets/image/webp/pricing-sec-img-one.webp";
import pricingtwo from "../assets/image/webp/pricing-sec-img-two.webp";

const Pricing = () => {
  return (
    <div className="bg-pricing z-20 relative max-w-[1920px] mx-auto">
      <div className="max-w-[1144px] mx-auto px-[20px] xl:px-0 pt-[54px] pb-[50px] md:pt-[107px] md:pb-[100px]">
        <div className="relative">
          <h2 className="font-circular text-[34px] md:text-md text-white font-black leadiong-[110%] text-center z-10 relative">
            Pricing
          </h2>
          <img
            className="absolute top-0 left-[27%] md:left-[40%] lg:left-[42%] xl:left-[43%] -z-10"
            src={commanimg}
            alt="comman-img-m"
          />
        </div>
        <div className="md:flex flex-col items-center lg:flex-row justify-center gap-6 mt-[59px]">
          <div className="relative group md:w-[430px] xl:w-[470px]">
            <div className="rounded-[10px] cursor-pointer bg-[#f68a74] w-[160px] h-[38px] text-center flex justify-center absolute z-20 -translate-x-[19px] md:-translate-x-[72px] -translate-y-5 md:-translate-y-1 -rotate-[12deg] md:-rotate-[38deg] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <p className="font-circular cursor-pointer font-medium text-lg leading-[190%] text-white mb-0">
                Most Popular
              </p>
            </div>
            <div className="w-[335px] md:w-[461px] lg:w-[420px] xl:w-[461px] h-[543px] md:h-[677px] py-[30px] duration-500 ease-in-out border-transparent hover:border-[#f68a74] border-[6px] rounded-[10px] bg-white pricing-card-shadow relative flex justify-center items-center flex-col">
              <img
                className="w-[102px] h-[90px] md:w-[143px] md:h-[125px]"
                src={pricingfirst}
                alt="pricing-first-img"
              />
              <p className="font-circular text-[22px] md:text-xxl font-semibold text-darkblue leading-[140%] !mt-[19px]">
                Standard
              </p>
              <p className="font-circular font-semibold text-[50px] md:text-6xl text-black !leading-[140%]">
                $49<span className="text-xl">/mo</span>
              </p>
              <div className="w-[295px] md:w-[391px] h-[220px] md:h-[234px] bg-lightblue rounded-[10px] px-[25px] py-[25px] mt-[10px] md:mt-[19px]">
                <div className=" flex items-center gap-[14px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    Unlimited Email Accounts
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    Unlimited Email Warmup
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    1000 Active Leads
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    5000 Emails Monthly
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    Live Chat Support
                  </p>
                </div>
              </div>
              <button className="font-circular hover:bg-[#ffa852] duration-500 ease-in-out text-lg font-normal leading-[126%] md:pt-[17px] md:pb-[20px] py-[17px] px-[97px] md:px-[139px] bg-darkblue text-white rounded-[10px] mt-[20px] md:mt-[42px]">
                Start For Free
              </button>
            </div>
          </div>
          <div className="relative group md:w-[430px] xl:w-[470px] mt-[20px] md:mt-0">
            <div className="rounded-[10px] bg-[#f68a74] w-[160px] h-[38px] text-center flex justify-center cursor-pointer absolute z-20 -translate-x-[19px] md:-translate-x-[72px] -translate-y-5 md:-translate-y-1 -rotate-[12deg] md:-rotate-[38deg] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <p className="font-circular font-medium text-lg leading-[190%] text-white mb-0 cursor-pointer">
                Most Popular
              </p>
            </div>
            <div className="w-[335px] md:w-[461px] lg:w-[420px] xl:w-[461px] h-[543px] md:h-[677px] py-[30px] duration-500 ease-in-out border-transparent hover:border-[#f68a74] border-[6px] rounded-[10px] bg-white pricing-card-shadow relative flex justify-center items-center flex-col">
              <img
                className="w-[102px] h-[90px] md:w-[143px] md:h-[125px]"
                src={pricingtwo}
                alt="pricing-second-img"
              />
              <p className="font-circular text-[22px] md:text-xxl font-semibold text-darkblue leading-[140%] !mt-[19px]">
                Enterprise
              </p>
              <p className="font-circular font-semibold text-[50px] md:text-6xl text-black !leading-[140%]">
                $89<span className="text-lg md:text-xl">/mo</span>
              </p>
              <div className="w-[295px] h-[220px] md:w-[391px] md:h-[234px] bg-lightblue rounded-[10px] px-[25px] py-[25px] mt-[10px] md:mt-[19px]">
                <div className=" flex items-center gap-[14px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    Unlimited Email Accounts
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    Unlimited Email Warmup
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    1000 Active Leads
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    5000 Emails Monthly
                  </p>
                </div>
                <div className=" flex items-center gap-[14px] mt-[15px]">
                  <span>
                    <svg
                      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.90476"
                        cy="8.09535"
                        r="5.66667"
                        fill="white"
                      />
                      <path
                        d="M8.5 0C3.81328 0 0 3.81328 0 8.5C0 13.1867 3.81328 17 8.5 17C13.1867 17 17 13.1867 17 8.5C17 3.81328 13.1867 0 8.5 0ZM13.2506 6.26316L7.8183 11.6529C7.49875 11.9724 6.98747 11.9937 6.64662 11.6742L3.77068 9.05389C3.42982 8.73434 3.40852 8.20175 3.70677 7.8609C4.02632 7.52005 4.5589 7.49875 4.89975 7.8183L7.1792 9.90602L12.0363 5.04887C12.3772 4.70802 12.9098 4.70802 13.2506 5.04887C13.5915 5.38972 13.5915 5.92231 13.2506 6.26316Z"
                        fill="#5271FF"
                      />
                    </svg>
                  </span>
                  <p className="font-circular font-[450] text-sm md:text-base text-black leading-[150%]">
                    Live Chat Support
                  </p>
                </div>
              </div>
              <button className="font-circular hover:bg-[#ffa852] duration-500 ease-in-out text-base md:text-lg font-normal leading-[126%] pt-[17px] pb-[20px] px-[98px] md:px-[139px] bg-darkblue text-white rounded-[10px] mt-[19px] md:mt-[42px]">
                Start For Free
              </button>
            </div>
          </div>
        </div>
        <div className="text-center flex justify-center items-center mt-[50px]">
          <p className=" font-light text-base md:text-lg font-circular leading-[150%] text-white max-w-[777px]">
            ¹No purchase necessary. Contests are open to all eligible attendees
            who are active participants of the incentive community. All contests
            are open to eligible participants who "Request to Join" a contest
            based on eligibility criteria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
