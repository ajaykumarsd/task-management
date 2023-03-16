import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Task Management Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
