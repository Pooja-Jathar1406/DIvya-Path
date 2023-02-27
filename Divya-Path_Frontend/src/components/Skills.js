import { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

export class Skills extends Component {
    render() {
        return (
            <>
                <Navigation></Navigation>
                <div className=" bg-light">
                    <Container fluid>
                        <div className="container ">
                            <div className="row text-center ">
                                <h1 className="p-5 HomePgTitle border"> SKILLS</h1>
                            </div>

                            <div className="container pb-5 text-center">
                                Adults with disabilities make up nearly 20% of the Indian workforce, but they often face greater challenges in finding and maintaining employment. In most cases, this is because they’re not given the opportunity to develop soft and hard job skills that characterize appealing candidates.
                            </div>
                        </div>
                    </Container>
                    <div className="container">
                        <div className="row pb-5" >
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

                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="cardImage" src="./Images/skills2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Graphic Designing</Card.Title>
                                        <Card.Text>
                                            Learn what graphic design is and how to become a graphic designer. Learn what a graphic designer does on the job.You will learn differ UI/UX technology.
                                            Learn the principles of great graphic design. Design studies will offer you opportunities.
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer>
                                        <button className="btn btn-primary">Enroll</button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="cardImage" src="./Images/skills3.jpg" />
                                    <Card.Body>
                                        <Card.Title>TeleCaller</Card.Title>
                                        <Card.Text>
                                            This course is for the ones in customer care services who want to learn about some of the calling dos and don'ts they think are missing to polish their Tele calling skills. All important professional lines for the calling business are mentioned in this course.
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer>
                                        <button className="btn btn-primary">Enroll</button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="cardImage" src="./Images/skills4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Software developer</Card.Title>
                                        <Card.Text>
                                            This is a great place to start your programming career or hobby. This course is best for you,If you have never programmed before, or If you are fairly new to programming.Programming will offer a broad spectrum of opportunities.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Footer>
                                        <button className="btn btn-primary">Enroll</button>
                                        <button className="btn btn-primary text-right">Enroll</button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}
