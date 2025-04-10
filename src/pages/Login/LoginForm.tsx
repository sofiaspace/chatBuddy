import React from "react";
import logoImg from "../../assets/chatgpt-icon.png";
import facebookIcon from "../../assets/facebook.png";
import githubIcon from "../../assets/github.png";
import googleIcon from "../../assets/google.png";

export const LoginForm = () => {
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
      <form className="w-full" method="post">
        <h2 className="pb-7">Login</h2>

        <div className="relative z-0 mb-5">
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
            className="h-[35px] w-full text-sm appearance-none shadow-none outline-none block border-b  dark:border-b-amber-50   dark:focus:border-b-blue-400 focus:ring-0 focus:border-b-blue-600 peer"
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
            type="text"
            name="password"
            id="password"
            placeholder=" "
            className="h-[35px] w-full text-sm appearance-none shadow-none outline-none block border-b  dark:border-b-amber-50   dark:focus:border-b-blue-400 focus:ring-0 focus:border-b-blue-600 peer"
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 dark:text-amber-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
        </div>

        <p className="text-xs cursor-pointer dark:text-amber-50 duration-200 hover:opacity-85 ">
          Forgot Password?
        </p>

        <button
          type="submit"
          className="w-full mt-10 py-2 rounded-sm bg-light-blue text-[#000c19] font-semibold cursor-pointer"
        >
          Sign in
        </button>

        <p className="my-6 text-center text-xs">or continue with</p>

        <div className="flex flex-row justify-center gap-4">
          <img
            src={googleIcon}
            alt="google icon"
            className="bg-amber-50 px-3 py-2 rounded-sm cursor-pointer"
          />
          <img
            src={githubIcon}
            alt="github icon"
            className="bg-amber-50 px-3 py-2 rounded-sm cursor-pointer"
          />
          <img
            src={facebookIcon}
            alt="facebook icon"
            className="bg-amber-50 px-3 py-2 rounded-sm cursor-pointer"
          />
        </div>

        <p className="text-[10px] text-center mt-5">
          Don't have an account yet?{" "}
          <span className="font-semibold underline cursor-pointer">
            Register for free
          </span>
        </p>
      </form>
    </div>
  );
};
