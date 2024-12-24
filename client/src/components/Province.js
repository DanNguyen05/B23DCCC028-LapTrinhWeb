import React from "react";
import { ProvinceButton } from "./index";
import { location } from "../utils/constant";

const Province = () => {
  return (
    <div className="flex items-center justify-center gap-5 py-5 ">
      {location.map((item) => {
        return (
          <ProvinceButton
            key={item.id}
            image={item.image}
            name={item.name}
          ></ProvinceButton>
        );
      })}
    </div>
  );
};

export default Province;
