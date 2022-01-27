import React from "react";
import "./EmpList.css";

export const EmpList = (props) => {
  return (
    <div className="emplist">
      <h3>{props.dep}</h3>
      <ul>
        {props.empdata.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
