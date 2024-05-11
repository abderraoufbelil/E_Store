import React from "react";

const Containerlayout = ({ color, height, children }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: height ? height : "auto",
      }}
      className=" w-full flex justify-center items-center "
    >
      <div className=" w-full max-w-[1280px]   flex flex-nowrap md:flex-wrap justify-center items-start bg-transparent ">
        {children}
      </div>
    </div>
  );
};

export default Containerlayout;
