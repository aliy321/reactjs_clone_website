import React, { useState } from 'react';

import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function Recognized(props) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };

    return (
        <Container fluid={true}>
            <Images src={props.image} fluid={true} alt="hero" className="planet" />
            <Container>
                <section id="recoginition" className="recoginition">
                    <Row>
                        <Col>
                            <div className="recoginized__content content-left">
                                <h5 className="recoginized__title">{props.title}</h5>
                                <h1 className="recoginized__heading">
                                    {props.heading}
                                </h1>
                                <hr className="line" />
                                <p>{props.text}</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={8} md={12}>
                            <Slider {...settings} className="">
                                <div className="slick-item">
                                    <div>
                                        <img
                                            className="d-block w-100"
                                            src="images/1609531737-mena-search-awards-2.svg"
                                            alt="First slide"
                                        />
                                        <h3>Best Content Marketing Campaign</h3>
                                        <h1>Best Content Marketing Campaign of The Year</h1>
                                        <p>Delivery Hero SE is one of the largest food delivery companies in the world. Their content marketing project, yemek.com decide to work with Zeo from the first day.  They become a market leader in SEO within 18 months. We have worked closely from content planning to technical SEO.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                                <div className="slick-item">
                                    <div>
                                        <img
                                            className="d-block w-100"
                                            src="images/1609531737-mena-search-awards-2.svg"
                                            alt="Second slide"
                                        />

                                        <h3>Best Local Campaign</h3>
                                        <h1>Managing Hundreds of Google Maps Assets for Local SEO</h1>
                                        <p>EnerjiSA is the largest energy company of MENA region decide to work with Zeo to run a local SEO campaign to increase their visibility. We have worked closely for the migration to new branding  and managing local assets of Google My Business to increase their organic visibility.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                                <div className="slick-item">
                                    <div>
                                        <img
                                            className="d-block w-100"
                                            src="images/1609531737-mena-search-awards-2.svg"
                                            alt="Third slide"
                                        />

                                        <h3>Young Search Professional of Year</h3>
                                        <h1>Recognized As The Best Young Talent of Industry</h1>
                                        <p>One of our partners, Mehmet Aktug was recognized as the best young talent in the region. He helped Zeo to have a clear marketing communication strategy that focuses on giving back to the community by sharing our know-how which gets the attention of the judges to recognize him as the best young talent.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </section>
            </Container>
        </Container>
    )
}

export default Recognized