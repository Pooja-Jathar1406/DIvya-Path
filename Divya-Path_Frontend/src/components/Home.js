import { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";

export class Home extends Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <div className=" bg-light">
          <Container fluid>
            <div className="container-fluid  ">
              <div className="row text-center ">
                <h1 className="p-5 HomePgTitle"> Divya-Path </h1>
              </div>

              <div className="container pb-5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunthjghvhgcfgcnhgggggggggtttttttt
              </div>
            </div>
          </Container>
          <Container>body content here</Container>
        </div>
      </>
    );
  }
}
