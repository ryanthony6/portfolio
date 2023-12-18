import React, {} from "react";
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
 
  return (
    
    <section id="home" className="pt-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello👋,
              <span className="block font-bold text-dark text-3xl mt-1 lg:text-5xl">
                <TypeAnimation
                  sequence={[
                    "Welcome to my Website",
                    1000, // 
                    "My name is Ryan Anthony",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 mt-1 lg:text-2xl">
              Software developer | Tech enthusiast
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              suscipit nesciunt aliquam. Quod quo nam beatae distinctio labore
              aut veritatis.
            </p>

            <a
              href="#home"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out focus:ring-4 focus:ring-sky-300"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 lg:mt-9 lg:right-0">
              <img
                src="/img/bagus.png"
                alt="Icon"
                className="max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
