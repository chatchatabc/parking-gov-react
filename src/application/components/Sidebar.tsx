import ReportIcon from "../assets/ReportIcon";

type Props = {
  openSidebar: boolean;
};

function Sidebar({ openSidebar }: Props) {
  return (
    <aside
      data-sidebar
      className={`${
        openSidebar ? "min-w-[250px]" : "min-w-[0px]"
      } duration-500 border-r border-gray-400 bg-slate-50`}
    >
      <ul className="p-1 text-gray-600">
        <li className="p-1">
          <button className="border border-p400 text-p500 bg-p50 p-2 block w-full rounded-md text-start">
            <div className={`flex items-center relative`}>
              <div className="w-6 h-6">
                <ReportIcon />
              </div>
              <p
                className={`left-8 origin-left ${
                  openSidebar ? "delay-150" : "scale-x-0"
                } absolute transition overflow-hidden`}
              >
                Reports
              </p>
            </div>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
