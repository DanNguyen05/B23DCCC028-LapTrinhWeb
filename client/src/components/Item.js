import React, { memo, useState } from "react";
import icons from "../utils/icons";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../utils/Common/formatVietnameseToString";
import { path } from "../utils/constant";
import anonAvatar from "../assets/anon-avatar.png";

const indexs = [0, 1, 2, 3];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = ({
  images,
  user,
  title,
  star,
  description,
  attributes,
  address,
  id,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);

  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++)
      stars.push(<GrStar className="star-item" size={18} color="yellow" />);
    return stars;
  };
  return (
    <div className="flex w-full py-4 border-t border-orange-600">
      <Link
        to={`${path.DETAIL}${formatVietnameseToString(
          title?.replaceAll("/", "")
        )}/${id}`}
        className="w-1/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer"
      >
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  key={index}
                  src={i}
                  alt="preview"
                  className="w-[90%] h-[100px] object-cover"
                />
              );
            })}
        <span className="absolute px-2 text-white rounded-md bg-overlay-70 left-1 bottom-4">{`${images.length} ảnh`}</span>
        <span
          className="absolute text-white right-5 bottom-1"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartFill size={26} color="red" />
          ) : (
            <RiHeartLine size={26} />
          )}
        </span>
      </Link>
      <div className="w-4/5">
        <div className="flex justify-between w-full gap-4">
          <Link
            to={`${path.DETAIL}${formatVietnameseToString(
              title?.replaceAll("/", "")
            )}/${id}`}
            className="font-medium text-red-600"
          >
            {handleStar(+star).length > 0 &&
              handleStar(+star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {title}
          </Link>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 my-2">
          <span className="overflow-hidden font-bold text-green-600 flex-3 whitespace-nowrap text-ellipsis">
            {attributes?.price}
          </span>
          <span className="flex-1">{attributes?.acreage}</span>
          <span className="overflow-hidden flex-3 whitespace-nowrap text-ellipsis">
            {`${address}`}
          </span>
        </div>
        <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="flex items-center justify-between my-5">
          <div className="flex items-center ">
            <img
              src={anonAvatar}
              // src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-1 text-white bg-blue-700 rounded-md"
            >
              {`Gọi ${user?.phone}`}
            </button>
            <button
              type="button"
              className="px-1 text-blue-700 border border-blue-700 rounded-md"
            >
              Nhắn zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);