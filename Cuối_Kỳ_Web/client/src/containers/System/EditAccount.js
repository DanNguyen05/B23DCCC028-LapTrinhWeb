import React, { useState } from "react";
import { InputReadOnly, InputFormV2, Button } from "../../components";
import anonAvatar from "../../assets/anon-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { apiUpdateUser } from "../../services";
import { fileToBase64, blobToBase64 } from "../../utils/Common/tobase64";
import { getCurrent } from "../../store/actions";
import Swal from "sweetalert2";

const EditAccount = () => {
  const { currentData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    name: currentData?.name || "",
    avatar: blobToBase64(currentData?.avatar) || "",
    fbUrl: currentData?.fbUrl || "",
    zalo: currentData?.zalo || "",
  });
  const handleSubmit = async () => {
    const response = await apiUpdateUser(payload);
    if (response?.data.err === 0) {
      Swal.fire(
        "Done",
        "Chỉnh sửa thông tin cá nhân thành công",
        "success"
      ).then(() => {
        dispatch(getCurrent());
      });
    } else {
      Swal.fire(
        "Oops!",
        "Chỉnh sửa thông tin cá nhân không thành công",
        "error"
      );
    }
  };
  const handleUploadFile = async (e) => {
    const imageBase64 = await fileToBase64(e.target.files[0]);
    setPayload((prev) => ({
      ...prev,
      avatar: imageBase64,
    }));
  };
  return (
    <div className="flex flex-col items-center flex-auto h-full">
      <h1 className="w-full py-4 text-3xl font-medium border-b border-gray-200">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className="flex items-center justify-center w-3/5">
        <div className="flex flex-col w-full gap-4 py-6">
          <InputReadOnly
            value={`#${currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}`}
            direction="flex-row"
            label="Mã thành viên"
          />
          <InputReadOnly
            value={currentData?.phone}
            direction="flex-row"
            editPhone
            label="Số điện thoại"
          />
          <InputFormV2
            name="name"
            setValue={setPayload}
            direction="flex-row"
            label="Tên hiển thị"
            value={payload.name}
          />
          <InputFormV2
            name="zalo"
            setValue={setPayload}
            direction="flex-row"
            label="Zalo"
            value={payload.zalo}
          />
          <InputFormV2
            name="fbUrl"
            setValue={setPayload}
            direction="flex-row"
            label="Facebook"
            value={payload.fbUrl}
          />
          <div className="flex">
            <label htmlFor="password" className="flex-none w-48">
              Mật khẩu
            </label>
            <small className="flex-auto h-12 text-blue-500 cursor-pointer">
              Đổi mật khẩu
            </small>
          </div>
          <div className="flex mb-6">
            <label className="flex-none w-48" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <div>
              <img
                src={payload.avatar || anonAvatar}
                alt="avatar"
                className="object-cover rounded-full w-28 h-28"
              />

              <input
                type="file"
                id="avatar"
                className="my-4 appearance-none"
                // onChange={handleUploadFile}
              />
            </div>
          </div>
          <Button
            text="Cập nhật"
            bgColor="bg-blue-600"
            textColor="text-white"
            // onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
