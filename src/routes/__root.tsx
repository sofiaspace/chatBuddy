import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className=" flex gap-2">
        {/* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link> */}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
