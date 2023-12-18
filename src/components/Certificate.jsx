import React from "react";

const Certificate = () => {
  return (
    <section id="portfolio" className="pt-32 pb-16 bg-slate-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Certificates</h4>
            <h2 className="font-bold text-dark text-3xl lg:text-4xl">
              List of certificate
            </h2>
            <p className="font-medium text-secondary text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eligendi enim eaque sed beatae nulla dolore cumque neque vel in?
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div data-aos="fade-up" data-aos-duration="1500" className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/img/portofolio/1.jpg" alt="projek" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Certificate 1
            </h3>
            <p className="font-medium text-secondary text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
              quidem ipsa omnis ut. Deserunt!
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/img/portofolio/2.jpg" alt="projek" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Certificate 2
            </h3>
            <p className="font-medium text-secondary text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
              quidem ipsa omnis ut. Deserunt!
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/img/portofolio/3.jpg" alt="projek" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Certificate 3
            </h3>
            <p className="font-medium text-secondary text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
              quidem ipsa omnis ut. Deserunt!
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="/img/portofolio/4.jpg" alt="projek" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Certificate 4
            </h3>
            <p className="font-medium text-secondary text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
              quidem ipsa omnis ut. Deserunt!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
