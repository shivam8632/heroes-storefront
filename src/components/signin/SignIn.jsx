import React, { useState, useContext, useEffect } from 'react';
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

import BannerThree from '../../assets/img/banner-bg3.png';
import logoImage from '../../assets/img/logo.png';

import { API } from '../../config/API';
import axios from 'axios';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';

import './signin.scss';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sessionId, setSessionId] = useState(localStorage.getItem('SessVal'))
    const { setAuth } = useContext(UserContext);

    const navigate = useNavigate();

    const notify = () => toast.success("Logged In Successfully!");
    const wrongData = () => toast.warn("Either your email or password is incorrect!");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        const setSession = (session) => {
            if (session === 'null') {
                axios.get(API.BASE_URL + 'session', {
                    headers: {
                        'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                    },
                })
                    .then(function (response) {
                        localStorage.setItem("SessVal", response.data.data.session)
                        setSessionId(response.data.data.session)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
        setSession(sessionId)
    }, [sessionId])

    const handleLog = (event) => {
        event.preventDefault();

        axios.post(API.BASE_URL + 'login/', {
            email: email,
            password: password,
        }, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'Accept': 'application/json',
                'X-Oc-Session': sessionId,
                'Content-Type': 'application/json',
            }
        }, {
        })
            .then(function (response) {
                setAuth({ name: response.data.data.firstname });
                setAuth({ mail: response.data.data.email });
                setAuth({ phone: response.data.data.telephone });
                // console.log(response.data.data.email)
                localStorage.setItem('logName', response.data.data.firstname);
                localStorage.setItem('email', response.data.data.email);
                localStorage.setItem('phone', response.data.data.telephone);
                localStorage.setItem('logData', JSON.stringify(response.data.data));

                notify();
                navigate('/');
            })

            .catch(function (error) {
                wrongData();
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
                                    {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                                </div>

                                <h5 className="my-4" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                <MDBInput wrapperClass='mb-4' value={email} onChange={handleEmail} label='Email address' autoComplete='off' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4' value={password} onChange={handlePassword} label='Password' id='formControlLg' type='password' size="lg" />
                                <div className='login-button'>
                                    <button className="button button-fill mb-2" onClick={handleLog}>Sign In</button>
                                </div>
                                <Link className="small text-muted mb-2" to="/forget">Forgot password?</Link>
                                <p className=" mb-0" style={{ color: '#000' }}>Don't have an account? <Link to='/signup' style={{ color: '#f26b3c' }}>Register here</Link></p>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default SignIn;