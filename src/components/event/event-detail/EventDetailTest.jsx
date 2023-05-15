import React, { useEffect, useState, useContext, useCallback } from 'react'
import Container from 'react-bootstrap/Container'

import { API } from '../../../config/API';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sanitized from '../../../Sanitized';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

import { toast } from 'react-toastify';

import './event-detail.scss';

export const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const EventDetailTest = () => {
    const { id } = useParams();
    const [prodSingle, setProdSingle] = useState();
    const [adultQty, setAdultQty] = useState(1);
    const [childQty, setChildQty] = useState(1);

    const [countProducts, setCountProducts] = useState(0);

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
    const {items, itemsCount, addItemToCart} = useContext(CartContext)

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
                setProdSingle(response.data.data.items);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const addToCart = () => {
        var arr = eventOptions;
        if (arr['day'] !== '') {

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
        
        cartMain.forEach((prodOp) => {
            tempOptions[prodOp.product_option_id] = prodOp.option_value[0];
        },[])
        
        const product = {
            product_id: id,
            quantity: 1,
            option: tempOptions
        }
        addItemToCart(id, 1, tempOptions)
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
                                                            <div className={"carousel-item " + (i === 0 ? 'active' : '')} key={imgs}>
                                                                <img src={imgs} key={i} className="rounded" alt='' />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <ol className="carousel-indicators list-inline">
                                                    {prodItem.images.map((imgs, i) => {
                                                        return (
                                                            <li className={"list-inline-item " + (i === 0 ? 'active' : '')} key={i}>
                                                                <a id={"carousel-selector-" + i} className="selected" data-bs-slide-to={i} data-bs-target="#myCarousel" >
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
                                                <div className="buttons mt-3 d-md-flex justify-content-end">                           
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
                                                <p className={i === isOpen ? "slot-time active" : 'slot-time'} key={i} onClick={(e) => slotSelected(number, i, e)}>{number}</p>
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

export default EventDetailTest