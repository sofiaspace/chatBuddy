import React from "react";
import Logo from "../assets/chatgpt-icon.png";

export const AIChat = () => {
  return (
    <div className="py-10 px-14 w-full flex flex-col gap-3 justify-center items-center">
      <img src={Logo} alt="logo" className="w-[50px] h-[50px] animate-logo" />
      <h1>Welcome to ChatBuddy!</h1>

      <form method="post" className="w-full my-8">
        <input
          type="text"
          name="ai_chat"
          id="ai_chat"
          className="h-[40px] w-[80%] mx-auto block bg-[#e8f0f8] rounded-xl outline-none text-black px-3"
        />
      </form>
    </div>
  );
};
