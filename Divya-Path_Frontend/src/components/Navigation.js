import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";
import { LinkContainer } from "react-router-bootstrap";
import "../css/Navigation.css";

export class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" class=" shadow pb-5 ">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="./Images/Logo12.png"
              className="d-inline-block align-top logoimg"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
              <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Action" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/sign-up">SignUp</NavDropdown.Item>
                {/* <NavDropdown.Item href="/admin-login">
                  Admin Login
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin-sign-up">
                  Admin SignUp
                </NavDropdown.Item>
                <NavDropdown.Item href="/govtofficial-login">
                  Govt Official Login
                </NavDropdown.Item>
                <NavDropdown.Item href="/govtofficial-sign-up">
                  Govt Official SignUp
                </NavDropdown.Item> */}
                <NavDropdown.Item href="/sign-out">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
