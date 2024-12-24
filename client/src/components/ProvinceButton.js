import React, { memo } from "react";

const ProvinceButton = ({ name, image }) => {
  return (
    <div className="shadow-md cursor-pointer text-blue-700  hover:text-[#febb02] rounded-bl-xl rounded-br-xl">
      <img
        src={image}
        alt={name}
        className="w-[190px] h-[110px] object-cover rounded-tl-xl rounded-tr-xl "
      />
      <p className="block p-2 font-medium text-center ">{name}</p>
    </div>
  );
};

export default memo(ProvinceButton);
