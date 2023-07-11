import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  utilGetSidebarStatus,
  utilSaveSidebarStatus,
} from "../../domain/services/utilService";
import Navbar from "../components/Navbar";
import { authGetToken } from "../../domain/services/authService";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  const [openSidebar, setOpenSidebar] = React.useState(utilGetSidebarStatus());

  React.useEffect(() => {
    utilSaveSidebarStatus(openSidebar);
  }, [openSidebar]);

  if (!authGetToken()) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Content */}
      <div className="flex-1 flex">
        <Sidebar openSidebar={openSidebar} />

        {/* Main */}
        <main className="w-full flex flex-col bg-slate-100">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
