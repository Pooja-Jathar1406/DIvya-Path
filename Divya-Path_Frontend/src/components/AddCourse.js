import { Component, useState } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './formcss.css';
export function AddCourse() {
  const initialValues = {coursename: ""}; //field to be filled
  const [coursedetails,setcoursedetails]= useState(initialValues);
  const handleChange = (e) => {
    setcoursedetails({ ...coursedetails, [e.target.name]:e.target.value });
  };
  const onSubmit= async(e) => {
    e.preventDefault();
    const response = await.save(coursedetails) ///enter a name of method name from backend
    console.log(response.data); //to check if data is entered or not
  };

  return (
    <>
     <Navigation></Navigation>
    <div className="div1">
      <h4>Add Course</h4>
      <br></br>
      <Form className="formcss" onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Label>Enter Course Name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter course name" 
                        values={coursedetails.coursename} 
                        onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter course Details:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter course details"
                        values={coursedetails.coursename} 
                        onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter course Details:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter course details" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter course Details:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter course details" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter course Details:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter course details" />
        </Form.Group>
        <Button variant="primary" className="button" type="submit">
           Click here to submit form
        </Button>
      </Form>
    </div>
    </>
  );
}