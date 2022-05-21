import React from 'react';
import { Carousel } from 'react-bootstrap';

const Main = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100 img-height img-fluid"
                    src="https://res.cloudinary.com/image-hosting-api/image/upload/v1653137109/pexels-photo-5632397_g09py1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to our website</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100 img-height img-fluid"
                    src="https://res.cloudinary.com/image-hosting-api/image/upload/v1653136961/pexels-photo-5632402_i9hqdw.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Welcome,, to our homepage</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100 img-height img-fluid"
                    src="https://res.cloudinary.com/image-hosting-api/image/upload/v1653136975/pexels-photo-5632405_cxucw4.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Thank you...</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Main;