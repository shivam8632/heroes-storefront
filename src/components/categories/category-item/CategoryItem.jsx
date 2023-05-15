import React, { useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';

import UserContext from '../../context/UserContext';
import { API } from '../../../config/API';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sanitized from '../../../Sanitized';

import './category-item.scss';

export default function CategoryItem() {
    const { setCategoryProd, categoryProd, setProducts, products }= useContext(UserContext);
    const [search, setNewSearch] = useState("");
    

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

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    const filtered = !search
    ? categoryProd
    : categoryProd.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    );


    return(
        <>
        <div className="filter w-100 d-flex justify-content-end mt-4">
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Filter Themes" />
        </div>
            <div className="category-list">
                {filtered?.map((catProd) => {
                    return(
                        <div className="category-item" key={catProd.category_id} id={catProd.category_id}>
                            <Link to={'/category-product/' + catProd.category_id } className="category-img">
                                <img src={catProd.image} alt='popular-place' />
                            </Link>
                            
                            <div className="prod-details mt-4">
                            {/* <div className="loc-detail d-flex justify-content-between">
                                    <span className="location d-flex">
                                        <p>Location
                                        <FontAwesomeIcon icon={faMapPin} style={{ color: "#f26b3c", width: "15px", height: "15px", marginLeft: 4 }} /></p>
                                    </span>
                                    <span className="location d-flex align-items-center">
                                        <p className="small mb-0 text-muted d-flex align-items-center"><FontAwesomeIcon icon={faStar} style={{ color: "#f26b3c", width: "25px", height: "25px", marginRight: 4 }} /> 4.0/5</p>
                                        
                                    </span>
                                    
                            </div> */}

                                <div className="package-heading">
                                    <Sanitized html={catProd.name} className="all-prod-desc" />
                                </div>
    {/* 
                                <p>Praesent sed elit mi nullaam. In risus nullaam efficitur non.</p> */}
                                {/* <div className="package-content">
                                    <div className="buttons">
                                    <Link to={'/category-product/' + catProd.category_id } className="button button-empty">
                                        Book Now <FontAwesomeIcon icon={faChevronRight} style={{ color: "#f26b3c", width: "15px", height: "15px" }} /></Link>
                                    </div>
                                    <div className="price">
                                        <p className='mb-0'><strong>$102.00</strong></p>
                                    </div>
                                </div> */}
                            </div> 
                        </div>
                    )
                })}
            </div>
        </>
    )
}