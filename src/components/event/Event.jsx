import React, { useEffect, useState } from 'react'
import Container  from 'react-bootstrap/Container'

import { API } from '../../config/API';
import Sanitized from '../../Sanitized';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapPin, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import NoImage from '../../assets/img/no-image.png';
import Pagination from '../../Pagination';

import axios from 'axios';
import { Link } from 'react-router-dom';

import './event.scss'

const Event = () => {
  
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setNewSearch] = useState("");
    const [selectFilter, setSelectFilter] = useState("");

    const [recordsPerPage] = useState(10);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = events.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(events.length / recordsPerPage)

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    const filtered = !search
    ? events
    : (events.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    ))

    const inputFiltered = !search
    ? currentRecords
    : (currentRecords.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    ))

    useEffect(() => {
        axios.get(API.BASE_URL + 'products/category/63',  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              setEvents(response.data.data.items);
          })
          .catch(function(error) {
              console.log(error);
          })
    }, [])

  return (
    <div className='events pt-4'>
        <Container>
            <div className='events-header heading'>
                <h2><strong>Events</strong></h2>
            </div>
            <div className="filter w-100 d-flex justify-content-end my-2">
                    <input type="text" value={search} onChange={handleSearchChange} placeholder="Filter Events" />
                </div>
                <div className="detail-list">
                    <>
                    {search.length > 0 ? (
                        filtered?.map((prodItem) => {
                            return(
                                <div className="detail-item d-md-flex justify-content-between align-items-center" key={prodItem.id} id={prodItem.id}>
                                    <span className="detail-img mb-3 mb-md-4">
                                        <img src={prodItem.original_image} width="100" alt={NoImage} />
                                    </span>
                                    <div className="detail-content">
                                        
                                        <div className="heading-detail">
                                            <Sanitized html={prodItem.name} className="all-prod-desc" />
                                        </div>
                                        <div className="loc-detail d-flex justify-content-start align-items-center my-2">
                                            <span className="location d-flex me-2">
                                                {prodItem.location !== "" ? (
                                                    <p>
                                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f26b3c", width: "15px", height: "15px", marginRight: 4 }} /> {prodItem.location}</p>
                                                ) : ""}
                                            </span>
                                            
                                                <span className="location d-flex align-items-center">
                                                    {prodItem.rating !== 0 ? (
                                                        <p className="small mb-0 text-muted d-flex align-items-center"><FontAwesomeIcon icon={faStar} style={{ color: "#f26b3c", width: "25px", height: "25px", marginRight: 4 }} /> {prodItem.rating}/5</p>
                                                        ) :
                                                        "" 
                                                    }
                                                </span>
                                            
                                        </div>
                                        <p className='check'><strong>{prodItem.price_formated}</strong></p>
                                        <div className="detail-desc">
                                            <Sanitized html={prodItem.description} className="all-prod-desc" />
                                        </div>
                                        {/* <div className='collection d-flex mt-4 align-items-center'>
                                            {prodItem.category.length != 0 ? (
                                                    <>
                                                    In
                                                        {prodItem.category.map((prodsss, index) => {
                                                            return(
                                                                <div className="content p-0 m-0 ms-1 d-flex" key={prodsss.index}>
                                                                    <Sanitized html={(index ? 'and ' : '') + prodsss.name} className="all-prod-desc" />
                                                                </div>
                                                            )
                                                        })}
                                                    </>
                                            ) : ""
                                            }
                                            
                                        </div> */}
                                        <div className="buttons mt-2 d-flex justify-content-end">
                                            <Link to={'/product-detail/' + prodItem.id } className='button button-fill'>View</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        inputFiltered?.map((prodItem) => {
                            return(
                                <div className="detail-item d-md-flex justify-content-between align-items-center" key={prodItem.id} id={prodItem.id}>
                                    <span className="detail-img mb-3 mb-md-4">
                                        <img src={prodItem.original_image} width="100" alt={NoImage} />
                                    </span>
                                    <div className="detail-content">
                                        
                                        <div className="heading-detail">
                                            <Sanitized html={prodItem.name} className="all-prod-desc" />
                                        </div>
                                        <div className="loc-detail d-flex justify-content-start align-items-center my-2">
                                            <span className="location d-flex me-2">
                                                {prodItem.location !== "" ? (
                                                    <p>
                                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f26b3c", width: "15px", height: "15px", marginRight: 4 }} /> {prodItem.location}</p>
                                                ) : ""}
                                            </span>
                                            
                                                <span className="location d-flex align-items-center">
                                                    {prodItem.rating !=0 ? (
                                                        <p className="small mb-0 text-muted d-flex align-items-center"><FontAwesomeIcon icon={faStar} style={{ color: "#f26b3c", width: "25px", height: "25px", marginRight: 4 }} /> {prodItem.rating}/5</p>
                                                        ) :
                                                        "" 
                                                    }
                                                </span>
                                            
                                        </div>
                                        <p className='check'><strong>{prodItem.price_formated}</strong></p>
                                        <div className="detail-desc">
                                            <Sanitized html={prodItem.description} className="all-prod-desc" />
                                        </div>
                                        {/* <div className='collection d-flex mt-4 align-items-center'>
                                            {prodItem.category.length != 0 ? (
                                                    <>
                                                    In
                                                        {prodItem.category.map((prodsss, index) => {
                                                            return(
                                                                <div className="content p-0 m-0 ms-1 d-flex" key={prodsss.index}>
                                                                    <Sanitized html={(index ? 'and ' : '') + prodsss.name} className="all-prod-desc" />
                                                                </div>
                                                            )
                                                        })}
                                                    </>
                                            ) : ""
                                            }
                                            
                                        </div> */}
                                        <div className="buttons mt-2 d-flex justify-content-end">
                                            <Link to={'/event-detail/' + prodItem.id } className='button button-fill'>View</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )}
                    </>
                    <Pagination
                        nPages = { nPages }
                        currentPage = { currentPage } 
                        setCurrentPage = { setCurrentPage }
                    />
                </div>
        </Container>
    </div>
  )
}

export default Event