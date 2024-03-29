import React, {useState} from "react";
import "../Style/contact.css";
import { Button, Form, Input, InputNumber, message } from "antd";

import { firestore } from "./../firebase";
import { collection, addDoc } from "firebase/firestore";

const key = 'updatable';


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


export default function Contact() {

  const [Name,setName]= useState();
  const [Email,setEmail]=useState();
  const [Age,setAge]=useState();
  const [Phone,setPhone]=useState();
  const [Website,setWebsite]=useState();
  const [Message,setMessage]=useState();

  const openMessage = async () => {
    if(!Name){
        setTimeout(() => {
            message.error({ content: 'fill up! please', key, duration: 2 });
        }, 1000);

        return
    }
    message.loading({ content: 'Loading...', key });
    try {
        await addDoc(collection(firestore, "contact"), {
            email: Email,
            name:Name,
            age:Age,
            phone:Phone,
            website:Website,
            message: Message,
            
        });
        console.log("Success");
        setTimeout(() => {
            message.success({ content: 'Loaded!', key, duration: 2 });
            console.log("Success And Done");
        }, 1000);
        window.location.reload()
        //window.location.href="wwww.google.com"
    } catch (err) {
        setTimeout(() => {
            message.success({ content: err.message, key, duration: 2 });
            console.log("Success And Error");
        }, 1000);
    }

};

  
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
            <Input onChange={e=>{
                    setName(e.target.value)
                }}/>
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
            <Input onChange={e=>{
                    setEmail(e.target.value)
                }}/>
          </Form.Item>

          <div className="contactFromDiv">
            <Form.Item
              //name={["user", "age"]}
              label="Age"
              // rules={[
              //   {
              //     type: "number",
              //      min: 0,
              //      max: 99,
              //   },
              // ]}
            >
              <Input onChange={e=>{
                    setAge(e.target.value)
                }}/>
            </Form.Item>
            <Form.Item
              label="Phone No"
              style={{ marginLeft: "30px", width: "85%" }}
            >
              <Input style={{ width: "95%" }} onChange={e=>{
                    setPhone(e.target.value)
                }}/>
            </Form.Item>
          </div>

          <Form.Item name={["user", "website"]} label="Other's Link">
            <Input onChange={e=>{
                    setWebsite(e.target.value)
                }}/>
          </Form.Item>
          <Form.Item name={["user", "message"]} label="Message">
            <Input.TextArea onChange={e=>{
                    setMessage(e.target.value)
                }}/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          ></Form.Item>
            <Button className="contactButton" type="primary" htmlType="submit"
             onClick={openMessage}
            >

              Submit
            </Button>
            
        </Form>
      </div>
    </div>
  );
}
