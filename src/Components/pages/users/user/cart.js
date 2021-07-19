import React,{ useState, useEffect} from 'react';
import Products from '../../../Products/ProductsBootstrap.jsx';
import Axios from "axios";
import JumbotronExample from '../../../Jumbo/jumbo.js';
import Navbar from '../../../Navbar/Navbar1.js';


const Carts = () => {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [cartCount, setCartCount] = useState(0);

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
    if(typeof user.Cart !== 'undefined'){
      newArray = products.filter(function (el) {
        return user.Cart.includes(el._id);
      });
    }
 

    return (
        <div>
            <Navbar user={user} cartCount={cartCount}/>
            <JumbotronExample/>
            <Products productData = {newArray} user={user} setUser={setUser}
            cartCount = {cartCount}
            setCartCount = {setCartCount}
            />
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

export default Carts;