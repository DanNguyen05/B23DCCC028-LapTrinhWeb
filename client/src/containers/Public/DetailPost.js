import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsLimit } from "../../store/actions";
import { Slider } from "../../components";
import icons from "../../utils/icons";
import { underMap } from "../../utils/constant";

const {
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  BsStopwatch,
  BsHash,
} = icons;

const DetailPost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    postId &&
      dispatch(
        getPostsLimit({
          id: postId,
        })
      );
  }, [postId]);
  return (
    <div className="flex w-full gap-4">
      <div className="w-[100%] ">
        <Slider
          images={
            posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)
          }
        />
        <div className="p-4 bg-white rounded-md shadow-md">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-xl font-bold text-red-600">
              {posts[0]?.title}
            </h2>
            <div className="flex items-center gap-2">
              <span>Chuyên mục:</span>
              <span className="font-medium text-blue-600 underline cursor-pointer hover:text-orange-600">
                {posts[0]?.overviews?.area}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker color="#2563eb" />
              <span>{posts[0]?.address}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <TbReportMoney />
                <span className="text-lg font-semibold text-green-600">
                  {posts[0]?.attributes?.price}
                </span>
              </span>
              <span className="flex items-center gap-1">
                <RiCrop2Line />
                <span>{posts[0]?.attributes?.acreage}</span>
              </span>
              <span className="flex items-center gap-1">
                <BsStopwatch />
                <span>{posts[0]?.attributes?.published}</span>
              </span>
              <span className="flex items-center gap-1">
                <BsHash />
                <span>{posts[0]?.attributes?.hashtag}</span>
              </span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="my-4 text-xl font-semibold">Thông tin mô tả</h3>
            <div
              className="flex flex-col gap-3"
              dangerouslySetInnerHTML={{ __html: posts[0]?.description }}
              style={{ whiteSpace: "pre-wrap" }}
            >
            </div>
          </div>
          <div className="mt-8">
            <h3 className="my-4 text-xl font-semibold">Đặc điểm tin đăng</h3>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full">
                  <td className="p2">Mã tin</td>
                  <td className="p2">{posts[0]?.overviews?.code}</td>
                </tr>
                <tr className="w-full bg-gray-200">
                  <td className="p2">Khu vực</td>
                  <td className="p2">{posts[0]?.overviews?.area}</td>
                </tr>
                <tr className="w-full">
                  <td className="p2">Loại tin rao</td>
                  <td className="p2">{posts[0]?.overviews?.type}</td>
                </tr>
                <tr className="w-full bg-gray-200">
                  <td className="p2">Đối tượng</td>
                  <td className="p2">{posts[0]?.overviews?.target}</td>
                </tr>
                <tr className="w-full ">
                  <td className="p2">Gói tin</td>
                  <td className="p2">{posts[0]?.overviews?.bonus}</td>
                </tr>
                <tr className="w-full bg-gray-200">
                  <td className="p2">Ngày đăng</td>
                  <td className="p2">{posts[0]?.overviews?.created}</td>
                </tr>
                <tr className="w-full ">
                  <td className="p2">Ngày hết hạn</td>
                  <td className="p2">{posts[0]?.overviews?.expired}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h3 className="my-4 text-xl font-semibold">Thông tin liên hệ</h3>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="w-full">
                  <td className="p2">Liên hệ</td>
                  <td className="p2">{posts[0]?.user?.name}</td>
                </tr>
                <tr className="w-full bg-gray-200">
                  <td className="p2">Điện thoại</td>
                  <td className="p2">{posts[0]?.user?.phone}</td>
                </tr>
                <tr className="w-full">
                  <td className="p2">Zalo</td>
                  <td className="p2">{posts[0]?.user?.zalo}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <span className="py-4 text-sm text-justify text-gray-500">{`${underMap[0]}`}</span>
            <span className="py-4 text-sm italic text-justify text-gray-500">{`${posts[0]?.title} - Mã tin: ${posts[0]?.attributes?.hashtag}`}</span>
            <span className="py-4 text-sm text-justify text-gray-500">{`${underMap[1]}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
