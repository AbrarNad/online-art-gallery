import React,{ useState, useEffect} from 'react';
import Products from "../Products/Products";
import Axios from "axios";

const Drawings = () => {
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url:"http://localhost:4000/products/category/Drawings"      //this is API url
        }).then((res)=>{
            //console.log(res.data);
            const {data} = res;
            setProducts(data);
        })
    }

    useEffect(()=>{
        getProduct();
    },[] );

    return <div>
        <Products products={products}/>
    </div>
}

export default Drawings;