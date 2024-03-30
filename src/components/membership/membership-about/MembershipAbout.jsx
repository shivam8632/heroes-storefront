import React from 'react';
import { Container } from 'react-bootstrap';

import Exclusive from '../../../assets/img/exclusive.jpg';
import SpecialDiscount from '../../../assets/img/special-discount.jpg';


import './membership-about.scss';
function MembershipAbout() {
  return (
    <div className="membership-about py-5">
        <Container>
            <div className="member-about-list d-flex flex-wrap justify-center align-items-center">
                <div className="member-about-item mb-4 mb-md-0 d-flex flex-column px-md-3 px-lg-5">
                    <h3>Exclusive Events</h3>
                    <h6>Join exclusive events by invitation only</h6>
                </div>
                <div className="member-about-item mb-4 mb-md-0">
                    <img src={Exclusive} alt="member-img" />
                </div>
               
                <div className="member-about-item mb-4 mb-md-0 pt-3 p-md-0">
                    <img src={SpecialDiscount} alt="member-img" />
                </div>
                <div className="member-about-item mb-4 mb-md-0 d-flex flex-column pb-3 pb-md-0 px-md-3 px-lg-5">
                    <h3>Special Discount</h3>
                    <h6>Join our journey and activities at a special rate</h6>                  
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MembershipAbout