import { restGet, restPost } from "../infra/apis/restActions";
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

export async function reportCreate(values: Record<string, any>) {
  const { name, description, plateNumber, latitude, longitude } = values;
  const data = { name, description, plateNumber, latitude, longitude };

  const response = await restPost("/report", data, "ReportCreate");

  return response.data;
}

export async function reportGetAllStatus(
  params: CommonVariables & { id: number }
) {
  const { id, ...rest } = params;

  const response = await restGet(
    `/report/status/${id}`,
    rest,
    "ReportGetAllStatus"
  );

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
