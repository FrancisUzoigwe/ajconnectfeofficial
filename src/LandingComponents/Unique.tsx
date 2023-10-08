import Card from "./Card";
import pix from "../assets/img1.png";
import pix2 from "../assets/img2.png";
// import pix3 from "../assets/img3.png";

const Unique = () => {
  return (
    <div className="w-[100%] h-[calc(100vh-40px)] bg-red-00 ">
      <div className="flex justify-center items-center">
        <div className="w-[90%] h-[calc(100vh-60px)] bg-green00 flex items-center p-5 flex-col">
          <div className="w-[230px] h-[40px] rounded-[30px] border flex  items-center text-[19px] px-3">
            <div>A</div>
            <div className="ml-2">
              <span className="text-blue-500">Premium</span> Features
            </div>
          </div>
          <div className="text-[50px] font-bold my-4  ">
            What Makes AJConnect Special
          </div>
          <div className="w-[80%] flex text-center text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            deleniti facilis quas? Maxime veritatis vel eligendi consequuntur
            iure temporibus cupiditate.
          </div>
          <div className="w-full h-[500px] flex justify-center items-center ">
      <div className="w-full h-[320px]  flex justify-between items-center my-[20px]">
            
          <Card
            image={pix}
            title="Fully Functional"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsam explicabo tempore maiores voluptatum ab!"
          />
          <Card
            image={pix2}
            title="Fully Functional"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsam explicabo tempore maiores voluptatum ab!"
          />
          <Card
            image={pix}
            title="Fully Functional"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsam explicabo tempore maiores voluptatum ab!"
          />
      </div>
    </div>

          
        </div>
      </div>
    </div>
  );
};

export default Unique;
