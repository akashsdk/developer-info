import React from "react";
import "../Style/login.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

// const [messageApi, contextHolder] = message.useMessage();
// const success = () => {
//   messageApi.open({
//     type: 'success',
//     content: 'This is a success message',
//   });
// };

export default function login() {
  return (
    <div className="loginBody">
      <h1 className="loginText">Welcome to LogIn Page</h1>
      <div className="loginBox">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 500,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="User Id"
            name="UserId"
            rules={[
              {
                required: true,
                message: "Please input your User Id!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button //onClick={success}
              type="primary"
              htmlType="submit"
            >
              <Link to="/Admin-dashboard">LogIn</Link>
            </Button>
            <Button
              style={{
                marginLeft: "20px",
                backgroundColor: "rgb(13, 114, 80)",
              }}
              type="primary"
              htmlType="submit"
            >
              <Link to="/">Go Back</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
      <p className="loginTextP">Note: This page is only for admin.</p>
    </div>
  );
}
