import React,{ useState, useEffect} from 'react';
// import Products from './Components/Products/Products';
// import Navbar from "./Components/Navbar/Navbar";

import {Products, Navbar} from "./Components";
import Axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/pages/Home";
import Abstract from "./Components/pages/Abstract";
import Drawings from "./Components/pages/Drawings";
import OilPaint from "./Components/pages/OilPaint";
import PlainArt from "./Components/pages/PlainArt";

const App = () => {
    /*const [products, setProducts] = useState([]);
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

    console.log(products);*/
    ///                <Products products={products}/>

    return (
        <div className="container">
            <Router>
                <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Abstract" component={Abstract} />
                        <Route path="/Drawings" component={Drawings} />
                        <Route path="/OilPaint" component={OilPaint} />
                        <Route path="/PlainArt" component={PlainArt} />
                    
                    </Switch>
                </Router>
        </div>
    )
}



export default App;