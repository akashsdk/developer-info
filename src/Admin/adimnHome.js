import React from "react";
import "./adimnHome.css";
import { Link } from "react-router-dom";
import { LogoutOutlined } from '@ant-design/icons';

export default function adimnHome() {
  return (
    <div className="adminHomeBody">
      <div className="adminHomeHDiv">
      <h1 className="adminHomeHtext">
        <span>Ad</span>min<span>Dashboard</span>
      </h1>
      <div>
      <Link to="/" className="adminHomeLink">
        <LogoutOutlined className="adminHomeIcon"/>
        </Link>
      </div>
      </div>
      <div className="adminHomeLine" />
      <div>gg</div>
      <div>gg</div>
    </div>
  );
}
