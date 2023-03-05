import "../css/Home.css";
import { Navigation } from "./Navigation";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/AddCourse.css";
export function AddCourse() {
  return (
    <>
      <Navigation></Navigation>
      <div className="div1">
        <h4>Add Course</h4>
        <br></br>
        <Form className="formcss">
          <Form.Group>
            <Form.Label>Enter Course Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter course name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter course Details:</Form.Label>
            <Form.Control type="text" placeholder="Enter course details" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter course Details:</Form.Label>
            <Form.Control type="text" placeholder="Enter course details" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter course Details:</Form.Label>
            <Form.Control type="text" placeholder="Enter course details" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter course Details:</Form.Label>
            <Form.Control type="text" placeholder="Enter course details" />
          </Form.Group>
          <Button variant="primary" className="button" type="submit">
            Click here to submit form
          </Button>
        </Form>
      </div>
    </>
  );
}
