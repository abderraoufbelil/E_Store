import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function AnimatedMulti({ title, options }) {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <h1 className="w-[80%] text-lg font-bold title-class">{title} </h1>
      <Select
        className=" w-[80%]"
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={options}
      />
    </div>
  );
}
