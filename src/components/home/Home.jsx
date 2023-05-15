import React from 'react';
import Banner from './banner/Banner';
import Popular from './popular/Popular';
import Newsletter from './newsletter/Newsletter';
import Intro from './intro/Intro';
import Discover from './discover/Discover';
import Faqs from './faqs/Faqs';
import Destination from './destination/Destination';
import HomeProducts from './home-products/HomeProducts';
import LoveHeroes from './love-heroes/LoveHeroes';
import HomeLearning from './home-about/HomeAbout';


const Home = () => {

    
//     const token = localStorage.getItem('logName');
//   console.log("Home", token)

    return(
        <div className="home">
            <Banner />
            <LoveHeroes />
            <HomeLearning />
            {/* <Popular /> */}
            <Discover />
            <HomeProducts />
            {/* <Intro /> */}
            {/* <Destination /> */}
            
            <Newsletter />
            <Faqs />
            {/* <Travel /> */}
        </div>
    )
}

export default Home;