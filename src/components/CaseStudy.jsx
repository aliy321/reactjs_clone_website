import React, { useState } from 'react';
import Slider from "react-slick";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function CaseStudy(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

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
                        <Col lg={6}>
                            <div className="casestudy__content content-left">
                                <h5 className="casestudy__title">{props.title}</h5>
                                <h1 className="casestudy__heading">
                                    {props.heading}
                                </h1>
                                <hr className="line" />
                                <p>{props.text}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Row>
                    <Container>
                    <Slider {...settings} className="">
                        <div className="slick-item">
                            <img
                                className="d-block w-100"
                                src="images/1581241677-what-can-da-image.svg"
                                alt="First slide"
                            />
                            <h3>Search Engine</h3>
                            <h1>Optimization (SEO)</h1>
                            <p>Websites with millions of monthly traffic choose us to develop their SEO strategies.</p>
                        </div>
                        <div className="slick-item">
                            <img
                                className="d-block w-100"
                                src="images/1581241677-what-can-da-image.svg"
                                alt="First slide"
                            />
                            <h3>Search Engine</h3>
                            <h1>Optimization (SEO)</h1>
                            <p>Websites with millions of monthly traffic choose us to develop their SEO strategies.</p>
                        </div>
                        <div className="slick-item">
                            <img
                                className="d-block w-100"
                                src="images/1581241677-what-can-da-image.svg"
                                alt="First slide"
                            />
                            <h3>Content</h3>
                            <h1>Marketing</h1>
                            <p>We combine large keyword anaylsis with creativity to define content creating strategy.</p>
                        </div>
                        <div className="slick-item">
                            <img
                                className="d-block w-100"
                                src="images/1581241677-what-can-da-image.svg"
                                alt="First slide"
                            />
                            <h3>Performance</h3>
                            <h1>Marketing (PPC)</h1>
                            <p>Finding the sweet spot of cost and performance to increase ROAS and make campaings scalable.</p>
                        </div>
                        <div className="slick-item">
                            <img
                                className="d-block w-100"
                                src="images/1581241677-what-can-da-image.svg"
                                alt="First slide"
                            />
                            <h3>Performance</h3>
                            <h1>Marketing (PPC)</h1>
                            <p>Finding the sweet spot of cost and performance to increase ROAS and make campaings scalable.</p>
                        </div>
                    </Slider>
                    </Container>
                </Row>
            </section>
        </Container>
    )
}

export default CaseStudy;