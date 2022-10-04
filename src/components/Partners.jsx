import React from "react";
import Slider from "react-slick";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function Partners(props) {
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
        <Container fluid={"sm"}>
            <section id="partners" className="partners__slider">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="partners__content content-center">
                            <h5 className="partners__title">{props.title}</h5>
                            <h1 className="partners__heading">
                                {props.heading}
                            </h1>
                            <hr className="line" />
                            <p className="partners__text">{props.text}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Container>
                        <Slider {...settings} className="partners">
                            <div className="slick-item">
                                <Images src="images/partners/1643719112-amazon.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1641481529-logolar_bmw-c.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1641765694-media-markt.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1641842047-bayer.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1642685532-bat-1.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1643719112-amazon.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1643719112-amazon.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1643719112-amazon.webp" fluid />
                            </div>
                            <div className="slick-item">
                                <Images src="images/partners/1643719112-amazon.webp" fluid />
                            </div>
                        </Slider>
                    </Container>
                </Row>
            </section>
        </Container>
    )
}

export default Partners;
