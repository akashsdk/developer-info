import React from "react";
import "./adimnHome.css";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { Pagination } from 'antd';

export default function adimnHome() {
  return (
    <div className="adminHomeBody">
      <div className="adminHomeHDiv">
        <h1 className="adminHomeHtext">
          <span>Ad</span>min<span>Dashboard</span>
        </h1>
        <Link to="/" className="adminHomeLink">
          <LogoutOutlined className="adminHomeIcon" />
        </Link>
      </div>
      <div className="adminHomeLine" />
      <div className="adminHomeDiv">

      </div>
      <div style={{}}/>
      <Pagination defaultCurrent={1} total={50} />;
      <div>gg</div>
    </div>
  );
}
