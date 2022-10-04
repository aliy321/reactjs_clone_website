import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid={"sm"}>
            <section id="footer" className="footer">
                <footer>
                    <Row>
                        <Col lg={4} md={12} className="d-flex justify-content-center flex-column text-center gap-3 mb-5 mb-lg-0">
                            <h3>London</h3>
                            <div className="time_1">
                                <time>09:31</time>
                                <span>AM</span>
                            </div>
                            <div className="time_2">
                                <time>09:31</time> - <time>05:31</time>
                            </div>
                            <address className="address">
                                1-3 St. James's Square, London, SW1Y 4LB
                            </address>
                            <span className="location">London / UK</span>
                            <span className="number">+44 20 7493 5000</span>
                        </Col>

                        <Col lg={4} md={12} className="d-flex justify-content-center flex-column text-center gap-3 mb-5 mb-lg-0">
                            <h3>İstanbul</h3>
                            <div className="time_1">
                                <time>12:35</time>
                                <span>PM</span>
                            </div>
                            <div className="time_2">
                                <time>09:31</time> - <time>05:31</time>
                            </div>
                            <address className="address">
                                1-3 St. James's Square, London, SW1Y 4LB
                            </address>
                            <span className="location">London / UK</span>
                            <span className="number">+44 20 7493 5000</span>
                        </Col>

                        <Col lg={4} md={12} className="d-flex justify-content-center flex-column text-center gap-3 mb-5 mb-lg-0">
                            <h3>Ankara</h3>
                            <div className="time_1">
                                <time>09:31</time>
                                <span>AM</span>
                            </div>
                            <div className="time_2">
                                <time>09:31</time> - <time>05:31</time>
                            </div>
                            <address className="address">
                                1-3 St. James's Square, London, SW1Y 4LB
                            </address>
                            <span className="location">London / UK</span>
                            <span className="number">+44 20 7493 5000</span>
                        </Col>
                    </Row>
                </footer>
            </section>
        </Container>
    )
}

export default Footer