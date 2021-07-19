import React,{ useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css'
import './Navbar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, Typography } from "@material-ui/core";
import { BsFillPersonFill } from "react-icons/bs";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../pages/paintings/popup.css';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';

function CartOnNav( {user, cartCount} ){
  if(typeof user.Cart !== 'undefined')
    return (
      <IconButton aria-label="add to cart" style={{color: 'Gray'}} href="/user/cart">
        <Badge badgeContent={cartCount} color="primary">
          <AddShoppingCartIcon/>
        </Badge>
      </IconButton>
    );
  else{
    return (
      <IconButton aria-label="add to cart" style={{color: 'Gray'}} href="/user/cart">
        <Badge badgeContent={0} color="primary">
            <AddShoppingCartIcon/>
        </Badge>
      </IconButton>
    )
  }
}

const Navbar = ( {user, cartCount} ) => {


  const [searchText, setSearchText] = useState("");


  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  if(typeof  user.Cart !== 'undefined'){
    cartCount = user.Cart.length;
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="logo horizontal-logo" src="https://res.cloudinary.com/ramzi/image/upload/v1626363991/1917990_j4g5e1.jpg" alt="" width="30" height="24"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li> 
              <Popup className="my-popup"
                  trigger={open => (
                    <a class="nav-link active" aria-current="page" href="/Drawings">Drawings</a>
                  )}
                  position="bottom left"
                  closeOnDocumentClick
                  on = "hover"
                  >
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <p>By Style</p>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Fine Art</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Abstract</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Modern</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Street Art</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Pop Art</b> </Link><br/></Typography>                            
                          </div>
                          <div className="col">
                              <p>By Subject</p>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Portrait</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Landscape</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Still Life</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Nature</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Beach</b> </Link><br/></Typography>                            
                          </div>
                          <div className="col">
                              <p>By Material</p>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Paper</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Cardboard</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Canvas</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Wood</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Other</b> </Link><br/></Typography>                            
                          </div>
                      </div>
                  </div>
              </Popup>

            </li>


            <li> 
              <Popup className="my-popup"
                  trigger={open => (
                    <a class="nav-link active" aria-current="page" href="/Paintings">Paintings</a>
                  )}
                  position="bottom left"
                  closeOnDocumentClick
                  on = "hover"
                  >
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <p>By Style</p>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Fine Art</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Abstract</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Modern</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Street Art</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Pop Art</b> </Link><br/></Typography>                            
                          </div>
                          <div className="col">
                              <p>By Subject</p>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Portrait</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Landscape</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Still Life</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Nature</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Beach</b> </Link><br/></Typography>                            
                          </div>
                          <div className="col">
                              <p>By Material</p>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Paper</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Cardboard</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Canvas</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Wood</b> </Link><br/></Typography>
                              <Typography style={{margin: '5px'}}><Link href="/signup" color="inherit"> <b>Other</b> </Link><br/></Typography>                            
                          </div>
                      </div>
                  </div>
              </Popup>

            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Photography
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
          </ul>
          <form class="d-flex" action="http://localhost:3000/search/" method="GET">
            
            <CartOnNav user={user} cartCount = {cartCount}/>
            <input type="hidden" name="query" value={searchText} /> 
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} 
              onChange={handleSearch}
            />
            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button> */}
            
            <a className="btn btn-outline-danger" href="/signin" role="button" style={{margin: '5px'}}>Sign In</a>
            <a className="btn btn-outline-danger" href="/addprod" role="button" style={{margin: '5px'}}>Add Product</a>
            <div style={{marginTop: '5px', marginLeft: '15px'}}>
              <IconButton aria-label="add to cart" style={{color: 'Gray'}} href="/user/account">
                <AccountCircleIcon/>
              </IconButton>
            </div>

                       
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;