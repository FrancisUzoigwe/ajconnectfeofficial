import { useState } from "react";
import Blog from "../../components/private/Blog";
import ImagePart from "../../components/private/ImagePart";
import Mind from "../../components/private/Mind";
import TextPart from "../../components/private/TextPart";
import VideoPart from "../../components/private/VideoPart";
import {FiSearch} from "react-icons/fi"
import TogglePage from "./TogglePage";

const MainScreen = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  console.log(setToggle);
  
  return (
    <div className="w-full h-[100%] mt-[68px]  max-sm:w-full overflow-hidden">
      {toggle && <TogglePage/>}
      <div className="w-full h-full justify-between  flex ">
        <div className="max-sm:hidden max-md:hidden h-full ">
          <Blog />
          <Blog stick="sticky top-[90px] z-[-50]" />
        </div>
        <div className="min-w-[580px] max-sm:min-w-[300px] px-2 max-sm:ml-[5px] mt-2 ">
          <Mind />
          <div>
            <div className="mt-2 flex w-full justify-between items-center">
              <div className="flex w-[25%] justify-between">
                <div className="text-[13px]">All Updates</div>
                <div className="text-[13px]">Likes</div>
              </div>
              <div className="w-[35%] h-[30px] rounded-sm overflow-hidden flex justify-start items-center">
                <input type="text" placeholder="Search Here" className="relative w-full h-full z-[-10] outline-none placeholder:text-[12px] placeholder:pl-3 pl-3 text-[13px] " />
                <div className="absolute text-gray-500 ml-[1px] z-[-10]"><FiSearch/></div>
              </div>
            </div>
          </div>
          <VideoPart />
          <TextPart />
          <VideoPart />
          <ImagePart />
          <div className="h-[300vh]  w-[20px] ml-[300px]"></div>
        </div>
        <div className="max-h-[460px] w-[290px] max-sm:hidden mr-11 ">
          <Blog />
          <Blog stick="sticky top-[90px] z-[-50]" />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
