import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnlineUsers from "../components/OnlineUsers";
import SideBar from "../pages/SideBar";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="w-4xl p-2 overflow-y-auto">
        <Navbar />
        <Outlet />
      </main>
      <OnlineUsers />
    </div>
  );
}

export default MainLayout;
