import { Button } from "@material-tailwind/react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between p-3">
        <div>
          <h2 className="text-3xl font-semibold">
            Ashraful <span className="text-red-700">Islam.</span>
          </h2>
        </div>

        {/* Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="bg-white cursor-pointer rounded-full p-2"
          >
            <img
              className="w-5"
              src="https://img.icons8.com/?size=26&id=3095&format=png"
              alt=""
            />
          </button>
        </div>
        <div className={`hidden lg:block`}>
          <ul className="flex gap-2 items-center">
            <li>
              <a className="text-lg font-normal text-gray-300" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="text-lg font-normal text-gray-300" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="text-lg font-normal text-gray-300" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a
                className="bg-red-700 px-5 py-2 rounded font-normal text-lg text-white"
                href="#"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Hamburger */}
      <div
        className={`${
          open ? "block" : "hidden"
        } w-full h-screen flex items-center justify-center text-center bg-slate-700`}
      >
        <ul className="flex flex-col gap-8 ">
          <li>
            <a className="text-lg font-normal text-gray-300" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="text-lg font-normal text-gray-300" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-lg font-normal text-gray-300" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="bg-red-700 px-5 py-2 rounded font-normal text-lg text-white"
              href="#"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
