import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function hero({ data }) {
    if (!data) return <div></div>;

    return (
        <Container fluid={"sm"}>
            <section id="hero" className="hero">
                {data && data.map((hero, index) => (
                    <Row key={index}>
                        <Col lg={12} md={12} sm={12}>
                            <div className="hero__content content-center">
                                <h5 className="hero__title">{hero.title}</h5>
                                <h1 className="hero__heading">{hero.heading}</h1>
                                <hr className="line" />
                                <p className="hero__text">{hero.text}</p>
                                <a href={hero.buttonLink} className="btn btn-primary">{hero.buttonText}</a>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            {
                                hero.imageSmall && hero.imageSmall.asset && hero.imageSmall.asset.url && (
                                    <div className="hero__image small">
                                        <Image src={hero.imageSmall.asset.url} fluid={true} alt="hero" />
                                    </div>
                                )
                            }

                            {
                                hero.imageBig && hero.imageBig.asset && hero.imageBig.asset.url && (
                                    <div className="hero__image big">
                                        <Image src={hero.imageBig.asset.url} fluid={true} alt="hero" />
                                    </div>
                                )
                            }
                        </Col>
                    </Row>
                ))}
            </section>
        </Container>
    );
}

export default hero;
