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

import './home-products.scss';

const HomeProducts = () => {

    const [categoryProd, setCategoryProd] = useState([]);
    const [displayCount, setDisplayCount] = useState(8)

    useEffect(() => {
        axios.get(API.BASE_URL + `products/category/65`,  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
        })
        .then(function(response) {
            setCategoryProd(response.data.data.items);
            console.log("Category 65" ,response.data.data.items)
        })
        .catch(function(error) {
            console.log(error);
        })
    }, [])
    
    return(
        <div className="customer py-4">
            <Container>
                <div className="products-heading pt-4 pb-5 d-flex flex-column flex-md-row justify-content-between w-100">
                    <div className="heading">
                        <h5 className="mb-0" style={{lineHeight: 1}}><strong>Learn</strong></h5>
                    </div>
                    <div className="buttons mt-md-0">
                        <Link to="/learn" className="button button-fill">Discover More</Link>
                    </div>
                </div>
                <div className="customer-list d-md-flex flex-wrap justify-content-center">
                    {categoryProd?.slice(0, displayCount).map((catProd) => (
                        <Link to={'/discover-detail/' + catProd.product_id } className="customer-item d-flex flex-column mb-5" key={catProd.category_id}>
                            <div className="customer-box">
                                <div className="customer-img">
                                    {catProd.thumb !== false ? (
                                        <img src={catProd.original_image} alt='customer-place' />
                                    ) : (
                                        <img src={NoImage} alt='customer-place' />
                                    )}
                                    
                                </div>
                                
                                <div className="prod-details p-3">
                                    <div className="small loc-detail d-flex justify-content-between align-items-center mb-1">
                                            <span className="location d-flex my-0">
                                            {catProd.location !== "" ? (
                                                <p className="mb-0">
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

                                    <div className="package-heading mt-2 mb-3">
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
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default HomeProducts;