import { createFileRoute } from "@tanstack/react-router";
import React, { useRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import userImage from "../../assets/user-image.png";

export const Route = createFileRoute("/my-profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [toggleName, setToggleName] = useState(false);
  const [nickname, setNickname] = useState<string>("");
  const { findUsername } = useAuth();
  const username = findUsername();

  return (
    <div className="flex flex-col w-[500px] rounded-[23px] bg-[#0d1725] shadow-[0px_0px_5px_0px_#51555e] py-8">
      <div className="w-full flex flex-row items-center gap-4 border-b border-light-blue pb-6 pl-8 relative">
        <img src={userImage} alt="user photo" className="w-[70px] h-[70px] " />
        <div className="bg-white rounded-2xl p-[2px] absolute bottom-5 left-[80px] cursor-pointer">
          {" "}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 17.5V20h2.5L17.81 8.69l-2.5-2.5L4 17.5z"
              fill="#0d1725"
            />

            <path
              d="M19.71 7.04a1 1 0 0 0 0-1.41l-1.34-1.34a1 1 0 0 0-1.41 0l-1.13 1.13 2.5 2.5 1.13-1.13z"
              fill="#0d1725"
            />

            <line
              x1="11"
              y1="20"
              x2="18"
              y2="20"
              stroke="#0d1725"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="pt-3 w-[200px]">
          <div>Welcome, {toggleName ? nickname : username}</div>
          <div className="text-center pt-1 pr-16">
            <div className="relative inline-block">
              <input
                type="checkbox"
                id="name-toggle"
                className="hidden peer"
                onChange={() => setToggleName(!toggleName)}
              />
              <label
                htmlFor="name-toggle"
                className="block w-[40px] h-[21px] bg-[#b1d4e0] rounded-[99px] cursor-pointer relative after:content-[] after:top-[2px] after:absolute after:left-[2px] after:w-[17px] after:h-[17px] after:bg-white after:rounded-full transition-all after:duration-300 after:ease-in-out peer-checked:after:left-[19px] peer-checked:bg-[#38374f]"
              ></label>
              <p className="text-xs w-[180px] absolute left-[50px] top-[0px] bg-[#363548] p-2 opacity-0 invisible scale-95 rounded-md transition-all duration-300 peer-hover:opacity-100 peer-hover:visible peer-hover:scale-100">
                Toggle for displaying your nickname or username
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8">
        <div className="flex flex-row justify-between items-center  py-6 border-b border-[#142338]">
          <p>Username</p>
          <p>{username}</p>
        </div>
        <div className="flex flex-row justify-between items-center  py-6 border-b border-[#142338]">
          <p>Nickname</p>
          <div>
            {" "}
            <input
              type="text"
              name="nickname"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="outline-0 text-right"
            />
            <label htmlFor="nickname hidden"></label>
          </div>
        </div>
      </div>
    </div>
  );
}
