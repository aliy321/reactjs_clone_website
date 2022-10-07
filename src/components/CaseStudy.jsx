import React, { useState } from 'react';
import Slider from "react-slick";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function CaseStudy({ data }) {
    if (!data) return <div></div>;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
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
            <section id="casestudy" className="casestudy">
                <Container fluid={"sm"}>
                    <Row>
                        {data && data.map((casestudy, index) => (
                            <Col lg={12} md={12} sm={12} key={index}>
                                <div className="casestudy__content content-left">
                                    <h5 className="casestudy__title">{casestudy.title}</h5>
                                    <h1 className="casestudy__heading">{casestudy.heading}</h1>
                                    <hr className="line" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Row>
                    <Container>
                        <Slider {...settings} className="">
                            {
                                data && data.map((casestudy, index) => (
                                    casestudy.content && casestudy.content.map((content, index) => (
                                        <div className="slick-item content-center d-flex justify-content-between" key={index}>
                                            <div>
                                                <Images src={casestudy.content[index].image.asset.url} fluid={true} className="mb-4 mx-auto" />

                                                <h3>{casestudy.content[index].title}</h3>
                                                <h1>{casestudy.content[index].heading}</h1>
                                                <p>{casestudy.content[index].text}</p>
                                            </div>
                                            <a href={casestudy.content[index].link} className="btn btn-primary">Read More</a>
                                        </div>
                                    ))
                                ))
                            }
                        </Slider>
                    </Container>
                </Row>
            </section>
        </Container>
    )
}

export default CaseStudy;