import React, { useState } from 'react';

import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function services({ data }) {
    if (!data) return <div></div>;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
                    initialSlide: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <Container fluid={"sm"}>
            <section id="services" className="services">
                <Row >
                    {data && data.map((services, index) => (
                        <Col lg={12} md={12} sm={12} key={index}>
                            <div className="services__content">
                                <h5 className="services__title">{services.title}</h5>
                                <h1 className="services__heading">{services.heading}</h1>
                                <hr className="line" />
                                <p className="services__text">{services.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col>
                        <Slider {...settings} className="">
                            {
                                data && data.map((services, index) => (
                                    services.content && services.content.map((content, index) => (
                                        <div className="slick-item" key={index}>
                                            <Image src={services.content[index].image.asset.url} fluid={false} alt={services.content[index].heading} />
                                            <h3>{services.content[index].heading}</h3>
                                            <h1>{services.content[index].title}</h1>
                                            <p>{services.content[index].text}</p>
                                        </div>
                                    ))
                                ))
                            }
                        </Slider>
                    </Col>
                </Row>
            </section>
        </Container >
    );
}


export default services;
