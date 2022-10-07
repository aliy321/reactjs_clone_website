import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function News({ data }) {
    if (!data) return <div></div>;

    return (
        <Container fluid={true} className="fw-bluebg">
            <Container>
                <section id="news" className="news">
                    <Row>
                        <Col lg={6}>
                            {data && data.map((news, index) => (
                                <div className="news__content content-left" key={index}>
                                    <Images src={news.calendarImage.asset.url} fluid={true} alt="hero" className="pb-3" />
                                    <h5 className="news__title">{news.title}</h5>
                                    <h1 className="news__heading">{news.heading}</h1>
                                    <hr className="line secondary" />
                                    <p>{news.text}</p>
                                    <a href="#" className="btn btn-secondary">{news.buttonText}</a>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </section>

                {data && data.map((news) => (
                    <Images src={news.image.asset.url} fluid={true} alt="hero" className="news__image" />
                ))}
            </Container>
        </Container>
    )
}

export default News;