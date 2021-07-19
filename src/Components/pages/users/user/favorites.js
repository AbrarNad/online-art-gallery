import React,{ useState, useEffect} from 'react';
import Products from '../../../Products/ProductsBootstrap.jsx';
import Axios from "axios";
import SignUp from './register.js';
import SignIn from './login.js';
import AddProduct from '../../../Products/add.js';
import JumbotronExample from '../../../Jumbo/jumbo.js';


const Favorites = () => {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});

    const urlString = "http://localhost:4000/products/";
    const urlStringUser = `http://localhost:4000/users/${localStorage.getItem('userid')}`;

    const getProduct = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: urlString    //this is API url
        }).then((res)=>{
            console.log(res.data);
            const {data} = res;
            setProducts(data);
        })
    }

    useEffect(()=>{
        getProduct();
    },[] );


    const getUser = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: urlStringUser    //this is API url
        }).then((res)=>{
            console.log(res.data);
            const {data} = res;
            setUser(data);
            console.log(user);
        })
    }

    useEffect(()=>{
        getUser();
    },[] );

    var newArray = [];
    if(typeof user.Favorites!== 'undefined'){
      newArray = products.filter(function (el) {
        console.log(typeof(el._id));
        console.log(user.Favorites.includes(el._id));
        return user.Favorites.includes(el._id);
      });
    }
 

    return (
        <div>
            <JumbotronExample/>
            <Products productData = {newArray} user={user} setUser={setUser}/>
        </div>
    );

    /* return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{width:'100%'}}>
                <Products productData = {products}/>
            </div>
            <div>
                <SignUp/>
            </div>
            
            <SignIn/>
            <AddProduct/>
        </div>
        
    ); */
}

export default Favorites;