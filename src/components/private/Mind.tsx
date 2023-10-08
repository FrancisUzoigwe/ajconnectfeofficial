import { BsFillCameraFill, BsPencilSquare } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleState } from "../../global/GlobalFile";
import TogglePage from "../../pages/screen/TogglePage";
// import { useState } from "react";

const Mind = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  // const onTogglestate = () => {
  //   dispatch(toggleState());
  // };
  // const [loading, setLoading] = useState<boolean>(false);
//  console.log(toggle)

  return (
    <div className="overflow-hidden">
      {
      toggle? <TogglePage/> : null
      }
      <div className="px-[20px] text-3xl font-black text-black max-sm:text-xs ">
        Activity Feed
      </div>
      <div className="px-2 py-2 border border-gray-400 rounded-md mt-3 bg-white max-sm:px-1 max-sm:py-1">
        <div className="flex items-center ">
          <img
            src=""
            alt=""
            className="max-sm:w-[25px] max-sm:h-[25px] w-[40px] h-[40px] rounded-[50%] bg-green-400 mr-3"
          />

          <input
            type="text"
            placeholder="Share what is on your mind user?.username"
            className="w-[90%] outline-none text-[14px] max-sm:placeholder:text-[10px] max-sm:text-[10px]"
          />
        </div>
        <div className="">
          <hr className="mt-[15px] border-[1px] text-gray-700 max-sm:mt-[7px]" />
          <div className="flex text-gray-500 w-auto mt-2">
            <div>
              <BsFillCameraFill className="text-lg mr-[15px] cursor-pointer" />
            </div>
            <div>
              <FaVideo className="text-lg mr-[15px] cursor-pointer" />
            </div>
            <div onClick={()=>{
              dispatch(toggleState())
            }}>
              <BsPencilSquare className="text-lg mr-[15px] cursor-pointer " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mind;
