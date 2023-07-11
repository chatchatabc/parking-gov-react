import { restGet } from "../infra/apis/restActions";
import { AxiosResponse } from "../models/AxiosModel";
import { CommonPagination, CommonVariables } from "../models/CommonModel";
import { Report } from "../models/ReportModel";

export async function reportGetAll(params: CommonVariables) {
  const response: AxiosResponse<CommonPagination<Report>> = await restGet(
    "/report",
    params,
    "ReportGetAll"
  );

  return response.data;
}

export async function reportGet(params: { id: string }) {
  const response = await restGet(`/report/${params.id}`, {}, "ReportGet");

  return response.data;
}

export function reportOptionsStatus() {
  return [
    {
      value: -1,
      label: "Cancelled",
    },
    {
      value: 0,
      label: "Draft",
    },
    {
      value: 1,
      label: "Pending",
    },
    {
      value: 2,
      label: "Rejected",
    },
    {
      value: 3,
      label: "In Progress",
    },
    {
      value: 4,
      label: "Completed",
    },
  ];
}
