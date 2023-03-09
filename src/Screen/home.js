import React from "react";
import "../Style/home.css";
import Index from "./index";
import Contact from "./contact";

export default function home() {
  return (
    <div>
      <Index />
      <div style={{ height: "60px" }} />
      <Contact />
      <div style={{ height: "40px" }} />
      <div className="homeDownText">
        <h3>
          “The hour of departure has arrived, and we go our separate ways, I to
          die, and you to live. Which of these two is better only God knows.”
        </h3>
      </div>
      <div style={{ height: "30px" }} />
    </div>
  );
}
