import React, {useContext, useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './thanks.scss';
import { API } from '../../config/API';
import axios from 'axios';

function Thanks() {
  const { addProds }= useContext(UserContext);
  const [cartData, setCartData] = useState([]);
  console.log(JSON.parse(localStorage.getItem("order_summ", (addProds))));
  const order = JSON.parse(localStorage.getItem("order_summ", (addProds)));

  var totalP= localStorage.getItem("total");
  console.log("Total", localStorage.getItem("total"));

  const order_id = localStorage.getItem('OrderId');
  const sessionID = localStorage.getItem('SessVal');
  const getname = localStorage.getItem('logName')
  const getemail = localStorage.getItem('email')
  const getphone = localStorage.getItem('phone')

  console.log('logname', getname);
  console.log('logmail', getemail);
  console.log('logphone', getphone);

  console.log("Thank yoy Page Session", sessionID)
  console.log("Thank yoy Page order_id", order_id)

  useEffect(() => {
    axios.get('https://heroes.a2hosted.com/heroes-front/',  {
      })
      .then(function(response) {
          console.log("Normal", response);
          console.log("Payload", response.payload);
      })
      .catch(function(error) {
          console.log(error);
      })
  }, [])

  useEffect(() => {
    axios.get(API.BASE_URL + 'cart/', {
        headers: {
            'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            'X-Oc-Session': sessionID,
        }}, {
    })
    .then(function(response) {
        console.log("Cart Response" ,response.data.data);
        console.log( "Session after Add to cart",localStorage.getItem('SessVal'));
        setCartData(response.data.data);
    })

    .catch(function(error) {
        console.log(error);
    })    

  }, [])

  // useEffect(() => {
  //   axios.put(API.BASE_URL + 'simpleconfirm/', {}, {
  //     headers: {
  //       'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
  //       'X-Oc-Session': sessionID,
  //       'X-Oc-Currency': 'MYR',
  //     }
  //   })
  //   .then(function(response) {
  //     console.log("Simple Confirm", response);
  //   })
  //   .catch(function(error) {
  //       console.log(error);
  //   })
  // },[])

  // useEffect(() => {
  //   axios.put(API.BASE_URL + 'orderhistory/' + order_id + '/',  {
  //       order_status_id: 5,
  //       comment: "Paid",
  //       notify: 0
  //   },
  //   {
  //     headers: {
  //         'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
  //         'X-Oc-Session': sessionID,
  //     }}, 
  //    {
  //     })
  //     .then(function(response) {
  //         console.log("Order", response);
  //     })
  //     .catch(function(error) {
  //         console.log(error);
  //     })
  // }, [])

  
  return (
    <section class="thankyou">
        <Container>
          <div className="heading pt-4">
            <h2>Order Summary</h2>
          </div>
          
          <div className="checkout-det d-none d-lg-flex justify-content-between">
            <p className='item-desc'>Item Description</p>
            <p className='item-price'>Item Price</p>
            <p className='item-qty'>Qty.</p>
            <p className='item-total'>Total</p>
          </div>
          
          <div className="checkout-main d-md-flex justify-content-between align-items-start">
            <div className="order-confirm p-3 p-lg-4 mb-5">
                <div className="heading d-flex align-items-center">
                    <FontAwesomeIcon icon={faCheck} style={{ color: "green", width: "40px", height: "40px", marginRight: 10 }} />
                    <h2>Your Order is Confirmed</h2>
                </div>
                <p>A copy of your order has been sent to your Email...</p>
            </div>

              <div className="checkout-boxes">
                {cartData.products?.map((cartProd, i) => {
                  return(
                    <React.Fragment>
                      <div className="checkout-list" key={i}>
                        <div className="checkout-box">
                          <div className="checkout-img mb-4 mb-lg-0">
                            <img src={cartProd.thumb} alt="checkout-image" />
                          </div>
                          <div className="checkout-content">
                            <h2>{cartProd.name}</h2>
                            
                            <div className="slot-list">
                            {cartProd.option?.map((slotPrd, i) => {
                                return(
                                 <div className="slot-container">
                                  {
                                    Array.isArray(slotPrd.value) ? (
                                    slotPrd.value?.map((slotss, i) => {
                                      return (
                                        <p>{slotss}</p>
                                      )
                                    })
                                  ) :
                                    <p><strong>{slotPrd.name}</strong> - {slotPrd.value}</p>
                                  }
                                </div>
                                )
                                
                              })}
                            </div>
                          </div>
                          <div className="checkout-prod-details d-flex justify-content-between justify-content-lg-start">
                              <p className='mb-lg-0 me-lg-2'><strong>RM: {cartProd.total_raw}</strong></p>
                              <p className='mb-lg-0 ms-lg-3'><strong>{cartProd.quantity}</strong></p>
                              <p className='mb-lg-0 ms-lg-4'><strong>RM: {cartProd.total_raw * cartProd.quantity}</strong></p>
                            </div>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
              
              <div className="checkout-total my-5 my-md-0 mt-lg-4 mb-lg-5">
                <div className="total-container">
                  <div className="total-details">
                    <p className='mb-2 pt-4'><strong>SubTotal: RM {totalP}</strong></p>
                    <p className='mb-2 pb-lg-2'><strong>Discount: RM 0</strong></p>
                    <h5 className='mb-4 pt-3 main-total'><strong>Total: RM {totalP}</strong></h5>
                  </div>
                </div>
              </div>
          </div>

            
        </Container>
      </section>
  )
}

export default Thanks