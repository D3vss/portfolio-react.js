import React from "react";
import { Link } from "react-router-dom";

function PageLink({ label, link }) {
  return (
    <Link
      className="flex flex-row justify-center hover:bg-blue-700 px-3 py-2 w-1/4 rounded-sm cursor-pointer"
      to={link}
    >
      {label}
    </Link>
  );
}

export default PageLink;
