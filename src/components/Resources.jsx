import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BiRightArrowAlt } from "react-icons/bi";

function Resources(props) {
    return (
        <Container fluid={"sm"}>
            <section id="resources" className="resources">
                <Row>
                    <Col lg={6}>
                        <div className="resources__content content-left">
                            <h5 className="resources__title">{props.title}</h5>
                            <h1 className="resources__heading">
                                {props.heading}
                            </h1>
                            <hr className="line" />
                            <p>{props.text}</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="h-100 d-flex justify-content-between p-3">
                            {/* <Card.Img variant="top" src="images/1661758344-22_2.webp"/> */}
                            <Card.Body>
                                <Card.Title>Zeo Blog</Card.Title>
                                <Card.Text>
                                    Read the latest articles created by our experienced digital marketing consultants.
                                </Card.Text>
                                <a href="#" className="resources__link">Read More <BiRightArrowAlt /></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="h-100 d-flex justify-content-between p-3">
                            {/* <Card.Img variant="top" src="images/1661758344-22_2.webp"/> */}
                            <Card.Body>
                                <Card.Title>Digital Marketing Tools</Card.Title>
                                <Card.Text>
                                    Read the latest articles created by our experienced digital marketing consultants.
                                </Card.Text>
                                <a href="#" className="resources__link">Read More <BiRightArrowAlt /></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="h-100 d-flex justify-content-between p-3">
                            {/* <Card.Img variant="top" src="images/1661758344-22_2.webp" /> */}
                            <Card.Body>
                                <Card.Title>SEO Glossary</Card.Title>
                                <Card.Text>
                                    We have found and listed the most used 300+ digital marketing tools all around the world.
                                </Card.Text>
                                <a href="#" className="resources__link">Read More <BiRightArrowAlt /></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body className="d-lg-flex">
                                <div className='p-3'>
                                    <Card.Title>Digital Marketing Conferences</Card.Title>
                                    <Card.Text>
                                        We have compiled all the digital marketing events and conferences in the world on this page for you.
                                    </Card.Text>
                                </div>
                                <Card.Img variant="bottom" src="images/1632315681-resource-agenda-full.svg" className="p-3" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <div className='resources__digital py-4 d-flex justify-content-end'>
                            Are you ready for <a href="#" className="resources__link"> Digitalzone </a> ? 
                        </div>
                    </Col>
                </Row>

            </section>
        </Container>
    )
}

export default Resources;