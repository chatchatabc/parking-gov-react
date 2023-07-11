import { Button, Form, Input, message } from "antd";
import React from "react";
import { authLogin } from "../../domain/services/authService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: HTMLFormElement) {
    setLoading(true);

    const response = await authLogin(e);

    if (response.errors) {
      message.error("Login failed");
    } else {
      message.success("Login success");
      navigate("/");
    }

    setLoading(false);
  }

  return (
    <>
      {/* Background */}
      {/* <div className="flex fixed z-[-1] w-full h-full">
        <div className="bg-orange-500 w-5/12"></div>
        <div className="bg-blue-500 w-7/12"></div>
      </div> */}

      {/* Content */}
      <div className="flex flex-1 items-center justify-center bg-white bg-opacity-90">
        <div className="max-w-2xl w-full shadow-2xl rounded-2xl px-4 py-8 border-2 border-gray-400">
          <header className="sr-only">
            <h1 className="text-xl font-bold">Login page</h1>
          </header>

          {/* Logo */}
          <div className="w-48 h-48 rounded-full mx-auto">
            <img src={"/images/lto.png"} alt="LTO logo" />
          </div>

          {/* Form */}
          <Form layout="vertical" onFinish={handleSubmit} className="mt-8">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              className="w-72 mx-auto"
              name="username"
              label="Username"
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="w-72 mx-auto"
              name="password"
              label="Password"
            >
              <Input.Password className="w-full" />
            </Form.Item>

            <Button
              htmlType="submit"
              className="mx-auto flex items-center font-medium px-8 rounded-md mt-4 bg-p500 text-white hover:bg-white"
              disabled={loading}
              loading={loading}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
