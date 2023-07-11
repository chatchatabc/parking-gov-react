import { Button } from "antd";
import ReportTable from "../components/tables/ReportTable";
import { useAppDispatch } from "../redux/hooks";
import { drawerUpdate } from "../redux/features/drawerSlice";

function ReportPage() {
  const dispatch = useAppDispatch();

  return (
    <div className="p-4 flex-1">
      <div className="p-4 bg-slate-50 border border-gray-400 shadow-lg rounded-lg">
        <header className="flex items-center pb-2">
          <h2 className="text-xl font-medium mr-auto">Reports</h2>
          <Button
            onClick={() => {
              dispatch(
                drawerUpdate({
                  show: true,
                  title: "Add Report Status",
                  data: {},
                  buttonText: "Add",
                  content: "reportStatus",
                })
              );
            }}
            className="bg-blue-500 text-white"
          >
            Create +
          </Button>
        </header>
        <section className="border-gray-400 rounded-lg">
          <ReportTable />
        </section>
      </div>
    </div>
  );
}

export default ReportPage;
