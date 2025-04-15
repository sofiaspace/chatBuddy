import React from "react";
import UserImg from "../assets/user-image.png";
import { Link } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="w-[380px] pt-4 pb-4  border-r-1 border-[#143d4b]">
      <div className="flex flex-row items-center gap-3 pb-4 pl-4 border-b-1 border-light-blue">
        <img src={UserImg} alt="user image" className="w-[30px] h-[30px]" />
        <div>
          <p className="text-sm">Name Surname</p>
          <p className="text-xs">Email Adress</p>
        </div>
      </div>

      <div className="py-5 px-6 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-6 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#bcd2e8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H15C14.4477 21 14 20.5523 14 20V15H10V20C10 20.5523 9.55228 21 9 21H4C3.44772 21 3 20.5523 3 20V10Z"
              stroke="#bcd2e8"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-1 text-light-blue text-sm">Home</p>
        </div>

        <div className="flex flex-row items-center gap-6 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="#bcd2e8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3V21L12 17L19 21V3H5Z"
              stroke="#bcd2e8"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="mt-1 text-light-blue text-sm">Saved chats</p>
        </div>

        <div className="flex flex-row items-center gap-6 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#bcd2e8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.94 8.63L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9.06 8.63L12 2Z"
              stroke="#bcd2e8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="mt-1 text-light-blue text-sm">Tips &amp; features</p>
        </div>

        <div className="flex flex-row items-center gap-6 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#bcd2e8" strokeWidth="2" />
            <path
              d="M9.09 9C9.32502 8.33134 9.85069 7.7681 10.5 7.5C11.4603 7.10496 12.5397 7.10496 13.5 7.5C14.1493 7.7681 14.675 8.33134 14.91 9C15.1942 9.80065 14.9595 10.6821 14.34 11.25L13.5 12C13.08 12.36 12.78 12.72 12.72 13.5M12 17H12.01"
              stroke="#bcd2e8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="mt-1 text-light-blue text-sm">Updates &amp; FAQs</p>
        </div>
        <div className="flex flex-row items-center gap-6 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="8" r="4" stroke="#bcd2e8" strokeWidth="2" />
            <path
              d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
              stroke="#bcd2e8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="mt-1 text-light-blue text-sm">My Profile</p>
        </div>

        <div className="flex flex-row items-center gap-6 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17L21 12L16 7"
              stroke="#bcd2e8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12H9"
              stroke="#bcd2e8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 3H12C13.1046 3 14 3.89543 14 5V8"
              stroke="#bcd2e8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 16V19C14 20.1046 13.1046 21 12 21H5"
              stroke="#bcd2e8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <Link
            to="/login"
            onClick={logout}
            className="mt-1 text-light-blue text-sm"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
