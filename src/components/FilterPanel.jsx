import React, { useEffect, useState } from "react";
import FilterType from "./FilterType";
import FilterSearch from "./FilterSearch";
import CustomButton from "./CustomButton";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

const FilterPanel = ({ clearfilter, filter }) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const filt = [
    {
      title: "Processor",
      options: [
        { value: "", label: "" },
        { value: "i3", label: "I3" },
        { value: "i5", label: "I5" },
        { value: "i7", label: "I7" },
        { value: "i9", label: "I9" },
      ],
    },
    {},
    {
      title: "Ram",
      options: [
        { value: "", label: "" },
        { value: "8GB", label: "8 GB" },
        { value: "16GB", label: "16 GB" },
        { value: "32GB", label: "32 GB" },
      ],
    },
    {},
    {
      title: "Graphic Card",
      options: [
        { value: "", label: "" },
        { value: "RTX 2050", label: "RTX 2050" },
        { value: "RTX 4050", label: "RTX 4050" },
        { value: "GTX 1650", label: "GTX 1650" },
        { value: "RTX 3050", label: "RTX 3050" },
      ],
    },
  ];
  const styles = { backgroundColor: "#2D56FF", borderRadius: "25px" };

  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center ">
      {filt.map((item, key) =>
        item.title ? (
          // <FilterType
          //   {...{ title: item.title, options: item.options }}
          //   key={key}
          // />
          <div
            key={key}
            className="w-full flex flex-col gap-4 justify-center items-center"
          >
            <h1 className="w-[80%] text-lg font-bold title-class">
              {item.title}{" "}
            </h1>
            <Select
              onChange={(value) => {
                switch (item.title) {
                  case "Processor":
                    filter({ processor: value.value });
                    break;
                  case "Ram":
                    filter({ ram: value.value });
                    break;
                  case "Graphic Card":
                    filter({ graphic: value.value });
                    break;
                  default:
                  // code block executed if expression doesn't match any case
                }
              }}
              className=" w-[80%]"
              closeMenuOnSelect={true}
              options={item.options}
            />
          </div>
        ) : (
          // <FilterSearch key={key} {...item} />
          <hr key={key} className="  w-[80%] bg-[#E8E8E8] h-[1px]" />
        )
      )}
      <br />
      <br />
      <br />
      <CustomButton
        {...{ styles, text: "ClearFilter", buttonfunction: clearfilter }}
      />
    </div>
  );
};

export default FilterPanel;
