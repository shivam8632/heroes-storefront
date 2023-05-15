import React, { useContext, useEffect } from 'react'

import UserContext from '../context/UserContext';
import { API } from '../../config/API';
import axios from 'axios';

import './categories.scss';

export default function Categories() {
    const { setCategoryProd, categoryProd }= useContext(UserContext);

    useEffect(() => {
        axios.get(API.BASE_URL + 'categories/',  {
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
            {categoryProd?.map((catProd) => {
                return(
                    <div className="category-item" key={catProd.category_id}>
                        <div className="category-img">
                            <img src={catProd.image} alt='category-place' />
                        </div>
                        <div className="package-duration">
                            <p>{catProd.name}</p>
                        </div>
                        <div className="package-content">
                            <div className="buttons">
                                <a href="#" className="button button-empty">Book Now</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}