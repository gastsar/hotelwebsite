import React from "react";

function Image({ bedroom }) {
  return (
    <div className="col-span-2  relative">
      <img
        className="object-cover rounded-lg "
        src={bedroom.img}
        alt={bedroom.title}
      />
      <p className=" absolute top-2 right-2 p-2 bg-black rounded-full text-xs text-white">
        {bedroom.promopPrice} %/off
      </p>
    </div>
  );
}

export default Image;
