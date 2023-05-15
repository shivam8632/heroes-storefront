import React, { useContext, useEffect } from 'react';

import UserContext from '../../../context/UserContext';
import { API } from '../../../../config/API';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';
import Sanitized from '../../../../Sanitized';

import './popularSingle.scss';

const PopularSingle = () => {
    const { setCategoryProd, categoryProd }= useContext(UserContext);

    useEffect(() => {
        axios.get(API.BASE_URL + 'categories/parent/64',  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              setCategoryProd(response.data.data);
          })
          .catch(function(error) {
              console.log(error);
          })
    }, [])

    return(
        <>
            <Swiper
                breakpoints={{
                    768: {
                    slidesPerView: 2,
                    },
                    1024: {
                    slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    }
                }}
                spaceBetween={0}
                // slidesPerGroup={3}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper pt-4"
            >
                {categoryProd?.map((catProd) => {
                    return(
                        <SwiperSlide key={catProd.category_id}>
                            <div className="popular-item">
                                <Link to={'/learn/' + catProd.filters.filter_groups[0].filter[0].filter_id } key={catProd.category_id} className="popular-img">
                                    <img src={catProd.original_image} alt='activity-by-themes' />
                                </Link>
                                
                                <div className="prod-details">
                                    <div className="package-heading">
                                        <Sanitized html={catProd.name} />
                                    </div>
                                </div> 
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>    
        </>
    )
}

export default PopularSingle;