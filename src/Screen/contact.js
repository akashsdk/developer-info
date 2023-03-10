import React from "react";
import "../Style/contact.css";
import { Button, Form, Input, InputNumber } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} or nickname is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

export default function contact() {
  return (
    <div className="contactBody">
      <div className="contactBodyDiv">
        <div className="contactBoxTopDiv">
          <p className="contactPTage">easy to contact</p>
          <div className="contactLine" />
        </div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          className="contactFrom"
          style={{
            maxWidth: "80%",
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="contactFromDiv">
            <Form.Item
              name={["user", "age"]}
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Phone No"
              style={{ marginLeft: "30px", width: "85%" }}
            >
              <InputNumber style={{ width: "95%" }} />
            </Form.Item>
          </div>

          <Form.Item name={["user", "website"]} label="Other's">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Message">
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          ></Form.Item>
          <Button className="contactButton" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
