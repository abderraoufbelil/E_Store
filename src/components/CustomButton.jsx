import React from "react";

const CustomButton = ({ styles, text, buttonfunction }) => {
  return (
    <button
      onClick={() => {
        buttonfunction("processor");
        buttonfunction("graphic");
        buttonfunction("ram");
      }}
      style={styles}
      className=" tracking-widest w-[80%] flex justify-center items-center rounded-lg text-m text-white font-bold bg-[#2D56FF] py-1 "
    >
      {text}
    </button>
  );
};

export default CustomButton;
