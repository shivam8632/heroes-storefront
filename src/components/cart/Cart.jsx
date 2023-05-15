import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../config/API';
import { toast } from 'react-toastify';
import { GetCartItems } from '../shared/GetCartItems';

import './cart.scss';

const sessionID = localStorage.getItem('SessVal');

function Cart() {
  const { setCountProducts } = useContext(UserContext);
  const [cartData, setCartData] = useState({});
  const { cartItems, cartItemCount, getCart } = GetCartItems({})


  useEffect(() => {
    setCartData(cartItems)
    setCountProducts(cartItemCount)
  }, [cartItems])

  const setData = (e,key, prodKey) =>{
    console.log(typeof parseInt(e.target.value)=='NaN')
    cartData.products[key].push = {
        value: isNaN(parseFloat(e.target.value)) ? e.target.value : parseFloat(e.target.value),
    };

    console.log("Attributes", cartData.products[key].push.value);
    axios.put(API.BASE_URL + 'cart/', {
      key: prodKey,
      quantity: cartData.products[key].push.value
    
    },
  { 
    headers: {
      'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
      'X-Oc-Session': sessionID,
      'X-Oc-Currency': 'MYR'
    }
    })
    .then(function (response) {
      console.log("Update", response);
      // getCart()
      window.location.reload(false);
    })
    .catch(function (error) {
      console.log(error);
    })
}


  const DeleteFromCart = (index) => {
    axios.delete(API.BASE_URL + 'cart/', {
      data: {
        key: index
      },
      headers: {
        'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
        'X-Oc-Session': sessionID,
        'X-Oc-Currency': 'MYR'
      }
    })
      .then((response) => {
        //getCart()
        console.log(response)
        getCart()
        setCartData(cartItems)
        setCountProducts(cartItemCount)
        toast.success('Item removed from cart')
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="cart-container">
      <Container>
        <div className="heading pt-4">
        </div>
        {cartData.products?.length > 0 ? (
          <div className="cart-main d-md-flex justify-content-between align-items-start">

            <div className="cart-boxes">
              {cartData.products?.map((prods, i) => {
                return (
                  <React.Fragment key={prods.key}>
                    <div className="cart-list">
                      <div className="cart-box">
                        <div className="cart-img mb-4 mb-lg-0">
                          <img src={prods.thumb} alt="cart" />
                        </div>
                        <div className="cart-content">
                          <div className="cart-prod-title heading d-flex">
                            <p><strong>{prods.name}</strong></p>
                            <p><strong>{prods.total}</strong></p>
                          </div>

                          <div className="cart-prod-details d-flex justify-content-between pb-4">
                              <p id={prods.key}><strong>Quantity: </strong> <input type="number" defaultValue={prods.quantity} onChange={(event)  => setData(event,i, prods.key)} /></p>
  
                            </div>
                          <div className="slot-list mt-1 mt-lg-0">
                            {prods.option?.map((slotPrd, j) => {
                              return (
                                <div className="slot-container" key={j}>
                                  {
                                    Array.isArray(slotPrd.value) ? (
                                    slotPrd.value?.map((slotss, l) => {
                                      return (
                                        <p key={l}>{slotss}</p>
                                      )
                                    })
                                  ) :
                                    <p><strong>{slotPrd.name}</strong> - {slotPrd.value}</p>
                                  }
                                </div>
                              )

                            })}
                          </div>
                          <div className="buttons d-flex justify-content-end">
                            {/* <button className='mt-2 mt-lg-4 mx-auto' onClick={()=>removeMe(i)}> */}
                            <button className='mt-2 mt-lg-4 mx-auto' onClick={() => DeleteFromCart(prods.key)}>
                              <FontAwesomeIcon icon={faTrash} style={{ color: "#4a5568", width: "25px", height: "25px", }} />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
            </div>

            <div className="cart-total mt-md-0">
              <h3 className='text-start fw-bold'>Cart Summary</h3>
              <div className='cart-total-total d-flex align-items-center'>
                <h5><strong>Total</strong></h5>
                <h5><strong>RM {cartData.total_raw.toFixed(2)}</strong></h5>
              </div>

              <div className="buttons heading-center">
                <Link to='/checkout' className='button button-fill' >Checkout</Link>
              </div>
            </div>

          </div>
        ) : (
          <h2>Your cart is empty</h2>
        )}

      </Container>
    </div>
  );
}

export default Cart;