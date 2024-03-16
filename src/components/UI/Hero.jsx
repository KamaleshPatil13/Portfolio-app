import React from "react";

const Hero = () => {
  return (
    <section className="pt-0 flex justify-center item-center" id="about">
      <div className="container pt-14 justify-center">
        <div className="md:flex item-center justify-center sm:flex-col md:flex-row">
          {/*========================hero-left-content================= */}
          <div className="w-full md:w-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[40px]"
            >
              I'm Kamalesh Patil <br /> Software Engineer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex item-center gap-6 mt-7"
            >
              <a href="contact">
                <button className="bg-primaryColor text-white font-[500] flex item-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line">Hire me</i>
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] mt-[8px] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>

            <div className="flex item-center gap-9 mt-14">
              <p
                data-aos="fade-up"
                data-aos-duration="1800"
                className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-12 sm:pr-10 "
              >
                <span>
                  <i class="ri-app-3-line"> </i>
                </span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="flex item-center gap-5 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/kamalesh-patil/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill">LinkedIn</i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/KamaleshPatil13"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-github-fill">Github</i>
                </a>
              </span>
            </div>
          </div>

          {/*========================hero-left-end================= */}

          {/*========================hero-img================= */}

          <div className="w-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710589339~exp=1710589939~hmac=c04ed5c11ceeac3c96aacbdee465b0f131940b309cf7532e6b983ac6b32e11fe"
                alt=""
                className="rounded-2xl"
              />
            </figure>
          </div>

          {/*========================hero-img-end================= */}

          {/*========================hero-content-right================= */}
          <div className="mt-[80px] ml-[8px]">
            <div className="md:basic-1/5 flex justify-between text-center flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">2+</h2>
                <h4>Year of experience</h4>
              </div>
            </div>
            <div className="md:basic-1/5 flex justify-between text-center flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">2+</h2>
                <h4>Projects Completed</h4>
              </div>
            </div>
            {/*========================hero-content-right-end================= */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
