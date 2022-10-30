import React from "react";
import { Navbar } from "../";

function Layout({ children }) {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container mx-auto text-white">{children}</div>
    </div>
  );
}

export default Layout;
