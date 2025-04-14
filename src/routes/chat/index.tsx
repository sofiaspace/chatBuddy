import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { Dashboard } from "../../components/Dashboard";
import { AIChat } from "../../components/AIChat";

export const Route = createFileRoute("/chat/")({
  component: Chat,
});

function Chat() {
  return (
    <div className="flex flex-row w-[800px] rounded-[23px] bg-[#0d1725] shadow-[0px_0px_5px_0px_#51555e]">
      <Dashboard />
      <AIChat />
    </div>
  );
}
