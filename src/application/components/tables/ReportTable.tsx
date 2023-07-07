import DynamicTable from "./DynamicTable";
import { reportGetAll } from "../../../domain/services/reportService";
import { ColumnsType } from "antd/es/table";
import { Report } from "../../../domain/models/ReportModel";

function ReportTable() {
  const columns: ColumnsType<Report> = [
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
      title: "Reported by",
      key: "reportedBy",
      render: (record: Report) => {
        return <p>{record.name}</p>;
      },
    },
  ];

  return <DynamicTable columns={columns} getData={reportGetAll} />;
}

export default ReportTable;
