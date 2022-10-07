import React, { useState } from 'react';

import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function Recognized({ data, ...props }) {
    if (!data) return <div></div>; 

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
                        {data && data.map((recoginition, index) => (
                            <Col lg={12} md={12} sm={12} key={index}>
                                <div className="recoginition__content content-left">
                                    <h5 className="recoginition__title">{recoginition.title}</h5>
                                    <h1 className="recoginition__heading">{recoginition.heading}</h1>
                                    <hr className="line" />
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <Col lg={8} md={12}>
                            <Slider {...settings} className="">
                                {
                                    data && data.map((recognition, index) => (
                                        recognition.content && recognition.content.map((content, index) => (
                                            <div className="slick-item" key={index}>
                                                <div>
                                                    <Images src={recognition.content[index].image.asset.url} fluid={true} className="mb-4" />

                                                    <h3>{recognition.content[index].heading}</h3>
                                                    <h1>{recognition.content[index].title}</h1>
                                                    <p>{recognition.content[index].text}</p>
                                                </div>
                                                <a href="#" className="btn btn-primary">Find Out More!</a>
                                            </div>
                                        ))
                                    ))
                                }
                            </Slider>
                        </Col>
                    </Row>
                </section>
            </Container>
        </Container>
    )
}

export default Recognized