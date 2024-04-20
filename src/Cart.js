import React, { useEffect, useState } from 'react';
import "./Cart.css";




export const Cart = ({cart,setcart}) => {
 
  const [total,setTotal] = useState(0);
  useEffect(() =>{
    setTotal(cart.reduce((acc,curr)=> acc + parseInt(curr.price), 0));
  },[cart]);

  
    
  return (
    <>
    <div>
    <h1 className='Cart-heading'>Cart Products</h1>
    {
      cart.map((item) =>(
    <div className='cart-container'>
    
    <div className='cart-product' key={item.id}>
    <div className='img'>
    <img src={item.imageUrl} alt='' />
    </div>
    <div className='Cart-product-details'>
    <h3>{item.name}</h3>
    <p>Price Rs:{item.price}</p>
    </div>
    </div>
    </div>
    ))
  }
  
  <h2 className='Cart-amt'>Total Amount Rs: {total}</h2>
  </div>
    
    

  </>

  
        
    
  );
};

export default Cart;
