import React from "react";

function Button({ label, variant, onClick, onSubmit, type }) {
  return (
    <button
      type={type}
      className={
        variant == "filled"
          ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
          : variant == "outlined"
          ? "hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-blue-500 text-white-500 hover:text-white hover:bg-blue-600 focus:ring-blue-800"
          : console.log("Invalid Button Type. Valid Options: outlined / filled")
      }
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {label}
    </button>
  );
}

export default Button;
