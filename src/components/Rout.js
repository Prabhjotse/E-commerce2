import React from 'react';
import {Routes , Route } from "react-router-dom";
import Home from './Home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';
function Rout({shop, Filter ,allcatefilter, addtocart,cart,setCart}) {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='Shop' element={<Shop Shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default Rout;
