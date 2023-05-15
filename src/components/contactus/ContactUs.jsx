import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@mui/material';

import ContactUsBanner from './contactus-banner/ContactUsBanner';
import './contactus.scss';

const ContactUs = () => {
  return (
    <div className='contactus'>
      <ContactUsBanner />
      <Container>
        <div className='contactus-list pt-4'>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={{ xs: 4, md: 4, lg: 6 }}
          >
            <Grid item xs={10} sm={8} md={4}>
              <div className='grid-content row heading-center justify-content-top'>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff6b35", width: "40px", height: "40px" }} />
                <p className='contactus-p-text'>ADDRESS</p>
                <p className='contactus-p-address'>
                  Persiaran Kewajipan, USJ 1,<br />
                  Suite 9.01, Menara Summit<br />
                  UEP, 47600 Subang Jaya, Selangor
                </p>
              </div>
            </Grid>
            <Grid item xs={10} sm={8} md={4}>
              <div className='grid-content row heading-center justify-content-top'>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#ff6b35", width: "40px", height: "40px" }} />
                <p className='contactus-p-text'>PHONE</p>
                <p className='contactus-p-address'>
                  012-7456 785
                </p>

              </div>
            </Grid>
            <Grid item xs={10} sm={8} md={4}>
              <div className='grid-content row heading-center justify-content-top'>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ff6b35", width: "40px", height: "40px" }} />
                <p className='contactus-p-text'>EMAIL</p>
                <p>
                  <a href="mailto:ama@heroes.my">help@heroes.my</a>
                </p>
              </div>

            </Grid>
          </Grid>
        </div>
      </Container>
      <div className='contactus-header heading'>
      </div>
    </div>
  )
}

export default ContactUs
