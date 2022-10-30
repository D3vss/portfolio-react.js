import React, { useState } from "react";

import { Button } from "../";

import logo from "../../assets/assets.logo.png";

function Navbar(props) {
  let [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="container mx-auto bg-black py-8 flex flex-row justify-between items-center text-white">
      <img src={logo} />
      <div
        className={
          (toggleNav
            ? "flex flex-col absolute top-[120px] items-center bottom-0 container w-full justify-evenly py-5"
            : "hidden ") +
          "lg:flex lg:flex-row lg:static lg:justify-between lg:w-1/4 bg-black h-1/4"
        }
      >
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <div className=" lg:hidden">
          <Button label={"Let's Chat!"} variant="outlined" />
        </div>
      </div>
      <div className="hidden lg:block">
        <Button label={"Let's Chat!"} variant="outlined" />
      </div>
      <div className="visible lg:hidden">
        <Button
          variant={"filled"}
          label="X"
          onClick={() => setToggleNav(!toggleNav)}
        />
      </div>
    </div>
  );
}

export default Navbar;
