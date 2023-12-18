import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className=" bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6 "
            >
              Portfolio
            </a>
          </div>

          <div className="flex items-center px-4">
            <nav
              className={
                !nav
                  ? "absolute bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full"
                  : "hidden lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              }
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Achievements
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#projects"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Projects
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contactMe"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            onClick={handleNav}
            className="text-4xl cursor-pointer lg:hidden"
          >
            {!nav ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
