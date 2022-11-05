import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../";

import logo from "../../assets/assets.logo.png";

function Navbar(props) {
  let [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="px-20">
      <div className="bg-black py-8 flex flex-row justify-between items-center text-white">
        <img src={logo} />
        <div
          className={
            (toggleNav
              ? "container mx-auto flex flex-col absolute top-[120px] left-0 right-0 items-center bottom-0 container w-full justify-evenly py-5"
              : "hidden ") +
            "lg:flex lg:flex-row lg:static lg:justify-between lg:w-1/4 bg-red-500 h-1/4"
          }
        >
          <Link to={"/"}>
            <span>Home</span>
          </Link>
          <Link to={"/about"}>
            <span>About</span>
          </Link>
          <Link to={"/projects"}>
            <span>Projects</span>
          </Link>
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
