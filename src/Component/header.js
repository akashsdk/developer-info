import React from "react";
import "./header.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";

export default function header() {
  return (
    <div className="headerBody">
      <div className="headerBox">
        <h4 className="headerText">
          <span>I</span>M<span>AKASH</span>
        </h4>
        <Space wrap>
          <Tooltip title="for admin!!" className="headerIconDiv">
            <Button
              type="dashed"
              shape="circle"
              icon={<ExclamationCircleOutlined className="headerIcon" />}
            />
          </Tooltip>
        </Space>
      </div>
    </div>
  );
}
