import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../config/API';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CheckSession = () => {
    let sessionID = localStorage.getItem('SessVal')
    let logInName = localStorage.getItem('logName')

    const [status, setStatus] = useState(false)
    const [isLogIn, setIsLogIn] = useState(false)

    const navigate = useNavigate();
    const notify = () => toast.success("Session expired, please sign in to continue.");

    const getSession = () => {
        if(sessionID !== 'null' && logInName !== null){
            //console.log('session id =>', sessionID, 'LogInName =>', logInName)
            axios.get(API.BASE_URL + 'account/', {
                headers: {
                    'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                    'X-Oc-Session': sessionID,
                }
            }, {
            })
                .then(() => {
                    setStatus(true)
                    setIsLogIn(true)
                })
                .catch((error) => {
                    setStatus(false)
                    setIsLogIn(false)
                    localStorage.clear();
                    localStorage.setItem('SessVal', null);
                    notify();
                    navigate('/', { replace: true })
                    console.log(error)
                })
        }          
    }

    useEffect(() => {
        getSession(sessionID)
    }, [sessionID])

    return { status, isLogIn }
}