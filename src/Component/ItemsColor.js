import React from "react";

function ItemsColor() {
  const colors = ["#CE5959", "#B8621B", "#FEFF86", "#408E91", "#F7C8E0"];
  return (
    <div>
      <div>Colors</div>
      <div className="flex items-center w-96 mt-2">
        {colors.map((color) => {
          return (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className={`w-6 h-6 shadow-sm rounded-full focus:border-greeen focus:border-2 m-2`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ItemsColor;
