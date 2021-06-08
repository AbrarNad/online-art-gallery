import React,{ useState, useEffect} from 'react';
// import Products from './Components/Products/Products';
// import Navbar from "./Components/Navbar/Navbar";

import {Products, Navbar} from "./Components";
import Axios from "axios";

const App = () => {
    const [products, setProducts] = useState([]);
    //const [cart, setCart] = useState({});

    const getProduct = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url:"http://localhost:4000/products/style/Digital"      //this is API url
        }).then((res)=>{
            //console.log(res.data);
            const {data} = res;
            setProducts(data);
        })
    }

    useEffect(()=>{
        getProduct();
    },[] );

    console.log(products);

    return (
        <div>
            <Navbar/>
            <Products products={products}/>
        </div>
    )
}

export default App;