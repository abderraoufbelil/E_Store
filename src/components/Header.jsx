import React from "react";
import Containerlayout from "./Containerlayout";
import Banter from "./Banter";
import Headermenu from "./Headermenu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <Containerlayout>
        <div className="w-full relative">
          <Banter />
          <Headermenu />
        </div>
      </Containerlayout>
    </header>
  );
};
