import { BsCheck, BsDot, BsThreeDots } from "react-icons/bs"
import React from "react"
import { useSelector } from "react-redux"



interface iCard {
    img1?:string
    img2?:string
    img3?:string
    img4?:string
    img5?:string
    text1?:string
    text2?:string
    text3?:string
}

const GlobalCard:React.FC<iCard> = ({
    img1,
    img2,
    img3,
    img4,
    img5,
    text1,
    text2,
    text3
}) => {

    const toggle = useSelector((state:any)=>state.toggleState)

  return (
    // ${!toggle ? "330px" : "370px"}
    <div className={`w-[${!toggle ? "330px" : "370px"}]
    h-[300px]
    border-[1px]
    border-[lightgrey]
    shadow-md
    rounded-[10px]
    mb-[20px]`}>
        <div className="
        w-[100%]
        h-[45%]
        bg-[brown]
        rounded-t-[10px]
        ">
            <img src={img1} className="
            object-cover
            w-[100%]
        rounded-t-[10px]
        h-[100%]
            "/>
        </div>
        <div className="
        h-[55%]
        w-[100%]
        flex
        flex-col
        rounded-b-[10px]
        ">
            <div className={`w-[60px]
            h-[60px]
            rounded-[10px]
            border-[3px]
            border-[white]
            flex
            items-center
            justify-center
            relative
            left-[${!toggle ? "130px" : "150px"}]
            bottom-[25px]`}>
                <img src={img2} className="
                object-cover
                w-[55px]
                h-[55px]
            rounded-[10px]
                "/>
            </div>
            <div className="
            w-[100%]
            flex
            justify-center
            text-[17px]
            font-[500]
            ">{text1}</div>
            <div className="
            flex
            items-center
            justify-center
            w-[100%]
            text-[13px]
            ">{text2} <BsDot/> {text3}</div>
            <div className="
            w-[95%]
            ml-[8px]
            flex
            justify-between
            mt-[18px]
            ">
                <div className="
                flex
                items-center
                ">
                    <img className="
                    w-[25px]
                    h-[25px]
                    rounded-[50%]
                    object-cover
                    "
                    src={img3}
                    />
                    <img className="
                    w-[30px]
                    h-[30px]
                    rounded-[50%]
                    object-cover
                    relative
                    left-[-7px]
                    border-[2px]
                    border-[white]
                    "
                    src={img4}
                    />
                    <img className="
                    w-[30px]
                    h-[30px]
                    rounded-[50%]
                    object-cover
                    relative
                    left-[-14px]
                    border-[2px]
                    border-[white]
                    "
                    src={img5}
                    />
                    <div className="
                    w-[30px]
                    h-[30px]
                    rounded-[50%]
                    flex
                    justify-center
                    items-center
                    bg-[#faf6f6]
                    relative
                    left-[-23px]
                    border-[3px]
                    border-[white]
                    ">
                        <BsThreeDots  className="
                    text-[18px]
                    "/>
                    </div>
                </div>
                <div className="
                flex
                items-center
                w-[110px]
                h-[30px]
                justify-center
                bg-[#e6e6e6]
                rounded-[2px]
                text-[14px]
                font-[500]
                ">
                    <BsCheck className="
                    text-[20px]
                    "/>
                    Organizer
                </div>
            </div>
        </div>
    </div>
  )
}

export default GlobalCard