import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex item-center">
      <div className="container">
        <div className="flex item-center justify-between">
          {/*========================logo-start================= */}
          <div className="flex item-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex item-center justify-center ">
              M
            </span>
            <div className="leading-[20px">
              <h2 className="text-xl text-smallTextColor font-[700] ">
                Kamalesh
              </h2>
              <p className="text-smallTextColor text-[18px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          {/*========================logo-end================= */}
          {/*========================menu-start================= */}

          <div className="menu">
            <ul className="flex item-center gap-10">
              <li className="text-smallTextColor fornt-[600]">
                <a href="#about"></a>Home
              </li>
              <li className="text-smallTextColor fornt-[600]">
                <a href="#services"></a>Services
              </li>
              <li className="text-smallTextColor fornt-[600]">
                <a href="#portfolio"></a>Portfolio
              </li>
              <li className="text-smallTextColor fornt-[600]">
                <a href="#contact"></a>Contact
              </li>
            </ul>
          </div>
          {/*========================menu-end================= */}

          {/*========================menu-right================= */}
          <div>
            <div className="flex item-center gap-4 ">
              <button className="flex item-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]  hover:bg-smallTextColor hover:text-white hover-font-[500] ease-in-duration-700   ">
                <i class="ri-send-plane-line"></i>Lets Talk
              </button>
            </div>
          </div>
          {/*========================menu-end================= */}
        </div>
      </div>
    </header>
  );
};

export default Header;
