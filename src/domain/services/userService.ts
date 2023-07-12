import { restGet } from "../infra/apis/restActions";
import { AxiosResponse } from "../models/AxiosModel";
import { User } from "../models/UserModel";

export async function userGetMe() {
  const response: AxiosResponse<User> = await restGet("/user/me");

  return response.data;
}
