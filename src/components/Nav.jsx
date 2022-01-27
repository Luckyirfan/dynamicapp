import React from "react";
import "./Nav.css";

export const Nav = (props) => {
  return (
    <div className="nav">
      {props.navData.map((item) => (
        <a href={item.link} target="_blank">
          {item.title}
        </a>
      ))}
    </div>
  );
};
