import React from 'react';
import Container from 'react-bootstrap/Container';
import './destination.scss';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Destination2 from '../../../assets/img/dest-2.png';
import Destination3 from '../../../assets/img/dest-3.png';
import Destination4 from '../../../assets/img/dest-4.png';

const Destination = () => {
    return(
        <div className="destination">
            <Container>
                <div className="heading">
                    <h2>Explore Top Destination</h2>
                    <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur..</p>
                </div>
            </Container>
            <div className="destination-carousel">
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4
                    },
                    1100: {
                        slidesPerView: 5
                    }
                  }}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                
            >
                <SwiperSlide>
                    <span>
                        <img src={Destination2} alt="destination" />
                    </span>
                    <div className="destination-content">
                        <h3>Augsburg</h3>
                        <div className="place">
                            <p>10 Places</p>
                            <p>18 Hotels</p>
                        </div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <span>
                        <img src={Destination3} alt="destination" />
                    </span>
                    <div className="destination-content">
                        <h3>Dusseldorf</h3>
                        <div className="place">
                            <p>15 Places</p>
                            <p>25 Hotels</p>
                        </div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <span>
                        <img src={Destination4} alt="destination" />
                    </span>
                    <div className="destination-content">
                        <h3>Nuremberg</h3>
                        <div className="place">
                            <p>20 Places</p>
                            <p>28 Hotels</p>
                        </div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFF", width: "16px", height: "16px" }} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Destination;