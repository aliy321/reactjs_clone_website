import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function News(props) {
    return (
        <Container fluid={true} className="fw-bluebg">
            <Container>
                <section id="news" className="news">
                    <Row>
                        <Col lg={6}>
                            <div className="news__content content-left">
                                <Images src="images/1661758344-22_2.webp" fluid={true} alt="hero" className="pb-3" />
                                <h5 className="news__title">{props.title}</h5>
                                <h1 className="news__heading">
                                    {props.heading}
                                </h1>
                                <hr className="line secondary" />
                                <p>{props.text}</p>
                                <a href="#" className="btn btn-secondary">{props.buttonText}</a>
                            </div>
                        </Col>
                    </Row>
                </section>

                <Images src={props.image} fluid={true} alt="hero" className="news__image" />
            </Container>
        </Container>
    )
}

export default News;