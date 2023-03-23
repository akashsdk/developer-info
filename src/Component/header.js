import React from "react";
import "./header.css";
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default function header() {
  return (
    <div className="headerBody">
      <div className="headerBox" >
        <h4 className="headerText" >
          <span>I</span>M<span >AKASH</span>
        </h4>
        <div className="headerIconDiv">
        <ExclamationCircleOutlined className="headerIcon"/>
        </div>
      </div>
      
    </div>
  );
}
