import React from "react";
import { Navbar } from "../";

function Layout({ children }) {
  return (
    <div className="bg-black h-screen flex flex-col">
      <Navbar />
      <div className="container px-20 mx-auto text-white h-full">
        {children}
      </div>
    </div>
  );
}

export default Layout;
