import React from "react";
import FavoriteButton from "./FavoriteButton";
const ProductCard = ({ name, description, price, img, id }) => {
  var imgsrc = "http://localhost:5173/";
  switch (img) {
    case "HP":
      imgsrc += "/HP.png";
      break;
    case "Apple":
      imgsrc += "/apple.jpg";
      break;
    case "Asus":
      imgsrc += "/asus.jpg";
      break;
    case "Lenovo":
      imgsrc += "/lenovo.png";
      break;
    case "Acer":
      imgsrc += "/acer.jpg";
      break;
    case "MSI":
      imgsrc += "/msi.png";
      break;
    case "Dell":
      imgsrc += "/dell.png";
      break;
    default:
      imgsrc += "/standardlaptop.jpg";
    // code block executed if expression doesn't match any case
  }
  return (
    <div className=" relative p-2 bg-blend-lighten rounded-md border-[1px] w-[310px] h-[470px]">
      <FavoriteButton id={id} />
      <img className=" bg-[#F7F7F7]  h-[75%] w-full" src={imgsrc} alt="" />
      <h2 className=" font-semibold tracking-tighter text-[#C9C9C9]">
        {description}{" "}
      </h2>
      <h1 className="font-bold tracking-tightest text-black">{name} </h1>
      <h1 className="font-bold tracking-tightest text-[#2D56FF]">{price}$</h1>
    </div>
  );
};

export default ProductCard;
