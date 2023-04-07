import React from "react";

function Container(props) {
  return (
    <div className="px-6 sm:px-10 md:px-14 lg:px-28 xl:px-48 mx-auto ">
      {props.children}
    </div>
  );
}

export default Container;
