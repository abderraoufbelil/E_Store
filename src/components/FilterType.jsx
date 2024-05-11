import React from "react";
import FilterOption from "./FilterOption";

const FilterType = ({ title, options }) => {
  return (
    <div className="w-[100%] flex flex-col gap-4 justify-center items-center">
      <h1 className="w-[80%] text-lg font-bold title-class">{title} </h1>
      {options.map((item, key) => (
        <FilterOption {...{ item, key }} />
      ))}
    </div>
  );
};

export default FilterType;
