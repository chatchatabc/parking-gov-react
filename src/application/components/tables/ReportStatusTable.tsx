import { ColumnsType } from "antd/es/table";
import React from "react";
import { ReportStatus } from "../../../domain/models/ReportModel";
import {
  reportGetAllStatus,
  reportOptionsStatus,
} from "../../../domain/services/reportService";
import DynamicTable from "./DynamicTable";
import { CommonVariables } from "../../../domain/models/CommonModel";

type Props = {
  id: number;
};

function ReportStatusTable({ id }: Props) {
  const columns: ColumnsType<ReportStatus> = [
    {
      width: "25%",
      title: "Status",
      key: "status",
      render: (record: ReportStatus) => {
        const statusOptions = reportOptionsStatus();
        const { label, value } = statusOptions.find(
          (option) => option.value === record.status
        )!;

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
    {
      title: "Date",
      key: "date",
      render: (record: ReportStatus) => {
        const date = new Date(record.createdAt);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(date);
        return <p>{formattedDate}</p>;
      },
    },
    {
      width: "50%",
      title: "Remarks",
      key: "remarks",
      dataIndex: "remarks",
    },
  ];

  return (
    <DynamicTable
      getData={(variables: CommonVariables) => {
        return reportGetAllStatus({ ...variables, id });
      }}
      columns={columns}
    />
  );
}

export default ReportStatusTable;
