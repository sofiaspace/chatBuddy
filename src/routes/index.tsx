import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import Logo from "../assets/chatgpt-icon.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center gap-3">
      <h1 className="flex flex-row items-center gap-2">
        <img src={Logo} alt="logo" className="w-[40px] h-[40px] animate-logo" />
        <p>Welcome to ChatBuddy!</p>
      </h1>

      <div className="w-[340px] whitespace-nowrap overflow-hidden border-r-3 border-white animate-type mx-auto">
        Your go-to AI for answers, ideas, and more.
      </div>

      <Link
        to="/login"
        className="w-1/2 mt-10 py-2 rounded-sm bg-[#646cff] !text-light-blue text-center font-semibold cursor-pointer mx-auto"
      >
        Get Started
      </Link>
    </div>
  );
}
