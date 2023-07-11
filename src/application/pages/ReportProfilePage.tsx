import useGetData from "../hooks/useGetData";
import { reportGet } from "../../domain/services/reportService";
import { Spin } from "antd";
import { Report } from "../../domain/models/ReportModel";
import MapBoxComp from "../components/MapBoxComp";

function ReportProfilePage() {
  const { data, loading } = useGetData<Report>({
    getData: reportGet,
    params: { id: 1 },
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
                longitude: data.longitude,
                latitude: data.latitude,
              }}
              style={{
                height: "200px",
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ReportProfilePage;
