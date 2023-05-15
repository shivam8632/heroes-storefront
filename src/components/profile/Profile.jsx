import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './profile.scss';

export default function Profile() {

    // useEffect(() => {
    //     axios.get(API.BASE_URL + 'customerorders/', {
    //         headers: {
    //             'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
    //             'X-Oc-Session': sessionID,
    //             'X-Oc-Currency': 'MYR'
    //         }
    //     })
    //     .then(function(response) {
    //         console.log("Orders" ,response.data.data[0]);
            
    //     })
    
    //     .catch(function(error) {
    //         console.log(error);  
    //     })
    // }, [])

  return (
    <div className="profile-container">
        <Container>
            <div className="profile-main p-3 p-md-4 py-md-5">
                <div className="profile-main-container p-4 px-lg-5">
                    <div className="heading">
                        <h2>Account</h2>
                    </div>
                    <div className="profile-list mt-3">
                        <Link to='/profile-detail' className="profile-box d-flex pt-4 mb-4">
                            <span className="profile-img"></span>
                            <div className="profile-content ms-3">
                                <h4 className='text-start'>Account Details</h4>
                                <p className='mb-0'>Edit your account details</p>
                            </div>
                        </Link>
                        <Link to='/order-history' className="profile-box d-flex pt-4">
                            <span className="profile-img"></span>
                            <div className="profile-content ms-3">
                                <h4 className='text-start'>Your Orders</h4>
                                <p className='mb-0'>View your purchase history</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
