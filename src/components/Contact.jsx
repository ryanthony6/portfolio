import React from "react";

const Contact = () => {
  return (
    <section id="contactMe" className="pt-32 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Contact</h4>
            <h2 className="font-bold text-dark text-3xl lg:text-4xl">Contact Me</h2>
            <p className="font-medium text-secondary text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eligendi enim eaque sed beatae
            </p>
          </div>
        </div>

        <form className="mx-auto lg:w-2/3">
          <label
            for="name-icon"
            className="block mb-2 text-base font-bold text-primary pt-4"
          >
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 18"
              >
                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
            </div>
            <input
              type="text"
              id="name-icon"
              className="bg-slate-100 border border-slate-300 text-black text-sm rounded-lg block w-full ps-10 p-2.5 100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="John Doe"
            />
          </div>

          <label
            for="email-address-icon"
            className="block mb-2 text-base font-bold text-primary pt-4"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-slate-100 border border-slate-300 text-black text-sm rounded-lg block w-full ps-10 p-2.5 100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="name@gmail.com"
            />
          </div>

          <label
            for="message-icon"
            className="block mb-2 text-base font-bold text-primary pt-4"
          >
            Message
          </label>
          <textarea
            type="area"
            id="email-address-icon"
            className="bg-slate-100 border border-slate-300 text-black text-sm rounded-lg block w-full p-3 h-32 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          ></textarea>

          <div className="w-full px-4 py-8">
            <button className="text-base font-semibold text-white bg-primary py-3 px-6 rounded-full w-full hover:opacity-80 transition duration-500 ease-in-out hover:shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
