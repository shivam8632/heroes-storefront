import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API } from '../../config/API';

export const GetCartItems = () => {

    let sessionID = localStorage.getItem('SessVal')
    const [cartItems, setCartItems] = useState({})
    const [cartItemCount, setCartItemCount ] = useState(0);

    const getCart = () => {
        if(sessionID !== 'null') {
            axios.get(API.BASE_URL + 'cart', {
                headers: {
                    'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                    'X-Oc-Session': sessionID,
                    'X-Oc-Currency': 'MYR'
                },
            })
                .then(function (response) {
                    if(response.data.data.length !== 0 ) {
                        setCartItemCount(response.data.data.products.length)
                        setCartItems(response.data.data)
                    }
                    else{
                        setCartItemCount(0)
                        setCartItems({})
                    }         
                })
                .catch(function (error) {
                    console.log(error);
                })   
        }
        else{
            // console.log('session is null')
        }
    }
    
    useEffect(() => {
        getCart()
    }, [])

  return { cartItems, cartItemCount, getCart }
}