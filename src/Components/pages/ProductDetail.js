import React,{ useState, useEffect} from 'react';
import Axios from "axios";
import JumbotronExample from '../Jumbo/jumbo.js';
import ProductDetails from '../Products/ProductDetail.js';
import { useHistory, useParams } from 'react-router-dom'


const ProductDetail = () => {
    
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const [artist, setArtist] = useState([]);
    const urlString = "http://localhost:4000/products/productid/" + id + "/";
    const urlArtist = "";
    console.log(urlString);

    const getProduct = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: urlString     //this is API url
        }).then((res)=>{
            const {data} = res;
            setProducts(data);
        })
    }

    const getArtist = () => {
      Axios({
          method: "GET",
          withCredentials: true,
          url: urlArtist     //this is API url
      }).then((res)=>{
          //console.log(res.data);
          const {data} = res;
          setArtist(data);
      })
  }

    console.log(products);

    useEffect(()=>{
        getProduct();
        if(Object.keys(products).length === 0){
          ;
        }else{
          urlArtist = products.Artist;
          getArtist();
        }
    },[] );


    
    return (
        <div>
            <JumbotronExample/>
            <ProductDetails productData = {products} artistData = {artist}/>
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

export default ProductDetail;