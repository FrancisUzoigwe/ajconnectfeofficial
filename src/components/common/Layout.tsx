import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";

const Layout = () => {
  return (
    <div className="flex">
      <div className=" justify-end w-full ">
        <Sider />
        <div className="flex justify-end">
          <div className=" w-[calc(100vw-62px)] max-sm:w-full fixed  flex flex-col max-md:w-[calc(100vw-60px)] max-lg:w-[calc(100vw - 50px)]">
            <Header />
          </div>
        </div>
        <div className="flex justify-end">
          <div className=" w-[calc(100vw-79px)] max-sm:w-full flex top-0 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
