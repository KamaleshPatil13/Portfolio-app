import React from "react";
import portfolios from "../../asset/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  if (!portfolio) {
    return null;
  }

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-6">
            <div>
              <figure>
                <img
                  className="rounded-lg"
                  src={portfolio.imageURL}
                  alt="Portfolio"
                />
              </figure>
            </div>

            <div>
              <h2 className="text-2xl font-bold my-5">{portfolio.title}</h2>
              <p className="text-sm leading-7 text-gray-600">{portfolio.description}</p>
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <h4 className="text-gray-700 text-sm font-bold">Technologies:</h4>
                {portfolio.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 py-1 px-2 rounded text-sm text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a href={portfolio.siteURL}>
                <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded font-semibold hover:bg-headingColor duration-300">
                  Live Site
                </button>
              </a>
            </div>
            <button
              className="absolute top-0 right-0 m-3 bg-white rounded-full text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => handleCancel()}
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
