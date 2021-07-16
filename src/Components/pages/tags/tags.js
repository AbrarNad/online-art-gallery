import React,{ useState, useEffect} from 'react';
import Axios from "axios";
import JumbotronExample from '../../Jumbo/jumbo.js';
import { useHistory, useParams } from 'react-router-dom';
import Products from '../../Products/ProductsBootstrap.jsx';


const Tag = () => {
    
    const { tag } = useParams();
    const [products, setProducts] = useState([]);
    const urlString = "http://localhost:4000/products/tags/" + tag + "/";
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



    useEffect(()=>{
        getProduct();
    },[] );


    
    return (
        <div>
            <JumbotronExample/>
            <Products productData={products}/>
        </div>
    );

}

export default Tag;