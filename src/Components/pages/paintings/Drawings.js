import React,{ useState, useEffect} from 'react';
import Products from '../../Products/ProductsBootstrap';
import Axios from "axios";
import Checkbox from '../../Checkbox/checkbox';
import { useLocation, useParams } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory({forceRefresh:true});

const Drawings = () => {
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
            url:"http://localhost:4000/products/category/Drawings"      //this is API url
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
            url:"http://localhost:4000/products/category/Drawings"      //this is API url
        }).then((res)=>{
            //console.log(res.data);
            const {data} = res;
            setProdClone(data);
        })
    }

    console.log(products);

    useEffect(()=>{
        getProduct();
    },[] );

    useEffect(()=>{
        console.log("is called?");
        getProductClone();
    },[products] );

    console.log(products);

    constantProduct = JSON.parse(JSON.stringify(productsClone));
    console.log(constantProduct);
    //constantProduct = ;

    if(location.search !== ""){
        history.push("/Drawings");
    }
    var str = location.search;
    str = str.slice(1, str.length);
    console.log(str);
    var myArray = str.split("&");
    console.log(myArray);

    var newArray = products.filter(function (el) {
        var ret = true;
        for(let i = 0; i < myArray.length; i++){
            var myNewArray = myArray[i].split("=");
            console.log(myNewArray);
            if (typeof myNewArray !== 'undefined') {
                //console.log(el[myNewArray[0]]);
                ret = ret && el[myNewArray[0]] == myNewArray[1];
            }
        }
        return ret;
    });

    return <div>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Checkbox products={constantProduct} SettingProducts={setProducts}/>
                </div>
                <div className="col">
                    <Products productData={newArray} flag={1}/>
                </div>
            </div>
        </div>
        
    </div>
}

export default Drawings;