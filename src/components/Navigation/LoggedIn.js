import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item>{user.email}</Nav.Item>
      <Button
        onClick={() => dispatch(logOut())}
        style={{ backgroundColor: "#FF5959", borderStyle: "none" }}
      >
        Logout
      </Button>
    </>
  );
}
