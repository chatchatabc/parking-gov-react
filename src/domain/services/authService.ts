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
  sessionStorage.setItem("user", JSON.stringify(response.data.data));

  return response.data;
}

export async function authLogout() {
  const response = await restPost("/profile/logout", {}, "AuthLogout");

  document.cookie = "token=; path=/; max-age=0";
  sessionStorage.removeItem("user");

  return response.data;
}

export function authGetUser() {
  const user = sessionStorage.getItem("user");

  if (!user || user === "undefined") {
    return null;
  }

  return JSON.parse(user) as User;
}

export function authGetUsername() {
  const user = authGetUser();

  if (!user) {
    return null;
  }

  return user.username;
}

export function authGetId() {
  const user = authGetUser();

  if (!user) {
    return null;
  }

  return user.userUuid;
}

export function authGetToken() {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  return token;
}
