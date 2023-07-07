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
