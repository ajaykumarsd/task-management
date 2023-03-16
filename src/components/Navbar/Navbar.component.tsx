import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CreateTask from "../../pages/CreateTask/CreateTask.component.tsx";
function TaskModal(props: any) {
  return <CreateTask {...props} />;
}
const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Task Management Dashboard</Navbar.Brand>
          <Nav className="justify-content-end">
            <Button variant="primary" onClick={() => setShow(true)}>
              Create Task
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <TaskModal show={show} onHide={() => setShow(false)} save = {(data)=>{console.log(data)}}/>
    </>
  );
};
export default NavbarComponent;
