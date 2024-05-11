import React, { useEffect, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import ListElement from "./ListElement";

const Headermenu = () => {
  const [menustates, show_hide_menus] = useState({
    settings: false,
    navigation: false,
  });
  useEffect(() => {
    console.log(menustates);
  });
  const Listelements = [
    { name: "Home" },
    {},
    { name: "Product" },
    {},
    { name: "Promo" },
    {},
    { name: "Contact Us" },
  ];
  const buttonslist = [
    { name: "notification", path: "/notification.png" },
    { name: "chat", path: "/chat.png" },
    { name: "market", path: "/market.png" },
    { name: "cart", path: "/cart.png" },
  ];

  const change_menu_state = (menuName) => {
    show_hide_menus((prevStates) => ({
      ...prevStates,
      [menuName]: !prevStates[menuName],
    }));
  };
  return (
    <>
      {menustates.navigation && (
        <ResponsiveMenu ElementList={Listelements} text underline />
      )}
      {menustates.settings && <ResponsiveMenu ElementList={buttonslist} text />}
      <div className="w-full h-[80px] bg-transparent p-4 flex  border-b-[1px] relative">
        <div
          onClick={() => {
            change_menu_state("navigation");
          }}
          className="h-[50px] w-[50px] flex flex-col gap-1 lg:hidden justify-center items-center cursor-pointer"
        >
          <span className="h-[5px] w-full bg-black"></span>
          <span className="h-[5px] w-full bg-black"></span>
          <span className="h-[5px] w-full bg-black"></span>
        </div>

        <div className=" w-[70%] h-full flex gap-1 sm:gap-10 items-center">
          <img
            className="h-[80%] object-contain"
            src="/logofordesignsite.PNG"
            alt=""
          />
          <div className=" w-[60%] sm:w-[70%] lg:w-[30%] h-[80%] flex px-2 gap-2 items-center outline-none border-[1px]  rounded-xl ">
            <img
              className="h-[80%] object-contain"
              src="/searchicon.png"
              alt=""
            />
            <input
              className=" h-full bg-transparent outline-none border-none "
              type="text"
            />
          </div>

          <div className="lg:flex hidden">
            <ul className=" hidden gap-6 items-center lg:flex">
              {Listelements.map((item, index) => (
                <ListElement item={item} key={index} text underline />
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[30%] flex justify-end relative">
          <div
            onClick={() => {
              change_menu_state("settings");
            }}
            className="h-[50px] w-[50px] flex flex-col gap-1 md:hidden justify-center items-center self-end cursor-pointer"
          >
            <img className="w-full h-full" src="/settings.svg" alt="" />
          </div>

          <ul className=" justify-end gap-6 items-center md:flex hidden">
            {buttonslist.map((item, index) => (
              <ListElement item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Headermenu;
