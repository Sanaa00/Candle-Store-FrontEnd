import React from "react";

function Container(props) {
  return (
    <div className="px-6 sm:px-10 md:px-32 mx-auto ">{props.children}</div>
  );
}

export default Container;
