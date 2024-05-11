import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/Functions";
const Banter = ({ banter }) => {
  useEffect(() => {
    fetchData(getbanter, "/banter.json");
  }, []);

  const [bantertext, getbanter] = useState();
  const [bantsertext, getbsanter] = useState();

  return (
    <>
      {bantertext && (
        <div className="w-full h-[40px] p-2 flex justify-center items-center bg-blue-700 text-white text-sm">
          {bantertext?.banter}
        </div>
      )}
    </>
  );
};

export default Banter;
