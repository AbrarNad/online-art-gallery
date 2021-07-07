
import { ImageSearch } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function ProductDetails({ productData, artistData }){

  const imageList = [];
  if (typeof productData.images !== 'undefined') {
    console.log(productData.images);
    productData.images.map((image, i) => {
      console.log(image);
      imageList.push(<img src={image} key={i} className="img-fluid" alt="Responsive image" style={{margin:'10px'}}></img>);
    });
    return (
      <div className="container" style={{marginTop:'50px', marginBottom:'50px'}}>
        <div className="row">
          <div className="col-6">
            {imageList}
          </div>
          <div className="col-6">
            <h3 className="fst-italic">{productData.Product}</h3>
            <h6 className="text-decoration-underline">{productData.Artist}</h6>
            <p className="fs-3">US$ {productData.Price}</p>
            <hr/>
            <p className="fw-lighter">Overview</p>
            <hr/>
            <p  style={{margin:'0'}}> {productData.Subject}</p>
            <p  style={{margin:'0'}}>Style: {productData.Style}</p>
            <p >Material: {productData.Material}</p>
            <p ><b>Dimension: </b>{productData.Dimension}</p>
            <hr/>
            <p className="fw-lighter">Description</p>
            <hr/>
            <p  style={{margin:'0'}}> {productData.Description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        nothing
      </div>
    );
  }
  
  
  

}

export default ProductDetails;