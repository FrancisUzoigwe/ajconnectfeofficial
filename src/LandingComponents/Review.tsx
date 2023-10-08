import Testimony from "./Testimony";
import girl from "../assets/girl.png"
import man from "../assets/man.png"

const Review = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center p-2">
      <div className="w-[220px] h-[40px] rounded-[20px] border my-2 mt-8 flex justify-center items-center text-[20px]">
        <div className="w-[20px] h-[20px] border flex justify-center items-center mr-2">
          A
        </div>
        <div><span className="text-blue-700">User's</span> Reviews</div>
      </div>
      <div className="text-[60px] text-center font-extrabold my-2 w-[60%]">
        What Our Users are Saying
      </div>
      <div className="text-center w-[60%] text-[20px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel
        culpa amet ab ipsa quos, odit, quaerat neque similique temporibus
        laboriosam ex et quae cum?
      </div>
          <div className="w-[85%] h-[520px] my-6 flex justify-between">
          <Testimony topic="Excellent service & support!!" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse." img={girl} staff="Lizzy Bera" post="CEO, AJConnect"/>
          <Testimony topic="Excellent service & support!!" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse." img={man} staff="Dev Francis" post="FrontEnd Lead"/>
          <Testimony topic="Excellent service & support!!" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse." img={girl} staff="Dev Amidat" post=" Backend Lead"/>
          </div>
    </div>
  );
};

export default Review;
