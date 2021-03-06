import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <Nav.Link as={NavLink} to={props.path} className="nav" style={{}}>
        {props.linkText}
      </Nav.Link>
    </Nav.Item>
  );
}
