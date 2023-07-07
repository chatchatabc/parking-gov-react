import React from "react";

type Props = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ openSidebar, setOpenSidebar }: Props) {
  return (
    <header className="flex px-8 py-2 items-center border-b-2">
      <div className="flex space-x-2 self-stretch items-center">
        <button
          className="p-1 border-2 self-stretch rounded-md"
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        >
          Menu
        </button>
        <h2 className="flex-1 text-3xl font-medium">Parking Enforcer</h2>
      </div>
      <div className="ml-auto border rounded-md py-1 px-4 flex items-center space-x-2">
        <p>User</p>
        <div className="w-10 h-10 rounded-full border"></div>
      </div>
    </header>
  );
}

export default Navbar;
