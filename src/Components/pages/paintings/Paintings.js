import React,{ useState, useEffect} from 'react';
import Products from '../../Products/ProductsBootstrap';
import Axios from "axios";
import Checkbox from '../../Checkbox/checkbox';
import { useLocation, useParams } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from '@material-ui/core';
import './popup.css';


const history = createBrowserHistory({forceRefresh:true});



const Paintings = () => {
    const [products, setProducts] = useState([]);
    const [productsClone, setProdClone] = useState([]);

    var constantProduct;
    let location = useLocation();
    /* console.log(location);
    console.log(location.search);
    console.log(typeof(location.search)); */

    const getProduct = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url:"http://localhost:4000/products/category/Paintings"      //this is API url
        }).then((res)=>{
            //console.log(res.data);
            const {data} = res;
            setProducts(data);
            setProdClone(data);
        })
    }

    const getProductClone = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url:"http://localhost:4000/products/category/Paintings"      //this is API url
        }).then((res)=>{
            //console.log(res.data);
            const {data} = res;
            setProdClone(data);
        })
    }

    useEffect(()=>{
        getProduct();
    },[] );

    useEffect(()=>{
        console.log("is called?");
        getProductClone();
    },[products] );


    constantProduct = JSON.parse(JSON.stringify(productsClone));
    if(location.search !== ""){
        history.push("/Paintings");
    }
    

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Checkbox products={constantProduct} SettingProducts={setProducts}/>
                </div>
                <div className="col">
                    <Products productData={products} flag={1}/>
                </div>
            </div>
        </div>
        
    </div>
}

export default Paintings;