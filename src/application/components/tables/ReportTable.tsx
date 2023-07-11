import DynamicTable from "./DynamicTable";
import {
  reportGetAll,
  reportOptionsStatus,
} from "../../../domain/services/reportService";
import { ColumnsType } from "antd/es/table";
import { Report } from "../../../domain/models/ReportModel";

function ReportTable() {
  const columns: ColumnsType<Report> = [
    {
      title: "Report ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Plate Number",
      key: "plateNumber",
      dataIndex: "plateNumber",
    },
    {
      title: "Location",
      key: "location",
      render: (record: Report) => {
        return (
          <p>
            {record.longitude}, {record.latitude}
          </p>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      render: (record: Report) => {
        const statusOptions = reportOptionsStatus();
        const { label, value } = statusOptions[record.status];
        if (value === 2 || value === -1) {
          return <p className="text-red-500">{label}</p>;
        } else if (value === 1) {
          return <p className="text-yellow-500">{label}</p>;
        } else if (value === 3) {
          return <p className="text-blue-500">{label}</p>;
        } else if (value === 4) {
          return <p className="text-green-500">{label}</p>;
        } else {
          return <p>{label}</p>;
        }
      },
    },
  ];

  return <DynamicTable columns={columns} getData={reportGetAll} />;
}

export default ReportTable;
