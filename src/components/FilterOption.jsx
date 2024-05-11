import React from "react";

const FilterOption = ({ item }) => {
  return (
    <div className="w-[80%]  flex justify-start gap-2 items-end ">
      <input className=" self-stretch" type="checkbox" name={item} id="" />
      {item}
    </div>
  );
};

export default FilterOption;
