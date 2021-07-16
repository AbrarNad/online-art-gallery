import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css'
import './Navbar.css';

const Navbar = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <li class="nav-item dropdown">
              <a class="nav-link  dropdown-toggle" href="/Abstract" data-bs-toggle="dropdown">  Abstract Art  </a>
                <ul class="dropdown-menu">
                  <div class="container">
                      {/* <li><h8 class="text-center"><i>By Material</i></h8></li> */}
                      <li><a class="dropdown-item" href="#"> Modern </a></li>
                      <li><a class="dropdown-item" href="#"> Digital </a></li>
                      <li><a class="dropdown-item" href="#"> Minimalist </a></li>
                  </div>
                </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Paintings  </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> Modern </a></li>
                <li><a class="dropdown-item" href="#"> Digital </a></li>
                <li><a class="dropdown-item" href="#"> Minimalist </a></li>
                </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link  dropdown-toggle" href="/Drawings" data-bs-toggle="dropdown">  Drawings  </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/Drawings/Material/Wood"> Wood </a></li>
                <li><a class="dropdown-item" href="/Drawings/Material/Canvas"> Canvas </a></li>
                <li><a class="dropdown-item" href="/Drawings/Material/Paper"> Paper </a></li>
                </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nature
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
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;