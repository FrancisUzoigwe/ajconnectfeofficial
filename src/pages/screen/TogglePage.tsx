import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changedToggle } from "../../global/GlobalFile";
import { BsCameraFill } from "react-icons/bs";
import pix from "../../../public/vite.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postApi } from "../../apis/PostApi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

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
    });
  });

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
          className="z-[600] w-full h-[100px] mt-5 flex items-center justify-center "
          onClick={() => {
            dispatch(changedToggle());
          }}
        >
          <MdCancel className="text-3xl max-sm:text-xl cursor-pointer hover:scale-125 transition-all duration-500 animate-bounce" />
        </div>
        <div className="max-w-[500px] min-h-[400px] z-[600] flex items-center flex-col rounded">
          <div className="min-w-[450px] mt-[10px] h-[250px]  flex items-center flex-col px-3 relative">
            <div className=" flex h-[200px] w-[410px]  justify-center items-start">
              <img
                src={avatar ? avatar : image}
                className="w-full h-[200px] object-cover rounded-lg border bg-white"
              />
            </div>
            <label className=" px-1 py-1  rounded-[50%]" htmlFor="posts">
              <BsCameraFill className="text-3xl hover:text-gray-700 duration-500 transition-all cursor-pointer " />
            </label>
            <div className="w-full h-full flex justify-center py-5 ">
              <input
                type="text"
                className="w-full overflow-hidden min-h-[50px] border border-black rounded outline-none"
                {...register("message")}
              />
            </div>
            <div className=" ">
              <button
                className=" 
              bg-purple-400 
             transition-all duration-500 px-5 py-[6px] max-sm:text-[10px] rounded font-medium text-white cursor-pointer"
                type="submit"
                onClick={() => {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    timer: 2000,
                    text: "Your post has been successfully created",
                  });
                }}
              >
                Create Post
              </button>
            </div>

            <input
              type="file"
              id="posts"
              className="hidden"
              onChange={onHandleImage}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TogglePage;
