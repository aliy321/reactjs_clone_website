import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function hero({ title, heading, text , buttonLink, buttonText, imageSmall, imageBig }) {
    return (
        <Container fluid={"sm"}>
            <section id="hero" className="hero">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="hero__content content-center">
                            <h5 className="hero__title">{title}</h5>
                            <h1 className="hero__heading">
                                {heading}
                            </h1>
                            <hr className="line" />
                            <p className="hero__text">{text}</p>
                            <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <div className="hero__image small">
                            <Image src={imageSmall} fluid={true} alt="hero" />
                        </div>
                        <div className="hero__image big">
                            <Image src={imageBig} fluid={true} alt="hero" />
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}

export default hero;
