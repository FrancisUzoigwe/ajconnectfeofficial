import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import pix from "../../../public/vite.svg";
import { registerApi } from "../../apis/AuthApi";
import Swal from "sweetalert2";
const RegisterScreen = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);

  // const [image, setImage] = useState<string>(pix);
  // const [avatar, setAvatar] = useState<string>("");
  // const onHandleImage = (event: any) => {
  //   const localImage = event.target.files[0];
  //   const saveImage = URL.createObjectURL(localImage);
  //   setImage(localImage);
  //   setAvatar(saveImage);
  // };
  const Schema = yup.object({
    email: yup.string().required(),
    name: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    const { name, email, password } = data;
    registerApi({ name, email, password }).then((res: {}) => {
      console.log(data)
      if (res) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been successfully created, awaiting verification",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/sign-in");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Why this error🤔"
        });
        navigate("/sign-up");
      }
      
    });
    reset();
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#5776cc]">
      <form
        className="min-w-[320px] min-h-[400px] bg-white  flex items-center flex-col rounded-xl shadow-lg"
        onSubmit={onSubmit}
      >
        <div className="mt-[20px]">Signup</div>
        <div className="mt-[25px] relative rounded-md">
          <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[10px] mt-[-10px] ">
            Enter Email:
          </div>
          <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-[3px] overflow-hidden">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
              {...register("email")}
            />
          </div>
          {errors.email?.message && (
            <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
              Please provide a valid email address
            </div>
          )}
        </div>
        <div className="mt-[25px] relative rounded-md">
          <div className="absolute bg-white max-sm:text-[10px] max-sm:mt-[-8px] px-1 text-[13px] font-semibold ml-[10px] mt-[-10px] ">
            Enter Name:
          </div>
          <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-[3px] overflow-hidden">
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
              {...register("name")}
            />
          </div>
          {errors.name?.message && (
            <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
              Please provide a name
            </div>
          )}
        </div>
        <div className="mt-[25px] relative rounded-md">
          <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[10px] mt-[-10px] ">
            Enter Password:
          </div>
          <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-[3px] overflow-hidden">
            <input
              type="text"
              placeholder="johndoe1234"
              className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
              {...register("password")}
            />
          </div>
          {errors.password?.message && (
            <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
              Provide a password
            </div>
          )}
        </div>

        <div className="min-w-[300px] h-[20px] mt-2 flex items-center px-4">
          <input
            type="checkbox"
            onClick={(e: any) => {
              setChecked(e.target.checked);
            }}
          />
          <div className="text-gray-400 text-[13px] max-sm:text-[10px] ml-3 ">
            By checking, You accept our{" "}
            <span className=" text-black font-semibold ">Terms</span> and{" "}
            <span className=" text-black font-semibold ">Condition</span>
          </div>
        </div>
        <div>
          <div className="flex text-[13px] text-gray-400">
            Already have an account?{" "}
            <Link to="/sign-in">
              <div className="ml-2 underline text-red-400 font-semibold">
                Signin
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <button
            className={` ${
              checked ? "bg-blue-400" : "bg-gray-300 text-black"
            } transition-all duration-500 px-5 py-[6px]  max-sm:text-[10px] rounded font-medium text-white`}
            disabled={!checked}
            type="submit"
          >
            Signup
          </button>
        </div>
        <div className="text-[13px] uppercase mt-1 max-sm:text-[11px]">
          Or Signup with
        </div>
        <div className="flex justify-between items-center min-w-[300px] mt-1 mb-4">
          <div className="min-w-[80px] min-h-[35px]  flex justify-center hover:bg-gray-200 transition-all duration-500 cursor-pointer items-center rounded border">
            <BsFacebook className="text-2xl max-sm:text-lg" />
          </div>
          <div className="min-w-[80px] min-h-[35px] flex justify-center hover:bg-gray-200 transition-all duration-500 cursor-pointer items-center rounded border">
            <FcGoogle className="text-2xl max-sm:text-lg" />
          </div>
          <div className="min-w-[80px] min-h-[35px] flex justify-center hover:bg-gray-200 transition-all duration-500 cursor-pointer items-center rounded border">
            <BsGithub className="text-2xl max-sm:text-lg" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
