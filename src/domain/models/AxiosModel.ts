import { AxiosResponse as AxiosResponseOriginal } from "axios";

export type AxiosResponse<Data = any> = AxiosResponseOriginal<
  AxiosResponseData<Data> | AxiosResponseError
>;

export type AxiosResponseData<Data = any> = {
  data: Data;
  errors: null;
};

export type AxiosResponseError = {
  errors: AxiosResponseErrorItem[];
};

export type AxiosResponseErrorItem = {
  message: string;
  title: string;
};
