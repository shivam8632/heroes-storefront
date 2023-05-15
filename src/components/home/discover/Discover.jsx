import React, {useEffect, useContext, useState} from "react";
import Container from 'react-bootstrap/Container';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Sanitized from "../../../Sanitized";

import axios from "axios";
import { API } from "../../../config/API";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight, faMapPin, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import NoImage from '../../../assets/img/no-image.png'

import "./discover.scss";

const Discover = () => {

    const [categoryProd, setCategoryProd] = useState([]);

    useEffect(() => {
        axios.get(API.BASE_URL + 'products/category/63/limit/6/page/1',  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              setCategoryProd(response.data.data.items);
          })
          .catch(function(error) {
              console.log(error);
          })
    }, [])

    return(
        <div className="events discover pt-4">
            <Container>
                <div className="products-heading pt-3 pt-md-4">
                    <div className="heading">
                        <h5><strong>Discover</strong></h5>
                    </div>
                    <div className="buttons mt-md-0">
                        <Link to="/discover" className="button button-fill">Discover More</Link>
                    </div>
                </div>
                <Swiper
                    breakpoints={{
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                    }}
                    spaceBetween={10}
                    // slidesPerGroup={3}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper py-4"
                >

                    {categoryProd?.map((catProd) => {
                        return(
                            <SwiperSlide key={catProd.product_id}>
                                <Link to={'/discover-detail/' + catProd.product_id } className="customer-item" key={catProd.category_id}>
                                    <div className="customer-box">
                                        <div className="customer-img">
                                            {catProd.thumb !== false ? (
                                                <img src={catProd.original_image} alt='customer-place' />
                                            ) : (
                                                <img src={NoImage} alt='customer-place' />
                                            )}
                                            
                                        </div>
                                        
                                        <div className="prod-details">
                                            <div className="small loc-detail d-flex justify-content-between align-items-center mb-1">
                                                    <span className="location d-flex">
                                                    {catProd.location !== "" ? (
                                                        <p>
                                                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f26b3c", width: "15px", height: "15px", marginRight: 4 }} /> {catProd.location}</p>
                                                    )
                                                :
                                                ""}
                                                        
                                                    </span>
                                                    <span className="location d-flex align-items-center">
                                                        {catProd.rating !== 0 ? (
                                                            <p className="small mb-0 text-muted d-flex align-items-center"><FontAwesomeIcon icon={faStar} style={{ color: "#f26b3c", width: "25px", height: "25px", marginRight: 4 }} /> {catProd.rating}/5</p>
                                                            ) :
                                                            ''
                                                        }  
                                                    </span>
                                            </div>

                                            <div className="package-heading">
                                                <Sanitized html={catProd.name} className="all-prod-desc" />
                                            </div>

                                            {/* <div className="prod-content">
                                                <Sanitized html={catProd.description} className="all-prod-desc" />
                                            </div> */}
                                            <div className="package-content">
                                                <div className="price">
                                                    <p className='mb-0'><strong>{catProd.price_formated}</strong></p>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </div>
    )
}

export default Discover