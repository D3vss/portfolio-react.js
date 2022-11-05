import React from "react";
import { Navbar } from "../";

function Layout({ children, className }) {
  return (
    <div className={`bg-black flex flex-col ${className}`}>
      <Navbar />
      <div className="bg-black container px-20 mx-auto text-white flex-1">
        {children}
      </div>
    </div>
  );
}

export default Layout;
