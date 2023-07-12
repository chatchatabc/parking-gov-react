import React from "react";
import {
  AxiosResponseData,
  AxiosResponseError,
} from "../../../domain/models/AxiosModel";
import {
  CommonPagination,
  CommonVariables,
} from "../../../domain/models/CommonModel";
import { Table, TablePaginationConfig, TableProps, message } from "antd";
import { useAppSelector } from "../../redux/hooks";

type Props = TableProps<any> & {
  getData: (
    variables: CommonVariables
  ) => Promise<AxiosResponseData<CommonPagination> | AxiosResponseError>;
};

function DynamicTable({ getData, ...props }: Props) {
  const global = useAppSelector((state) => state.global);

  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);
  const [pagination, setPagination] = React.useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  React.useEffect(() => {
    setPagination({
      ...pagination,
      current: 1,
    });
  }, [getData]);

  React.useEffect(() => {
    setLoading(true);
  }, [global.reset, getData]);

  React.useEffect(() => {
    if (loading) {
      (async () => {
        const response = await getData({
          page: (pagination.current ?? 1) - 1,
          size: pagination.pageSize ?? 10,
        });

        if (response.errors) {
          message.error("Failed to fetch data");
        } else {
          setData(response.data.content);
          setPagination({
            ...pagination,
            total: response.data.totalElements,
          });
        }

        setLoading(false);
      })();
    }
  }, [loading]);

  return (
    <Table
      loading={loading}
      className="w-full"
      dataSource={data}
      pagination={{
        ...pagination,
        showSizeChanger: true,
        onChange: (page, size) => {
          setPagination({
            ...pagination,
            current: page,
            pageSize: size,
          });
          setLoading(true);
        },
      }}
      {...props}
    />
  );
}

export default DynamicTable;
