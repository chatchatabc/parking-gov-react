import { Modal, Popover, message } from "antd";
import React from "react";
import {
  authGetId,
  authGetUsername,
  authLogout,
} from "../../domain/services/authService";
import { useNavigate } from "react-router-dom";
import ImageComp from "./ImageComp";

type Props = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavbarMenu() {
  const navigate = useNavigate();

  return (
    <ul className="w-48 space-y-4 py-1">
      <li>
        <button className="w-full block text-start group">
          <div className="w-fit">
            <p>Profile</p>
            <div className="h-0.5 w-full scale-x-0 origin-left bg-black duration-300 group-hover:scale-x-100"></div>
          </div>
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            Modal.confirm({
              zIndex: 1100,
              title: "Logout",
              content: "Are you sure you want to logout?",
              okButtonProps: {
                danger: true,
              },
              maskClosable: true,
              onOk: async () => {
                const response = await authLogout();

                if (response.errors) {
                  message.error("Logout failed");
                } else {
                  message.success("Logout success");
                }

                navigate("/login");
              },
            });
          }}
          className="w-full block text-start group"
        >
          <div className="w-fit">
            <p className="text-red-500">Logout</p>
            <div className="h-0.5 w-full scale-x-0 origin-left bg-red-500 duration-300 group-hover:scale-x-100"></div>
          </div>
        </button>
      </li>
    </ul>
  );
}

function Navbar({ openSidebar, setOpenSidebar }: Props) {
  const [popoverVisible, setPopoverVisible] = React.useState(false);

  return (
    <header className="flex bg-slate-50 px-8 py-2 items-center border-b border-gray-400">
      <div className="flex space-x-2 self-stretch items-center">
        <button
          className="p-1 border border-p400 self-stretch rounded-md"
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        >
          Menu
        </button>
        <h2 className="flex-1 text-3xl font-medium">Parking Enforcer</h2>
      </div>
      <Popover
        onOpenChange={(open) => setPopoverVisible(open)}
        content={<NavbarMenu />}
        trigger="click"
        placement="topRight"
      >
        <div
          className={`ml-auto rounded-md py-1 px-4 flex items-center space-x-2 cursor-pointer ${
            popoverVisible ? "bg-p100" : ""
          } duration-300 hover:bg-p100`}
        >
          <p className="capitalize">{authGetUsername()}</p>
          <div className="w-10 h-10 rounded-full border border-gray-400 overflow-hidden">
            <ImageComp src={`/api/user/avatar/${authGetId()}`} />
          </div>
        </div>
      </Popover>
    </header>
  );
}

export default Navbar;
