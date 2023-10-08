import { useState } from "react";
import { MdOutlinePublic } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";
import JoinDiscussion from "./JoinDiscussion";
import { SlLike } from "react-icons/sl";

const TextPart = () => {
  const [view, setView] = useState<boolean>(false);
  const onView = () => {
    setView(!view);
  };

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
              <div className="text-[11px] flex-wrap">
                started a discussion{" "}
                <span className="font-black text-[12px]">
                  {/* {Coding and it's merits} */}
                </span>
              </div>
            </div>
            <div className="flex mt-[-5px] text-[10px] font-semibold items-center">
              2 years ago.{" "}
              <div
                className="ml-[15px] text-base flex items-center cursor-pointer relative "
                onClick={() => {
                  onView();
                }}
              >
                <MdOutlinePublic className="z-[-20]" />
                <BsFillCaretDownFill className="ml-1 mt-[2px] text-xs z-[-20]" />
                {view ? (
                  <div className="absolute bg-gray-500 text-white rounded-md flex flex-col mt-[90px] text-[10px] z-[-10]">
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
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full justify-center flex h-auto">
        <div className="w-[95%] h-[270px] max-sm:h-[200px] border rounded-md z-[-20] flex justify-center items-center overflow-hidden">
          <div className=" z-[-20] w-full h-full flex justify-end"></div>
        </div>
      </div>
      <JoinDiscussion />
      <div className="w-full flex justify-center py-2">
        <div className="w-[95%]">
          <div className="flex">
            <div className="mr-2 pl-2">
              <SlLike />
            </div>
            <div className="text-[12px]">Like</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPart;
