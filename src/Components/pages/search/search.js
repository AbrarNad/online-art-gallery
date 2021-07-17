import React,{ useState, useEffect } from 'react';
import Products from '../../Products/ProductsBootstrap.jsx';
import Axios from "axios";
import SignUp from '../users/user/register.js';
import SignIn from '../users/user/login.js';
import AddProduct from '../../Products/add.js';
import JumbotronExample from '../../Jumbo/jumbo.js';

import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory({forceRefresh:true});


const Search = () => {
  const [products, setProducts] = useState([]);
  
  const urlString = "http://localhost:4000/products/";

  

  let location = useLocation();
  console.log(location);
  console.log(location.search);

  var queryStr = location.search.repeat(1);
  queryStr = queryStr.toLowerCase();

  for(let i = 0; i < queryStr.length; i++){
    if(queryStr[i] == '+') {
      queryStr = queryStr.split('');
      queryStr[i] = ' ';
      queryStr = queryStr.join('');
    }
  }
  console.log(queryStr);

  var  queryStrVal = queryStr.split("=");

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

  var newArray = products.filter(function (el) {
    var flag = false;

    flag = flag || el.Product.toLowerCase().includes(queryStrVal[1])
                || el.Catagory.toLowerCase().includes(queryStrVal[1])
                || el.Artist.toLowerCase().includes(queryStrVal[1])
                || el.Description.toLowerCase().includes(queryStrVal[1])
                || el.Subject.toLowerCase().includes(queryStrVal[1])
                || el.Style.toLowerCase().includes(queryStrVal[1])
                || el.Medium.toLowerCase().includes(queryStrVal[1]);

    if (typeof el.Tags !== 'undefined') {
      el.Tags.map((tag) => {
        flag = flag || tag.toLowerCase().includes(queryStrVal[1]);
      });
    }

    return flag;
  });

  
  
  

  return (
      <div>
          <JumbotronExample/>
          <Products productData = {newArray}/>
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

export default Search;