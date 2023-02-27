import { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class Skills extends Component {
    render() {
        return (
            <>
                <Navigation></Navigation>
                <div className=" bg-light">
                    <Container fluid>
                        <div className="container-fluid  ">
                            <div className="row text-center ">
                                <h1 className="p-5 HomePgTitle"> SKILLS</h1>
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
                                        className="card navCards text-center pt-3 activeNavCard" 
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
                                                Mental Health
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
                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px160" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}
