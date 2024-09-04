import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Toolkit</Navbar.Brand>
          <Nav className="me-auto gap-3">
            <NavLink to={"/"}>Crud</NavLink>
            <NavLink to={"/counter"}>Counter</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
};

export default Header;
