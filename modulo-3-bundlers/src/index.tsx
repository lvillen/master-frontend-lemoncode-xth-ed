import React from "react";
import ReactDOM from "react-dom";
import { AverageComponent } from "./averageComponent";
import { TotalScoreComponent } from './totalScoreComponent';
import dnd1 from "./content/dnd1.png";

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <img src={dnd1} />
    <AverageComponent />
    <TotalScoreComponent />
  </div>,
  document.getElementById("root")
);