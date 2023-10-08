import { ImCancelCircle } from "react-icons/im";
// import pix from
import { useDispatch } from "react-redux";
import { changedToggle } from "../../global/GlobalFile";
import { BsCameraFill } from "react-icons/bs";
import { useState } from "react";
import pix from "../../../public/vite.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postApi } from "../../apis/PostApi";
import { useSelector } from "react-redux";

const TogglePage = () => {
  const dispatch = useDispatch();
   const userID = useSelector((state: any) => state.user);

  const [image, setImage] = useState<string>(pix);
  const [avatar, setAvatar] = useState<string>("");
  const onHandleImage = (event: any) => {
    const localImage = event.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setImage(localImage);
    setAvatar(saveImage);
  };

  const Schema = yup.object({
    message: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    const { message } = data;
    const myForm = new FormData();
    myForm.append("message", message);
    myForm.append("image", image);
    postApi(userID, myForm).then((res: any) => {
      console.log(res);
      
    })
  });

  //   const toggle = useSelector((state: any) => state.toggle);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba( 255, 255, 255, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
      }}
      className="fixed w-full h-[100vh] top-0 left-0 flex  justify-center flex-col"
    >
      <form
        className="w-full flex flex-col h-screen items-center z-[1200]"
        onSubmit={onSubmit}
      >
        <div
          className="z-[600]  right-0 w-full h-[100px] flex items-center justify-center "
          onClick={() => {
            dispatch(changedToggle());
          }}
        >
          <ImCancelCircle className="text-3xl max-sm:text-xl" />
        </div>
        <div className="max-w-[500px] min-h-[400px] z-[600] flex items-center flex-col rounded">
          <div className="min-w-[450px] mt-[10px] h-[250px]  flex items-center flex-col px-3 relative">
            <div className="mt-[60px] z-[900]">
              <button
                className=" 
              bg-purple-400 
             transition-all duration-500 px-5 py-[6px]  max-sm:text-[10px] rounded font-medium text-white cursor-pointer"
                type="submit"
                onClick={() => {
                  alert("clicked");
                }}
              >
                Post
              </button>
            </div>
            <div className="w-full h-full flex justify-center py-5 ">
              <input
                type="text"
                className="w-full overflow-hidden min-h-[50px] border "
                {...register("message")}
              />
            </div>
            <div className=" flex h-[200px] w-[410px]  justify-center items-start">
              <img
                src={avatar ? avatar : image}
                className="w-full h-[200px] object-cover rounded-lg border bg-white"
              />
            </div>
            <input
              type="file"
              id="posts"
              className="hidden"
              onChange={onHandleImage}
            />
            <label
              className="mt-[-17px] px-1 py-1  rounded-[50%]"
              htmlFor="posts"
            >
              <BsCameraFill className="text-3xl hover:text-gray-700 duration-500 transition-all cursor-pointer" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TogglePage;
