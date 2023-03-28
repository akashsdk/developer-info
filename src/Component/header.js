import React from "react";
import "./header.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Space, Tooltip } from "antd";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="headerBody">
      <div className="headerBox">
        <h4 className="headerText">
          <span>I</span>M<span>AKASH</span>
        </h4>
        <Space wrap>
          <Tooltip title="Only for Admin!!" className="headerIconDiv">
            <Link to="/Login" className="headerIconLink">
              <ExclamationCircleOutlined className="headerIcon" />
            </Link>
          </Tooltip>
        </Space>
      </div>
    </div>
  );
}
