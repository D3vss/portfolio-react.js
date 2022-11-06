import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, PageLink } from "../";

import logo from "../../assets/assets.logo.png";

function Navbar({ setBlur }) {
  let [toggleNav, setToggleNav] = useState(false);
  useEffect(() => {
    if (toggleNav) setBlur("blur-sm");
    else setBlur("blur-none");
  }, [toggleNav]);
  return (
    <nav className="px-20 z-50">
      <div className="bg-black py-8 flex flex-row justify-between items-center text-white">
        <img src={logo} />
        <div
          className={
            (toggleNav
              ? "container mx-auto flex flex-col absolute top-[120px] left-0 right-0 bottom-0 items-center  container w-full justify-evenly py-5 z-50 "
              : "hidden ") +
            "lg:flex lg:flex-row lg:static lg:justify-between lg:w-1/4 ring-1 lg:ring-0 bg-black h-1/2 opacity-95 lg:opacity-1"
          }
        >
          <PageLink link={"/"} label={"Home"} />
          <PageLink link={"/about"} label={"About"} />
          <PageLink link={"/projects"} label={"Projects"} />

          <Link to={"/contact"}>
            <div className=" lg:hidden">
              <Button label={"Let's Chat!"} variant="outlined" />
            </div>
          </Link>
        </div>
        <Link to={"/contact"}>
          <div className="hidden lg:block">
            <Button label={"Let's Chat!"} variant="outlined" />
          </div>
        </Link>
        <div className="visible lg:hidden">
          <Button
            variant={"filled"}
            label="X"
            onClick={() => setToggleNav(!toggleNav)}
          />
        </div>
      </div>
      <div className="container px-20 mx-auto h-1 bg-blue-700" />
    </nav>
  );
}

export default Navbar;
