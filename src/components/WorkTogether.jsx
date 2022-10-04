import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WorkTogether(props) {
    return (
        <Container fluid={"sm"}>
            <section id="work-together" className="work-together">
                <Row>
                    <Col lg={6} md={12}>
                        <h2 className="text">{props.text}</h2>
                    </Col>
                    <Col lg={6} md={12} className="d-flex justify-content-lg-end justify-content-md-start align-items-center ">
                        <a mailto={`mailto:${props.email}`} className="link">{props.email}</a>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default WorkTogether