import React from "react";
import { Map } from "react-map-gl";

type Props = React.ComponentProps<typeof Map>;

function MapBoxComp({ children, ...props }: Props) {
  return (
    <Map
      initialViewState={{
        longitude: 125.60355,
        latitude: 7.077729,
        zoom: 13,
      }}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      mapStyle={"mapbox://styles/mapbox/streets-v12"}
      {...props}
    >
      {children}
    </Map>
  );
}

export default MapBoxComp;
