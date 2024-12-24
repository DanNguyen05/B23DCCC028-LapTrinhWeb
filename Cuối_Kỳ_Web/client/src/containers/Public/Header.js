import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "../../assets/PHONGTROSV.svg";
import { Button, User } from "../../components";
import icons from "../../utils/icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import menuManage from "../../utils/menuManage";

const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const headerRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);

  return (
    <div ref={headerRef} className="w-3/5 ">
      <div className="flex items-center justify-between w-full">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>PhongtroSV xin chào !</small>
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="relative flex items-center gap-3">
              <User />
              <Button
                text={"Quản lý tài khoản"}
                textColor="text-white"
                bgColor="bg-blue-700"
                px="px-4"
                IcAfter={BsChevronDown}
                onClick={() => setIsShowMenu((prev) => !prev)}
              />
              {isShowMenu && (
                <div className="absolute right-0 flex flex-col p-4 bg-white rounded-md shadow-md min-w-200 top-full">
                  {menuManage.map((item) => {
                    return (
                      <Link
                        className="flex items-center gap-2 py-2 text-blue-600 border-b border-gray-200 hover:text-orange-500"
                        key={item.id}
                        to={item?.path}
                      >
                        {item?.icon}
                        {item.text}
                      </Link>
                    );
                  })}
                  <span
                    className="flex items-center gap-2 py-2 text-blue-500 cursor-pointer hover:text-orange-500"
                    onClick={() => {
                      setIsShowMenu(false);
                      dispatch(actions.logout());
                    }}
                  >
                    <AiOutlineLogout />
                    Đăng xuất
                  </span>
                </div>
              )}
            </div>
          )}
          <Button
            text={"Đăng tin mới"}
            textColor="text-white"
            bgColor="bg-third"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
