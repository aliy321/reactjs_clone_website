import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs";

function Subscribe(props) {
    return (
        <Container fluid={true} className="fw-bluebg">
            <Container>

                <section id="subscribe" className="subscribe">
                    <Row>
                        <Col>
                            <h5 className="hero__heading mb-5">
                                {props.heading}
                            </h5>

                            <Form className='d-flex flex-column justify-content-center align-items-center'>
                                <Row className='mb-4 w-100'>
                                    <Col lg={3} md={12}>
                                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                                            <Form.Control type="" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={12}>
                                        <Form.Group className="mb-3" controlId="formBasicLastName">
                                            <Form.Control type="" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={12}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={12}>
                                        <Form.Group className="mb-3" controlId="formBasicCompany">
                                            <Form.Control type="" placeholder="Comapny" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='social-group'>
                            <div>
                                <BsTwitter />
                            </div>
                            <div>
                                <BsInstagram />
                            </div>

                            <div>
                                <BsLinkedin />
                            </div>

                            <div>
                                <BsFacebook />
                            </div>

                            <div>
                                <BsYoutube />
                            </div>

                        </Col>
                    </Row>
                </section>

            </Container>
        </Container>
    )
}

export default Subscribe;