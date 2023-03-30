import React, {useState, useEffect} from "react";
import "./adimnHome.css";
import { Link } from "react-router-dom";
import { LogoutOutlined, CloseOutlined } from "@ant-design/icons";
import { Pagination } from "antd";


export default function AdimnHome() {

 

  

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
        {/* Name */}
        <div style={{display:'flex'}}>
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP">Name: </p>
          <p className="adminHomeColumnSceP">Akash</p>
        </div>
        <div style={{flex:'5'}}/>
        <CloseOutlined className="adminHomeCloseIcon"/>
        </div>
        {/* Email */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Email: </p>
          <p className="adminHomeColumnSceP1">akash.tasnim@gmail.com</p>
        </div>
        {/* Age */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Age: </p>
          <p className="adminHomeColumnSceP1">20</p>
        </div>
        {/* Phone */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Phone: </p>
          <p className="adminHomeColumnSceP1">01580233165</p>
        </div>
        {/* Other's Link */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Other's Link: </p>
          <p className="adminHomeColumnSceP1">https://akash.www.com</p>
        </div>
        {/* Message */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Message: </p>
          <p className="adminHomeColumnSceP1">I there, i am akash.</p>
        </div>

        <div style={{ height: "30px" }} />
      </div>
      <div style={{ height: "20px" }} />
      <Pagination defaultCurrent={1} total={50} />
      <div>gg</div>
    </div>
  );
}
