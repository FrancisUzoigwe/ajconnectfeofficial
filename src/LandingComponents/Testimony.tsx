import quote from "../assets/quote.png"

interface iTestimony {
    topic : string
    content : string
    img : string
    staff : string
    post : string
}


const Testimony : React.FC <iTestimony>= ({topic , content , img , staff , post}) => {
  return (
    <div>
      <div className="w-[380px] h-[420px] p-4 rounded-[10px] border-4 my-[30px]">
        <div className="w-full h-[70px]  flex justify-between">
          <div className="w-[200px] h-[60px] border"></div>
          <div className="w-[70px] h-[60px] text-gray-700">
            <img src={quote} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="text-blue-800 text-[23px] font-bold my-3">
        {topic}
        </div>
        <div className="my-2 mb-4">
         {content}
        </div>
        <div className="w-full h-[140px] bg-blue-50 mt-1 mb-[65px] flex items-center">
          <div className="w-[120px] h-[120px] rounded-[50%] border overflow-hidden">
            <img src={img} alt="" />
          </div>
          <div className="ml-6">
          <div className="font-bold mb-1 text-[25px]">{staff}</div>
          <div className="text-[20px]">{post}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
