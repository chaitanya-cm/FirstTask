import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img1 from './img/clouds-cloud.svg';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';
// import 'bootstrap.bundle.js';
function Iconfinder() {
  return (
      <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Icon</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Illustrations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">3D Illustrations</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Designer
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Top selling</a>
          <a class="dropdown-item" href="#">Most followers</a>
          <a class="dropdown-item" href="#">Newest designers</a>
          <a class="dropdown-item" href="#">Most icons</a>
          <a class="dropdown-item" href="#">Following</a>
        </div>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Social media</a>
          <a class="dropdown-item" href="#">Spring</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">All Categories</a>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pricing
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Pricing Overview</a>
          <a class="dropdown-item" href="#">Pro Subscription</a>
          <a class="dropdown-item" href="#">Pay as you go</a>
          <a class="dropdown-item" href="#">API</a>
          <a class="dropdown-item" href="#">For Enterprise</a>
          <a class="dropdown-item" href="#">For Education</a>
        </div>
      </li>     
    </ul>
    <ul class="navbar-nav">
    <button class="btn btn-default" type="submit">
        <FaShoppingCart />
      </button>
      <li class="nav-item" id='nav-item1'>
        <a class="nav-link" href="#">Sign In</a>
      </li>
      <li class="nav-item" id='nav-item1'>
        <a class="nav-link" href="#">Sign up</a>
      </li>
      </ul>
  </div>
</nav>
   
   <div className='row mx-auto' id='new'>
        <img className='col-3 justify-content-center' src={img1}  style={{height:100, width:100}}/>
        <p className='col-3'>ICONFINDER</p>
<form>
  <div class="input-group">
      <div className='col-4 d-flex justify-content-center'>
      <input type="text" class="form-control" placeholder="Search" style={{height:50}} />
      </div>
      <div class="dropdown show">
  <a class="btn btn-default border-dark mb-8 dropdown-toggle "  href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Icons
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Illustrations</a>
    <a class="dropdown-item" href="#">3D Illustrations</a>
  </div>
</div>
      <div class="input-group-btn">
      <button class="btn btn-default border-dark mb-8" type="submit">
        <FaSearch />
      </button>
    </div>
  </div>
  <div className='row'>
    <div className='tag'>Popular Searches: <a href='#'>Instagram</a>, <a href='#'>FaceBook</a>, <a href='#'>Arrow</a>, <a href='#'>Phone</a>, <a href='#'>YouTube</a>, <a href='#'>Search</a>, <a href='#'>User</a>
    </div>
  </div>
</form>
</div>

<div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>Explore</h5>
            <p className="list-unstyled">
              <li>Icons</li>
              <li>Illustrations</li>
              <li>3D Illustrations</li>
              <li>Designer</li>
              <li>Free icons</li>
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
          <h5>Pricing</h5>
            <p className="list-unstyled">
              <li>Pricing Overview</li>
              <li>Pay as you go</li>
              <li>API</li>
              <li>For Education</li>
              <li>Contact Sales</li>
            </p>
          </div>
          {/* Column3 */}
          <div className="col">
          <h5>Help & Support</h5>
            <p className="list-unstyled">
              <li>Contact support</li>
              <li>Knowledge base</li>
              <li>Service status</li>
              <li>What's new</li>
              <li>Request a quote</li>
            </p>
          </div>

          <div className="col">
          <h5>Company</h5>
            <p className="list-unstyled">
              <li>About Iconfinder</li>
              <li>Partner network</li>
              <li>Referral program</li>
              <li>Coupon code</li>
              <li>Become a contributor</li>
            </p>
          </div>

          <div className="col">
          <h5>Blog</h5>
            <p className="list-unstyled">
              <li>Read more on Blog</li>
              <div className='row'>
                <div className='col-1' id='social'>
                  <FaInstagram />
                </div>
                <div className='col-1' id='social'>
                  <FaTwitter />
                </div>
                <div className='col-1' id='social'>
                  <FaFacebook />
                </div>
                <div className='col-1' id='social'>
                  <FaGithub />
                </div>
                <div className='col-1' id='social'>
                  <FaPinterest />
                </div>
              </div>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ICONFINDER | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
</>
  ) 
}

export default Iconfinder;