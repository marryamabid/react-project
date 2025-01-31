import React from "react";

const ColorButton = ({ color, setColor }) => {
  return (
    <button
      className="outline-none px-4 rounded-full text-black shadow-lg"
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
};

export default ColorButton;