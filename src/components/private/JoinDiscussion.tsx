import { FaReplyAll } from "react-icons/fa"
import {GoDiscussionClosed} from "react-icons/go"
const JoinDiscussion = () => {
  return (
    <div className="w-full flex justify-center mt-[6px]">
        <div className="w-[95%] ">
           <div className="flex ">
           <div className="flex items-center">
                <div className="pl-2 mr-1 text-md"><GoDiscussionClosed/></div>
                <div className="text-[12px]">JoinDiscussion</div>
            </div>
           <div className="flex items-center">
                <div className="pl-2 mr-1 text-md"><FaReplyAll/></div>
                <div className="text-[10px]">Quick Reply</div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default JoinDiscussion