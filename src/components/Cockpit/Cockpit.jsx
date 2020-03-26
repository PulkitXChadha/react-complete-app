import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.jsx] - useEffect");
    //http: request
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      console.log("[Cockpit.jsx] - cleanUp work");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.jsx] - 2nduseEffect");
    return () => {
      console.log("[Cockpit.jsx] - clean Up work in 2nd useEffect");
    };
  });

  let assignedClasses = [];

  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div>
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(" ")}>This is really Working</p>
        <button className={btnClass} onClick={props.clicked}>
          Toggle Profiles
        </button>
      </div>
    </div>
  );
};

export default React.memo(Cockpit);
