import React, { useState, useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import BannerOne from "../../../assets/img/Heroes-Main-1.jpg";
import BannerOneMob from "../../../assets/img/heroes1-mobile.png";
import BannerTwoMob from "../../../assets/img/heroes2-mobile.png";
import BannerTwo from "../../../assets/img/Heroes-Main-2.jpg";
import BannerThree from "../../../assets/img/Heroes-Main-3.png";
import BannerFour from "../../../assets/img/Heroes-Main-4.png";
import "./banner.scss";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrolledToHeight, setScrolledToHeight] = useState(false);
  const [maxScreenWidth, setMaxScreenWidth] = useState(992);
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', handleMobileScroll);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('scroll', handleMobileScroll);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMaxScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMobileScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 300 && window.innerWidth <= maxScreenWidth) {
      setActiveImage(2);
      setScrolledToHeight(true);
    } else if (scrollHeight < 100 && window.innerWidth <= maxScreenWidth) {
      setActiveImage(1);
      setScrolledToHeight(false);
    }
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = (e) => {
    const scrollPosition = e.pageY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollThreshold = scrollHeight - windowHeight;
  
    if (scrollPosition < windowHeight) {
      setActiveImage(1);
    } else if (scrollPosition > scrollThreshold) {
      setActiveImage(2);
    } else {
      setActiveImage(3);
    }
  };

  const handleScroll = (e) => {
    const delta = e.deltaY;
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (delta > 0 && currentSlide < 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (delta < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }
  };

  return (
    <>
      <div className="banner" onWheel={handleScroll}>
        <div>
        {scrolledToHeight ? (
          <div className={activeImage === 1 ? 'active mob-img' : 'inactive mob-img'}>
            <div style={{backgroundImage: `url(${BannerOneMob})`}} className='img one mobile' />
            <img src={BannerFour} className="four" />
          </div>
        ) : (
          <div className={activeImage === 1 ? 'active mob-img' : 'inactive mob-img'}>
            <div style={{backgroundImage: `url(${BannerTwoMob})`}} className='img one two mobile' />
            <img src={BannerThree} className="three" />
          </div>
        )}
        </div>
        <Slider
          direction="vertical"
          duration={isTransitioning ? 1000 : 0}
          slideIndex={currentSlide}
        >
          
          <div className={`banner-image ${currentSlide === 0 ? "active" : ""}`}>
            <div style={{backgroundImage: `url(${BannerOne})`}} className='img one desktop' />
            <div style={{backgroundImage: `url(${BannerThree})`}} className="upper-images" />
            
          </div>
          <div className={`banner-image ${currentSlide === 1 ? "active" : ""}`}>
            <div style={{backgroundImage: `url(${BannerTwo})`}} className='img one desktop' />
            
            
            <div style={{backgroundImage: `url(${BannerFour})`}} className="upper-image-2" />
          </div>
        </Slider>
      </div>
      <div id="digitalid-verify"></div>
    </>
  );
};

export default Banner;