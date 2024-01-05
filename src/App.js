import React, { useState } from "react";
import Nav from "./components/Nav";
import {BrowserRouter } from "react-router-dom";
import Rout from "./components/Rout";
import Footer from './components/footer';
import Homeproducts from "./components/Home_products";

function App() {

  //Add to Cart
  const [cart , setCart] = useState([])

  // Shop Page Product
  const [shop ,setShop] = useState(Homeproducts)

  //Shop Search Filter
  const [search , setSearch] = useState('')


  // Shop category Filter
  const Filter = (x) => {
  const catefilter = Homeproducts.filter((product) =>{
    return product.cat === x
  })
  setShop(catefilter)
  }

  const allcatefilter =() =>{
    setShop(Homeproducts)
  }


  // Shop Search Filter
  const searchproduct = () =>{
 const searchfilter = Homeproducts.filter((x) => {
  return x.cat === search
 })
 setShop(searchfilter)
  }
  

  //Add to cart 
  
  const addtocart = (product) =>{
    const exist = cart.find((x) => {
      return x.is === product.id
    })
    if(exist){
alert("This product is is allready added in cart")
    }
    else {
     setCart([...cart, {...product, qty:1}])
     alert("Added to cart")
      }
  }

  return (
    <>

    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
