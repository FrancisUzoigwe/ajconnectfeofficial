import Blog from "../../components/private/Blog";


const Profile = () => {
  return (
    <div className="w-full h-[100%] mt-[68px]  max-sm:w-full ">
      <div className="w-full h-full justify-between  flex ">
        
        <div className="min-w-[580px] max-sm:min-w-[300px] px-2 max-sm:ml-[5px] mt-2 ">
         
         

          <div className="h-[300vh]  w-[20px] ml-[300px]"></div>
        </div>
        {/* <div className="max-h-[460px] w-[290px] max-sm:hidden mr-11 "> */}
        <div className="max-sm:hidden max-md:hidden h-full ">
          <Blog />
          
          <Blog stick="sticky top-[90px] z-[-50]" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Profile;
