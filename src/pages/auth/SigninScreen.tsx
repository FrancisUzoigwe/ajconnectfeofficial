import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { signinApi, verifiedApi } from "../../apis/AuthApi";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { userState } from "../../global/GlobalFile";

const SigninScreen = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);

  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    const { email, password } = data;
    signinApi({ email, password }).then((res: any) => {
      if (res) {
        dispatch(userState(res));
        navigate("/chat");
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome back `,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        navigate("/sign-in");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  });

  useEffect(() => {
    if (token) {
      verifiedApi(token);
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#5776cc]">
      <form
        className="min-w-[320px] px-4 max-h-[400px] bg-white flex items-center flex-col rounded-xl shadow-lg"
        onSubmit={onSubmit}
      >
        <div className="py-[20px]">Signin</div>
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
            Remember me
          </div>
        </div>
        <div>
          <div className="flex text-[13px] text-gray-400">
            Don't have an account?{" "}
            <Link to="/sign-up">
              <div className="ml-2 underline text-red-400 font-semibold">
                Signup
              </div>
            </Link>
          </div>
          <Link to="/forgot">
            <div className="flex text-[12px] text-red-400 justify-end mt-2 underline">
              Forgot password?{" "}
            </div>
          </Link>
        </div>
        <div className="mt-3">
          <button
            className={` ${
              checked ? "bg-blue-400" : "bg-gray-300 text-black"
            } transition-all duration-500 px-5 py-[6px]  max-sm:text-[10px] rounded font-medium text-white`}
            disabled={!checked}
            type="submit"
          >
            Signin
          </button>
        </div>
        <div className="text-[13px] uppercase mt-2 max-sm:text-[11px] mb-1">
          Or Signin with
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

export default SigninScreen;
