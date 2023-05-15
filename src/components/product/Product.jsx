import React, { useEffect, useState,useContext } from 'react';
import { Container } from 'react-bootstrap';
import { API } from '../../config/API';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sanitized from '../../Sanitized';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import ProductReviews from './product-reviews/ProductReviews';
import UserContext from '../context/UserContext';
import { GetCartItems } from '../shared/GetCartItems'; 

import { toast } from 'react-toastify'; 

import './product.scss';

const tileDisabled = ({ date }) => {
    return date < new Date()
 }

 export const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

const Product = () => {
    const {id} = useParams();
    const [prodSingle, setProdSingle] = useState();
    const [numVal, setNumVal] = useState(1);
    const [getEndTime, setGetEndTime] = useState(0);
    const [count,setCount ] = useState(1);
    const [stTime,  setStTime] = useState([]);
    const [index,  setIndex] = useState(0);
    const [currentProduct,  setCurrentProduct] = useState({});
    const {setCountProducts, setAddProducts, cartCheck, setCartCheck }= useContext(UserContext);

    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const [value, setValue] = useState(new Date());
    const [month, setMonth] = useState(monthNames[value.getUTCMonth()]);
    const [day, setDay] = useState(value.getUTCDate());
    const [year, setYear] = useState(value.getUTCFullYear());
    const [dayName, setDayName] = useState( weekday[value.getDay()]);
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [relatedProd, setRelatedProd] = useState();
    const[test, setTest] = useState([]);
    const [clickValue, setClickValue] = useState();
    const [isOpen, setIsOpen] = useState(null);
    var testing = [];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [newMain, setnewMain] = useState([])
    const [cartMain, setCartMain] = useState([]);
    const [getIndex, setGetIndex] = useState();
    let setOptionID = []
    const secondoptionID = {};
    let bookTime = '';
    const [getProdID, setGetProd] = useState();
    const navigate = useNavigate()
    const { cartItems, cartItemCount, getCart } = GetCartItems({})

    const sessionID = localStorage.getItem('SessVal');

    const[datesArr, setDatesArr] = useState();
    const[getCategory, setGetCategory] = useState();
    var newArr = [];

    function testCheck(e, index) {
        setClickValue(e);
        // console.log("Check" ,e);
        if(e != "-") {
            setIsOpen(index)
        }
        else {
            // console.log("Noooooo")
            setIsOpen("")
        }
        // console.log("INDEX", index)  
    }
    
    const onChangeDate = (e) =>{
        setValue(e)
        setMonth(monthNames[e.getUTCMonth()])
        setDay(e.getUTCDate()+1)
        setYear(e.getUTCFullYear())
        setDayName(weekday[e.getDay()])

        for( var j=0; j<= [getIndex]; j++) {
            console.log("GETINDEX", getIndex)
            if(j==[getIndex]) {
                if(relatedProd?.length > 0) {
                    bookTime = currentProduct.appointment_booking.slot_qyt[j];
                    setnewMain(currentProduct.appointment_booking.slot_qyt[j])
                }
                else if(relatedProd?.length == 0) {
                    bookTime = currentProduct.slots.slot_qyt;
                    setnewMain(currentProduct.slots.slot_qyt)
                    if(newMain=="") {
                        // console.log("Empty New Main")
                    }
                }
            }
        }
        
        if(relatedProd?.length > 0) {
            if(relatedProd[getIndex] != "" && relatedProd[getIndex].appointment_booking.same_slot_for_all_days != 1) {
                
                // MONDAY
                if(weekday[e.getDay()] == "Monday") {
                    if(relatedProd[getIndex].appointment_booking.Monday_stime != undefined || "" || null) {
                        for (var i=0; i<relatedProd[getIndex].appointment_booking.Monday_stime.length; i++) {
                            testing.push(relatedProd[getIndex].appointment_booking.Monday_stime[i]+ "-" + relatedProd[getIndex].appointment_booking.Monday_ltime[i])
                            setTest(testing)
                        }
                    }
                }

                // TUESDAY
                if(weekday[e.getDay()] == "Tuesday") {
                    if(relatedProd[getIndex].appointment_booking.Tuesday_stime != undefined || "" || null) {
                        for (var i=0; i<relatedProd[getIndex].appointment_booking.Tuesday_stime.length; i++) {
                            testing.push(relatedProd[getIndex].appointment_booking.Tuesday_stime[i]+ "-" + relatedProd[getIndex].appointment_booking.Tuesday_ltime[i])
                            setTest(testing)
                        }
                    }
                }

                // WEDNESDAY
                if(weekday[e.getDay()] == "Wednesday") {
                    if(relatedProd[getIndex].appointment_booking.Wednesday_stime != undefined || "" || null) {
                        for (var i=0; i<relatedProd[getIndex].appointment_booking.Wednesday_stime.length; i++) {
                            testing.push(relatedProd[getIndex].appointment_booking.Wednesday_stime[i]+ "-" + relatedProd[getIndex].appointment_booking.Wednesday_ltime[i])
                            setTest(testing)
                        }
                    }
                }

                // THURSDAY
                if(weekday[e.getDay()] == "Thursday") {
                    if(relatedProd[getIndex].appointment_booking.Thursday_stime != undefined || "" || null) {
                        for (var i=0; i<relatedProd[getIndex].appointment_booking.Thursday_stime.length; i++) {
                            testing.push(relatedProd[getIndex].appointment_booking.Thursday_stime[i]+ "-" + relatedProd[getIndex].appointment_booking.Thursday_ltime[i])
                            setTest(testing)
                        }
                    }
                }

                // FRIDAY
                if(weekday[e.getDay()] == "Friday") {
                    if(relatedProd[getIndex].appointment_booking.Friday_stime != undefined || "" || null) {
                        for (var i=0; i<relatedProd[getIndex].appointment_booking.Friday_stime.length; i++) {
                            testing.push(relatedProd[getIndex].appointment_booking.Friday_stime[i]+ "-" + relatedProd[getIndex].appointment_booking.Friday_ltime[i])
                            setTest(testing)
                        }
                    }
                }

                // SATURDAY
                if(weekday[e.getDay()] == "Saturday") {
                    if(relatedProd[getIndex].appointment_booking.Saturday_stime != undefined || "" || null) {
                        for (var i=0; i<relatedProd[getIndex].appointment_booking.Saturday_stime.length; i++) {
                            testing.push(relatedProd[getIndex].appointment_booking.Saturday_stime[i]+ "-" + relatedProd[getIndex].appointment_booking.Saturday_ltime[i])
                            setTest(testing)
                        }
                    }
                }

                // SUNDAY
                if(weekday[e.getDay()] == "Sunday") {
                    if(relatedProd[getIndex].appointment_booking.Sunday_stime != undefined || "" || null) {
                        for (var i=0; i<relatedProd[getIndex].appointment_booking.Sunday_stime.length; i++) {
                            testing.push(relatedProd[getIndex].appointment_booking.Sunday_stime[i]+ "-" + relatedProd[getIndex].appointment_booking.Sunday_ltime[i])
                            setTest(testing)
                        }
                    }
                }
            }
        }
        else if (relatedProd?.length == 0){
            // MONDAY
            console.log("GET", getProdID)
            prodSingle.map((prod, i) => {
                console.log(getProdID)
                console.log(getProdID)
                if(getProdID == prod.id) {
                    console.log(prod)
                    console.log("Inside IF")
                    if(weekday[e.getDay()] == "Monday") {
                        if(prod.slots.Monday_stime != undefined || "" || null) {
                            for (var i=0; i<prod.slots.Monday_stime.length; i++) {
                                testing.push(prod.slots.Monday_stime[i]+ "-" + prod.slots.Monday_ltime[i])
                                setTest(testing)
                            }
                            // console.log("Monday", test)
                        }
                        // console.log("Monday", test)
                    }
        
                    // TUESDAY
                    if(weekday[e.getDay()] == "Tuesday") {
                        if(prod.slots.Tuesday_stime != undefined || "" || null) {
                            for (var i=0; i<prod.slots.Tuesday_stime.length; i++) {
                                testing.push(prod.slots.Tuesday_stime[i]+ "-" + prod.slots.Tuesday_ltime[i])
                                setTest(testing)
                            }
                        }
                    }
        
                    // WEDNESDAY
                    if(weekday[e.getDay()] == "Wednesday") {
                        if(prod.slots.Wednesday_stime != undefined || "" || null) {
                            for (var i=0; i<prod.slots.Wednesday_stime.length; i++) {
                                testing.push(prod.slots.Wednesday_stime[i]+ "-" + prod.slots.Wednesday_ltime[i])
                                setTest(testing)
                            }
                        }
                    }
        
                    // THURSDAY
                    if(weekday[e.getDay()] == "Thursday") {
                        if(prod.slots.Thursday_stime != undefined || "" || null) {
                            for (var i=0; i<prod.slots.Thursday_stime.length; i++) {
                                testing.push(prod.slots.Thursday_stime[i]+ "-" + prod.slots.Thursday_ltime[i])
                                setTest(testing)
                            }
                        }
                        // console.log("Thursday", test)
                    }
        
                    // FRIDAY
                    if(weekday[e.getDay()] == "Friday") {
                        if(prod.slots.Friday_stime != undefined || "" || null) {
                            for (var i=0; i<prod.slots.Friday_stime.length; i++) {
                                testing.push(prod.slots.Friday_stime[i]+ "-" + prod.slots.Friday_ltime[i])
                                setTest(testing)
                            }
                        }
                    }
        
                    // SATURDAY
                    if(weekday[e.getDay()] == "Saturday") {
                        if(prod.slots.Saturday_stime != undefined || "" || null) {
                            for (var i=0; i<prod.slots.Saturday_stime.length; i++) {
                                testing.push(prod.slots.Saturday_stime[i]+ "-" + prod.slots.Saturday_ltime[i])
                                setTest(testing)
                                // console.log("Saturday",test)
                            }
                        }
                    }
        
                    // SUNDAY
                    if(weekday[e.getDay()] == "Sunday") {
                        if(prod.slots.Sunday_stime != undefined || "" || null) {
                            console.log(prod)
                            for (var i=0; i<prod.slots.Sunday_stime.length; i++) {
                                console.log(prod.slots.Sunday_stime[i]+ "-" + prod.slots.Sunday_ltime[i])
                                testing.push(prod.slots.Sunday_stime[i]+ "-" + prod.slots.Sunday_ltime[i])
                                setTest(testing)
                                console.log("SUNDAY", test)
                            }
                        }
                    }
                }
            })
        }
        
    } 

    const handleSave = (e, i) =>{ 
        // console.log('test2',e);
        var arr = stTime;
        console.log("ARR+++++====>", arr)
        // console.log("DATE===============>", value)
        if(relatedProd?.length > 0) {
            arr[index]['day'] = value.getUTCDate() + 1 + " " + monthNames[value.getUTCMonth()] + " " + value.getUTCFullYear()
            for (var i=0; i< test.length; i++) {
                arr[index]['startTime'] = clickValue;
                arr[index]['relatedName'] = currentProduct.name
            }
            arr[index]['active'] = console.log("ARR",arr)
        }
        else {
            arr[0]['day'] = value.getUTCDate() + " " + monthNames[value.getUTCMonth()] + " " + value.getUTCFullYear()
            for (var i=0; i< test.length; i++) {
                arr[0]['startTime'] = clickValue;
                arr[0]['relatedName'] = currentProduct.name
            }
        arr['active'] = console.log("ARR",arr)
        }
        setShow(false);
    }

    console.log("St Time", stTime)

    const handleShow = (product,indexCalculate) =>{
        
        setGetIndex(indexCalculate)
        if(product !="") {
            if(product != "" && product.appointment_booking.same_slot_for_all_days == 1) {
                for(var i = 0; i<product.appointment_booking.start_time.length; i++) {
                    testing.push(product.appointment_booking.start_time[i] + "-" + product.appointment_booking.end_time[i])
                    setTest(testing)
                }
            }
            
            if(product != "" && product.appointment_booking.same_slot_for_all_days != 1) {
                test.length = 0
                // console.log('testinggg',test);
                // MONDAY
                if(product.appointment_booking.Monday_stime == undefined || "" || null) {
                    var monday = moment().startOf('month').day("Monday");
                    if (monday.date() > 7) monday.add(7,'d');
                    var month = monday.month();
                    while(month === monday.month()){
                        monday.add(7,'d');
                        newArr = [...newArr ,monday.toString().slice(8,10) + "-" + (((month + 1).toString()).padStart(2, '0')) + "-" + monday.toString().slice(11, 15)]
                    }
                }

                // TUESDAY
                if(product.appointment_booking.Tuesday_stime == "" || undefined || null) {
                    var tuesday = moment().startOf('month').day("Tuesday");
                    if (tuesday.date() > 7) tuesday.add(7,'d');
                    var month = tuesday.month();
                    // console.log("MONTH", month)
                    while(month === tuesday.month()){
                        tuesday.add(7,'d');
                        newArr = [...newArr ,tuesday.toString().slice(8,10) + "-" + (((month + 1).toString()).padStart(2, '0')) + "-" + tuesday.toString().slice(11, 15)]
                    }
                }

                // WEDNESDAY
                if(product.appointment_booking.Wednesday == undefined || "" || null) {
                    var wednesday = moment().startOf('month').day("Wednesday");
                    if (wednesday.date() > 7) wednesday.add(7,'d');
                    var month = wednesday.month();
                    while(month === wednesday.month()){
                        wednesday.add(7,'d');
                        newArr = [...newArr ,wednesday.toString().slice(8,10) + "-" + (((month + 1).toString()).padStart(2, '0')) + "-" + wednesday.toString().slice(11, 15)]
                    }

                }

                // THURSDAY
                if(product.appointment_booking.Thursday_stime == undefined || "" || null) {
                    var thursday = moment().startOf('month').day("Thursday");
                    if (thursday.date() > 7) thursday.add(7,'d');
                    var month = thursday.month();
                    while(month === thursday.month()){
                        thursday.add(7,'d');
                        newArr = [...newArr ,thursday.toString().slice(8,10) + "-" + (((month + 1).toString()).padStart(2, '0')) + "-" + thursday.toString().slice(11, 15)]
                    }
                }

                // FRIDAY
                if(product.appointment_booking.Friday_stime == "" || undefined || null) {
                    var friday = moment().startOf('month').day("Friday");
                    if (friday.date() > 7) friday.add(7,'d');
                    var month = friday.month();
                    while(month === friday.month()){
                        friday.add(7,'d');
                        newArr = [...newArr ,friday.toString().slice(8,10) + "-" + (((month + 1).toString()).padStart(2, '0')) + "-" + friday.toString().slice(11, 15)]
                    }
                }

                // SATURDAY
                if(product.appointment_booking.Saturday_stime == undefined || "" || null) {
                    var saturday = moment().startOf('month').day("Saturday");
                    if (saturday.date() > 7) saturday.add(7,'d');
                    var month = saturday.month();
                    while(month === saturday.month()){
                        saturday.add(7,'d');
                        newArr = [...newArr ,saturday.toString().slice(8,10) + "-" + (((month + 1).toString()).padStart(2, '0')) + "-" + saturday.toString().slice(11, 15)]
                    }
                }

                // SUNDAY
                if(product.appointment_booking.Sunday_stime == "" || undefined || null) {
                    var sunday = moment().startOf('month').day("Sunday");
                    if (sunday.date() > 7) sunday.add(7,'d');
                    var month = sunday.month();
                    while(month === sunday.month()){
                        sunday.add(7,'d');
                        newArr = [...newArr ,sunday.toString().slice(8,10) + "-" + (((month + 1).toString()).padStart(2, '0')) + "-" + sunday.toString().slice(11, 15)]
                    }
                }
                console.log("NEEEE", newArr)
            }

            console.log("NEWARR", datesArr);
            setDatesArr(newArr)
            
            
            setShow(true);
            setGetEndTime(product.product_id)
            setIndex(indexCalculate )
            setCurrentProduct(product);
            setDateFrom(product.appointment_booking.wk_booking_res_date_from);
            setDateTo(product.appointment_booking.wk_booking_res_date_to);
        } else {
            toast.warn("No Slots Available!")
        }
    }

    const handleSlotShow = (product,indexCalculate) =>{
        setGetProd(product.id)
        console.log("IDDDDDDD", id)
        
        indexCalculate = 1;
        setGetIndex(indexCalculate)
        const dates = [];
        const sliceStartMonth = product.slots.wk_booking_res_date_from.slice(5,7);
        const sliceStartYear = product.slots.wk_booking_res_date_from.slice(0,4);
        const sliceEndMonth = product.slots.wk_booking_res_date_to.slice(5,7);
        const sliceEndYear = product.slots.wk_booking_res_date_to.slice(0,4);
        const start = moment(`${sliceStartYear}-${sliceStartMonth}`, 'YYYY-MM').startOf('month');
        const end = moment(`${sliceEndYear}-${sliceEndMonth}`, 'YYYY-MM').endOf('month');
        // let currentDate = moment(start);
        if(product !="") {
            console.log(product)
            test.length = 0
            // MONDAY
            if(product.slots.Monday_stime[0] == "" || undefined || null) {
                const dayOfWeek = 1;
                let currentDate = moment(start).startOf('day').day(dayOfWeek);
                while (currentDate.isSameOrBefore(end)) {
                    if (currentDate.day() === dayOfWeek) {
                        dates.push(currentDate.format('DD-MM-YYYY'));
                    }
                    
                    currentDate = currentDate.add(7, 'days');
                }
                newArr = newArr.concat(dates)
            }

            // TUESDAY
            if(product.slots.Tuesday_stime == "" || undefined || null) {
                const dayOfWeek = 2;
                let currentDate = moment(start).startOf('day').day(dayOfWeek);
                while (currentDate.isSameOrBefore(end)) {
                    if (currentDate.day() === dayOfWeek) {
                        dates.push(currentDate.format('DD-MM-YYYY'));
                    }
                    
                    currentDate = currentDate.add(7, 'days');
                }
                newArr = newArr.concat(dates)
            }

            // WEDNESDAY
            if(product.slots.Wednesday == undefined || "" || null) {
                const dayOfWeek = 3;
                let currentDate = moment(start).startOf('day').day(dayOfWeek);
                while (currentDate.isSameOrBefore(end)) {
                    if (currentDate.day() === dayOfWeek) {
                        dates.push(currentDate.format('DD-MM-YYYY'));
                    }
                    
                    currentDate = currentDate.add(7, 'days');
                }
                newArr = newArr.concat(dates)

            }

            // THURSDAY
            if(product.slots.Thursday_stime == "" || undefined || null) {
                const dayOfWeek = 4;
                let currentDate = moment(start).startOf('day').day(dayOfWeek);
                while (currentDate.isSameOrBefore(end)) {
                    if (currentDate.day() === dayOfWeek) {
                        dates.push(currentDate.format('DD-MM-YYYY'));
                    }
                    
                    currentDate = currentDate.add(7, 'days');
                }
                newArr = newArr.concat(dates)
            }

            // FRIDAY
            if(product.slots.Friday_stime == "" || undefined || null) {
                const dayOfWeek = 5;
                let currentDate = moment(start).startOf('day').day(dayOfWeek);
                while (currentDate.isSameOrBefore(end)) {
                    if (currentDate.day() === dayOfWeek) {
                        dates.push(currentDate.format('DD-MM-YYYY'));
                    }
                    
                    currentDate = currentDate.add(7, 'days');
                }
                newArr = newArr.concat(dates)
            }

            // SATURDAY
            if(product.slots.Saturday_stime == "" || undefined || null) {
                const dayOfWeek = 6;
                let currentDate = moment(start).startOf('day').day(dayOfWeek);
                while (currentDate.isSameOrBefore(end)) {
                    if (currentDate.day() === dayOfWeek) {
                        dates.push(currentDate.format('DD-MM-YYYY'));
                    }
                    
                    currentDate = currentDate.add(7, 'days');
                }
                newArr = newArr.concat(dates)
            }

            // SUNDAY
            if(product.slots.Sunday_stime == "" || undefined || null) {
                const dayOfWeek = 0;
                let currentDate = moment(start).startOf('day').day(dayOfWeek);
                while (currentDate.isSameOrBefore(end)) {
                    if (currentDate.day() === dayOfWeek) {
                        dates.push(currentDate.format('DD-MM-YYYY'));
                    }
                    
                    currentDate = currentDate.add(7, 'days');
                }
                newArr = newArr.concat(dates)
            }

            // console.log("NEWARR", newArr);
            setDatesArr(newArr)
            
            setShow(true);
            setGetEndTime(product.product_id)
            setIndex(indexCalculate)
            setCurrentProduct(product);
            setDateFrom(product.slots.wk_booking_res_date_from);
            setDateTo(product.slots.wk_booking_res_date_to);
            // console.log(dateTo)
        } else {
            toast.warn("No Slots Available!")
        }
    }
    
    // console.log("INDEX=====>" ,getIndex)

    let timefrom = Date.parse(dateFrom);
    var dateStart = new Date(dateFrom);
    // console.log("timefrom", dateStart)

    let timeEnd = Date.parse(dateTo);
    var dateEnd = new Date(timeEnd);
    // console.log("timeEnd", dateEnd)
    
    useEffect(() => {
        axios.get(API.BASE_URL + 'products/',  {
            headers: {
              'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              console.log("Products APIIIII", response.data.data.items);
              setProdSingle(response.data.data.items);
              setGetCategory(response.data.data.items.category);
            //   console.log("Products Categories", getCategory)
          })
          .catch(function(error) {
              console.log(error);
          })
    }, [])

    console.log("CART", cartMain);

    {cartMain.map((prodOp) => {
        // setOptionID.push(prodOp.product_option_id);
        setOptionID.push({[prodOp.product_option_id]:prodOp.option_value})
        // secondoptionID({[prodOp.product_option_id]:prodOp.option_value})
        secondoptionID[prodOp.product_option_id] = prodOp.option_value
        console.log("option_id", prodOp.product_option_id);
    })}
    
    // console.log("setOptionID", secondoptionID)

    const option = {}
    
    setOptionID.map((i)=>{
        option[i.product_option_id] = i.option_value
    })

    // console.log("Option Value",option);

    const checkSession = () => {
        axios.get(API.BASE_URL + 'account/', {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': sessionID,
            }
        }, {
        })
            .then(function (response) {
                // console.log('response form check account =>', response)
            })
            .catch(function (error) {
                console.log(error);
                toast.warn("Please sign in to continue");
                navigate('/signin', { replace: true })
            })

        return true
    }

    const addToCart = (value) => {
        // console.log('checksesion => ', checkSession())
        if (checkSession()) {
           addCart(value)
        }
    }

    const addCart=(value, i)=>{
        console.log("VALUE========>", value)
        var arr = stTime;
        // console.log("==========ARRRR===========", arr)

        if(value.category[0]?.name=="Activity" || value.category[1]?.name=="Activity" || value.category[3]?.name=="Activity" || value.category[4]?.name=="Activity" || value.category[5]?.name=="Activity" || value.name== "S.T.E.M") {
            console.log("INSIDE FIRST CONDITION")
            if(relatedProd?.length > 0) {
                console.log("INSIDE SECOND CONDITION")
                if(arr[index]['day'] != '') {
                    setCount((count) => count + 1);
                    setCountProducts(count);
                    setAddProducts({
                        id: value.product_id,
                        slots: stTime,
                        name: value.name,
                        price: value.price,
                        image: value.original_image,
                        quantity: numVal,
                    })
        
                    stTime.map((checkT) => {
                        console.log(checkT.startTime);
                        cartMain[0]['option_value'].push(checkT.startTime)
                        cartMain[1]['option_value'].push(checkT.relatedName)
                        cartMain[2]['option_value'].push(checkT.day)
                    })
                    
                    console.log("stTime[0].day", stTime[0].startTime)
                    
                }
            }
            else if(relatedProd?.length == 0 ) {
                console.log("INSIDE THIRD CONDITION")
                if(arr[0]['day'] != '') {
                    setCount((count) => count + 1);
                    setCountProducts(count);
                    setAddProducts({
                        id: value.product_id,
                        slots: stTime,
                        name: value.name,
                        price: value.price,
                        image: value.original_image,
                        quantity: numVal,
                    })
        
                    stTime.map((checkT) => {
                        console.log(checkT.startTime);
                        cartMain[0]['option_value'].push(checkT.startTime)
                        cartMain[1]['option_value'].push(checkT.relatedName)
                        cartMain[2]['option_value'].push(checkT.day)
                    })
                    
                    console.log("stTime[0].day", stTime[0].startTime)
                    
                }
            }
            else {
                toast.warn("Please select all slots");
            }
        }
        else {
            setCount((count) => count + 1);
                setCountProducts(count);
                setAddProducts({
                    id: value.product_id,
                    slots: stTime,
                    name: value.name,
                    price: value.price,
                    image: value.original_image,
                    quantity: numVal,
                })
    
                stTime.map((checkT) => {
                    console.log(checkT.startTime);
                    cartMain[0]['option_value'].push(checkT.startTime)
                    cartMain[1]['option_value'].push(checkT.relatedName)
                    cartMain[2]['option_value'].push(checkT.day)
                })
                
                console.log("stTime[0].day", stTime[0].startTime)
                toast.success("Product added to cart successfully!!");
        }
        

        axios.post(API.BASE_URL + 'cart/', {
            product_id: id,
            quantity: numVal,
            option: secondoptionID
        }, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'X-Oc-Session': sessionID,
            }}, {
        })
        .then(function(response) {
            console.log("Login Add" ,response);
            setCartCheck(response.data.data);
            toast.success("Product added to cart successfully!!");
        })

        .catch(function(error) {
            console.log(error);
            if(error.response.data.error?.length > 0) {
                toast.warn("Please Select all Slots")
            }
        }) 
    }

    useEffect(() => {
        getCart()
        setCountProducts(cartItemCount)
    }, [cartItemCount])
    
    console.log("CartCheck", cartCheck);

    useEffect(() => {
        axios.get(API.BASE_URL + `product_options/${id}/`, {
            headers: {
                'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
            },
          })
          .then(function(response) {
              // console.log("Product Options Response", response)
              setCartMain(response.data.data[0]);
          })
          .catch(function(error) {
              console.log(error);
          })

            axios.get(API.BASE_URL + `related/${id}/`, {
                headers: {
                    'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                },
            })
                .then(function (response) {
                    // console.log("Related Products APIIIII", response.data.data);
                    setRelatedProd(response.data.data);
                    var arr = [];
    
                    for (var i = 0; i < response.data.data.length + 1; i++) {
                        // console.log("in loop --->",i)
                        arr.push({ day: '', startTime: '', relatedName: '', book_time: '' })
                    }
                    // console.log("stTimee-eeeeeeeeeeeeeeeeeee", arr)
                    setStTime(arr)
                })
                .catch(function (error) {
                    // console.log(error);
                })
    }, [id])

    console.log("Dates Array" ,datesArr)


    return (
    <div className="product-detail-container productss">
        <Container>
            <div className="detail-list">
                {prodSingle?.map((prodItem) => {
                    return(
                        <>
                        {
                            prodItem.id == id ? (
                                <div className="detail-item d-md-flex justify-content-between" key={prodItem.id} id={prodItem.id}>

                                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" align="center">
                                        <div className="carousel-inner">
                                            {prodItem.images.map((imgs, i) => {
                                                return(
                                                    <div className={"carousel-item " + (i === 0? 'active' : '')} key={i}>
                                                        <img src={imgs} key={i} className="rounded" alt='' />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <ol className="carousel-indicators list-inline">
                                        {prodItem.images.map((imgs, i) => {
                                            return(
                                                <li className={"list-inline-item " + (i===0? 'active' : '')} key={i}>
                                                    <a id={"carousel-selector-" + i} className="selected" data-bs-slide-to={i} data-bs-target="#myCarousel">
                                                        <img src={imgs} key={i} className="img-fluid rounded" alt='' />
                                                    </a>
                                                </li>
                                            )
                                        })}
                                        
                                        </ol>
                                    </div>
                                    <div className="detail-content">
                                        <h3>{prodItem.name}</h3>
                                        <p><strong>RM {prodItem.price.toFixed(2)}</strong></p>
                                        <Sanitized html={prodItem.description} />
                                        <div className="buttons mt-3 d-md-flex justify-content-between align-items-end">
                                            <div className="input-container mb-4 mb-md-0 me-md-3 d-lg-flex align-items-center">
                                                <label className='me-2 mb-1 mb-md-0'>Quantity</label>
                                                <input type="number" min="1" onKeyDown={blockInvalidChar} value={numVal} onChange={e => setNumVal(e.target.value)} />
                                            </div>
                                            <Link onClick={  () => addToCart(prodItem) } to={'/product-detail/' + prodItem.id } className='button button-fill'>Add to Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            (
                                ""
                            )
                        }
                        </>
                    )
                })}
                
                <div className={`related-main ${relatedProd?.length > 0 ? "" : "related-zero"}`}>
                    {relatedProd?.length > 0 ? (
                        <div className="heading related-heading mt-5">
                            <h2>Journeys Included</h2>
                        </div>
                    ) : ""}
                
                    <div className="related-container">
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Body>
                                    <div className='calender d-md-flex'>
                                        <Calendar 
                                        onChange={(e)=>{ onChangeDate(e) }}
                                        maxDate={dateEnd}
                                        minDate={dateStart}
                                        tileClassName={({ date, view }) => {
                                            if(datesArr.find(x=>x===moment(date).format("DD-MM-YYYY"))){
                                            return 'highlight'
                                            }
                                        }}
                                        tileDisabled={tileDisabled}
                                        />
                                        <div className="calender-dates mt-3 mt-md-4 mt-md-0 px-4 py-3" id={getEndTime}>
                                            <h3>{month} {day} {year}</h3>
                                            <h5>{dayName}</h5>
                                            <div className='slot-box'>
                                                {
                                                    test.length > 0 ? (
                                                    <>
                                                        {test.map((number, i) =>
                                                        <p className={i == isOpen && number !="-" ? "slot-time active" : 'slot-time'} onClick={(e) => testCheck(number, i, e)}>Time Slot: {number}</p>)
                                                        }
                                                        <p className='slot-available'>Available: {newMain}</p>
                                                    </>
                                                    ) : (<p className='text-white fs-4'>Please Select a Date</p>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div className="slots-avail w-100 d-flex justify-content-between justify-content-md-start flex-wrap">
                                        <div className="avail-box d-flex align-items-center">
                                            <span className='not'></span>
                                            <p className='mb-0'>Not available</p>
                                        </div>
                                        <div className="avail-box d-flex align-items-center ms-md-4">
                                            <span className='start'></span>
                                            <p className='mb-0'>Available</p>
                                        </div>
                                        {/* <div className="avail-box d-flex align-items-center">
                                            <span className='partial'></span>
                                            <p className='mb-0'>Partial available</p>
                                        </div>
                                        <div className="avail-box d-flex align-items-center">
                                            <span className='booked'></span>
                                            <p className='mb-0'>Booked</p>
                                        </div> */}
                                    </div>
                                    <div className="buttons mt-3">
                                        <Button variant="secondary" className='me-3' onClick={handleClose}>Close</Button>
                                        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                                    </div>
                                </Modal.Footer>
                            </Modal>

                        {
                            relatedProd?.length > 0 ? (
                                relatedProd?.map((relatedItem, i ) => {
                                            
                                    return(
                                        <div className="related-item" key={i} >
                                            <img src={relatedItem.thumb} width="100" className='related-main-img' />
                                            <div className="related-content">
                                                <div className="package-heading">
                                                    <Sanitized html={relatedItem.name} className="all-related-desc" />
                                                </div>
        
                                                <span className="location d-flex align-items-center">
                                                    {relatedItem.rating !=0 ? (
                                                        <p className="small mb-0 text-muted d-flex align-items-center">
                                                            <FontAwesomeIcon icon={faStar} style={{ color: "#f26b3c", width: "25px", height: "25px", marginRight: 4 }} />
                                                            {relatedItem.rating}/5
                                                        </p>
                                                    ) :
                                                        "" 
                                                    }
                                                </span>
        
                                                <div className="detail-desc">
                                                    <Sanitized html={relatedItem.description} className="all-related-desc" />
                                                </div>
        
                                                <div className="related-slots d-md-flex justify-content-between align-items-center mt-3">
                                                    <div className="slot mt-4 mt-md-0 p-3 align-items-center">
                                                        <h4 className='slot-heading mb-0'> Slot: {`${stTime[i]['startTime']}` ? (`${stTime[i]['startTime']}`):("Select Slot") }  <span className='slot-heading01'> {`${stTime[i]['day']}`}</span>
                                                        </h4>
                                                    </div>
                                                                                                    
                                                    <div className="buttons mt-4 mt-md-0">
                                                        <div id="datepicker" className='button button-fill' onClick={() =>  handleShow(relatedItem,i)} >Choose Slot</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : prodSingle?.map((prodSlots, i) => {
                                return(
                                    prodSlots.id == id ? (
                                        <div className="related-slots d-md-flex justify-content-between align-items-center mt-3">
                                            <div className="slot mt-4 mt-md-0 p-3 align-items-center">
                                                <h4 className='slot-heading mb-0'> Slot: {`${stTime[0]['startTime']}` != "" ? (`${stTime[0]['startTime']}`):("Select Slot") }  <span className='slot-heading01'> {`${stTime[0]['day']}`}</span>
                                                </h4>
                                            </div>
                                                                                                    
                                            <div className="buttons mt-4 mt-md-0">
                                                <div id="datepicker" className='button button-fill' onClick={() =>  handleSlotShow(prodSlots, i)} >Choose Slot</div>
                                            </div>
                                        </div>
                                        
                                    ) : ""
                                    
                                )
                            })
                        }
                    </div>
                </div>
                {/* <ProductReviews /> */}
            </div>
        </Container>
    </div>
    )
}

export default Product