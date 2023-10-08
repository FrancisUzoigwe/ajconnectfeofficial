import React from "react"

interface iStick {
  stick?: string
}


const Blog: React.FC<iStick> = ({stick}) => {
  return (
    <div className={`min-h-[460px] w-[290px] bg-white text-black mt-[10px] ml-5 rounded-xl flex flex-col shadow-xl ${stick}`}>
      <div className="mt-3 px-[10px] font-bold ">Blog</div>
      <div className="flex px-4 text-[11px] mt-[20px]">
        <div className="w-[85px] h-[50px] bg-white mr-[10px] rounded-md">
          <img src="" alt="Try" className="w-full h-full rounded-md" />
        </div>
        <div>
          <div className="leading-3 flex-wrap h-[35px]">
            Tackle your closest spring cleanning, shey you sabi cook,
            anlbsllnlnl
          </div>
          <div className="text-gray-400 font-semibold">Datee</div>
        </div>
      </div>
      <div className="flex px-4 text-[11px] mt-[20px]">
        <div className="w-[85px] h-[50px] bg-white mr-[10px] rounded-md">
          <img src="" alt="Try" className="w-full h-full rounded-md" />
        </div>
        <div>
          <div className="leading-3 flex-wrap h-[35px]">
            Tackle your closest spring cleanning, shey you sabi cook,
            anlbsllnlnl
          </div>
          <div className="text-gray-400 font-semibold">Datee</div>
        </div>
      </div>
      <div className="flex px-4 text-[11px] mt-[20px]">
        <div className="w-[85px] h-[50px] bg-white mr-[10px] rounded-md">
          <img src="" alt="Try" className="w-full h-full rounded-md" />
        </div>
        <div>
          <div className="leading-3 flex-wrap h-[35px]">
            Tackle your closest spring cleanning, shey you sabi cook,
            anlbsllnlnl
          </div>
          <div className="text-gray-400 font-semibold">Datee</div>
        </div>
      </div>
      <div className="flex px-4 text-[11px] mt-[20px]">
        <div className="w-[85px] h-[50px] bg-white mr-[10px] rounded-md">
          <img src="" alt="Try" className="w-full h-full rounded-md" />
        </div>
        <div>
          <div className="leading-3 flex-wrap h-[35px]">
            Tackle your closest spring cleanning, shey you sabi cook,
            anlbsllnlnl
          </div>
          <div className="text-gray-400 font-semibold">Datee</div>
        </div>
      </div>
      <div className="flex px-4 text-[11px] mt-[20px]">
        <div className="w-[85px] h-[50px] bg-white mr-[10px] rounded-md">
          <img
            src=""
            alt="Try"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="leading-3 flex-wrap h-[35px]">
            Tackle your closest spring cleanning, shey you sabi cook,
            anlbsllnlnl
          </div>
          <div className="text-gray-400 font-semibold">Datee</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
