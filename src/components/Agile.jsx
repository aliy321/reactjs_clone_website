import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function Agile(props) {
    return (
        <Container fluid={"sm"}>
            <section id="agile" className="agile">
                <Row>
                    <Col lg={6}>
                        <div className="agile__content content-left">
                            <h5 className="agile__title">{props.title}</h5>
                            <h1 className="agile__heading">
                                {props.heading}
                            </h1>
                            <hr className="line" />
                            <p>{props.text}</p>
                        </div>

                        <div>
                            <ul>
                                <li className='mb-5'>
                                    <h4 className="mb-3">Invariable participant of marketing conferences</h4>
                                    <p>MozCon in Seattle, SearchLove in London, Inbound in Boston. Where new information is in the industry, we are there.</p>
                                </li>
                                <li className='mb-5'>
                                    <h4 className="mb-3">Giving back to the community</h4>
                                    <p>We have participated as speakers in 8 different international conferences in 5 different countries, especially at BrightonSEO, the world's largest SEO conference.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Images src={props.image} fluid className="p-3"/>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Agile;