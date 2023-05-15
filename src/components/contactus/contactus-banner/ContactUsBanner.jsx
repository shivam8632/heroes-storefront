import React from 'react'
import BannerImg from '../../../assets/img/contact-us.jpg';

const ContactUsBanner = () => {
  return (
    <><div className="banner">
            <div className="banner-main">
                <div className="banner-image">
                    <img src={BannerImg} alt='banner-img' />
                </div>
            </div>
        </div>
        </>
  )
}

export default ContactUsBanner