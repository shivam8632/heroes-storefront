import './App.scss';
import Routing from './routes/Routes';

import React, { useContext, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GoToTop from './GoToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/Montserrat-Regular.ttf"
import "bootstrap/dist/js/bootstrap.min.js"

import UserContext from './components/context/UserContext';

import axios from 'axios';
import { API } from './config/API';

const App = () => {
  const { userauth } = useContext(UserContext);
  const token = localStorage.getItem('logName');

  // useEffect(() => {
  //   if (localStorage.getItem('SessVal') === 'null') {
  //     sessFun()
  //   }
  // })

  // function sessFun() {
  //   axios.get(API.BASE_URL + 'session', {
  //     headers: {
  //       'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
  //     },
  //   })
  //     .then(function (response) {
  //       localStorage.setItem("SessVal", response.data.data.session)

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  return (
    <div className="App">
      <Routing />
      <GoToTop />
      <ToastContainer autoclose={2000} />
    </div>
  );
}

export default App;