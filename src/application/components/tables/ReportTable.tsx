import DynamicTable from "./DynamicTable";
import {
  reportGetAll,
  reportOptionsStatus,
} from "../../../domain/services/reportService";
import { ColumnsType } from "antd/es/table";
import { Report } from "../../../domain/models/ReportModel";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
import InfoIcon from "../../assets/InfoIcon";

function ReportTable() {
  const navigate = useNavigate();

  const columns: ColumnsType<Report> = [
    {
      title: "Report ID",
      key: "id",
      render: (record: Report) => {
        return (
          <button
            className="underline hover:no-underline"
            onClick={() => {
              navigate(`/reports/${record.id}`);
            }}
          >
            {record.id}
          </button>
        );
      },
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
        let className = "";
        switch (value) {
          case 1:
            className = "text-yellow-500";
            break;
          case 2:
          case -1:
            className = "text-red-500";
            break;
          case 3:
            className = "text-blue-500";
            break;
          case 4:
            className = "text-green-500";
            break;
        }

        return (
          <div className="flex items-start gap-1">
            <p className={className}>{label}</p>
            <Popover content={<p>{record.description}</p>}>
              <div className="w-4 h-4 text-gray-400">
                <InfoIcon />
              </div>
            </Popover>
          </div>
        );
      },
    },
  ];

  return <DynamicTable columns={columns} getData={reportGetAll} />;
}

export default ReportTable;
