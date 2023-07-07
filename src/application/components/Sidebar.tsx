type Props = {
  openSidebar: boolean;
};

function Sidebar({ openSidebar }: Props) {
  return (
    <aside
      data-sidebar
      className={`${
        openSidebar ? "min-w-[250px]" : "min-w-[0px]"
      } duration-500 border-r-2`}
    >
      Sidebar
    </aside>
  );
}

export default Sidebar;
