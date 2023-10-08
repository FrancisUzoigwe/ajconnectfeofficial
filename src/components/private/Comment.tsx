const Comment = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[10px]">
      <div className="w-[95%]">
        <div className="flex ">
          <div className="border w-[30px] h-[30px] rounded-[50%] mr-[10px]">
            <img src="" alt="pic" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center">
              <div className="mr-[10px] text-[12px] font-black ">Emmauella Igboko</div>
              <div className="text-[10px] font-medium">2 years ago</div>
            </div>
            <div className="text-[13px]  max-h-[100px]">
              That's a beautiful video
            </div>
            <div className="text-[11px] font-extrabold text-gray-500 mb-3">Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
