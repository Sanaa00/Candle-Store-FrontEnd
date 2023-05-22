import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Colors({ colors }) {
  const [isActive, setActive] = useState(false);
  const [color, setColor] = useState("");
  console.log(color);
  const handleDropdownClick = () => setActive(!isActive);
  const handleColor = (coloritem) => {
    setColor(coloritem);
    setActive(!isActive);
  };
  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <span className="rounded-md shadow-sm">
            <button
              onClick={handleDropdownClick}
              type="button"
              className="inline-flex justify-center w-full rounded-sm border-2 border-gray-200 px-4 py-2 bg-gray-50 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-greeen focus:shadow-greeen active:bg-greeen active:text-gray-200 transition ease-in-out duration-150"
            >
              Colors
              <MdKeyboardArrowDown className="-mr-1 ml-2 h-5 w-5" />
            </button>
          </span>
        </div>
        <div
          className={`${
            isActive ? "block" : "hidden"
          } +origin-top-left absolute left-0 mt-2 w-32 rounded-md shadow-lg`}
        >
          <div className="rounded-md bg-gray-50 shadow-xs z-10 w-full ">
            <div className="py-1 flex flex-col justify-center items-center w-full ">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    onClick={() => handleColor(color)}
                    style={{ backgroundColor: color }}
                    className={`block m-1 h-8 w-28 rounded-sm text-sm  text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900`}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
