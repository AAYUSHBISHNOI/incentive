import React from "react";
import footer_logo from "../assets/image/svg/footer-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" max-w-[1920px] mx-auto">
      <div className=" max-w-[1144px] mx-auto px-[20px] xl:px-0 pb-[20px]">
        <div className="mt-[20px] flex flex-col md:flex-row justify-between items-center pb-[25px] md:pb-[30px]">
          <div className="w-full md:w-[10%] xl:w-[33.33%] flex justify-center xl:justify-start">
            <a href="">
              <img src={footer_logo} alt="footer-logo" />
            </a>
          </div>
          <div className="w-full md:w-[30%] lg:w-[33.33%] flex justify-center xl:justify-start mt-[30px] md:mt-0">
            <ul className="flex flex-col md:flex-row items-center gap-[11px] md:gap-[50px]">
              <li>
                <a
                  href="#"
                  className="font-circular font-light text-base leading-[126%] text-[#000000] hover:text-[#5271ff] duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-circular font-light text-base leading-[126%] text-[#000000] hover:text-[#5271ff] duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-circular font-light text-base leading-[126%] text-[#000000] hover:text-[#5271ff] duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-circular font-light text-base leading-[126%] text-[#000000] hover:text-[#5271ff] duration-300"
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[30%] lg:w-[33.33%] flex justify-center xl:justify-end mt-[34px] md:mt-0">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                className="footer-icon duration-500 ease-in-out transition-all"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill="#5271FF"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M18.0422 29V21.4923H16V18.7892H18.0422V16.4804C18.0422 14.6661 19.2486 13 22.0282 13C23.1537 13 23.9859 13.1049 23.9859 13.1049L23.9203 15.6291C23.9203 15.6291 23.0716 15.6211 22.1454 15.6211C21.143 15.6211 20.9824 16.0701 20.9824 16.8154V18.7892H24L23.8687 21.4923H20.9824V29H18.0422Z"
                    fill="#5271FF"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                className="footer-icon duration-500 ease-in-out transition-all"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill="#5271FF"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M16.4954 12.7776C16.4951 13.2491 16.3076 13.7011 15.9741 14.0343C15.6405 14.3676 15.1883 14.5546 14.7168 14.5544C14.2453 14.5541 13.7933 14.3666 13.46 14.0331C13.1268 13.6995 12.9398 13.2473 12.94 12.7758C12.9402 12.3043 13.1278 11.8523 13.4613 11.5191C13.7948 11.1859 14.2471 10.9988 14.7186 10.999C15.19 10.9993 15.6421 11.1868 15.9753 11.5203C16.3085 11.8539 16.4956 12.3061 16.4954 12.7776ZM16.5487 15.8708H12.9933V26.999H16.5487V15.8708ZM22.1662 15.8708H18.6286V26.999H22.1306V21.1593C22.1306 17.9062 26.3704 17.604 26.3704 21.1593V26.999H29.8813V19.9505C29.8813 14.4664 23.6061 14.6708 22.1306 17.364L22.1662 15.8708Z"
                    fill="#5271FF"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                className="footer-icon duration-500 ease-in-out transition-all"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill="#5271FF"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M17.64 13H24.36C26.92 13 29 15.08 29 17.64V24.36C29 25.5906 28.5111 26.7708 27.641 27.641C26.7708 28.5111 25.5906 29 24.36 29H17.64C15.08 29 13 26.92 13 24.36V17.64C13 16.4094 13.4889 15.2292 14.359 14.359C15.2292 13.4889 16.4094 13 17.64 13ZM17.48 14.6C16.7162 14.6 15.9836 14.9034 15.4435 15.4435C14.9034 15.9836 14.6 16.7162 14.6 17.48V24.52C14.6 26.112 15.888 27.4 17.48 27.4H24.52C25.2838 27.4 26.0164 27.0966 26.5565 26.5565C27.0966 26.0164 27.4 25.2838 27.4 24.52V17.48C27.4 15.888 26.112 14.6 24.52 14.6H17.48ZM25.2 15.8C25.4652 15.8 25.7196 15.9054 25.9071 16.0929C26.0946 16.2804 26.2 16.5348 26.2 16.8C26.2 17.0652 26.0946 17.3196 25.9071 17.5071C25.7196 17.6946 25.4652 17.8 25.2 17.8C24.9348 17.8 24.6804 17.6946 24.4929 17.5071C24.3054 17.3196 24.2 17.0652 24.2 16.8C24.2 16.5348 24.3054 16.2804 24.4929 16.0929C24.6804 15.9054 24.9348 15.8 25.2 15.8ZM21 17C22.0609 17 23.0783 17.4214 23.8284 18.1716C24.5786 18.9217 25 19.9391 25 21C25 22.0609 24.5786 23.0783 23.8284 23.8284C23.0783 24.5786 22.0609 25 21 25C19.9391 25 18.9217 24.5786 18.1716 23.8284C17.4214 23.0783 17 22.0609 17 21C17 19.9391 17.4214 18.9217 18.1716 18.1716C18.9217 17.4214 19.9391 17 21 17ZM21 18.6C20.3635 18.6 19.753 18.8529 19.3029 19.3029C18.8529 19.753 18.6 20.3635 18.6 21C18.6 21.6365 18.8529 22.247 19.3029 22.6971C19.753 23.1471 20.3635 23.4 21 23.4C21.6365 23.4 22.247 23.1471 22.6971 22.6971C23.1471 22.247 23.4 21.6365 23.4 21C23.4 20.3635 23.1471 19.753 22.6971 19.3029C22.247 18.8529 21.6365 18.6 21 18.6Z"
                    fill="#5271FF"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                className="footer-icon duration-500 ease-in-out transition-all"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill="#5271FF"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M18.8571 23.5714L23.3057 21L18.8571 18.4286V23.5714ZM28.7657 16.86C28.8771 17.2629 28.9543 17.8029 29.0057 18.4886C29.0657 19.1743 29.0914 19.7657 29.0914 20.28L29.1429 21C29.1429 22.8771 29.0057 24.2571 28.7657 25.14C28.5514 25.9114 28.0543 26.4086 27.2829 26.6229C26.88 26.7343 26.1429 26.8114 25.0114 26.8629C23.8971 26.9229 22.8771 26.9486 21.9343 26.9486L20.5714 27C16.98 27 14.7429 26.8629 13.86 26.6229C13.0886 26.4086 12.5914 25.9114 12.3771 25.14C12.2657 24.7371 12.1886 24.1971 12.1371 23.5114C12.0771 22.8257 12.0514 22.2343 12.0514 21.72L12 21C12 19.1229 12.1371 17.7429 12.3771 16.86C12.5914 16.0886 13.0886 15.5914 13.86 15.3771C14.2629 15.2657 15 15.1886 16.1314 15.1371C17.2457 15.0771 18.2657 15.0514 19.2086 15.0514L20.5714 15C24.1629 15 26.4 15.1371 27.2829 15.3771C28.0543 15.5914 28.5514 16.0886 28.7657 16.86Z"
                    fill="#5271FF"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#dcdcdc]"></div>
        <div className="pt-[17px] flex flex-col md:flex-row items-center w-full">
          <div>
            <ul>
              <li>
                <a
                  href=""
                  className="font-circular font-light text-base leading-[150%] relative transition-all ease-in-out duration-500 after:absolute after:bottom-[-3px] after:left-[-5px] after:h-[2px] after:ease-in-out after:duration-300 after:w-[110px]  after:bg-[#000000]"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center w-[80%] md:w-[75%] mt-3 md:mt-0">
            <p className="font-light text-base font-circular text-[#797979] leading-[150%]">
              © {currentYear} Red Shield Technology Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
