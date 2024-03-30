import React from 'react';
import { Container } from 'react-bootstrap';

import './membership-banner.scss';
function MembershipBanner() {
  return (
    <div className="membership-banner py-5 px-2 d-flex align-items-center justify-center">
        <Container>
            <div className="heading heading-white">
                {/* <h2 className='text-center mb-0'>Get Our Membership</h2> */}
            </div>
        </Container>
    </div>
  )
}

export default MembershipBanner