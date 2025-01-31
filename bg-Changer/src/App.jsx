import React from "react";
import { useState } from "react";
import ColorButton from '../ColorButton.jsx';

function App() {
  const [color, setColor] = useState("olive");
  const colors = ["red", "blue", "green", "violet", "pink", "brown"];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div
          className="fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2 ">
          <div
            className="flex flex-wrap justify-center gap-3 
      shadow-lg bg-white px-3 py-2 rounded-2xl">
            {colors.map((colorName) => (
              <ColorButton key={colorName} color={colorName} setColor={setColor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
