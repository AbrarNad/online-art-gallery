import React,{ useState, useEffect} from 'react';
import Products from './../Products/ProductsBootstrap';
import Axios from "axios";
import SignUp from './users/user/register.js';
import SignIn from './users/user/login.js';
import AddProduct from '../Products/add.js';
import JumbotronExample from '../Jumbo/jumbo.js';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});

    const urlString = "http://localhost:4000/products/";
    const urlStringUser = "http://localhost:4000/users/60f412e286183f31a0d048d3";

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
        })
    }

    useEffect(()=>{
        getUser();
    },[user] );

    const productList = [];
    for(let i = 1; i <= 3; i++){
        var newArray = products.filter(function (el) {
            return el.Roomid === i;
        });
        productList.push(<div>
            <Products productData = {newArray} user={user} setUser={setUser}/>
            <hr/>
        </div>);
    }
    
    
    

    return (
        <div>
            <JumbotronExample/>
            {productList}
            <SignUp/>
            <SignIn/>
            <AddProduct/>
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

export default Home;