import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Homeproducts from './Home_products';
import { AiFillEye, AiFillHeart,AiOutlineShoppingCart } from 'react-icons/ai';
import {FaYoutube, FaInstagram, FaTwitter, FaFacebookSquare} from "react-icons/fa";

function Home({addtocart}) {
  //Product category
  const [newProduct, setNewProduct] = useState([])
  const [featuredProduct , setFeaturedProduct] = useState([])
  const [ topProduct , SetTopProduct] = useState([])
  // Trending Product
  const [trendingProducts , setTrendingProducts] = useState(Homeproducts)
  //Filter of tranding products

  const filtercate =(x) =>{
    const filterproducts = Homeproducts.filter((curElm) =>{
      return curElm.type === x
    })
    setTrendingProducts(filterproducts)
  }

  // All Trending Products

  const alltrendingProducts =() =>{
    setTrendingProducts(Homeproducts)
  }

  // Product Type

  useEffect(() => {
    productcategory()
  })
  const productcategory = () =>{
    // New Product
const newcategory = Homeproducts.filter((x) =>{
  return x.type === 'new'
})
setNewProduct(newcategory)

// Featured Product
const featuredcategory = Homeproducts.filter((x) =>{
  return x.type === 'featured'
})
setFeaturedProduct(featuredcategory)

// Top Product

const topProduct = Homeproducts.filter((x) =>{
  return x.type === 'top'
})
SetTopProduct(topProduct)
  }
  return (
    <>
    <div className='home'>
      <body>
        
      
        <div className='top_banner'>
            <div className="contant">
                <h3>silver aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your order</p>
                <Link to="/shop" className='link'>Shop Now</Link>
            </div>
        </div>
        

        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => alltrendingProducts ()}>trending products</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate ('new')}>New</h3>
                  <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate ('top')}>top selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {
                    trendingProducts.map((curElm) => {
                      return(
                        <>
                        <div className='box'>
                          <div className="img_box">
                            <img src={curElm.image} alt=''></img>
                            <div className="icon">

                              <div className="icon_box">
                                <AiFillEye/>
                              </div>
                              <div className="icon_box">
                                <AiFillHeart/>
                              </div>
                      
                            </div>
                          </div>

                          <div className="info">
                            <h3>{curElm.Name }</h3>
                            <p>${curElm.price}</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                          </div>

                        </div>
                        </>
                      )
                    })
                  }

                </div>

                <button>Show More</button>

              </div>
            </div>
            <div className="right_box">
              <div className="right_container">
                <div className="testimonial">
                  <div className="head">
                    <h3>our testmonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">                     
                   <img src="image/T1.avif" alt="testmonial" />
                      
                    </div>

                    <div className="info">
                      <h3>Prabhjot robot</h3>
                      <h4>Web developer</h4>
                      <p> Duals faucbus enin vita num molestie , ncm facilitise arce pulvics.</p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>newsletter</h3>
                  </div>
                  <div className="form">
                    <p>join our mailling list</p>
                    <input type="email" placeholder='E-mail' outoComplete="off" ></input>
                    <button>subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <FaFacebookSquare/>
                      </div>
                      <div className="icon">
                        <FaTwitter/>
                      </div>
                      <div className="icon">
                        < FaInstagram/>

                      </div>
                      <div className="icon">
                        < FaYoutube/>

                      </div>
                      

                      

                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </body>


        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src="image/Multi-Banner-1.webp" alt="banner" />
              </div>
              <div className="box">
                <img src="image/Multi-Banner-2.avif" alt="banner" />
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt="" ></img>
                <img src="image/Multi-banner-4.avif" alt="" ></img>
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" alt="" ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            
              <div className="box">
                <div className="header">
                  <h2>New Product</h2>

                </div>
                {
                  newProduct.map((curElm) => {
                    return(
                      <>
                      <div className="productbox">
                        <div className="img-box">
                          <img src={curElm.image} alt="" ></img>
                        </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <div className="icon">
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart/></button>
                          </div>

                        </div>
                      </div>

                      </>
                    )
                  })
                }
                

              </div>

              <div className="box">
                <div className="header">
                  <h2>Featured Product</h2>

                </div>
                {
                  featuredProduct.map((curElm) => {
                    return(
                      <>
                      <div className="productbox">
                        <div className="img-box">
                          <img src={curElm.image} alt="" ></img>
                        </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <div className="icon">
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart/></button>
                          </div>

                        </div>
                      </div>

                      </>
                    )
                  })
                }
                

              </div>

              <div className="box">
                <div className="header">
                  <h2>Top Product</h2>

                </div>
                {
                  topProduct.map((curElm) => {
                    return(
                      <>
                      <div className="productbox">
                        <div className="img-box">
                          <img src={curElm.image} alt="" ></img>
                        </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <div className="icon">
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart/></button>
                          </div>

                        </div>
                      </div>

                      </>
                    )
                  })
                }
                

              </div>

            
          </div>

        </div>


    </div>
    </>
  );
}

export default Home;
