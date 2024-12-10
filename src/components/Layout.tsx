import { ServersNav } from "./ServersNav";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="flex h-screen">
      <ServersNav />
      <Outlet />
    </div>
  );
}
