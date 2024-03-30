import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './product-reviews.scss';

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const ProductReviews = () => {
    const {id} = useParams();
    const options = [1, 2, 3, 4, 5];
    const [prodName, setProdName] = useState();
    const [prodText, setProdText] = useState();
    // const [prodRating, setProdRating] = useState(options[0]);
    const [starsSelected, selectStar] = useState(0);
    const [prodReview, setProdReview] = useState([]);
    const totalStars = 5;

    const handleName = (e) => {
      setProdName(e.target.value);
    }

    const handleText = (e) => {
      setProdText(e.target.value);
    }

    console.log("Testing", `https://heroes.a2hosted.com/index.php?route=feed/rest_api/reviews&id=${id}`)

    
    const reviewFunc = () => {
      axios.post(`https://heroes.a2hosted.com/index.php?route=feed/rest_api/reviews&id=${id}`, {
      name: prodName,
      text: prodText,
      rating: starsSelected
  },  {
        headers: {
          'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
        },
      })
      .then(function(response) {
          console.log("Products Review API", response);
      })
      .catch(function(error) {
          console.log(error);
      })
    }

    useEffect(() => {
        axios.get(`https://heroes.a2hosted.com/index.php?route=feed/rest_api/review&id=${id}`,  {
          headers: {
            'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
          },
        })
        .then(function(response) {
            console.log("Products Review GET API", response.data.data);
            setProdReview(response.data.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    },[])
    

  return (
    <div className="product-reviews px-3 py-5">
        <div className="heading mb-4">
            <h2>Add Review</h2>
        </div>
        <div className="reviews-container d-flex flex-column">
          <input type="text" value={prodName} onChange={handleName} placeholder="Enter Name" className='mb-4' />
          <textarea value={prodText} onChange={handleText} placeholder="Enter Review" className='mb-4' />
          {/* <select onChange={e => setProdRating(e.target.value)} className='mb-5'>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select> */}

{/************************************* Rating *************************************/}
          {/* <div className="star-rating">
            {[...Array(totalStars)].map((n, i) => (
              <Star
                key={i}
                selected={i < starsSelected}
                onClick={() => selectStar(i + 1)}
              />
            ))}
            <p className=' mt-3 mt-md-0 ms-md-3 mb-md-0'>
              {starsSelected} of {totalStars} stars
            </p>
          </div> */}

          {/* <input type="text" value={prodRating} onChange={handleRating}placeholder="Rating" className='mb-4' /> */}
          <button className='button button-fill' onClick={reviewFunc}>Post</button>
        </div>
        {/* <div className="reviews-carousel pt-5">
          <Carousel>
            {prodReview?.map((prodItem, i) => {
              return(
                <Carousel.Item interval={1000} key={i}>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#f26b3c", width: "20px", height: "20px", marginLeft: 4 }} />
                  <Carousel.Caption>
                    <h3>{prodItem.author}</h3>
                    <p>{prodItem.text}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
            
          </Carousel>
        </div> */}
    </div>
  )
}

export default ProductReviews