import React, { memo } from "react";
import moment from "moment";
import "moment/locale/vi";

const SmallItem = ({ title, price, image, createdAt }) => {
  const formatTime = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  return (
    <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
      <img
        src={image[0]}
        alt="anh"
        className="w-[65px] h-[65px] object-cover flex-none rounded-md"
      />
      <div className="flex flex-col justify-between flex-auto w-full gap-1">
        <h4 className="text-blue-600 text-[14px]">{`${title?.slice(
          0,
          45
        )}...`}</h4>
        <div className="flex items-center justify-between w-full ">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-300">{formatTime(createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(SmallItem);
