import { restPost } from "../infra/apis/restActions";
import { AxiosResponse } from "../models/AxiosModel";
import { User } from "../models/UserModel";

export async function authLogin(values: Record<string, any>) {
  const response: AxiosResponse<User> = await restPost(
    "/auth/login-password",
    values,
    "AuthLogin"
  );

  if (response.data.errors) {
    return response.data;
  }
  const token = response.headers["x-access-token"];

  if (!token) {
    return {
      errors: [
        {
          message: "Token not found",
          title: "AuthLogin",
        },
      ],
    };
  }

  document.cookie = `token=${token}; path=/; max-age=86400`;
  sessionStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
}

export async function authLogout() {}

export function authGetToken() {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  return token;
}
