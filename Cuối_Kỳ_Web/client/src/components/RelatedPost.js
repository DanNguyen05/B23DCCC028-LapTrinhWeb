import React, { useEffect } from "react";
import { SmallItem } from "./index";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const RelatedPost = () => {
  const { newPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getNewPosts());
  }, []);
  return (
    <div className="w-full p-4 bg-white rounded-md">
      <h3 className="mb-4 text-lg font-semibold">Tin mới đăng</h3>
      <div className="flex flex-col w-full gap-2">
        {newPosts?.map((item) => {
          return (
            <SmallItem
              key={item.id}
              title={item.title}
              price={item?.attributes?.price}
              createdAt={item.createdAt}
              image={JSON.parse(item.images.image)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPost;
