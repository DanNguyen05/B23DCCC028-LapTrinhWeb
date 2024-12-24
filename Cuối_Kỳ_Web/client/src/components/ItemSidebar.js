import React, { memo } from "react";
import icons from "../utils/icons";
import { formatVietnameseToString } from "../utils/Common/formatVietnameseToString";
import { Link } from "react-router-dom";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

const { GrNext } = icons;

const ItemSidebar = ({ title, content, isDouble, type }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const formatContent = () => {
    const oddEl = content?.filter((item, index) => index % 2 !== 0);
    const evenEl = content?.filter((item, index) => index % 2 === 0);
    const formatContent = oddEl?.map((item, index) => {
      return {
        right: item,
        left: evenEl?.find((item2, index2) => index2 === index),
      };
    });
    return formatContent;
  };

  const handleFilterPosts = (code) => {
    navigate({
      pathname: location?.pathname,
      search: createSearchParams({
        [type]: code,
      }).toString(),
    });
  };

  return (
    <div className="w-full p-4 bg-white rounded-xl">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      {!isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            content.map((item) => {
              return (
                <Link
                  to={`${formatVietnameseToString(item.value)}`}
                  key={item.code}
                  className="flex items-center gap-2 pb-1 border-b border-gray-200 border-dashed"
                >
                  <GrNext size={10}></GrNext>
                  <p className="hover:text-[#febb02] cursor-pointer w-fit">
                    {item.value}
                  </p>
                </Link>
              );
            })}
        </div>
      )}
      {isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            formatContent(content).map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex items-center justify-around">
                    <div
                      onClick={() => handleFilterPosts(item.left.code)}
                      className="flex items-center flex-1 gap-2 pb-1 text-[13.5px] border-b border-gray-200 border-dashed"
                    >
                      <GrNext size={10}></GrNext>
                      <p className="hover:text-[#febb02] cursor-pointer w-fit">
                        {item.left.value}
                      </p>
                    </div>
                    <div
                      onClick={() => handleFilterPosts(item.right.code)}
                      className="flex items-center flex-1 gap-2 pb-1 text-[13.5px] border-b border-gray-200 border-dashed"
                    >
                      <GrNext size={10}></GrNext>
                      <p className="hover:text-[#febb02] cursor-pointer w-fit">
                        {item.right.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default memo(ItemSidebar);
