import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Intro, Contact } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../utils/constant";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div className="flex flex-col items-center w-full h-full gap-6">
      <Header />
      <Navigation />
      {isLoggedIn && !location.pathname?.includes(path.DETAIL) && <Search />}
      <div className="flex flex-col items-start justify-start w-4/5 mt-3 lg:w-3/5">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
