import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function Agile({ data }) {
    console.log(data)
    if (!data) return <div></div>;

    return (
        <Container fluid={"sm"}>
            <section id="agile" className="agile">
                <Row>
                    {data && data.map((agile, index) => (
                        // <Col lg={12} md={12} sm={12} key={index}>
                        //     <div className="agile__content content-center">
                        //         <h1 className="agile__title">{agile.title}</h1>
                        //         <hr className="line" />
                        //     </div>
                        // </Col>

                        <>
                            <Col lg={6}>
                                <div className="agile__content content-left">
                                    <h5 className="agile__title">{agile.title}</h5>
                                    <h1 className="agile__heading">
                                        {agile.heading}
                                    </h1>
                                    <hr className="line" />
                                    <p>{agile.text}</p>
                                </div>

                                <div>
                                    <ul>
                                        {agile.content.map((content, index) => (
                                            <li key={index}>
                                                <h4 className="mb-3">{content.title}</h4>
                                                <p>{content.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <Images src={agile.image.asset.url} fluid className="p-3" />
                            </Col>
                        </>
                    ))}
                </Row>
            </section>
        </Container>
    )
}

export default Agile;