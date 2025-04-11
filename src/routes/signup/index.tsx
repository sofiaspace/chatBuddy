import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import logoImg from "../../assets/chatgpt-icon.png";
import { EyeIcon } from "../../components/EyeIcon";

export const Route = createFileRoute("/signup/")({
  component: Signup,
});

function Signup() {
  const [type, setType] = useState<string>("password");
  const [icon, setIcon] = useState<string>("eyeOn");
  const [confirmType, setConfirmType] = useState<string>("password");
  const [confirmIcon, setCofirmIcon] = useState<string>("eyeOn");

  const handleShowPassword = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setIcon((prevIcon) => (prevIcon === "eyeOn" ? "eyeOff" : "eyeOn"));
  };

  const handleConfirmShowPassword = () => {
    setConfirmType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setCofirmIcon((prevIcon) => (prevIcon === "eyeOn" ? "eyeOff" : "eyeOn"));
  };

  return (
    <div className="rounded-[23px] h-[530px] w-[350px] bg-white/4 backdrop-blur-sm border-t border-l border-white/20 shadow-[3px_3px_3px_rgba(238, 208, 208, 0.089)] flex flex-col justify-start items-center p-10">
      <div className="flex flex-row items-center gap-2 pb-8">
        <img
          src={logoImg}
          alt="logo icon"
          className="w-[40px] h-[40px] animate-logo "
        />
        <h1>ChatBuddy</h1>
      </div>
      <form className="w-full" method="post" noValidate>
        <h2 className="pb-7">Sign up</h2>

        <div className="relative z-0 mb-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
            className="h-[35px] w-full text-sm appearance-none shadow-none outline-none block border-b  dark:border-b-amber-50   dark:focus:border-b-blue-400 focus:ring-0 focus:border-b-blue-600 peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:[&~label]:text-red-500"
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 dark:text-amber-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email
          </label>
        </div>

        <div className="relative z-0 mb-4">
          <input
            type={type}
            name="password"
            id="password"
            placeholder=" "
            required
            className="h-[35px] w-full pr-[20px] text-sm appearance-none shadow-none outline-none block border-b  dark:border-b-amber-50   dark:focus:border-b-blue-400 focus:ring-0 focus:border-b-blue-600 peer"
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 dark:text-amber-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
          <span
            className="cursor-pointer absolute right-0 top-2 hover:[&>svg]:stroke-blue-500 [&>svg]:duration-200"
            onClick={() => handleShowPassword()}
          >
            <EyeIcon icon={icon} />
          </span>
        </div>

        <div className="relative z-0 mb-4">
          <input
            type={confirmType}
            name="password"
            id="password"
            placeholder=" "
            required
            className="h-[35px] w-full pr-[20px] text-sm appearance-none shadow-none outline-none block border-b  dark:border-b-amber-50   dark:focus:border-b-blue-400 focus:ring-0 focus:border-b-blue-600 peer"
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 dark:text-amber-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Confirm Password
          </label>
          <span
            className="cursor-pointer absolute right-0 top-2 hover:[&>svg]:stroke-blue-500 [&>svg]:duration-200"
            onClick={() => handleConfirmShowPassword()}
          >
            <EyeIcon icon={confirmIcon} />
          </span>
        </div>

        <p className="text-xs mt-6">
          By signing up, you consent to ChatBuddy's{" "}
          <Link target="_blank" to="/">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link target="_blank" to="/policies/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>

        <button
          type="submit"
          className="w-full mt-6 py-2 rounded-sm bg-light-blue text-[#000c19] font-semibold cursor-pointer"
        >
          Sign up
        </button>

        <div className="flex flex-col items-center gap-2 mt-4">
          {" "}
          <span>or</span>
          <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
}
