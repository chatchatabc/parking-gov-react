import useGetData from "../hooks/useGetData";
import { reportGet } from "../../domain/services/reportService";
import { Button, Spin } from "antd";
import { Report } from "../../domain/models/ReportModel";
import MapBoxComp from "../components/MapBoxComp";
import ReportStatusTable from "../components/tables/ReportStatusTable";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { drawerUpdate } from "../redux/features/drawerSlice";
import { useParams } from "react-router-dom";
import { Marker } from "react-map-gl";
import { Point } from "mapbox-gl";

function ReportProfilePage() {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const global = useAppSelector((state) => state.global);

  const { data, loading } = useGetData<Report>({
    getData: reportGet,
    params: { id },
    reset: global.reset,
  });

  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  if (!data) {
    return <div>Failed to get data</div>;
  }

  return (
    <div className="p-2 flex flex-wrap">
      <div className="p-2 w-1/2 flex">
        <div className="w-full border border-gray-400 bg-slate-50 rounded-lg p-2">
          <header>
            <h2 className="text-xl font-medium">Report ID: {data.id}</h2>
          </header>

          <section className="mt-2 flex flex-wrap gap-y-2">
            <div className="w-1/3">
              <p className="font-bold text-xs">Name</p>
              <p>{data.name}</p>
            </div>

            <div className="w-1/3">
              <p className="font-bold text-xs">Plate Number</p>
              <p>{data.plateNumber}</p>
            </div>

            <div className="w-1/3">
              <p className="font-bold text-xs">Status</p>
              <p>{data.plateNumber}</p>
            </div>

            <div className="w-1/3">
              <p className="font-bold text-xs">Longitude & Latitude</p>
              <p>
                {data.longitude}, {data.latitude}
              </p>
            </div>

            <div className="w-2/3">
              <p className="font-bold text-xs">Description</p>
              <p>{data.description}</p>
            </div>
          </section>
        </div>
      </div>

      <div className="p-2 w-1/2 flex">
        <div className="border w-full border-gray-400 bg-slate-50 rounded-lg p-2 pb-16">
          <header>
            <h2 className="text-xl font-medium">Location</h2>
          </header>

          <section className="mt-2">
            <MapBoxComp
              initialViewState={{
                latitude: data.latitude,
                longitude: data.longitude,
                zoom: 15,
              }}
              attributionControl={false}
              style={{
                height: "200px",
                width: "100%",
              }}
            >
              <Marker
                latitude={data.latitude}
                longitude={data.longitude}
                anchor="bottom"
                offset={new Point(300, -180)}
              />
            </MapBoxComp>
          </section>
        </div>
      </div>

      <div className="p-2 w-full">
        <div className="border w-full border-gray-400 bg-slate-50 rounded-lg p-2">
          <header className="flex items-center">
            <h2 className="text-xl font-medium mr-auto">Report Status</h2>
            <Button
              onClick={() => {
                dispatch(
                  drawerUpdate({
                    show: true,
                    title: "Add Report Status",
                    data: {
                      reportId: data.id,
                      status: data.status,
                    },
                    buttonText: "Add",
                    content: "reportStatus",
                  })
                );
              }}
              className="bg-blue-500 text-white"
            >
              Add +
            </Button>
          </header>

          <section className="mt-2">
            <ReportStatusTable id={data.id} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ReportProfilePage;
