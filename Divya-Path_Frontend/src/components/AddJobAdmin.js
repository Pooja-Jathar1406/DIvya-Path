import {React , useState} from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

export function AddJobAdmin() {

  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [industry, setIndustry] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");


  const handleSubmit = (event)=> {
    event.preventDefault();
    event.stopPropagation();
    const addedJob= { job, description, experience, industry, employmentType, date, location, category, status }
    console.log(job);
    console.log(description);
    console.log(experience);
    console.log(industry);
    console.log(employmentType);
    console.log(location);
    console.log(category);
    console.log(status);
    console.log("Job details submitted:", addedJob);
  }

  return (
    <>
    <Navigation></Navigation>
    <br/>

    <div className="container">

    <Card >
      <Card.Body>
        <Card.Title className="text-center mt-4 mb-4">Enter Job Details</Card.Title>
        <Card.Text>
         
        </Card.Text>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formJobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control 
              placeholder="Write job title" 
              value={job}
              onChange={(e) => setJob(e.target.value)}
              
              />
            </Form.Group>

            <br/>

            <InputGroup>
              <InputGroup.Text>Roles & Responsibilities</InputGroup.Text>
              <Form.Control as="textarea" 
              aria-label="Write job description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
            </InputGroup>

            <br/>

            <Row>
              <Col>
              <Form.Label>Required Experience</Form.Label>
                <Form.Control 
                placeholder="In Years" 
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                />
              </Col>
              <Col>
              <Form.Label>Industry Type</Form.Label>
                <Form.Control
                placeholder="" 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                />
              </Col>
            </Row>

            <br/>

            <Row>
              <Col>
                <Form.Select 
                aria-label="Default select example"
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                >
                  <option >Employment Type</option>
                  <option >Permanent/Full time</option>
                  <option >Permanent/Part time</option>
                  <option >Contract Basis/Full time</option>
                  <option >Contract Basis/Part time</option>
                </Form.Select>
              </Col>
              <Col>
                <div className="lastdate"
                value={date}
                onChange={(e) => setDate(e.target.value)}>
                <label>Enter Last Date</label>
                <input type="date" ></input>
                </div>
              </Col>
            </Row>
           <br/>

           <Row>
              <Col>
              <Form.Select 
              aria-label="Default select example"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              >
                <option >Select Location</option>
                <option >Kurla</option>
                <option >Andheri</option>
                <option >Powai</option>
                <option >Marine Lines</option>
                <option >Belapur</option>
              </Form.Select>
              </Col>
              <Col>
              <Form.Select 
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              >
                <option >Select Category</option>
                <option >Visual Impairment</option>
                <option >Locomotor / Orthopedic Disability</option>
                <option >Speech</option>
                <option >Hearing Disability</option>
              </Form.Select>
                
              </Col>
              <Col>
              <Form.Select 
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              >
                <option >Set Status</option>
                <option >Active</option>
                <option >In-Active</option>
              </Form.Select>
              </Col>
            </Row>

            <br/>

            <br/>

            <Button variant="primary" type="submit" >
              Add
            </Button>
          </Form>
      </Card.Body>
    </Card>

    </div>
    </>
  );
}

// export default AddJobAdmin;