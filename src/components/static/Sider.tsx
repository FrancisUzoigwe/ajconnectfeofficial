import { useState } from "react";
import { TiMessages } from "react-icons/Ti";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/GlobalFile";
import Swal from "sweetalert2";

const Sider = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState<boolean>(false);
  const onLog = () => {
    setLog(!log);
  };

  const [acc, setAcc] = useState<boolean>(false);
  const onAcc = () => {
    setAcc(!acc);
  };

  const [mes, setMes] = useState<boolean>(false);
  const onMes = () => {
    setMes(!mes);
  };

  const [not, setNot] = useState<boolean>(false);
  const onNot = () => {
    setNot(!not);
  };

  const [reel, setReel] = useState<boolean>(false);
  const onReel = () => {
    setReel(!reel);
  };

  const [store, setStore] = useState<boolean>(false);
  const onStore = () => {
    setStore(!store);
  };
  return (
    <div className="max-sm:hidden flex bg-[#F3F4F6] flex-col justify-center h-screen px-4 fixed z-30 shadow-lg ">
      <div className="flex flex-col items-center h-[75%] w-[30px]  justify-between">
        <Link to="/chat/profile">
          <div
            onMouseEnter={onAcc}
            onMouseLeave={onAcc}
            className="cursor-pointer"
          >
            <CgProfile className="text-2xl relative flex justify-center items-center" />
            {acc ? (
              <div className="px-[7px] py-[1px] rounded-[3px] bg-gray-500  text-white absolute text-[13px] ml-[25px] mt-[-21px]">
                Profile
              </div>
            ) : null}
          </div>
        </Link>
        <Link to="/chat/messages">
          <div
            className="flex  justify-center items-center px-2  relative py-[2px] rounded-[4px]  transition-all duration-300 cursor-pointer  "
            onMouseEnter={onMes}
            onMouseLeave={onMes}
          >
            {mes ? (
              <div className="px-[7px] py-[1px] rounded-[3px] bg-gray-500 text-white absolute text-[13px] ml-[120px] mt-[-2px]">
                Messages
              </div>
            ) : null}

            <div>
              <TiMessages className="text-3xl p-1" />
            </div>
            <div className="w-[15px] h-[15px] items-center justify-center flex text-[11px] absolute text-white ml-4 mt-[-5px] bg-red-500 rounded-[50%]">
              2
            </div>
          </div>
        </Link>
        <Link to="/chat/notifications">
          <div
            className="flex justify-center  items-center px-1 max-sm:text-xs relative py-[1px] rounded-[4px]  transition-all duration-300 cursor-pointer  "
            onMouseLeave={onNot}
            onMouseEnter={onNot}
          >
            {not ? (
              <div className="px-[7px] py-[1px] rounded-[3px] bg-gray-500 text-white absolute text-[13px] ml-[120px] mt-[-2px]">
                Notifications
              </div>
            ) : null}
            <div>
              <IoMdNotifications className="text-3xl p-1 max-sm:text-xl" />
            </div>
            <div className="w-[15px] h-[15px] items-center justify-center flex text-[11px] absolute text-white ml-4 mt-[-5px] bg-red-500 rounded-[50%]">
              1
            </div>
          </div>
        </Link>
        <Link to="/chat/reels">
          <div
            className="relative flex justify-center items-center cursor-pointer"
            onMouseEnter={onReel}
            onMouseLeave={onReel}
          >
            <BsCameraReelsFill className="text-xl" />
            {reel ? (
              <div className="px-[7px] py-[1px] rounded-[3px] bg-gray-500 text-white absolute text-[13px] ml-[69px] mt-[4px]">
                Reels
              </div>
            ) : null}
          </div>
        </Link>
        <Link to="/chat/store">
          <div
            className="relative flex justify-center items-center cursor-pointer"
            onMouseEnter={onStore}
            onMouseLeave={onStore}
          >
            <FaStore className="text-xl" />
            {store ? (
              <div className="px-[7px] py-[1px] rounded-[3px] bg-gray-500 text-white absolute text-[13px] ml-[120px] mt-[4px]">
                MarketPlace
              </div>
            ) : null}
          </div>
        </Link>
        <div
          className="relative flex justify-center items-center cursor-pointer  transition-all duration-300"
          onMouseEnter={onLog}
          onMouseLeave={onLog}
          onClick={() => {
            Swal.fire({
              text: "Login out🕑",
              icon: "success",
              timer: 4000,
            }).then(() => {
              dispatch(logOut());
            });
          }}
        >
          <TbLogout2 className="text-2xl " />
          {log ? (
            <div className="px-[7px] py-[1px] rounded-[3px] bg-gray-500 text-white absolute text-[13px] ml-[90px] mt-[4px]">
              Logout
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sider;
