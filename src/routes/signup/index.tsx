import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import logoImg from "../../assets/chatgpt-icon.png";
import { EyeIcon } from "../../components/EyeIcon";
import { useAuth } from "../../hooks/useAuth";

export const Route = createFileRoute("/signup/")({
  component: Signup,
});

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [type, setType] = useState<string>("password");
  const [icon, setIcon] = useState<string>("eyeOn");
  const [confirmType, setConfirmType] = useState<string>("password");
  const [confirmIcon, setCofirmIcon] = useState<string>("eyeOn");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

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

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (!password || !confirmPassword) {
      setPasswordError("Password is required");
      return false;
    } else if (password !== confirmPassword) {
      setPasswordError("Password is not matching");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const validateUsername = () => {
    if (!username) {
      setUsernameError("Username is required");
      return false;
    } else {
      setUsernameError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword() && validateUsername()) {
      console.log("Signup successful");
      signup(username);

      navigate({ to: "/chat" });
    }
  };

  return (
    <div className="rounded-[23px] h-[530px] w-[350px] bg-white/4 backdrop-blur-sm border-t border-l border-white/20 shadow-[3px_3px_3px_rgba(238, 208, 208, 0.089)] flex flex-col justify-start items-center px-10 pt-10 pb-7">
      <div className="flex flex-row items-center gap-2 pb-7">
        <img
          src={logoImg}
          alt="logo icon"
          className="w-[40px] h-[40px] animate-logo"
        />
        <h1>ChatBuddy</h1>
      </div>
      <form
        className="w-full h-full flex flex-col"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 mb-5">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            name="username"
            id="username"
            placeholder=" "
            required
            className="h-[35px] w-full text-sm appearance-none shadow-none outline-none block border-b  dark:border-b-amber-50   dark:focus:border-b-blue-400 focus:ring-0 focus:border-b-blue-600 peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:[&~label]:text-red-500"
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 dark:text-amber-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Username
          </label>
        </div>

        <div className="relative z-0 mb-5">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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

        <div className="relative z-0 mb-1">
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type={confirmType}
            name="confirm_password"
            id="confirm_password"
            placeholder=" "
            required
            className="h-[35px] w-full pr-[20px] text-sm appearance-none shadow-none outline-none block border-b  dark:border-b-amber-50   dark:focus:border-b-blue-400 focus:ring-0 focus:border-b-blue-600 peer"
          />
          <label
            htmlFor="confirm_password"
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
        {passwordError ? (
          <p className="text-red-500 text-xs">{passwordError}</p>
        ) : emailError ? (
          <p className="text-red-500 text-xs">{emailError}</p>
        ) : usernameError ? (
          <p className="text-red-500 text-xs">{usernameError}</p>
        ) : null}

        <div className="mt-auto">
          {" "}
          <p className="text-xs">
            By signing up, you consent to ChatBuddy's{" "}
            <Link target="_blank" to="/policies/terms-of-use">
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
            className="w-full mt-5 py-2 rounded-sm bg-light-blue text-[#000c19] font-semibold cursor-pointer"
            onSubmit={(e) => handleSubmit(e)}
          >
            Sign up
          </button>
          <div className="flex flex-col items-center gap-2 mt-4">
            {" "}
            <span>or</span>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
