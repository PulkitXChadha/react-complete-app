import React from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  let assignedClasses = [];

  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really Working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Profiles
      </button>
    </div>
  );
};

export default Cockpit;
