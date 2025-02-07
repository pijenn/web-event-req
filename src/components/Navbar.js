import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CheckUser, invalidateSession } from "./helpers/SessionHelper";
import { getPathName } from "./helpers/DataHelper";

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  let pathname = getPathName(useLocation().pathname);
  if (pathname === "/") return null;
  return (
    <nav
      className="top-0 w-full h-auto z-50 flex flex-col content-center justify-center px-12 py-4"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535681/navbar_uecvvg.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="self-center flex flex-col md:space-y-0 md:flex-row content-center justify-between flex-grow w-5/6">
        <div className="flex">
          <img
            src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1738910400/Logo_SGE_for_Web_yieqge.svg"
            className="hidden md:flex w-11 h-11 pointer-events-none mr-2"
          />
          <Link
            to="/"
            className="hidden md:flex self-center text-md md:text-2xl font-semibold leading-relaxed text-shadow-md text-white text-center md:text-left"
          >
            SGE FILKOM
          </Link>
        </div>

        <button
          onClick={() => setMenu(!showMenu)}
          className="md:hidden text-center font-bold py-1 px-3 my-2 bg-custorange text-white rounded-lg shadow-md focus:outline-none"
          tabIndex="-1"
        >
          Menu
        </button>
        <div
          onClick={() => setMenu(false)}
          className={`${
            showMenu ? "flex" : "hidden"
          } flex-wrap md:flex flex-row mt-2 md:mt-0 content-center justify-center text-md tracking-tight leading-relaxed text-justify text-white space-x-2`}
        >
          <HashLink
            smooth
            to={pathname + "#beranda"}
            className="font-bold py-5 md:py-1 px-3 text-white hover:text-custorange transition ease-linear focus:outline-none"
            tabIndex="-1"
          >
            Beranda
          </HashLink>
          <HashLink
            smooth
            to={pathname + "#tentang"}
            className="font-bold py-5 md:py-1  px-3 text-white hover:text-custorange transition ease-linear focus:outline-none"
            tabIndex="-1"
          >
            Tentang
          </HashLink>
          <HashLink
            smooth
            to={pathname + "#linimasa"}
            className="font-bold py-5 md:py-1  px-3 text-white hover:text-custorange transition ease-linear focus:outline-none"
            tabIndex="-1"
          >
            Linimasa
          </HashLink>
          <CheckUser forLoggedOut>
            <Link
              to={pathname + "/notice"}
              className="font-bold py-1 md:mb-0 mb-5 px-6 border-2 border-white hover:border-transparent bg-gradient-to-r text-white rounded-full shadow-md hover:bg-custorange hover:text-white transition ease-linear focus:outline-none"
              tabIndex="-1"
            >
              Daftar
            </Link>
          </CheckUser>
          <CheckUser>
            <button
              onClick={() => {
                invalidateSession();
                window.location.reload();
              }}
              className="font-bold py-1 px-6 bg-gradient-to-r bg-custorange text-white rounded-full shadow-md hover:from-gray-50 hover:to-gray-300  hover:text-newOrange transition ease-linear focus:outline-none"
              tabIndex="-1"
            >
              Keluar
            </button>
          </CheckUser>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
