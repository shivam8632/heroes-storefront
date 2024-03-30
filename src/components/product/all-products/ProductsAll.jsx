import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { API } from '../../../config/API';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sanitized from '../../../Sanitized';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapPin } from '@fortawesome/free-solid-svg-icons';
import NoImage from '../../../assets/img/no-image.png';
import Pagination from '../../../Pagination';
import './products-all.scss';

const AllProduct = () => {
    const [prodSingle, setProdSingle] = useState([]);
    const [search, setNewSearch] = useState("");
    const [displayCount, setDisplayCount] = useState(15)
    

    useEffect(() => {
        axios.get(API.BASE_URL + 'products/',  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              console.log("Products APIIIII", response.data.data.items);
              setProdSingle(response.data.data.items);
          })
          .catch(function(error) {
              console.log(error);
          })
    }, [])



    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    const filtered = !search
    ? prodSingle
    : (prodSingle.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    ))

    const handleShowMore = () => {
        setDisplayCount(displayCount + 6); // increase display count by 3
    }


    console.log("Prod Check", prodSingle);
    console.log("search.length", search.length)
    return (
        <div className="product-all-container">
            <Container>
                <div className="filter w-100 d-flex justify-content-end my-4">
                    <input type="text" value={search} onChange={handleSearchChange} placeholder="Filter Products" />
                </div>
                <div className="detail-list">

                    {
                        prodSingle?.slice(0, displayCount).map((prodItem) => {
                            return(
                                <div className="detail-item d-md-flex align-items-center" key={prodItem.id} id={prodItem.id}>
                                    <span className="detail-img mb-5 mb-md-4">
                                        <img src={prodItem.original_image} width="100" alt={NoImage} />
                                    </span>
                                    <div className="detail-content">
                                        
                                        <div className="heading-detail">
                                            <Sanitized html={prodItem.name} className="all-prod-desc" />
                                        </div>
                                        <div className="loc-detail d-flex justify-content-start align-items-center my-2">
                                            <span className="location d-flex me-2">
                                                {prodItem.location != "" ? (
                                                    <p>
                                                    <FontAwesomeIcon icon={faMapPin} style={{ color: "#f26b3c", width: "15px", height: "15px", marginRight: 4 }} /> {prodItem.location}</p>
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
                                        <p className='check'><strong>Price:  {prodItem.price_formated}</strong></p>
                                        <div className="detail-desc">
                                            <Sanitized html={prodItem.description} className="all-prod-desc" />
                                        </div>
                                        <div className='collection d-flex mt-4 align-items-center'>
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
                                            
                                        </div>
                                        <div className="buttons mt-3 d-flex justify-content-end">
                                            <Link to={'/product-detail/' + prodItem.id } className='button button-fill'>Purchase</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                
                </div>
                {displayCount < prodSingle?.length && (
                    <button className="button button-fill mx-auto" onClick={handleShowMore}>Show More</button>
                )}
            </Container>
        </div>
    )
}

export default AllProduct;