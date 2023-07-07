import React from "react";
import { Outlet } from "react-router-dom";
import {
  utilGetSidebarStatus,
  utilSaveSidebarStatus,
} from "../../domain/services/utilService";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

function MainLayout() {
  const [openSidebar, setOpenSidebar] = React.useState(utilGetSidebarStatus());

  React.useEffect(() => {
    utilSaveSidebarStatus(openSidebar);
  }, [openSidebar]);

  return (
    <>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Content */}
      <div className="flex-1 flex">
        <Sidebar openSidebar={openSidebar} />

        {/* Main */}
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
