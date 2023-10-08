import {SlLike} from "react-icons/sl"
import {LiaComments} from "react-icons/lia"

const Add = () => {
  return (
    
    <div className='w-full  flex flex-col items-center'>
        <div className=' w-[95%] flex flex-col'>
            <div className='text-[10px] mt-1'>You and 2 others Like this post</div>
            <div className='flex w-[140px] justify-between'>
                <div className='flex py-2 items-center'>
                    <div className='mr-[5px]'><SlLike className="text-xl"/></div>
                    <div className='text-[11px]'>Like</div>
                </div>
                <div className='flex py-2 items-center'>
                    <div className='mr-[5px]'><LiaComments className="text-xl"/></div>
                    <div className='text-[11px]'>Comment</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add