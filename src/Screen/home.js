import React from "react";
import "../Style/home.css";
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
          “The hour of departure has arrived, <br/>
          and we go our separate ways, <br/>
          I to die, and you to live. <br/>
          Which of these two is better only God knows.” <br/> <br/>― Socrates
        </h3>
      </div>
     
      <div style={{ height: "30px" }} />
    </div>
  );
}
