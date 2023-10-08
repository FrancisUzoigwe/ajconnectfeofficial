// import { useState } from "react";
import { MdOutlinePublic } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";
import Add from "./Add";
import Comment from "./Comment";
// import error from "../../assets/Error.png";
import { useReadAllPost } from "../../hooks/useUserHook";
import InfoComp from "./InfoComp";

const ImagePart = () => {
  const { post } = useReadAllPost();

  // const [view, setView] = useState<boolean>(false);
  // const onView = () => {
  //   setView(!view);
  // };

  return (
    <div>
      {post?.map((el: any) => (
        <div className="mt-5 w-full max-h-[550px]  rounded-md border border-gray-300">
          <div className="flex ">
            <div className="flex items-center mt-[5px]">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-green-400 ml-2 mr-2 overflow-hidden">
                <img
                  src={el?.image}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="mb-[-5px]">
                <div className="flex text-[14px] items-center">
                  <InfoComp userID={el.userID} />
                  <div className="text-[11px]">posted an update</div>
                </div>
                <div className="flex mt-[-5px] text-[10px] font-semibold items-center">
                  {el?.createdAt}{" "}
                  <div
                    className="ml-[15px] text-base flex items-center cursor-pointer relative "
                    onClick={() => {
                      // onView();
                      console.log(post);
                    }}
                  >
                    <MdOutlinePublic className="z-[-20]" />
                    <BsFillCaretDownFill className="ml-1 mt-[2px] text-xs z-[-20]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full justify-center flex h-auto">
            <div className="w-[95%] h-[270px] max-sm:h-[200px] border rounded-md z-[-20] flex justify-center items-center overflow-hidden">
              <div className=" z-[-20] w-full h-full flex justify-end">
                <img src={el?.image} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
          <div className="w-[95%] text-[16px] max-sm:text-[13px]">{el?.message}</div>

          </div>
          <Add />
          <Comment />
        </div>
      ))}
    </div>
  );
};

export default ImagePart;
