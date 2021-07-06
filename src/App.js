import React,{ useState, useEffect} from 'react';
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

const App = () => {

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
            <SignUp/>
            <SignIn/>
            <AddProduct/>
        </div>
    )
}



export default App;