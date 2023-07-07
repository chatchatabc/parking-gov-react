import GridLayout from "react-grid-layout";
import { withSize } from "react-sizeme";
import React from "react";

function HomePage() {
  const [size, setSize] = React.useState(1200);
  const withSizeHOC = withSize();
  const Grid = withSizeHOC(GridLayout);

  const layout = [
    { i: "a", x: 0, y: 0, w: 12, h: 4 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  React.useEffect(() => {
    const sidebar = document.querySelector("aside")!;

    // add event listener to window resize
    window.addEventListener("resize", () => {
      setSize(window.innerWidth - sidebar.clientWidth);
    });

    // set initial size
    setSize(window.innerWidth - sidebar.clientWidth);
  }, []);

  return (
    <Grid
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={50}
      width={size}
    >
      <div key="a" className="border">
        a
      </div>
      <div key="b" className="border">
        b
      </div>
      <div key="c" className="border">
        c
      </div>
    </Grid>
  );
}

export default HomePage;
