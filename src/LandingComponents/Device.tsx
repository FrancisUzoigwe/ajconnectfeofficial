import List from "../LandingComponents/List"
import pix from "../assets/img1.png"
import pix2 from "../assets/phone2.png"

const Device = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg- bg-red-00 flex justify-center ">
       <div className="w-[85%] h-full bg-yellow-00 flex">
       <div className="w-[50%] h-full bg-green-00">
            <div className="text-[50px] font-extrabold w-[85%]">
            Make Your Device Manage Everything For You
            </div>
            <List img={pix} text="Lorem ipsum dolor sit cosetetur adipisicing elit. Molestiae nulla, nisi nam nemo debitis dicta in natus quam "/>
            <List img={pix} text="Lorem ipsum dolor sit cosetetur adipisicing elit. Molestiae nulla, nisi nam nemo debitis dicta in natus quam "/>
            <List img={pix} text="Lorem ipsum dolor sit cosetetur adipisicing elit. Molestiae nulla, nisi nam nemo debitis dicta in natus quam "/>
            <List img={pix} text="Lorem ipsum dolor sit cosetetur adipisicing elit. Molestiae nulla, nisi nam nemo debitis dicta in natus quam "/>
        <div className="w-[165px] h-[60px] rounded-[10px] flex justify-center items-center bg-purple-600 text-white my-6">Learn More</div>
        </div>
        <div className="w-[50%] h-full flex justify-center">
            <img src={pix2} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Device