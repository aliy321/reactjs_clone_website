import React from "react";
import Slider from "react-slick";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'react-bootstrap/Image';

function Partners({ data, ...props }) {
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
        <Container fluid={"sm"}>
            <section id="partners" className="partners__slider">
                <Row>
                    {data && data.map((recoginition, index) => (
                        <Col lg={12} md={12} sm={12} key={index}>
                            <div className="recoginition__content content-center">
                                <h1 className="recoginition__title">{recoginition.title}</h1>
                                <hr className="line" />
                            </div>
                        </Col>
                    ))}

                </Row>
                <Row>
                    <Container>
                        <Slider {...settings} className="partners">
                            {
                                data && data.map((partners) => (
                                    partners.content && partners.content.map((content, index) => (
                                        <div className="slick-item" key={index}>
                                            <Images src={partners.content[index].image.asset.url} fluid alt={partners.content[index].alt} />
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

export default Partners;
