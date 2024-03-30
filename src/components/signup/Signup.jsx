import React, { useState, useContext } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import BannerThree from '../../assets/img/banner-bg3.png';
import logoImage from '../../assets/img/logo.png';

import { API } from '../../config/API';
import axios from 'axios';
import UserContext from '../context/UserContext';

import './signup.scss';

function SignUp() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const { setAuth } = useContext(UserContext);

    const navigate = useNavigate();

    const notify = () => toast.success("Signed Up Successfully!");
    // const emptyData = () => toast.warn("Please fill out all the fields");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const sessionID = localStorage.getItem('SessVal')

    const createSessionId = () => {
        axios.get(API.BASE_URL + 'session', {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
        })
            .then(function (response) {
                localStorage.setItem("SessVal", response.data.data.session)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleApi = (event) => {

        if (sessionID === 'null') {
            createSessionId()
        }

        event.preventDefault();
        axios.post(API.BASE_URL + 'register/', {
            firstname: name,
            lastname: lastName,
            email: email,
            password: password,
            confirm: confirmPassword,
            telephone: phone,
            agree: 1
        }, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'Accept': 'application/json',
                'X-Oc-Session': sessionID,
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                // console.log('response =>', response);
                notify();
                setAuth({ name: response.data.data.firstname });
                setAuth({ mail: response.data.data.email });
                setAuth({ phone: response.data.data.telephone });
                localStorage.setItem('logName', response.data.data.firstname);
                localStorage.setItem('email', response.data.data.email);
                localStorage.setItem('phone', response.data.data.telephone);
                localStorage.setItem('logData', JSON.stringify(response.data.data));
                navigate('/');
            })
            .catch(function (error) {
                console.log('sign up error => ', error.response.data.error);
                if (error.status === 400 || 404)
                    toast.warn(error.response.data.error[0]);
            })
    }

    return (
        <div className="login-container">
            <MDBContainer className="py-4 py-md-5">
                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src={BannerThree} alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>
                                <div className='d-flex flex-row mt-2'>
                                    <MDBCardImage src={logoImage} alt="login form" className='login-logo' />
                                </div>

                                <h5 className="my-4" style={{ letterSpacing: '1px' }}>Create new Account</h5>

                                <MDBInput wrapperClass='mb-4' label='First Name' value={name} onChange={handleName} type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4' label='Last Name' value={lastName} onChange={handleLastName} type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4' label='Email address' value={email} onChange={handleEmail} type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4' label='Password' value={password} onChange={handlePassword} type='password' size="lg" />
                                <MDBInput wrapperClass='mb-4' label='Confirm Password' value={confirmPassword} onChange={handleConfirmPassword} type='password' size="lg" />
                                <MDBInput wrapperClass='mb-4' label='Telephone' value={phone} onChange={handlePhone} type='phone' size="lg" />

                                <p>By signing up, you agree to the <Link to='/termsofservice' style={{ color: '#f26b3c' }}>Terms of Service</Link> and <Link to='/privacypolicy' style={{ color: '#f26b3c' }}>Privacy Policy</Link></p>
                                <button className="button button-fill mb-2" onClick={handleApi}>Sign Up</button>
                                {/* <a className="small text-muted mb-2 text-start" href="#!">Forgot password?</a> */}
                                <p className=" mb-0" style={{ color: '#000' }}>Already have an account? <Link to='/signin' style={{ color: '#f26b3c' }}>Login here</Link></p>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default SignUp;