import React, { useState } from "react";
import data from "../../asset/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
    console.log(id);
  };

  return (
    <section id="portfolio" className="flex justify-center">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="mt-10 mb-5 sm:mb-0 md:w-full">
            <h3 className="text-headingColor text-[2rem] font-[700] text-center sm:text-left">
              My Recent Projects
            </h3>
          </div>
          <div className="flex items-center gap-4 flex-wrap mt-12">
            {data &&
              data.map((specificData) => (
                <div
                  data-aos="fade-zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] flex-shrink-0"
                  key={specificData.id}
                >
                  <figure className="sm: mx-2">
                    <img
                      className="rounded-[8px]"
                      src={specificData.imageURL}
                      alt=""
                    />
                  </figure>
                  <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                    <div className="w-full h-full flex items-center justify-center">
                      <button
                        className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                        onClick={() => showModalHandler(specificData.id)}
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeId} />}
    </section>
  );
};

export default Portfolio;
