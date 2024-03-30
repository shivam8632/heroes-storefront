import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { API } from '../../../config/API';
import { toast } from 'react-toastify';

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';

import './forget.scss';

import BannerThree from '../../../assets/img/banner-bg3.png';
import logoImage from '../../../assets/img/logo.png';

function Forget() {
    const notify = () => toast.success("Check your email to Reset password");
    const wrongData = () => toast.warn("This E-Mail is not in our records, please try again");

    const [email, setEmail] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const sessionID = localStorage.getItem('SessVal')
   
    const handleForget = (event) => {
    event.preventDefault();
        axios.post(API.BASE_URL + 'forgotten/', {
            email: email,
        }, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'Accept': 'application/json',
                'X-Oc-Session': sessionID,
                'Content-Type': 'application/json',
            }}, {
        })
        .then(function(response) {
            console.log("Forget API" ,response);
            notify();
        })

        .catch(function(error) {
            console.log(error);
            wrongData();
        })
    }

  return (
    <div className="forget py-5">
        <Container>
            <div className="heading">
                <h2 className='text-center mb-4'>Forgot Password</h2>
            </div>
            <MDBContainer className="py-4 py-md-5">
                <MDBCard>
                    <MDBRow className='g-0'>
                        <MDBCol md='6'>
                            <MDBCardImage src={BannerThree} alt="login form" className='rounded-start w-100'/>
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>
                                <div className='d-flex flex-row mt-2'>
                                    <MDBCardImage src={logoImage} alt="login form" className='login-logo'/>
                                </div>

                                <h5 className="my-4" style={{letterSpacing: '1px'}}>Enter Your Email</h5>

                                <MDBInput wrapperClass='mb-4' value={email} onChange={handleEmail} label='Email address' autoComplete='off' type='email' size="lg"/>

                                <button className="button button-fill mb-2" onClick={handleForget}>Send Link</button>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </Container>
    </div>
  )
}

export default Forget