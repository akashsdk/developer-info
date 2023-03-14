import React from 'react'
import "../Style/login.css";
import { Button, Checkbox, Form, Input } from 'antd';


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function login() {
  return (
    <div className='loginBody'>

    </div>
  )
}
