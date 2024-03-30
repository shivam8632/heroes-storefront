import React from "react";

const UserContext = React.createContext();

export const AuthProvider = ({children})=>{
    const [userauth, setAuth] = React.useState({});
    const [sessionID, setSessionID] = React.useState({});
    const [categoryProd, setCategoryProd] = React.useState();
    const [products, setProducts] = React.useState([]);
    const [countProducts, setCountProducts] = React.useState(0);
    const[addProds, setAddProds] = React.useState([]);
    const[cartCheck, setCartCheck] = React.useState([]);
    
    const setAddProducts = (data) => {
        setAddProds(addProds.concat(data));
        localStorage.setItem('cartProducts', JSON.stringify(data));
    }

    return (
        <UserContext.Provider value={{cartCheck, setCartCheck, setAddProds, addProds, setAddProducts, products,countProducts,setCountProducts, setProducts, userauth, setAuth, sessionID, setSessionID, categoryProd, setCategoryProd}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;