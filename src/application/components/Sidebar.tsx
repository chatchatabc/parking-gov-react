import { useLocation, useNavigate } from "react-router-dom";
import ReportIcon from "../assets/ReportIcon";
import HomeIcon from "../assets/HomeIcon";

type Props = {
  openSidebar: boolean;
};

const items = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
    children: [],
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <ReportIcon />,
    children: [],
  },
];

function Sidebar({ openSidebar }: Props) {
  const location = useLocation();
  const startPath = "/" + location.pathname.split("/")[1];
  const navigate = useNavigate();

  return (
    <aside
      data-sidebar
      className={`${
        openSidebar ? "min-w-[250px]" : "min-w-[0px]"
      } duration-500 border-r border-gray-400 bg-slate-50`}
    >
      <ul className="p-1 text-gray-600">
        {items.map((item) => {
          return (
            <li className="p-1">
              <button
                onClick={() => {
                  navigate(item.path);
                }}
                className={`p-2 block w-full ${
                  startPath === item.path
                    ? "border border-p400 text-p500 bg-p50"
                    : "border border-slate-50"
                } rounded-md text-start`}
              >
                <div className={`flex items-center relative`}>
                  <div className="w-6 h-6">{item.icon}</div>
                  <p
                    className={`left-8 origin-left ${
                      openSidebar ? "delay-150" : "scale-x-0"
                    } absolute transition overflow-hidden`}
                  >
                    {item.name}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
