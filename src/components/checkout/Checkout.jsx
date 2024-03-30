import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { API } from '../../config/API';
import crypto from "crypto-js";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import './checkout.scss';

function Checkout() {
  const [promoText, setPromoText] = useState();
  const [couponDiscount, setCouponDiscount] = useState('0.00');
  const [cartData, setCartData] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0.00);
  const sessionID = localStorage.getItem('SessVal');
  const [errorText, setErrorText] = useState('');
  const [paymentDescr, setPaymentDescr] = useState('');

  const getname = localStorage.getItem('logName')
  const getemail = localStorage.getItem('email')
  const getphone = localStorage.getItem('phone')

  const [discountCode, setDiscountCode] = useState('')
  const [subTotal, setSubTotal] = useState('0.00')

  const orderId = useRef(0)
  const hashValue = useRef('')

  const [paymentId, setPaymentId] = useState('')

  const navigate = useNavigate()

  const randomString = (length, chars) => {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  useEffect(() => {
    let random = randomString(9, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    setPaymentId(random)
    getCart();
  }, [])

  const getCart = () => {
    axios.get(API.BASE_URL + 'cart/', {
      headers: {
        'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
        'X-Oc-Session': sessionID,
        'X-Oc-Currency': 'MYR'
      }
    }, {
    })
      .then(function (response) {
        setCartData(response.data.data);
        var productName = '';
        response.data.data.products.map((product) => {
          productName += product.name + ' ,'
        })
        productName = productName.substring(0, productName.length - 1)

        setPaymentDescr(productName)
        setFinalTotal((response.data.data.total_raw).toFixed(2))
        response.data.data.totals.map((total) => {
          if (total.title.includes('Coupon')) {
            let t = (total.value)
            setCouponDiscount(t.toFixed(2))
            const code = total.title.split(" ")
            setDiscountCode(code[1])
            setFinalTotal((response.data.data.total_raw).toFixed(2))
          }
          if (total.title.includes('Sub-Total')) {
            setSubTotal((total.value).toFixed(2))
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const couponFunc = (e) => {
    // e.preventDefault();
    axios.post(API.BASE_URL + 'coupon/', {
      coupon: promoText
    }, {
      headers: {
        'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
        'X-Oc-Session': sessionID,
        'X-Oc-Currency': 'MYR'
      }
    })
      .then(function () {
        getCart();
        setErrorText('');
      })
      .catch(function (error) {
        console.log(error);
        setErrorText(error.response.data.error[0]);
      })
  }

  const simpleConfirm = (e) => {

    e.preventDefault();
    if (checkSession()) {
      axios.post(API.BASE_URL + 'simpleconfirm/', {}, {
        headers: {
          'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
          'X-Oc-Session': sessionID,
          'X-Oc-Currency': 'MYR'
        }
      }, {
      })
        .then(function () {
          axios.put(API.BASE_URL + 'simpleconfirm/', {}, {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
              'X-Oc-Session': sessionID,
              'X-Oc-Currency': 'MYR'
            }
          }, {
          })
            .then(function (response) {
              orderId.current.value = response.data.data.order_id
              hashValue.current.value = generateHash()
              e.target.form.requestSubmit()
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    else {
      navigate('/')
    }
  }

const generateHash = () => {
  const plain_text = 'sit12345sit' + paymentId +
    API.BASE_URL+'eghlpaymentcallback' +
    API.BASE_URL+'eghlpaymentcallback' +
    finalTotal + 'MYR'
  // setHashValue(crypto.SHA256(plain_text).toString())
  console.log('hash value => ', plain_text)

  return crypto.SHA256(plain_text).toString()
}

const checkSession = () => {
  axios.get(API.BASE_URL + 'account/', {
    headers: {
      'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
      'X-Oc-Session': sessionID,
    }
  }, {
  })
    .then(function (response) {
      // console.log('response form check account =>', response)
    })
    .catch(function (error) {
      console.log(error);
      toast.warn("Please sign in to continue");
      navigate('/signin', { replace: true })
    })

  return true
}

return (
  <div className="checkout-container">
    <Container>
      <div className="heading pt-4">
        <h2><strong>Checkout</strong></h2>
      </div>

      <div className="checkout-det d-none d-lg-flex justify-content-between">
        <p className='item-desc'>Item Description</p>
        <p className='item-price'>Item Price</p>
        <p className='item-qty'>Qty.</p>
        <p className='item-total'>Total</p>
      </div>

      <div className="checkout-main d-md-flex justify-content-between align-items-start">
        <div className="checkout-boxes">
          {cartData.products?.map((cartProd) => {
            return (
              <React.Fragment key={cartProd.key}>
                <div className="checkout-list">
                  <div className="checkout-box">
                    <div className="checkout-img mb-4 mb-lg-0">
                      <img src={cartProd.thumb} alt="checkout" />
                    </div>
                    <div className="checkout-content">
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
                                  <p><strong>{slotPrd.name}</strong> - {slotPrd.value}</p>
                              }
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="checkout-prod-details d-flex justify-content-between justify-content-lg-start">
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

        <div className="checkout-total my-5 my-md-0 mt-lg-4 mb-lg-5">
          <div className="total-container">
            <form action="" className='join'>
              <label htmlFor="" className='mb-3'>Please let us know who is joining</label>
              <textarea name="" id=""></textarea>
            </form>
            <div className="total-details">
              <form action="" className='promo pb-4 pb-lg-0'>
                <label htmlFor="">
                  Promo / Discount code
                </label>
                <div className="input-container d-flex flex-column flex-lg-row justify-center align-items-center mt-3">
                  <input type="text" value={promoText} onChange={e => setPromoText(e.target.value)} />
                  <div className="buttons mt-3 mt-lg-0 ms-lg-3">
                    <button className="button button-fill" type='button' onClick={couponFunc}>Apply</button>
                  </div>
                </div>
              </form>
              <span className={errorText ? 'text-danger mt-3 d-flex' : ''}>{errorText ? errorText : ''}</span>

              <div className="prices d-flex justify-content-between align-itmes-center mb-md-2 pt-4 pb-lg-2">
                <p className='mb-0 '><strong>SubTotal</strong></p>
                <p className='mb-0 '><strong>RM {subTotal}</strong></p>
              </div>
              <div className="prices d-flex justify-content-between align-itmes-center mb-4 mb-md-2 pb-lg-2">
                <p className='mb-0 '><strong>Discount  {discountCode}</strong></p>
                <p className='mb-0 '><strong>RM {couponDiscount}</strong></p>
              </div>

              <div className="prices d-flex justify-content-between align-itmes-center mb-4 mb-md-2 pt-4 pb-lg-2 main-total">
                <h5><strong>Total</strong></h5>
                <h5><strong>RM {finalTotal}</strong></h5>
              </div>
            </div>
          </div>

          <form name="frmPayment" action="https://pay.e-ghl.com/IPGSG/Payment.aspx" method="post" >
            <input type="hidden" name="TransactionType" value="SALE" />
            <input type="hidden" name="PymtMethod" value="ANY" />
            <input type="hidden" name="ServiceID" value="sit" />
            <input type="hidden" name="PaymentID" value={paymentId} />
            <input type="hidden" name="OrderNumber" ref={orderId} />
            <input type="hidden" name="PaymentDesc" value={paymentDescr} />
            <input type="hidden" name="MerchantName" value="Heroes" />
            <input type="hidden" name="MerchantReturnURL"
              value={API.BASE_URL+'eghlpaymentcallback'} />
            <input type="hidden" name="MerchantCallbackURL"
              value={API.BASE_URL+'eghlpaymentcallback'} />
            <input type="hidden" name="Amount" value={finalTotal} />
            <input type="hidden" name="CurrencyCode" value="MYR" />
            <input type="hidden" name="CustName" value={getname} />
            <input type="hidden" name="CustEmail" value={getemail} />
            <input type="hidden" name="CustPhone" value={getphone.toString()} />
            <input type="hidden" name="HashValue" ref={hashValue} />
            <input type="hidden" name="LanguageCode" value="en" />
            <input className='button button-fill mt-4 mx-auto me-lg-0' type='submit' value="Make Payment" onClick={simpleConfirm} />
          </form>
        </div>
      </div>
    </Container>
  </div>
);
}

export default Checkout;