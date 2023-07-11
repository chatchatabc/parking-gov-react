import { Button, Form, Input } from "antd";
import { CommonHandleSubmit } from "../../../domain/models/CommonModel";
import { reportCreate } from "../../../domain/services/reportService";
import React from "react";
import MapBoxComp from "../MapBoxComp";
import { Marker } from "react-map-gl";
import { Point } from "mapbox-gl";

function ReportStatusForm({ handleSubmit, loading }: CommonHandleSubmit) {
  const [lngLat, setLngLat] = React.useState({ longitude: 0, latitude: 0 });

  return (
    <Form
      className="-mt-4"
      onFinish={(e) => {
        handleSubmit(
          { ...e, ...lngLat },
          reportCreate,
          "Successfully created report status",
          "Failed to create report status"
        );
      }}
      layout="vertical"
    >
      <div className="flex flex-wrap">
        <Form.Item
          className="w-1/2 p-1"
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Need some input!",
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          className="w-1/2 p-1"
          name="plateNumber"
          label="Plate Number"
          rules={[
            {
              required: true,
              message: "Need some input!",
            },
            {
              pattern: new RegExp(
                /^[A-Z]{2}-\d{5}$|^[A-Z]{3}-\d{4}$|^\d{4}-\d{7}$|^[A-Z]{2}-\d{5}$/
              ),
              message: "Invalid plate number",
            },
          ]}
        >
          <Input placeholder="Plate Number" />
        </Form.Item>

        <Form.Item
          className="w-full p-1"
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Need some input!",
            },
          ]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <section className="w-full">
          <header className="flex items-end gap-1">
            <h3>
              <span className="text-red-500">*</span> Longitude & Latitude{" "}
              <span>
                ({lngLat.longitude}, {lngLat.latitude})
              </span>
            </h3>
          </header>
          <section>
            <MapBoxComp
              attributionControl={false}
              style={{ width: "100%", height: "300px" }}
              onClick={(e) => {
                const { lngLat } = e;
                setLngLat({
                  longitude: Number(lngLat.lng.toFixed(6)),
                  latitude: Number(lngLat.lat.toFixed(6)),
                });
              }}
            >
              <Marker {...lngLat} offset={new Point(215, -310)} />
            </MapBoxComp>
          </section>
        </section>

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
