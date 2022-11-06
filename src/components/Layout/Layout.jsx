import React, { useState } from "react";
import { Navbar } from "../";
import { Helmet } from "react-helmet";

function Layout({ children, className, title }) {
  const [blur, setBlur] = useState("blur-none");
  return (
    <div className={`bg-black flex flex-col ${className}`}>
      <Helmet>
        <title>{`D3vss - ${title}`}</title>
      </Helmet>
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
