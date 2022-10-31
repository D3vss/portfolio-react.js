import React from "react";
import { Navbar } from "../";

function Layout({ children }) {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container px-20 mx-auto text-white">
        <div className="container px-20 mx-auto h-1 bg-blue-700" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
