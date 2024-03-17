import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-3  flex justify-center">
      {/*========================header-top-start================= */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <h2 className="text-xl sm:text-2xl leading-10 text-white font-semibold mb-5 text-center sm:text-left">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact" className="flex justify-center sm:justify-start">
              <button className="bg-primaryColor text-white font-semibold flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-8px">
                <i className="ri-mail-line"></i> Hire me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 text-center sm:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
              <span className="text-gray-300 font-semibold text-sm">
                Follow Me:
              </span>
              <a href="#" className="text-gray-300 font-semibold text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 font-semibold text-sm">
                Github
              </a>
            </div>
          </div>
        </div>

        {/*========================header-bottom-start================= */}
        <div className="bg-[#1b1e29] py-2 mt-14">
          <div className="container">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <span className="w-8 h-8 rounded-full bg-[#2b2d33] text-white flex items-center justify-center font-semibold">
                  M
                </span>
                <div className="leading-5">
                  <h2 className="text-gray-200 font-semibold">Kamalesh</h2>
                  <p className="text-gray-400 text-sm">Personal</p>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                Copyright {year} developed by Kamalesh - All rights reserved.
              </div>
            </div>
          </div>
        </div>
        {/*========================header-bottom-end================= */}
      </div>
    </footer>
  );
};

export default Footer;
