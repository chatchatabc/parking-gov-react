import { restPost } from "../infra/apis/restActions";
import { AxiosResponse } from "../models/AxiosModel";
import { User } from "../models/UserModel";

export async function authLogin(values: Record<string, any>) {
  const response: AxiosResponse<User> = await restPost(
    "/auth/login",
    values,
    "AuthLogin"
  );

  return response.data;
}

export async function authLogout() {}

export function authGetToken() {
  return "authGetToken";
}
