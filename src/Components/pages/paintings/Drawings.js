import React,{ useState, useEffect} from 'react';
import Products from '../../Products/ProductsBootstrap';
import Axios from "axios";
import Checkbox from '../../Checkbox/checkbox';

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

    console.log(products);

    useEffect(()=>{
        getProduct();
    },[] );

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Checkbox/>
                </div>
                <div className="col">
                    <Products productData={products} flag={1}/>
                </div>
            </div>
        </div>
        
    </div>
}

export default Drawings;