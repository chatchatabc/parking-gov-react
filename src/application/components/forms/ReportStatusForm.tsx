import { Button, Form, Input, Select } from "antd";
import { CommonHandleSubmit } from "../../../domain/models/CommonModel";
import {
  reportCreateStatus,
  reportOptionsStatus,
} from "../../../domain/services/reportService";

function ReportStatusForm({ handleSubmit, loading, form }: CommonHandleSubmit) {
  return (
    <Form
      form={form}
      className="-mt-4"
      onFinish={(e) => {
        handleSubmit(
          e,
          reportCreateStatus,
          "Successfully created report status",
          "Failed to create report status"
        );
      }}
      layout="vertical"
    >
      <div className="flex flex-wrap">
        <Form.Item name="reportId" hidden></Form.Item>

        <Form.Item
          className="w-full p-1"
          name="status"
          label="Status"
          initialValue={0}
          rules={[
            {
              required: true,
              message: "Need some input!",
            },
          ]}
        >
          <Select placeholder="Status" options={reportOptionsStatus()} />
        </Form.Item>

        <Form.Item
          className="w-full p-1"
          name="remarks"
          label="Remarks"
          rules={[
            {
              required: true,
              message: "Need some input!",
            },
          ]}
        >
          <Input.TextArea placeholder="Remarks" />
        </Form.Item>

        <Button
          loading={loading}
          disabled={loading}
          htmlType="submit"
          className="mt-2 bg-p500 text-white block w-full hover:bg-white"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ReportStatusForm;
