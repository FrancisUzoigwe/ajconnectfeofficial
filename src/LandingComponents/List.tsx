import React from "react"

interface iList {
    img : string
    text : string
}

const List : React.FC <iList> = ({img , text}) => {
  return (
    <div className="w-[600px] h-[65px]  bg-pink-00 flex justify-between items-center my-2">
        <div className="w-[50px] h-[50px] border-black border-1 flex justify-center items-center text-[5px]"><img src={img} alt="" /></div>
        <div className="w-[520px] h-[65px]  text-[17px] flex items-center">
            {text}
        </div>
    </div>
           
  )
}

export default List