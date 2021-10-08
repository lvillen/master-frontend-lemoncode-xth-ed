import React from "react";
import ReactDOM from "react-dom";
import { AverageComponent } from "./averageComponent";
import { TotalScoreComponent } from './totalScoreComponent';
import dnd1 from "./content/dnd1.png";
import classes from "./mystyles.scss"

ReactDOM.render(
  <div>
    <h1 className={classes.helloWorld}>Hello World! From React DOM</h1>
    <img className={classes.imgPosition} src={dnd1} />
    <AverageComponent />
    <TotalScoreComponent />
  </div>,
  document.getElementById("root")
);