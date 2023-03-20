import React from "react";
import "../Style/home.css";
import "../Style/index.css";
import  Header  from "../Component/header";
import Index from "./index";
import Contact from "./contact";

export default function home() {
  return (
    <div>
      <Header/>
      <Index />
      <div style={{ height: "60px" }} />
      <Contact />
      <div style={{ height: "60px" }} />
      <div className="homeDownText">
        <h3 className="homeDownH3">
          “The hour of departure has arrived,<br/>
          and we go our separate ways, <br/>
          I to die, and you to live. <br/>
          Which of these two is better only God knows.”  <br/>― Socrates
        </h3>
      </div>
      <div style={{ height: "50px" }} />
      <div className="homeH3Div">
        <h3 className="homeH3">Thank's, for visiting my website. And also best wishes to you...</h3>
      </div>
      <div className="homeH3Div1">
        <h3 className="homeH3">Thank's, for visiting my website. And also best wishes to you...</h3>
      </div>
      <div style={{ height: "30px" }} />
    </div>
  );
}
