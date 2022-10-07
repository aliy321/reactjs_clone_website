import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BiRightArrowAlt } from "react-icons/bi";

function Resources({ data, ...props }) {
    if (!data) return <div></div>;

    return (
        <Container fluid={"sm"}>
            <section id="resources" className="resources">
                <Row>
                    {data && data.map((resources, index) => (
                        <Col lg={6} key={index}>
                            <div className="resources__content content-left">
                                <h5 className="resources__title">{resources.title}</h5>
                                <h1 className="resources__heading">
                                    {resources.heading}
                                </h1>
                                <hr className="line" />
                                <p>{resources.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="">
                    {
                        data && data.map((resources) => (
                            resources.content && resources.content.map((content, index) => (
                                <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
                                    <Card className="h-100 d-flex justify-content-between p-3">
                                        {/* <Card.Img variant="top" src="images/1661758344-22_2.webp"/> */}
                                        <Card.Body>
                                            <Card.Title>{resources.content[index].title}</Card.Title>
                                            <Card.Text>
                                                {resources.content[index].shortDescription}
                                            </Card.Text>
                                            <a href={resources.content[index].slug.current} className="resources__link">Read More <BiRightArrowAlt /></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ))
                    }
                </Row>

                <Row>
                    <Col lg={12}>
                        {data && data.map((resources, index) => (
                            <Card key={index}>
                                <Card.Body className="d-lg-flex">
                                    <div className='p-3'>
                                        <Card.Title>{resources.digitalMarketing}</Card.Title>
                                        <Card.Text>
                                            {resources.digitalMarketingContent}
                                        </Card.Text>
                                    </div>
                                    <Card.Img variant="bottom" src={resources.digitalMarketingImage.asset.url} className="p-3" />
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        {data && data.map((resources, index) => (
                            <div className='resources__digital py-4 d-flex justify-content-end' key={index}>
                                <a href={resources.digitalMarketingLink} className="resources__link"> {resources.digitalMarketingLinkText} </a>
                            </div>
                        ))}
                    </Col>
                </Row>

            </section>
        </Container>
    )
}

export default Resources;