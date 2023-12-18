import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32 bg-slate-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Projects</h4>
            <h2 className="font-bold text-dark text-3xl lg:text-4xl">
              Newest Project
            </h2>
            <p className="font-medium text-secondary text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eligendi enim eaque sed beatae
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src="https://source.unsplash.com/360x200?code"
                className="w-full"
                alt="halo"
              />
              <div className="py-7 px-6">
                <h3>
                  <a
                    href="#home"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Weather APP
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  dolorum!
                </p>
                <a
                  href="#home"
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src="https://source.unsplash.com/360x200?code"
                className="w-full"
                alt="halo"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#home"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Social media APP
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  dolorum!
                </p>
                <a
                  href="#home"
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src="https://source.unsplash.com/360x200?code"
                className="w-full"
                alt="halo"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#home"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Chat APP
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  dolorum!
                </p>
                <a
                  href="#home"
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
