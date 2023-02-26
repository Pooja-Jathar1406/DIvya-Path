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
                tempor
              </div>
            </div>
          </Container>
          <Container>body content here</Container>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card navCards  " style={{ width: "auto" }}>
                  <div className="card-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1">
                        English
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2">
                        Hindi
                      </label>
                    </div>
                    <h5 className="card-title pt-3 fw-bold">Select language</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <a href="./Header.html" className="custom-card">
                  <div
                    className="card navCards text-center pt-3"
                    style={{ width: "13rem", display: "inline-block" }}>
                    <img
                      src="../Images/Places.png"
                      className="card-img-top navCardsImg"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{ textDecoration: "initial", color: "black" }}>
                        Accesible places
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="./Header.html" className="custom-card">
                  <div
                    className="card navCards text-center pt-3"
                    style={{ width: "12rem", display: "inline-block" }}>
                    <img
                      src="../Images/Jobs.png"
                      className="card-img-top navCardsImg"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{ textDecoration: "initial", color: "black" }}>
                        Jobs
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="./Header.html" className="custom-card">
                  <div
                    className="card navCards text-center pt-3"
                    style={{ width: "12rem", display: "inline-block" }}>
                    <img
                      src="../Images/Courses.png"
                      className="card-img-top navCardsImg"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{ textDecoration: "initial", color: "black" }}>
                        Courses
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="./Header.html" className="custom-card">
                  <div
                    className="card navCards text-center pt-3"
                    style={{ width: "12rem", display: "inline-block" }}>
                    <img
                      src="../Images/MentalHealth1.jpg"
                      className="card-img-top navCardsImg"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{ textDecoration: "initial", color: "black" }}>
                        Mental Health stable theva
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="./Header.html" className="custom-card">
                  <div
                    className="card navCards text-center pt-3"
                    style={{ width: "12rem", display: "inline-block" }}>
                    <img
                      src="../Images/GovtSchemes.png"
                      className="card-img-top navCardsImg"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5
                        className="card-title pt-2 fw-bold"
                        style={{ textDecoration: "initial", color: "black" }}>
                        Govt Schemes
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Info cards */}
            <div className="row pt-5 pb-2 ">
              <div className="col">
                <div
                  className="card infoCardLeft shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body  ">
                    <h5 className="card-title p-1 fw-bold">
                      Language compatibility
                    </h5>
                    <p className="card-text">Info abt places accessible.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card infoCardRight shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body ">
                    <h5 className="card-title p-1 fw-bold">Accesible places</h5>
                    <p className="card-text">Info abt places accessible.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-2 pb-2 ">
              <div className="col">
                <div
                  className="card infoCardLeft shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body  ">
                    <h5 className="card-title p-1 fw-bold">Jobs</h5>
                    <p className="card-text">Info abt places accessible.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card infoCardRight shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body ">
                    <h5 className="card-title p-1 fw-bold">Courses</h5>
                    <p className="card-text">Info abt places accessible.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  pt-2 pb-5 ">
              <div className="col">
                <div
                  className="card infoCardLeft shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body  ">
                    <h5 className="card-title p-1 fw-bold">Mental health</h5>
                    <p className="card-text">Info abt places accessible.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card infoCardRight shadow "
                  style={{ width: "auto" }}>
                  <div className="card-body ">
                    <h5 className="card-title p-1 fw-bold">
                      Government schemes
                    </h5>
                    <p className="card-text">Info abt places accessible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
