import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex justify-center">
      <div className="container flex justify-between items-center">
        {/*========================logo-start================= */}
        <div className="flex items-center gap-[10px]">
          <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
            M
          </span>
          <div className="leading-[20px]">
            <h2 className="text-xl text-smallTextColor font-[700]">Kamalesh</h2>
            <p className="text-smallTextColor text-[18px] font-[500]">
              Personal
            </p>
          </div>
        </div>

        {/*========================logo-end================= */}
        {/*========================menu-start================= */}

        {/* Display the navigation on screens larger than medium */}
        <nav className="hidden sm:flex">
          <ul className="flex item-center gap-10">
            <li className="text-smallTextColor font-[600]">
              <a href="#about">Home</a>
            </li>
            <li className="text-smallTextColor font-[600]">
              <a href="#services">Services</a>
            </li>
            <li className="text-smallTextColor font-[600]">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="text-smallTextColor font-[600]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/*========================menu-end================= */}
        {/*========================menu-right================= */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-smallTextColor font-semibold border border-solid border-smallTextColor py-2 px-4 rounded-md max-h-[40px] hover:bg-smallTextColor hover:text-white hover-font-semibold ease-in-duration-700">
            <i className="ri-send-plane-line"></i>
            <span>Lets Talk</span>
          </button>
          <span className="text-2xl text-smallTextColor">
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
