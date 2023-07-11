import React from "react";
import {
  AxiosResponseData,
  AxiosResponseError,
} from "../../domain/models/AxiosModel";
import { message } from "antd";

type Props<T = any> = {
  getData: (
    variables: any
  ) => Promise<AxiosResponseData<T> | AxiosResponseError>;
  params: Record<string, any>;
  reset?: number;
};

function useGetData<T>({ getData, reset, params }: Props<T>) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);

    (async () => {
      const response = await getData(params);

      if (response.errors) {
        setData(null);
        message.error("Failed to get data");
      } else {
        setData(response.data);
      }

      setLoading(false);
    })();
  }, [reset]);

  return { data, loading };
}

export default useGetData;
