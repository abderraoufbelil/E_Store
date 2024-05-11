import React, { useEffect, useState } from "react";
import FilterPanel from "../../components/FilterPanel";
import ProductCard from "../../components/ProductCard";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/Functions";
const Section_11 = () => {
  const [url, changeurl] = useSearchParams();

  const processor = url.get("processor");
  const graphic = url.get("graphic");
  const ram = url.get("ram");

  const [data, setData] = useState(null);
  const [items, setitems] = useState();
  useEffect(() => {
    fetchData(setData, "/csvjson.json");
  }, []);

  useEffect(() => {
    const filtereddata = data?.filter((item) => {
      return (
        (!processor || item.processor_name?.includes(processor)) &&
        (!graphic || item.graphics?.includes(graphic)) &&
        (!ram || item["ram(GB)"] == parseInt(ram))
      );
    });

    // Filter data based on the filter value

    setitems(filtereddata);
  }, [processor, ram, graphic, data]);

  const setfilterup = (values) => {
    const updatedSearchParams = new URLSearchParams(url);
    Object.entries(values).forEach(([key, value]) => {
      updatedSearchParams.set(key, value);
    });
    changeurl(updatedSearchParams);
  };

  const clearfilter = () => {
    changeurl("");
  };

  return (
    <>
      <div className=" h-[735px] sticky top-[81px] md:w-[20%]  md:flex  hidden border-l-[1px] border-[1px] bg-[#F7F7F7] pt-2 pb-8 ">
        <FilterPanel clearfilter={clearfilter} filter={setfilterup} />
      </div>
      <div className="w-[100%] md:w-[80%] p-4 flex flex-wrap gap-4 items-start   border-r-[1px]  bg-white ">
        {items?.map((item, index) => (
          <ProductCard
            {...{
              name: item.model_name,
              description:
                item.processor_name +
                "  " +
                item.graphics +
                " " +
                "RAM" +
                " " +
                item["ram(GB)"] +
                " " +
                "GB",
              id: index,
              price: item.price,
              img: item.brand,
            }}
            key={index}
          />
        ))}

        {/* {items.map((item, key) => (
          <ProductCard {...{ ...item }} key={key} />
        ))} */}
      </div>
    </>
  );
};

export default Section_11;
