import React from "react";
import ListElement from "./ListElement";

const ResponsiveMenu = ({ ElementList, text }) => {
  return (
    <div className="  z-50 absolute top-[65px] h-screen bg-white w-full md:hidden">
      <ul className="flex flex-col items-center gap-8 h-full">
        {ElementList.map((item) => (
          <li className=" cursor-pointer after:h-[1px] after:w-[0px]">
            <span className="w-full flex justify-center items-center gap-2 hover:scale-110">
              {item.path && (
                <img
                  className=" cursor-pointer h-[30px] "
                  src={item.path}
                  alt=""
                />
              )}
              {text && item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
