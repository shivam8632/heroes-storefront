import React, { useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { API } from '../../../config/API';
import { toast } from 'react-toastify';
import { GetCartItems } from '../../shared/GetCartItems'; 
import UserContext from '../../context/UserContext';
import './membership-plan.scss';

function MembershipPlan() {

    const sessionID = localStorage.getItem('SessVal');
    const secondoptionID = {};
    const { setCountProducts} = useContext(UserContext);
    const { cartItemCount, getCart } = GetCartItems({})

    const addToCart = () => {
        axios.post(API.BASE_URL + 'cart/', {
            product_id: 54,
            quantity: 1,
        }, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': sessionID,
            }
        }, {
        })
            .then(function (response) {
                console.log("Membership Cart", response);
                toast.success("Product added to cart successfully!!");
                getCart()
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getCart()
        setCountProducts(cartItemCount)
    }, [cartItemCount])

    return (
        <div className="membership-plan py-4 py-md-5">
            <Container>
                <div className="heading heading-white text-center">
                    <h2>Join Our Membership</h2>
                </div>
                <div className="sub-plan d-flex flex-column align-items-center justify-center mx-md-auto">
                    <h3 className="price">RM 100 Only</h3>
                    <h5>for 1 year</h5>
                    {/* <ul className='p-0 d-flex flex-column justify-center align-items-center mt-4'>
                    <li className='mb-2 d-flex text-center justify-center align-items-center text-white'>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li className='mb-2 d-flex text-center justify-center align-items-center text-white'>Lorem ipsum dolor sit amet</li>
                    <li className='mb-2 d-flex text-center justify-center align-items-center text-white'>Lorem ipsum dolor sit adipisicing.</li>
                    <li className='d-flex text-center justify-center align-items-center text-white'>sit amet, consectetur adipisicing.</li>
                </ul> */}
                    <div className="buttons">
                        <button className="button button-empty mt-3" onClick={addToCart}>JOIN NOW</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MembershipPlan