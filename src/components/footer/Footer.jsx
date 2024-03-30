import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className='pt-5'>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='footer-top heading-center'>
      <MDBContainer>
          <div className='footer-header mt-4'>
            <span>To contribute to the success of young people!</span>
          </div>
          </MDBContainer>
      </section>

      <section className='footer-main'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3 footer-list'>
            <MDBCol md='3' lg='4' xl='3' className='footer-block mx-auto mb-4'>
              <div className='justify-content-left'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <img className='footer-logo' src={Logo} alt="logo" />
                </h6>
              </div>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='footer-block mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <Link className='nav-link text-center text-md-start' to='/aboutus'>
                  About Us
                </Link>
              </p>
              <p>
                <Link className='nav-link text-center text-md-start' to='/contactus'>
                  Contact Us
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='footer-block mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
              <p>
                <Link className='nav-link text-center text-md-start' to='/privacypolicy'>
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link className='nav-link text-center text-md-start' to={{pathname:'/termsofservice/', hash:'#refund' }} >
                  Refund Policy
                </Link>
              </p>
              <p>
                <Link className='nav-link text-center text-md-start' to='/termsofservice'>
                  Terms Of Service
                </Link>
              </p>
              <p>
                <Link className='nav-link text-center text-md-start' to='/refundpolicy'>
                  Refund policy
                </Link>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Community guidelines
                </a>
              </p> */}
              <p>
                <Link className='nav-link text-center text-md-start' to='/faq'>
                  FAQ
                </Link>
              </p>
            </MDBCol>
            {/* <MDBCol md='4' lg='3' xl='3' className='footer-block mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-center'>Contact</h6>
              <p className='text-center-text-md-start d-flex justify-content-center justify-content-start'>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FFF", width: "20px", height: "20px" }} />
                <a href="mailto:ama@heroes.my">ama@heroes.my</a>
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 footer-bottom'>
        © 2023 Copyright Heroes
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;