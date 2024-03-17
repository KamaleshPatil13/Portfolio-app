import React from "react";

const Hero = () => {
  return (
    <section className="pt-0 flex justify-center items-center" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
          {/*========================hero-left-content================= */}
          <div className="w-full md:w-1/2 sm:ml-2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-semibold text-[16px] text-center sm:text-left"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-bold text-[1.8rem] sm:text-4xl leading-[40px] text-center sm:text-left mt-4"
            >
              I'm Kamalesh Patil <br /> Software Engineer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mt-7"
            >
              <a href="contact">
                <button className="bg-primaryColor text-white font-semibold flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-8px">
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-semibold mt-2 sm:mt-0 text-center sm:text-left border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>

            <div className="flex flex-col items-center gap-4 mt-14">
              <p
                data-aos="fade-up"
                data-aos-duration="1800"
                className="flex gap-2 text-headingColor font-medium text-[15px] leading-7 sm:text-left"
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

            <div className="flex justify-center md:justify-start items-center gap-5 mt-14">
              <span className="text-smallTextColor text-[15px] font-semibold">
                Follow me:
              </span>
              <span className="text-smallTextColor text-[18px] font-semibold">
                <a href="https://www.linkedin.com/in/kamalesh-patil/">
                  <i class="ri-linkedin-box-fill"></i> LinkedIn
                </a>
              </span>
              <span className="text-smallTextColor text-[18px] font-semibold">
                <a href="https://github.com/KamaleshPatil13">
                  <i className="ri-github-fill"></i> Github
                </a>
              </span>
            </div>
          </div>

          {/*========================hero-left-end================= */}

          {/*========================hero-img================= */}

          <div className="w-full sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1710589339~exp=1710589939~hmac=c04ed5c11ceeac3c96aacbdee465b0f131940b309cf7532e6b983ac6b32e11fe"
                alt=""
                className="rounded-2xl"
              />
            </figure>
          </div>

          {/*========================hero-img-end================= */}

          {/*========================hero-content-right================= */}
          <div className="mt-8 md:mt-0 md:ml-4">
            <div className="flex justify-center md:justify-between text-center flex-wrap gap-4 md:flex-col md:justify-end md:text-right sm:text-left">
              <div>
                <h2 className="text-headingColor font-semibold text-[32px]">
                  2+
                </h2>
                <h4 className="text-smallTextColor">Year of experience</h4>
              </div>
            </div>
            <div className="flex justify-center md:justify-between text-center flex-wrap gap-4 md:flex-col md:justify-end md:text-right mt-4">
              <div>
                <h2 className="text-headingColor font-semibold text-[32px]">
                  2+
                </h2>
                <h4 className="text-smallTextColor">Projects Completed</h4>
              </div>
            </div>
          </div>

          {/*========================hero-content-right-end================= */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
