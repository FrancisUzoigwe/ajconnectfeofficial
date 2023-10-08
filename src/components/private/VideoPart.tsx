import { useState } from "react";
import { MdOutlinePublic } from "react-icons/md";
import Video from "../../assets/video.mp4";
import Add from "./Add";
import Comment from "./Comment";

const VideoPart = () => {
  const [control, setControl] = useState<boolean>(false);
  const onControl = () => {
    setControl(!control);
  };

  // const [view, setView] = useState<boolean>(false);
  // const onView = () => {
  //   setView(!view);
  // };

  return (
    <div className="mt-5 w-full max-h-[550px]  rounded-md border border-gray-300">
      <div className="flex ">
        <div className="flex items-center mt-[5px]">
          <div className="w-[40px] h-[40px] rounded-[50%] bg-green-400 ml-2 mr-2 overflow-hidden">
            <img src="" alt="" className="w-full h-full object-cover " />
          </div>
          <div className="mb-[-5px]">
            <div className="flex text-[14px] items-center">
              <div className="mr-2 text-[13px] font-semibold py-[2px]">
                Francis Uzoigwe
              </div>{" "}
              <div className="text-[11px]">posted an update</div>
            </div>
            <div className="flex mt-[-5px] text-[10px] font-semibold items-center">
              2 years ago.{" "}
              <div className="ml-[15px] text-base flex items-center cursor-pointer relative ">
                <MdOutlinePublic className="z-[-20]" />
                {/* <BsFillCaretDownFill className="ml-1 mt-[3px] text-xs z-[-10]" /> */}
                {/* {view ? (
                  <div className="absolute bg-gray-500 text-white rounded-md flex flex-col mt-[90px] text-[10px] z-[30]">
                    <div className="px-3 hover:scale-110 duration-300 transition-all">
                      Public
                    </div>
                    <div className="px-3 hover:scale-110 duration-300 transition-all">
                      Private
                    </div>
                    <div className="px-3 hover:scale-110 duration-300 transition-all">
                      Friends{" "}
                    </div>
                  </div>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 w-full justify-center flex h-auto z-[-20]">
        <video
          src={Video}
          controls={control}
          muted
          // loop
          // autoPlay
          className="object-cover w-[95%] rounded-lg h-full "
          onClick={() => {
            setControl(control);
          }}
          onMouseLeave={onControl}
          onMouseEnter={onControl}
        />
      </div>
      <Add />
      <Comment />
    </div>
  );
};

export default VideoPart;
