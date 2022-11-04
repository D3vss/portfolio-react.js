import React from "react";

function Badge({ label, color }) {
  return (
    <span
      class={`text-xs h-5 px-2.5 text-center whitespace-nowrap align-baseline font-bold text-white rounded ${color}`}
    >
      {label}
    </span>
  );
}

export default Badge;
