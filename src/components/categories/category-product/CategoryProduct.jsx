import React, { useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';
import { API } from '../../../config/API';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sanitized from '../../../Sanitized';
import Pagination from '../../../Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './category-product.scss';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? "star selected" : "star"} onClick={onClick} />
  );

function CategoryProduct() {
    const {id} = useParams();
    const [prodSingle, setProdSingle] = useState([]);
    const [prodName, setProdName] = useState();
    const [prodText, setProdText] = useState();
    const [index, setIndex] = useState(0);
    // const [prodRating, setProdRating] = useState(options[0]);
    const [starsSelected, selectStar] = useState(0);
    const [prodReview, setProdReview] = useState([]);
    const totalStars = 5;
    const [filterName, setFilterName] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [search, setNewSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const [key, setKey] = useState('');
    const [trigger , setTrigger] = useState(false)
    const [currentId, setCurrentId] = useState(id)
    const [displayCount, setDisplayCount] = useState(12)

    const handleShowMore = () => {
        setDisplayCount(displayCount + 6);
    }

    const handleSelect = (name) => {
        if(name === 'All') showAllProducts()
        else {
            filterName.map((data) => {
                if (data.name === name) {
                    setCurrentId(data.filters.filter_groups[0].filter[0].filter_id) 
                    showFilteredProducts(data.filters.filter_groups[0].filter[0].filter_id)
                }                  
            })
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            setCurrentId(id)
            showFilteredProducts(id)
        }
        else {
            showAllProducts()
        }
    }, [])

    const showFilteredProducts = (filter_id) => {
        axios.get(API.BASE_URL + `products/category/65/filters/${filter_id}/`,  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              setProductsData(response.data.data.items);
              console.log("Filter", response.data.data.items)
          })
          .catch(function(error) {
              console.log(error);
          })
    }

   const showAllProducts = () => {
        axios.get(API.BASE_URL + `products/category/65`,  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
        })
        .then(function(response) {
            setProductsData(response.data.data.items);
            console.log("Category 65" ,response.data.data.items)
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    useEffect(() => {
        axios.get(API.BASE_URL + `categories/parent/64`,  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              console.log("Categories 64", response.data)
              let allFilter = [{'name': 'All'}];
              response.data.data.map((f) => {
                allFilter.push(f);
              })
              setFilterName(allFilter);
            
            response.data.data.findIndex(name => {
                name.filters.filter_groups.map(group => {
                    group.filter.map(g =>  {
                        if (g.filter_id === id) {
                            setKey(name.name);
                        }
                    })
                });
            })
    
            // Set the key state to the value of the first tab
            setKey(allFilter[0].name);
          })
          .catch(function(error) {
              console.log(error);
          })
    }, [])
    console.log('filterName',filterName)


  return (
    <div className="product-container">
        <Container>
            <div className="products-list">
                <Tabs
                    id="controlled-tab-example"
                    className="mb-3 mx-auto filter-tabs w-100 d-flex justify-content-start"
                    activeKey={key}
                    onSelect={
                        (k) => {
                        setIndex(filterName.findIndex(name=>k === name.name));  
                        setKey(k); 
                        handleSelect(k)
                    } 
                }
                >
                    
                    {filterName?.map((filterData, i) => {
                        return(
                            <Tab eventKey={filterData.name} title={<Sanitized html={filterData.name} />} key={filterData.name}>
                                {
                                    productsData?.slice(0, displayCount).map((product) => {
                                        return (
                                            <>
                                                <Link to={'/product-detail/' + product.id} className="prod-item" key={product.id} id={product.id}>
                                                    <img src={product.original_image} width="100%" className='prod-main-img' alt=''/>
                                                    
                                                    <div className="prod-content p-3">
                                                        <span className="location d-flex align-items-center w-100 my-0">
                                                            {product.location !== '' ? (
                                                                <p className="small mb-0 text-muted d-flex align-items-center">
                                                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f26b3c", width: "15px", height: "15px", marginRight: 4 }} />
                                                                    {product.location}
                                                                </p>
                                                                ) :
                                                                ""
                                                            }
                                                        </span>
                                                        <div className="package-heading">
                                                            <Sanitized html={product.name} className="all-prod-desc" />
                                                        </div>
                                                        {/* <div className="detail-desc mt-2">
                                                            <Sanitized html={product.description} className="all-prod-desc" />
                                                        </div> */}
                                                        <p className='price w-100 text-right'><strong>{product.price_formated}</strong></p>
                                                        {/* <div className="buttons">
                                                            <Link to={'/product-detail/' + product.id} className='button button-fill'>View</Link>
                                                        </div> */}
                                                    </div>
                                                    
                                                </Link>
                                            </>
                                        )
                                    })
                                }
                                {displayCount < productsData?.length && (
                                    <div className="show-button mt-5">
                                        <button className="button button-fill mx-auto" onClick={handleShowMore}>Show More</button>
                                    </div>
                                )}
                            </Tab>
                        )
                    })}
                </Tabs>
                
                {/* {
                   
                    filtered ?
                    
                            (<div className='w-100'>
                                 {   console.log("hereeeeee",`${JSON.stringify(filteredPages, null, 2)}`) }
                            <Pagination
                                nPages = { filteredPages }
                                currentPage = { currentPage } 
                                setCurrentPage = { setCurrentPage }
                            /></div>)
                    
                    :
                    (
                        <Pagination
                                nPages = { inputFilteredPages }
                                currentPage = { currentPage } 
                                setCurrentPage = { setCurrentPage }
                            />
                    )
                } */}
            </div>
        </Container>
    </div>
  )
}

export default CategoryProduct