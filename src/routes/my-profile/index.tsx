import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import userImage from "../../assets/user-image.png";
import { Avatar } from "../../components/Avatar";

export const Route = createFileRoute("/my-profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [toggleName, setToggleName] = useState(false);
  const [isOpenAvatar, setIsOpenAvatar] = useState<boolean>(false);

  const {
    findUsername,
    getAvatarColor,
    assignNickname,
    findNickname,
    removeUser,
  } = useAuth();
  const username = findUsername();
  const userNickname = findNickname(username);
  const avatarColor = getAvatarColor(username);
  const userInitial = username.split("", 1);

  const [nickname, setNickname] = useState<string>(() =>
    findNickname(username)
  );

  const location = useRouter();
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col w-[500px] rounded-[23px] bg-[#0d1725] shadow-[0px_0px_5px_0px_#51555e] py-8">
      <div className="w-full flex flex-row items-center gap-4 border-b border-light-blue pb-6 pl-8 relative">
        <div className="w-[70px] h-[70px] rounded-full">
          {" "}
          {!avatarColor ? (
            <img src={userImage} alt="user photo" className="w-1/2 h-full" />
          ) : (
            <div
              style={{ backgroundColor: avatarColor }}
              className="h-full w-full rounded-full relative"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                {userInitial}
              </span>
            </div>
          )}
        </div>

        <div
          className="bg-white rounded-2xl p-[2px] absolute bottom-5 left-[80px] cursor-pointer"
          onClick={() => setIsOpenAvatar(!isOpenAvatar)}
        >
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
                disabled={!nickname}
                type="checkbox"
                id="name-toggle"
                className="hidden peer"
                onChange={() => setToggleName(!toggleName)}
                value=""
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

      {isOpenAvatar && (
        <Avatar
          user={toggleName ? nickname : username}
          username={username}
          setIsOpenAvatar={setIsOpenAvatar}
          isOpenAvatar={isOpenAvatar}
        />
      )}

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
              value={userNickname || nickname}
              onChange={(e) => {
                const newNickname = e.target.value;
                setNickname(newNickname);
                assignNickname(username, newNickname);
              }}
              className="outline-0 text-right"
            />
            <label htmlFor="nickname hidden"></label>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8">
        <div className="flex flex-col py-6">
          <p>About me</p>
          <textarea
            id="about-me"
            name="about-me"
            className="mt-3 border-1 p-3 text-sm border-[#142338] focus:border-light-blue focus:outline-none focus:ring-0"
          ></textarea>
          <label htmlFor="about-me" className="hidden">
            About me
          </label>
        </div>
      </div>

      <button
        type="button"
        className="cursor-pointer mb-4 text-red-600 hover:text-red-500"
        onClick={() => {
          removeUser(username);
          navigate({ to: "/signup" });
        }}
      >
        Delete my profile
      </button>

      <button
        type="button"
        onClick={() => location.history.back()}
        className="cursor-pointer hover:text-amber-50"
      >
        Go Back
      </button>
    </div>
  );
}
