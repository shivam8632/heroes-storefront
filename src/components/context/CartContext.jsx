import { createContext, useReducer, useEffect } from "react";
import { API } from '../../config/API';
import axios from 'axios';

export const CartContext = createContext({
    items: {},
    itemsCount: 0
})

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD":
            return {
                ...state,
                items: payload.items,
                itemsCount: payload.itemsCount
            };

        case "REMOVE":
            return {
                ...state,
                items: payload.items,
                itemsCount: payload.itemsCount
            };

        default:
            throw new Error("No case for that type");
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        itemsCount: 0
    });

useEffect(() => {
    getCart()
})
    const getCart = () => {
        let products, count
        axios.get(API.BASE_URL + 'cart/', {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': localStorage.getItem('SessVal'),
                'X-Oc-Currency': 'MYR'
            }
            })
            .then(function (response) {      
                if (response.data.data.length !== 0) {                 
                    count = response.data.data.products.length
                }
                else {
                    count = 0
                }
                products = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            })
        return { products, count }
    }

    const addItemToCart = (id, qty, options) => {
        function updateCart() {
            axios.post(API.BASE_URL + 'cart/', {
                product_id: id,
                quantity: qty,
                option: options
            }, {
                headers: {
                    'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                    'X-Oc-Session': localStorage.getItem('SessVal'),
                }
            })
            .then(function () {
                
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        
        updateCart()
        let data = getCart()

        dispatch({
            type: "ADD",
            payload: {
                items: data.products,
                itemsCount: data.count 
            },
        });
    };

    const removeItemFromCart = (key) => {
        function updateCart() {
                axios.delete(API.BASE_URL + 'cart/', {
                  data: {
                    key: key
                  },
                  headers: {
                    'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                    'X-Oc-Session': localStorage.getItem('SessVal'),
                    'X-Oc-Currency': 'MYR'
                  }
                })
                  .then(function () {
                    getCart()
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
              
        }
        dispatch({
            type: "REMOVE",
            payload: {
                items: updateCart,
            },
        });
    };

    const value = {
        items: state.items,
        itemsCount: state.itemsCount,
        addItemToCart,
        removeItemFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};