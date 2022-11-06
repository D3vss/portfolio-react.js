import React, { useState } from "react";
import { Navbar } from "../";

function Layout({ children, className }) {
  const [blur, setBlur] = useState("blur-none");
  return (
    <div className={`bg-black flex flex-col ${className}`}>
      <Navbar setBlur={setBlur} />
      <div
        className={`bg-black container px-20 mx-auto text-white flex-1 ${blur} lg:blur-none`}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
