import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Products from './Components/Products/Products';
// import Navbar from "./Components/Navbar/Navbar";

import {Products, Navbar} from "./Components";
import Axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/pages/Home";
import Abstract from "./Components/pages/paintings/Abstract";
import Drawings from "./Components/pages/paintings/Drawings";
import OilPaint from "./Components/pages/paintings/OilPaint";
import PlainArt from "./Components/pages/paintings/PlainArt";
import SignUp from "./Components/pages/users/user/register";
import SignIn from "./Components/pages/users/user/login";
import AddProduct from "./Components/Products/add";
import { Container } from 'react-bootstrap';
import ProductDetail from './Components/pages/ProductDetail';
import Account from './Components/pages/users/user/account';
import Admin_Dashboard from './Components/pages/admin/dashboard';
import Curator_Dashboard from './Components/pages/curator/dashboard';
import Artist_Account from './Components/pages/artists/account';
import Artworks from './Components/pages/artists/artworks';
import User_Orders from './Components/pages/users/user/orders';
import Order from './Components/Orders/Order/Order';

const App = () => {

    return (
        <div>
            <Router>
                <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Abstract" component={Abstract} />
                        <Route path="/Drawings" component={Drawings} />
                        <Route path="/OilPaint" component={OilPaint} />
                        <Route path="/PlainArt" component={PlainArt} />
                        <Route path="/products/:id" component={ProductDetail}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/signin" component={SignIn}/>
                        <Route path="/addprod" component={AddProduct}/>
                        <Route path="/user/account" component={Account}/>
                        <Route path="/artist/account" component={Artist_Account}/>
                        <Route path="/artist/artworks" component={Artworks}/>
                        <Route path="/orders/:orderid" component={Order}/>
                        <Route path="/orders" component={User_Orders}/>
                        <Route path="/admin/dashboard" component={Admin_Dashboard}/>
                        <Route path="/curator/dashboard" component={Curator_Dashboard}/>
                    </Switch>
            </Router>
        </div>
    )
}



export default App;