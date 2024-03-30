import React from 'react'
import Container from 'react-bootstrap/Container'

import './aboutus.scss'

const AboutUs = () => {
  return (
    <div className='aboutus heading pt-4'>
        <Container>
            <div className='aboutus-header heading'>
                <h2><strong>ABOUT US</strong></h2>
            </div>
            <div>
                <p>
                    HEROES is a fast-growing technology company that designs and develops innovative solutions for the education sector.
                </p>
                <p>
                    With more than 10 years of experience in the industry, we work with partners to improve their respective businesses, create new enterprises and build sustainable careers.
                </p>
                <p className='pt-4'> </p>
                <p>
                    HEROES aims to be a constant pillar of support by working closely with our partners and users to understand their needs, then design appropriate and effective solutions - drawing on our extensive experience and network to develop creative products that meet those needs.
                </p>
            </div>
            
            <div className='aboutus-mission heading pt-4'>
                <h2><strong>OUR MISSION</strong></h2>
            </div>
            <div>
                <p>
                    HEROES continuously seeks and implements ways to work closely with partners to aid in the success of this generation of young people while growing a sustainable and socially responsible company.
                </p>
            </div>

            <div className='aboutus-what heading pt-4'>
                <h2><strong>WHAT SETS US APART</strong></h2>
            </div>
            <div>
                <ul>
                    <li className='pt-3'>
                    We understand that products are a reflection of us and our business. With this in mind, we design our products with extensive background as professional practitioners to ensure quality products that meet the needs of our customers.
                    </li>                   
                    <li className='pt-3'>
                        We love developing products that do more, look better, and make customers happy. We believe in the customer experience from start to finish and making sure our products are designed to satisfy their needs.
                    </li>
                    <li className='pt-3'>
                        We are dedicated to providing the best possible service so that our partners can focus on growing their business.
                    </li>
                </ul>
            </div>
        </Container>
        
    </div>
  )
}

export default AboutUs