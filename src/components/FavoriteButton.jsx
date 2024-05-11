import React, { useEffect, useState } from "react";

const FavoriteButton = ({ id }) => {
  const [HeartIconState, ChangeHeartIconState] = useState(false);

  useEffect(() => {
    HeartIconState == true
      ? (document.getElementById(id).style.color = "red")
      : (document.getElementById(id).style.color = "gray");
  }, [HeartIconState]);
  const changeiconcolor = () => {
    ChangeHeartIconState(!HeartIconState);
  };
  return (
    <span
      onClick={changeiconcolor}
      className="hover:shadow-lg cursor-pointer rounded-full flex  items-center justify-center absolute top-3 right-3 bg-white  h-[30px] w-[30px]"
    >
      <i
        onClick={changeiconcolor}
        id={id}
        className=" fa fa-heart text-15px   "
      ></i>
    </span>
  );
};

export default FavoriteButton;
