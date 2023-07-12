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
import CustomHeaderTable from "./CustomHeaderTable";
import React from "react";

function ReportTable() {
  const [filters, setFilters] = React.useState<Record<string, any>>({
    sort: "id,asc",
  });
  console.log(filters);

  const navigate = useNavigate();

  const columns: ColumnsType<Report> = [
    {
      title: (
        <CustomHeaderTable
          title="Report ID"
          filters={filters}
          setFilters={setFilters}
          sortName="id"
          searchName="id"
        />
      ),
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
      title: (
        <CustomHeaderTable
          title="Plate Number"
          filters={filters}
          setFilters={setFilters}
          sortName="plateNumber"
        />
      ),
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
      title: (
        <CustomHeaderTable
          title="Status"
          filters={filters}
          setFilters={setFilters}
          sortName="status"
          searchName="status"
        />
      ),
      key: "status",
      render: (record: Report) => {
        const statusOptions = reportOptionsStatus();
        const { label, value } = statusOptions.find(
          (item) => item.value === record.status
        )!;
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

  return (
    <DynamicTable
      columns={columns}
      getData={(variables) => {
        return reportGetAll({
          ...variables,
          ...filters,
        });
      }}
    />
  );
}

export default ReportTable;
