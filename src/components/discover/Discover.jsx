import React, {useEffect, useContext, useState} from "react";
import Container from 'react-bootstrap/Container';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Sanitized from "../../Sanitized";

import axios from "axios";
import { API } from "../../config/API";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight, faMapPin, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import NoImage from '../../assets/img/no-image.png'

import "./discover.scss";

const Discover = () => {

    const [categoryProd, setCategoryProd] = useState([]);
    const [displayCount, setDisplayCount] = useState(15)

    useEffect(() => {
        axios.get(API.BASE_URL + 'products/category/63',  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              setCategoryProd(response.data.data.items);
              console.log("response.data.data.items", response.data.data.items)
          })
          .catch(function(error) {
              console.log(error);
          })
    }, [])

    const handleShowMore = () => {
        setDisplayCount(displayCount + 6); // increase display count by 3
    }

    return(
        <div className="events discover-list py-4 py-md-5 pb-md-5">
            <Container>

                <div className="customer-list d-md-flex flex-wrap">
                    {categoryProd?.slice(0, displayCount).map((catProd) => (
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
                    ))}
                </div>

                {displayCount < categoryProd?.length && (
                        <button className="button button-fill mx-auto" onClick={handleShowMore}>Show More</button>
                )}
            </Container>
        </div>
    )
}

export default Discover