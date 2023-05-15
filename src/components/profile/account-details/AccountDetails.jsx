import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import axios from 'axios';
import { API } from '../../../config/API';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import '../profile.scss';

export default function ProfileDetail() {
    const userData = JSON.parse(localStorage.getItem('logData'));

    const [email, setEmail] = useState(userData.email);
    const [name, setName] = useState(userData.name);
    const [lastName, setLastName] = useState(userData.lastName);
    const [phone, setPhone] = useState(userData.phone);
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const sessionID = localStorage.getItem('SessVal');

    const notify = () => toast.success("Profile Changed Successfully!");
    const navigate = useNavigate();

    const handleDisableClick = () => {
        setIsDisabled(!isDisabled)
    };

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value);
    }

    const editProfile = (e) => {
        e.preventDefault();
        axios.put(API.BASE_URL + 'account/', {
            firstname: name,
            lastName: lastName,
            email: email,
            telephone: phone
        }, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': sessionID,
            }
        })
            .then(function (response) {
                notify();
                setIsDisabled(!isDisabled)
            })

            .catch(function (error) {
                console.log(error);
                //console.log(error.response.data.error[0][0])
                if (error.response.data.error[0] === 'User is not logged in') {
                    toast.warn(error.response.data.error[0], {
                        toastId: 'success1',
                    });
                } else {
                    toast.warn(error.response.data.error[0][0], {
                        toastId: 'success1',
                    });
                }
                toast.warn('Please Login Again')
                localStorage.clear();
                navigate('/')
                window.location.reload(false);
            })
    }

    const editPassword = (e) => {
        e.preventDefault();
        if (pass !== confirmPass) {
            toast.warn('Passwords do not match')
        }
        else {
            axios.put(API.BASE_URL + 'account/password', {
                password: pass,
                confirm: confirmPass
            }, {
                headers: {
                    'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                    'X-Oc-Session': sessionID,
                }
            })
                .then(function (response) {
                    //console.log("Profile Edit", response);
                    toast.success('Password updated')
                    window.location.reload(false);
                })

                .catch(function (error) {
                    console.log(error);
                    //console.log(error.response.data.error[0][0])
                    if (error.response.data.error[0] == 'User is not logged in') {
                        toast.warn(error.response.data.error[0], {
                            toastId: 'success1',
                        });
                    } else {
                        toast.warn(error.response.data.error[0][0], {
                            toastId: 'success1',
                        });
                    }
                    notify();
                    toast.warn('Please Login Again')
                    localStorage.clear();
                    navigate('/')
                    window.location.reload(false);
                })
        }

    }

    useEffect(() => {
        axios.get(API.BASE_URL + 'customerorders/', {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': sessionID,
                'X-Oc-Currency': 'MYR'
            }
        })
            .then(function (response) {
                //console.log("Orders", response.data.data[0]);

            })

            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="profile-container">
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <h4 className='w-100 text-light text-start pt-4 pb-2 tabs-heading'>My Profile</h4>
                    <Row className="justify-content-between py-4 py-md-5 tab-list">
                        <Col className="side-tab mb-5 mb-md-0">

                            <Nav variant="pills" className="flex-column side-main bg-light p-4">
                                <h4 className='text-start'>Account Details</h4>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Account Details</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Change Password</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Children's Name</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="tab-main">
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className='bg-light p-4'>

                                    <form onSubmit={editProfile}>
                                        <MDBInput wrapperClass='mb-4' label='First Name' defaultValue={userData?.firstname} onChange={handleName} type='text' disabled={isDisabled} size="lg" />
                                        <MDBInput wrapperClass='mb-4' label='Last Name' defaultValue={userData?.lastname} onChange={handleLastName} type='text' disabled={isDisabled} size="lg" />
                                        <MDBInput wrapperClass='mb-4' label='Email address' defaultValue={userData?.email} onChange={handleEmail} type='email' disabled={isDisabled} size="lg" />
                                        <MDBInput wrapperClass='mb-4' label='Telephone' defaultValue={userData?.telephone} onChange={handlePhone} type='phone' disabled={isDisabled} size="lg" />

                                        {isDisabled === true ? (
                                            <p className="button button-fill mb-2" onClick={handleDisableClick}>Change Info</p>
                                        )
                                            :
                                            <button className="button button-fill mb-2">Save</button>
                                        }


                                    </form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className='bg-light p-4'>
                                    <form onSubmit={editPassword}>
                                        <MDBInput wrapperClass='mb-4' label='Current Password' placeholder="Enter New Password" value={pass} onChange={handlePass} type='password' size="lg" />
                                        <MDBInput wrapperClass='mb-4' label='New Password' placeholder="Confirm New Password" value={confirmPass} onChange={handleConfirmPass} type='password' size="lg" />
                                        <button className="button button-fill mb-2">Change Password</button>
                                    </form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h4 className='w-100'>Children Information</h4>
                                    <form>
                                        <h2></h2>
                                    </form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}