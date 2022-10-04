import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";

function ContactUs(props) {
    return (
        <Container fluid={true} className="fw-bluebg">
            <Container>

                <section id="contact" className="contact">
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="contact__content content-left">
                                <h5 className="contact__title">{props.title}</h5>
                                <h1 className="contact__heading">
                                    {props.heading}
                                </h1>
                                <hr className="line" />
                                <p>{props.text}</p>
                            </div>
                        </Col>

                        <Col lg={6} md={12}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="d-flex flex-column gap-3">
                                        <p>
                                            Learn more about our services!
                                        </p>
                                        <a href="#" className='d-flex gap-3'>
                                            We are here for you
                                            <BsArrowRight />
                                        </a>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex flex-column gap-3">
                                        <p>
                                            Join our team!
                                        </p>
                                        <a href="#" className='d-flex gap-3'>
                                            We are here for you
                                            <BsArrowRight />
                                        </a>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex flex-column gap-3">
                                        <p>
                                            Just want to say hi!
                                        </p>
                                        <a href="#" className='d-flex gap-3'>
                                            Click Here
                                            <BsArrowRight />
                                        </a>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </section>

            </Container>
        </Container>
    )
}

export default ContactUs