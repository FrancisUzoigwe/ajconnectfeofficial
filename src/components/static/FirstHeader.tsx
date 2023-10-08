import { useState } from "react";
import { SiQuantconnect } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);


  const [drop, setDrop] = useState<boolean>(false)
  const onDrop = () => {
    setDrop(!drop)
  }

  const [drop1, setDrop1] = useState<boolean>(false)
  const onDrop1 = () => {
    setDrop1(!drop1)
  }
  return (
    <div>
      {scroll ? (
        <div className="w-full h-[60px] bg-white z-50 shadow-sm transition-all duration-300 flex justify-center items-center text-white fixed ">
          <div className="flex justify-between items-center w-[95%]  ">
            <div className=" flex items-center">
              <SiQuantconnect className="text-3xl text-bg-[#1D4ED8] max-sm:text-2xl" />
            </div>
            <div className="flex">
              <div className="hidden max-sm:flex text-2xl justify-center max-sm:text-purple-600 cursor-pointer relative hover:scale-100 hover:text-purple-400 duration-500" onMouseEnter={onDrop} onMouseLeave={onDrop}>
                <RxHamburgerMenu />
              {
                drop?   <div className="absolute min-w-[90px] justify-center ml-[-30px] flex flex-col bg-gray-300 mt-6 rounded-lg">
                <div className="text-xs mt-3 px-2 ">Get Started </div>
                <div className="text-xs mt-2 px-2">Contact</div>
                <div className="mt-6"></div>
              </div> : null
              }
              </div>
              <Link to="/sign-in">
              <button className="mr-7 px-4 py-2 bg-[#1D4ED8] flex items-center rounded-lg text-white font-medium max-sm:hidden">
                Signin
              </button>
              </Link>
             <Link to="/sign-up">
             <button className=" px-4 py-2 bg-[#1D4ED8]  text-white flex items-center rounded-lg max-sm:hidden">
                Signup
              </button>
             </Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-full h-[60px] bg-[#1D4ED8] z-50 flex justify-center items-center 
    transition-all duration-300 text-white fixed "
        >
          <div className="flex justify-between items-center w-[95%]  ">
            <div className=" flex items-center">
              <SiQuantconnect className="text-3xl max-sm:text-2xl" />
            </div>
            <div className="flex">
              <div className="hidden max-sm:flex text-2xl relative justify-center max-sm:text-white cursor-pointer hover:scale-100 hover:text-purple-400 duration-500" onMouseEnter={onDrop1} onMouseLeave={onDrop1}>
                <RxHamburgerMenu />
               {
                drop1?  <div className="absolute min-w-[90px] justify-center ml-[-30px] flex flex-col text-white bg-gray-300 mt-6 rounded-lg">
                <div className="text-xs mt-3 px-2">Get Started </div>
                <div className="text-xs mt-2 px-2">Contact</div>
                <div className="mt-6"></div>
              </div> : null
               }
              </div>
              <Link to="/sign-in">
              <button className="mr-7 px-4 py-2 text-[#1D4ED8] flex items-center rounded-lg bg-white font-medium max-sm:hidden">
                Signin
              </button>
              </Link>
             <Link to="/sign-up">
             <button className=" px-4 py-2 bg-white  text-[#1D4ED8] flex items-center rounded-lg max-sm:hidden">
                Signup
              </button>
             </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstHeader;
