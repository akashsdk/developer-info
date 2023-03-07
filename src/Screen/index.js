import React from "react";
import "../Style/index.css";
import { Col, Row, Layout, Button, Radio } from "antd";
import img from "../Image/on-desk.png";
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GoogleOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function index() {
  return (
    <div>
      <h1 className="indexH1">Welcome to Developer Info. & contact Page</h1>
      <div className="indexH3Div">
        <h3 className="indexH3">hi! There, i'm Tasnim Shahriar Akash...</h3>
      </div>
      {/* <div>
        <video autoplay muted loop>
          <source
            src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className="indexH2">sail</h2>
      </div> */}

      <div>
        <Layout className="HomeLayout">
          <div style={{ flex: 1, flexDirection: "row" }}>
            <h1 style={{ color: "aqua" }}>me.!</h1>
            <p style={{ color: "#fff" }}>
              A passionate Full Stack Software Developer,
            </p>
            <p style={{ color: "#fff" }}>
              {" "}
              having an experience of building Web and Mobile applications{" "}
            </p>
            <p style={{ color: "#fff" }}>
              with JavaScript / Reactjs / React Native / Nodejs and{" "}
            </p>
            <p style={{ color: "#fff" }}>other cool libraries and frameworks</p>
            <div className="HomeLayoutLine"></div>
            <div>
              <Button
                type="link"
                className="HomeLayoutButton"
                href="https://github.com/akashsdk"
              >
                <GithubOutlined className="HomeLayoutIcon" />
              </Button>

              <Button
                type="link"
                className="HomeLayoutButton"
                href="https://www.linkedin.com/in/tasnimsakash/"
              >
                <LinkedinOutlined className="HomeLayoutIcon" />
              </Button>

              <Button type="link" className="HomeLayoutButton" href="">
                <GoogleOutlined className="HomeLayoutIcon" />
              </Button>

              <Button
                type="link"
                className="HomeLayoutButton"
                href="https://www.facebook.com/tasnimSakash/"
              >
                <FacebookOutlined className="HomeLayoutIcon" />
              </Button>

              <Button
                type="link"
                className="HomeLayoutButton"
                href="https://twitter.com/tasnimSakash"
              >
                <TwitterOutlined className="HomeLayoutIcon" />
              </Button>

              <Button
                type="link"
                className="HomeLayoutButton"
                href="https://api.whatsapp.com/send?phone=8801580233165&text=hello%F0%9F%98%87"
              >
                <WhatsAppOutlined className="HomeLayoutIcon" />
              </Button>
            </div>
            {/* <div>
            <Link className="HomeLayoutButton2" to="/ContactMe">
              Contact Me
            </Link>
            <a className="HomeLayoutButton2" href="#RESUME">
              SEE MY RESUME
            </a>
          </div> */}
          </div>
          <div style={{ flex: 1 }}>
            <Button type="link" href="https://tasnim-shahriar-akash.web.app/">
              <img src={img} className="HomeLayoutImg"></img>
            </Button>
          </div>
        </Layout>
      </div>
    </div>
  );
}
