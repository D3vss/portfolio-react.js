import React from "react";
import { Navbar } from "../";

function Layout({ children }) {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container mx-auto h-1 bg-blue-700"></div>
      <div className="container mx-auto text-white">{children}</div>
    </div>
  );
}

export default Layout;
