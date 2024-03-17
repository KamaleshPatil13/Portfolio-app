import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16 pt-16 justify-center flex">
      <div className="container">
        <div className="text-smallTextColor text-[2rem] font-[500] text-center md:text-left">
          Get in touch
        </div>
        <div className="md:flex justify-between items-center md:space-x-6">
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.064454658508!2d73.89949714923368!3d18.550028997042773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c110906790c5%3A0x56612d8536b59a72!2sKalyani%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710659035110!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-[5px] mb-8 md:mb-0"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 rounded-[5px]">
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Enter your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                ></textarea>
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
