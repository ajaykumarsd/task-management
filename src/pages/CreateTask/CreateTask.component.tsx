import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

let tasksList = [];
const CreateTask = (props: any) => {
  const [taskDetails, setTaskDetails] = useState({
    taskname: "",
    date: "",
    start_time: "",
    end_time: "",
    isStarred: false,
  });
  const handleChange = (event: { target: { value: string; name: string } }) => {
    setTaskDetails({ ...taskDetails, [event.target.name]: event.target.value });
  };
  const saveTask = () => {
    props.onHide();
    tasksList.push(taskDetails);
    console.log(tasksList);
    localStorage.setItem("task", JSON.stringify(tasksList));
  };
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              name="taskname"
              value={taskDetails.taskname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Schedule Date</Form.Label>
            <Form.Control
              type="date"
              value={taskDetails.date}
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="time"
              value={taskDetails.start_time}
              name="start_time"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="time"
              value={taskDetails.end_time}
              name="end_time"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button variant="primary" type="submit" onClick={saveTask}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateTask;
