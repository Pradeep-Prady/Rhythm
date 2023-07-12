import React from "react";
import "./navbutton.css";
import { Link, useLocation } from "react-router-dom";

export default function NavButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  console.log(location.pathname, props.to);

  const btnClass = isActive ? "nav-button active" : "nav-button";

  return (
    <Link to={props.to} style={{ textDecoration: "none" }}>
      <div className={btnClass}>
        <i className="icon"> {props.icon}</i>
        <p className="nav-title">{props.title}</p>
      </div>
    </Link>
  );
}
