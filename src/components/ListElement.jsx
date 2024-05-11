import React from "react";

const ListElement = ({ item, text, underline }) => {
  return (
    <>
      {underline ? (
        item?.name ? (
          <li className=" cursor-pointer after:h-[1px] after:w-[0px] after:bg-black after:block hover:after:w-full hover:after:bg-black  after:transition-width  after:ease-in  after:duration-200">
            {item.path && (
              <img
                className=" cursor-pointer h-[30px] hover:scale-[1.1]"
                src={item.path}
                alt=""
              />
            )}
            {text && item.name}
          </li>
        ) : (
          <li className="">|</li>
        )
      ) : item?.name ? (
        <li className=" cursor-pointer ">
          {item.path && (
            <img
              className=" cursor-pointer h-[30px] hover:scale-[1.1]"
              src={item.path}
              alt=""
            />
          )}
          {text && item.name}
        </li>
      ) : (
        <li className="">|</li>
      )}
    </>
  );
};

export default ListElement;
