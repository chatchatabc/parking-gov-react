import { Button, Drawer, message } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useForm } from "antd/es/form/Form";
import { CommonSendData } from "../../../domain/models/CommonModel";
import { drawerUpdate } from "../../redux/features/drawerSlice";
import { globalReset } from "../../redux/features/globalSlice";
import ReportForm from "./ReportForm";
import ReportStatusForm from "./ReportStatusForm";

function DynamicDrawerForm() {
  const [loading, setLoading] = React.useState(false);
  const [form] = useForm();

  const drawer = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();

  async function handleSubmit(
    data: Record<string, any>,
    sendData: CommonSendData,
    successMessage: string,
    errorMessage: string
  ) {
    setLoading(true);

    const response = await sendData(data);

    if (response.errors) {
      message.error(errorMessage);
    } else {
      message.success(successMessage);
      dispatch(
        drawerUpdate({
          show: false,
        })
      );
      dispatch(globalReset());
    }

    setLoading(false);

    return response;
  }

  React.useEffect(() => {
    form.setFieldsValue(drawer.data);
  }, [drawer.data]);

  return (
    <Drawer
      onClose={() => {
        dispatch(
          drawerUpdate({
            show: false,
          })
        );
      }}
      title={drawer.title}
      extra={
        drawer.buttonText && (
          <Button
            className="bg-p500 text-white hover:bg-white"
            loading={loading}
            disabled={loading}
            onClick={() => {
              form.submit();
            }}
          >
            {drawer.buttonText}
          </Button>
        )
      }
      width={500}
      placement="right"
      open={drawer.show}
    >
      {drawer.content === "report" && (
        <ReportForm
          form={form}
          loading={loading}
          handleSubmit={handleSubmit}
        ></ReportForm>
      )}
      {drawer.content === "reportStatus" && (
        <ReportStatusForm
          form={form}
          loading={loading}
          handleSubmit={handleSubmit}
        ></ReportStatusForm>
      )}
    </Drawer>
  );
}

export default DynamicDrawerForm;
