import HeaderBar from "./header";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}
