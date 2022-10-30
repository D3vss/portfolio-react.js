import React from "react";
import logo from "../../assets/assets.logo.png";
function Navbar(props) {
  return (
    <div className="container mx-auto bg-black py-8 flex flex-row justify-between items-center text-white">
      <img src={logo} />
      <div className="flex flex-row justify-between w-1/4">
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
      </div>
      <div>Let's Chat!</div>
    </div>
  );
}

export default Navbar;
