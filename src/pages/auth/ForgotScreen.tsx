import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { forgotApi } from "../../apis/AuthApi";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);

  const Schema = yup.object({
    email: yup.string().required(),
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
    const { email } = data;
    forgotApi({ email }).then((res: any) => {
      console.log("This is data", data);
      console.log("This is res", res);
      navigate("/chat");
    });
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#5776cc]">
      <form
        className="min-w-[320px] max-h-[400px] bg-white flex items-center flex-col rounded-xl shadow-lg"
        onSubmit={onSubmit}
      >
        <div className="py-[20px]">Reset password</div>
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
            remember password?{" "}
            <Link to="/sign-in">
              <div className="ml-2 underline text-red-400 font-semibold">
                Sign in
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <button
            className={` ${
              checked ? "bg-blue-400" : "bg-gray-300 text-black"
            } transition-all duration-500 px-5 py-[6px]  max-sm:text-[10px] rounded mb-4 font-medium text-white`}
            disabled={!checked}
            type="submit"
          >
            Re-set
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forgotpassword;
