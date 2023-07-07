import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <header className="flex px-8 py-2 items-center border-b-2">
        <h2 className="flex-1 text-3xl font-medium">Parking Enforcer</h2>
        <div className="ml-auto border rounded-md py-1 px-4 flex items-center space-x-2">
          <p>User</p>
          <div className="w-10 h-10 rounded-full border"></div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-72 border-r-2">Sidebar</aside>

        {/* Main */}
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
