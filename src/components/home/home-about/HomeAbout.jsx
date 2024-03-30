import React from 'react';
import { Container } from 'react-bootstrap';

import './home-about.scss';

function HomeLearning() {
  return (
    <div className="home-about mt-5 py-3 py-md-4 py-lg-5">
        <Container>
            <div className="home-about-list d-flex flex-wrap justify-content-center">
                <div className="home-about-box col-md-6 pb-4 px-md-3 d-flex flex-column justify-content-end">
                    <h4 className='text-start'>Fuel Curiosity</h4>
                    <p>Engage every type of learner with different programmes and activities</p>
                </div>

                <div className="home-about-box col-md-6 pb-4 px-md-3">
                    <h4 className='text-start'>Get Invited</h4>
                    <p>Join members-only activities organised with the leading companies in Malaysia and the world</p>
                </div>

                <div className="home-about-box col-md-6 pb-4 px-md-3">
                    <h4 className='text-start'>Enjoy Learning</h4>
                    <p>Kids can discover and learn with others about the world around us</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HomeLearning