import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { API } from '../../config/API';
import axios from 'axios';

import './paymentsummary.scss'

function PaymentSummary() {
  const [orderInfo, setOrderInfo] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [orderDate, setOrderDate] = useState('');
  const { id } = useParams();
  const sessionID = localStorage.getItem('SessVal')

  useEffect(() => {
    axios.get(API.BASE_URL + `customerorders/${id}`, {
      headers: {
        'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
        'X-Oc-Session': sessionID,
      }
    })
      .then(function (response) {
        setOrderInfo(response.data.data)
        setOrderStatus(response.data.data.histories[response.data.data.histories.length - 1].status)
        setOrderDate(response.data.data.timestamp)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <section className="pymtsum-container">
      <Container>
        <div className="heading pt-4">
          {/* <h2>Order Summary</h2> */}
        </div>

        <div className="pymtsum-main d-md-flex justify-content-between align-items-start">
          <div className="order-confirm p-3">
            <div className="heading d-flex align-items-center">
              <FontAwesomeIcon
                icon={(orderStatus === 'Complete' ? faCheck : faTriangleExclamation)}
                style={{ color: "green", width: "40px", height: "40px", marginRight: 10 }} />
              <h2>Your Order is {orderStatus}</h2>
            </div>
            <p>A copy of your order has been sent to your Email...</p>
            <p><strong>Order Number: {id}</strong></p>
            <p><strong>Order Date: {moment(orderDate*1000).format('DD MMM YYYY H:mm:ss')}</strong></p>
          </div>

          <div className="pymtsum-det d-none d-md-flex">
            <div className='pymt-descr'>
              <p className='item-desc'><strong>Item Description</strong></p>
            </div>
            <div className='pymt-item-price'>
              <p className='item-price'><strong>Item Price</strong></p>
              <p className='item-qty'><strong>Qty</strong></p>
              <p className='item-total'><strong>Total</strong></p></div>
          </div>


          <div className="pymtsum-boxes">

            {orderInfo.products?.map((cartProd, i) => {
              return (
                <React.Fragment key={cartProd.key}>
                  <div className="pymtsum-list">
                    <div className="pymtsum-box">
                      <div className="pymtsum-content">
                        <h2>{cartProd.name}</h2>

                        <div className="slot-list">
                          {cartProd.option?.map((slotPrd, i) => {
                            return (
                              <div className="slot-container" key={i}>
                                {
                                  Array.isArray(slotPrd.value) ? (
                                    slotPrd.value?.map((slotss, i) => {
                                      return (
                                        <p>{slotss}</p>
                                      )
                                    })
                                  ) :
                                    <p><strong>{slotPrd.value === '' ? '' : slotPrd.name}</strong> {slotPrd.value === '' ? '' : ' - ' + slotPrd.value}</p>
                                }
                              </div>
                            )

                          })}
                        </div>
                      </div>
                      <div className="pymtsum-prod-details d-flex justify-content-between justify-content-lg-start">
                        <p className='mb-lg-0 me-lg-2'><strong>{cartProd.price}</strong></p>
                        <p className='mb-lg-0 ms-lg-3'><strong>{cartProd.quantity}</strong></p>
                        <p className='mb-lg-0 ms-lg-4'><strong>{cartProd.total}</strong></p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>

          <div className="pymtsum-total my-5 my-md-0 mt-lg-4 mb-lg-5">
            <div className="total-container">
              <div className="total-details justify-content-end">
                {
                  orderInfo.totals?.map((total, i) => {
                    return (
                      <div className="prices d-flex justify-content-between align-itmes-center mb-md-2 pb-lg-2">
                        <p className='mb-0 '><strong>{total.title}</strong></p>
                        <p className='mb-0 '><strong>RM {parseInt(total.value).toFixed(2)}</strong></p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          
        </div>
        <div className=''>
          <Link to="/discover" className='button button-fill m-auto'>Continue to Discover</Link>
        </div>
      </Container>
    </section>
  )
}

export default PaymentSummary