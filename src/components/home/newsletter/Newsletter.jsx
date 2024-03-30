import React from "react";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faEarthAfrica, faRoute, faMountainSun, faCalendarCheck, faPercent } from '@fortawesome/free-solid-svg-icons';


import './newsletter.scss'

const Newsletter = () => {
    return(
        <div className="newsletter pt-3">
            <Container>
                <div className="heading heading-white heading-center pt-4">
                    <h2>
                        JOIN OUR <strong>MEMBERSHIP</strong>
                    </h2>     
                    <h2>
                        and enjoy
                    </h2>    
                </div>                  
                    
                <div className="achievement-list">
                    <div className="achievement-box">
                        <div>
                            <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#f26b3c", width: "57px", height: "57px" }} />  
                        </div>
                                           
                        <p className="pt-2">Exclusive invites to special events</p>
                    </div>

                    <div className="achievement-box">
                        <div className="box-header">
                            <FontAwesomeIcon icon={faPercent} style={{ color: "#f26b3c", width: "57px", height: "57px" }} />  
                        </div>                      
                        <p>Special Discounts</p>
                    </div>                   
                </div>
                <div className="pt-5">
                    <Link to='/membership' className="button button-fill mx-auto" type="submit">Subscribe Now</Link>
                </div>
                
            </Container>
        </div>
    );
}

export default Newsletter;