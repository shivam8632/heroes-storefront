import React, { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API } from '../../config/API';
import { CheckSession } from '../shared/CheckSession'
import { GetCartItems } from '../shared/GetCartItems';
import logoImage from '../../assets/img/heroes-logo-1.png';
import UserContext from '../context/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

const Header = () => {

    const sessionID = localStorage.getItem('SessVal')
    const { countProducts,setCountProducts } = useContext(UserContext);
    const { setAuth } = useContext(UserContext);
    const navigate = useNavigate();

    const getUserName = localStorage.getItem('logName')
    const { status, isLogIn } = CheckSession({})
    const { cartItemCount } = GetCartItems({})

    const notify = () => toast.success("User Logged Out!");
    // const memberLog = () => toast.warn("Please Login to Continue");

    useEffect(() => {
        if (isLogIn) {
            setCountProducts(cartItemCount)
        }    
    }, [cartItemCount])

    const handleLogout = (event) => {        
        event.preventDefault();
        axios.post(API.BASE_URL + 'logout', {}, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'Accept': 'application/json',
                'X-Oc-Session': sessionID,
                'Content-Type': 'application/json',
            }
        }
        )
            .then(function (response) {
                localStorage.clear();
                localStorage.setItem('SessVal', null);
                notify();
                navigate('/', { replace: true })
            })

            .catch(function (error) {
                console.log(error);
                localStorage.clear();
                localStorage.setItem('SessVal', null);
                notify();
                navigate('/', { replace: true })
            })
    }

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/" className='navbar-brand'>
                        <img src={logoImage} alt="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Link to="#link" className='nav-link'>Activities</Link> */}
                            <Link to="/discover" className='nav-link'>Discover</Link>
                            <Link to="/learn" className='nav-link'>Learn</Link>
                            <Link to="/membership" className='nav-link'>Membership</Link>
                            <div className="icons d-flex align-items-center">
                                {
                                    getUserName !== null ? (
                                        <div className="user-icons nav-link">
                                            <span>{getUserName}</span>
                                            <ul>
                                                <li>
                                                    <Link className='nav-subLink' to='/profile'>Profile</Link>
                                                </li>
                                                <li>
                                                    <button onClick={handleLogout}>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                        : ""
                                }
                            </div>

                            {
                                getUserName === null ? (
                                    <>
                                        <Link to='/signup' className='nav-link'>Sign Up</Link>
                                        <Link to='/signin' className='nav-link'>Sign In</Link>
                                    </>

                                ) : ""
                            }

                            {
                                getUserName !== null ? (
                                    <Link className='nav-link' to='/cart'><FontAwesomeIcon icon={faCartShopping} style={{ color: '#000' }} /> {(countProducts > 0 ? countProducts  : '')} </Link>
                                ) : (<p></p>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;