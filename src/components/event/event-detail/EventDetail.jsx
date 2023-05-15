import React, { useEffect, useState, useContext } from 'react'
import Container from 'react-bootstrap/Container'

import { API } from '../../../config/API';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sanitized from '../../../Sanitized';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Calendar from 'react-calendar';
import ProductReviews from '../../product/product-reviews/ProductReviews';
import UserContext from '../../context/UserContext';

import { toast } from 'react-toastify';

import './discover-detail.scss';

const tileDisabled = ({ date }) => {
    return date < new Date()
}

export const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const EventDetail = () => {
    const { id } = useParams();
    const [prodSingle, setProdSingle] = useState();
    const [adultQty, setAdultQty] = useState(1);
    const [childQty, setChildQty] = useState(1);

    const { setCountProducts } = useContext(UserContext);

    const [timeSlots, setTimeSlots] = useState([]);
    const [bookingEvent, setBookingEvent] = useState();
    const [eventDate, setEventDate] = useState('');
    const [adultPrice, setAdultPrice] = useState('');
    const [childPrice, setChildPrice] = useState('');

    const [clickValue, setClickValue] = useState();
    const [isOpen, setIsOpen] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [cartMain, setCartMain] = useState([]);

    const [eventOptions, setEventOptions] = useState({});

    const sessionID = localStorage.getItem('SessVal')

    function slotSelected(e, index) {
        setClickValue(e);
        setIsOpen(index)
    }

    const handleSave = () => {
        if (clickValue !== undefined) {
            var arr = eventOptions;
            arr['startTime'] = clickValue;
            arr['day'] = bookingEvent.tmddatefrom;
            arr['adultQty'] = adultQty;
            arr['childQty'] = childQty;

            setShow(false);
            addToCart();
        }
    }

    const handleShow = (bookingEvent, indexCalculate) => {
        const arrTimeSlot = [];
        var tmdtimeslotes = bookingEvent.tmdtimeslotes;
        tmdtimeslotes.forEach((data) => {
            arrTimeSlot.push(data.timefrom)
        })
        setTimeSlots(arrTimeSlot)
        setShow(true);
    }

    useEffect(() => {
        axios.get(API.BASE_URL + `products/`, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
        })
            .then(function (response) {
                console.log('product =>', response)
                setProdSingle(response.data.data.items);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const addToCart = () => {
        var arr = eventOptions;
        if (arr['day'] !== '') {
            // setCountProducts(countProducts + 1);
            // setAddProducts({
            //     id: bookingEvent.product_id,
            //     slots: eventOptions,
            //     name: bookingEvent.proname,
            //     price: bookingEvent.tmdadultprice.substring(2),
            //     image: bookingEvent.image,
            //     adultQty: adultQty,
            //     childQty: childQty
            // })

            cartMain.forEach((data, index) => {
                if (data.name === 'Children')
                    cartMain[index]['option_value'].push(eventOptions.childQty);
                if (data.name === 'Adult')
                    cartMain[index]['option_value'].push(eventOptions.adultQty);
                if (data.name === 'Date')
                    cartMain[index]['option_value'].push(eventOptions.day);
                if (data.name === 'Slots')
                    cartMain[index]['option_value'].push(eventOptions.startTime)
            })

            toast.success("Product added to cart!!");
        }
        else {
            toast.warn("Please select a time slot");
        }

        const tempOptions = Object.assign({});
        
        cartMain.map((prodOp) => {
            tempOptions[prodOp.product_option_id] = prodOp.option_value[0];
        })
        


        axios.post(API.BASE_URL + 'cart/', {
            product_id: id,
            quantity: 1,
            option: tempOptions
        }, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': sessionID,
            }
        }, {
        })
            .then(function (response) {
                console.log("cart response => ", response);
                getCart()
            })

            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        axios.get(API.BASE_URL + `product_options/${id}/`, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
        })
            .then(function (response) {
                console.log("Cart Response", response)
                setCartMain(response.data.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id])

    useEffect(() => {
        axios.get(API.BASE_URL + `event/${id}/`, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
        })
            .then(function (response) {
                setBookingEvent(response.data.data[0]);

                const eventOptions = {
                    day: '', startTime: '', adultQty: '', childQty: ''
                }
                setEventOptions(eventOptions);
                setEventDate(changeDate(response.data.data[0].tmddatefrom));
                setAdultPrice(response.data.data[0].tmdadultprice);
                setChildPrice(response.data.data[0].tmdchildrenprice);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id])

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

            if (response.data.data.length !== 0) {
              setCountProducts(response.data.data.products.length)
              console.log('product count=> ', response.data.data.products.length)
            }
            else {
              setCountProducts(0)
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      useEffect(() => {
        getCart()
      }, [])

    function changeDate(date) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString([], options);
    }

    return (
        <div className="product-detail-container">
            <Container>
                <div className="detail-list">
                    {prodSingle?.map((prodItem) => {
                        return (
                            <>
                                {
                                    prodItem.id == id ? (
                                        <div className="detail-item d-md-flex justify-content-between" key={prodItem.id} id={prodItem.id}>
                                            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" align="center">
                                                <div className="carousel-inner">
                                                    {prodItem.images.map((imgs, i) => {
                                                        return (
                                                            <div className={"carousel-item" + " " + (i === 0 ? 'active' : '')}>
                                                                <img src={imgs} key={i} className="rounded" alt='' />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <ol className="carousel-indicators list-inline">
                                                    {prodItem.images.map((imgs, i) => {
                                                        return (
                                                            <li className={"list-inline-item" + " " + (i === 0 ? 'active' : '')}>
                                                                <a id={"carousel-selector-" + i} className="selected" data-bs-slide-to={i} data-bs-target="#myCarousel">
                                                                    <img src={imgs} key={i} className="img-fluid rounded" alt='' />
                                                                </a>
                                                            </li>
                                                        )
                                                    })}

                                                </ol>
                                            </div>
                                            <div className="detail-content">
                                                <h3>{prodItem.name}</h3>
                                                <span className="location d-flex me-2">
                                                    {prodItem.location !== "" ? (
                                                        <p>
                                                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f26b3c", width: "15px", height: "15px", marginRight: 4 }} /> {prodItem.location}</p>
                                                    ) : ""}
                                                </span>
                                                <p><strong>RM {prodItem.price}</strong></p>
                                                <Sanitized html={prodItem.description} />
                                                {/* <div className='collection d-flex mt-2'>
                                                In
                                                {prodItem.category.map((prodsss, index) => {
                                                    return(
                                                        <div className="content p-0 m-0 ms-1 d-flex" key={prodsss.index}>
                                                            {(index ? 'and ' : '') + prodsss.name}
                                                        </div>
                                                    )
                                                })}
                                            </div> */}
                                                <div className="buttons mt-3 d-md-flex justify-content-end">
                                                    {/* <div className="input-container mb-4 mb-md-0 me-md-3 d-lg-flex align-items-center">
                                                    <label className='me-2 mb-1 mb-md-0'>Quantity</label>
                                                    <input type="number" min="1" onKeyDown={blockInvalidChar} value={numVal} onChange={e => setNumVal(e.target.value)} />
                                                </div> */}
                                                    {/* <Link onClick={  () => addToCart(prodItem) } to={'/product-detail/' + prodItem.id } className='button button-fill'>Add to Cart</Link> */}
                                                    <div id="datepicker" className='button button-fill' onClick={() => handleShow(bookingEvent)} >Add to Cart</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                        :
                                        (
                                            ""
                                        )
                                }
                            </>
                        )
                    })}

                    <div className='modal-container'>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body>
                                <div className='modal-body d-md-flex'>
                                    <div className='slot-box heading-center m-auto'>
                                        <label className='event-eventdate-label pb-2 pt-2'>Event Date: {eventDate}</label>
                                        <p>
                                            <span>Please choose your time slot</span>
                                        </p>
                                        {
                                            timeSlots.map((number, i) =>
                                                <p className={i === isOpen ? "slot-time active" : 'slot-time'} onClick={(e) => slotSelected(number, i, e)}>{number}</p>
                                            )
                                        }
                                        {/* <p className='slot-available'>Available: {newMain}</p>                                      */}
                                    </div>
                                    <div className='slot-qty'>
                                        <div className='adult-qty'>
                                            <label className='me-2 mb-1 mb-md-0'>No. of Adult</label>
                                            <input type="number" min="1" onKeyDown={blockInvalidChar} value={adultQty} onChange={e => setAdultQty(e.target.value)} />
                                            <span className='p-2'>{adultPrice}</span>
                                        </div>
                                        <div className='child-qty pt-2'>
                                            <label className='me-2 mb-1 mb-md-0'>No. of Children</label>
                                            <input type="number" min="1" onKeyDown={blockInvalidChar} value={childQty} onChange={e => setChildQty(e.target.value)} />
                                            <span className='p-2'>{childPrice}</span>
                                        </div>
                                    </div>

                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="buttons mt-3">
                                    <Button variant="secondary" className='me-3' onClick={handleClose}>Close</Button>
                                    <Button variant="primary" onClick={handleSave}>Confirm</Button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default EventDetail