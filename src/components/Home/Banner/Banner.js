import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import background_image1 from '../../../images/background_image1.jpg';
import background_image2 from '../../../images/background_image1.jpg';
import background_image3 from '../../../images/background_image1.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={background_image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4> 2022 COLLECTION</h4>
                    <h4>All You Need Is Right Here</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={background_image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h4> 2022 COLLECTION</h4>
                    <h4>All You Need Is Right Here</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={background_image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h4> 2022 COLLECTION</h4>
                    <h4>All You Need Is Right Here</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;