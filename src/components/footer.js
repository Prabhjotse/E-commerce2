import React from 'react';
import {FaPiggyBank, FaShippingFast,FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
import './footer.css'
function Footer() {
  return (
    
      <>
      
<div className="footer">
  <div className="container">
    <div className="left-box">

      <div className="box">
        <div className="icon_box">
          <FaPiggyBank/>
        </div>
        <div className="detail">
          <h3>Greate Saving</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="box">
        <div className="icon_box">
          <FaShippingFast/>
        </div>
        <div className="detail">
          <h3>free delivery</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="box">
        <div className="icon_box">
          <FaHeadphonesAlt/>
        </div>
        <div className="detail">
          <h3>24/7</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="box">
        <div className="icon_box">
          <FaWallet/>
        </div>
        <div className="detail">
          <h3>Money back</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>        
      </div>
      <div className="right_box">
        <div className="header">
          <img src="image/logo.webp" alt="" ></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam explicabo nobis libero.</p>
        </div>
        <div className="bottom">

          <div className="box">
            <h3>Your Account</h3>
            <ul>
              <li>About us</li>
              <li>Account</li>
              <li>Payment</li>
              <li>sales</li>
            </ul>
          </div>

          <div className="box">
            <h3>Products</h3>
            <ul>
              <li>Delivery</li>
              <li>Track Oder</li>
              <li>New product</li>
              <li>Old product</li>
            </ul>
          </div>

          <div className="box">
            <h3>Contact us</h3>
            <ul>
              <li>4005, Silver Business PointIndia</li>
              <li>+(91)65399999</li>
              <li>info@gamil.com</li>
              
            </ul>
          </div>


        </div>

      </div>
    </div>
  </div>


      </>
    
  );
}

export default Footer;
