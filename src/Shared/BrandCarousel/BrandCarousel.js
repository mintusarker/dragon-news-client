import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from './../../assets/Brands/Brand1.png'
import Brand2 from './../../assets/Brands/Brand2.png'

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;