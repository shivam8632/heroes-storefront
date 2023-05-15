import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Pagination from '../../../Pagination';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import moment from 'moment';
import { API } from '../../../config/API';
import '../profile.scss';

export default function OrderHistory() {
    const sessionID = localStorage.getItem('SessVal');
    const [orderDetail, setOrderDetail] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    
    
     // No of Records to be displayed on each page   
     const [recordsPerPage] = useState(10);
     const indexOfLastRecord = currentPage * recordsPerPage;
     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    useEffect(() => {
        axios.get(API.BASE_URL + 'customerorders/', {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': sessionID,
                'X-Oc-Currency': 'MYR'
            }
        })
        .then(function(response) {
            setOrderDetail(response.data.data)        
        })
    
        .catch(function(error) {
            console.log(error);  
        })
    }, [])

    const currentRecords = orderDetail?.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(orderDetail?.length / recordsPerPage)

  return (
    <div className="profile-container">
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <h4 className='w-100 text-light text-start pt-4 pb-2 tabs-heading'>Your Orders</h4>
                <Row className="justify-content-between py-4 py-md-5 tab-list">
                    <Col className="side-tab mb-5 mb-md-0">
                        
                    <Nav variant="pills" className="flex-column side-main bg-light p-4">
                        <h4 className='text-start'>Orders</h4>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Order History</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col className="tab-main">
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className='bg-light p-4'>
                            <table>
                                <thead>
                                    <tr>
                                    <th>Order No.</th>
                                    <th>Date</th>                                 
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {currentRecords?.map((order, i) => {
                                    return(
                                        <tr className='order-det' key={i}>
                                            <td>{order.order_id}</td>
                                            <td>{moment(order.timestamp*1000).format('DD MMM YYYY H:mm:ss')}</td>                                      
                                            <td>{order.status}</td>
                                            <td className='text-end'>{order.total}</td>
                                            <td><Link to={'/paymentsummary/' + order.order_id} >
                                                <FontAwesomeIcon icon={faEye} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            <Pagination
                                nPages = { nPages? nPages: "" }
                                currentPage = { currentPage } 
                                setCurrentPage = { setCurrentPage }
                            />
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    </div>
  )
}