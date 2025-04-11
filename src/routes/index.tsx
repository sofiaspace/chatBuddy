import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <div></div>;
}
