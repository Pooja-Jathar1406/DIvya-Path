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
          <Form>
          <Form.Group className="mb-3" controlId="formJobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control placeholder="Write job title" />
            </Form.Group>

            <br/>

            <InputGroup>
              <InputGroup.Text>Roles & Responsibilities</InputGroup.Text>
              <Form.Control as="textarea" aria-label="Write job description" />
            </InputGroup>

            <br/>

            <Row>
              <Col>
              <Form.Label>Required Experience</Form.Label>
                <Form.Control placeholder="In Years" />
              </Col>
              <Col>
              <Form.Label>Industry Type</Form.Label>
                <Form.Control placeholder="" />
              </Col>
            </Row>

            <br/>

            <Form.Select aria-label="Default select example">
              <option>Employment Type</option>
              <option value="1">Permanent/Full time</option>
              <option value="2">Permanent/Part time</option>
              <option value="3">Contract Basis/Full time</option>
              <option value="3">Contract Basis/Part time</option>
           </Form.Select>

           <br/>

           <Row>
              <Col>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Location
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Belapur</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Andheri</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kharghar</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kurla</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Visual Impairment</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Locomotor / Orthopedic Disability</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Speech</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Hearing Disability</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">In-Active</Dropdown.Item>
                      
                    </Dropdown.Menu>
                  </Dropdown>
              </Col>
            </Row>

           

            <br/>

            

            <br/>

            <Button variant="primary" type="submit">
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