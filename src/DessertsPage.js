import React, { useState } from 'react'
import DessertsData from "./Desserts.json"
import Desserts from './Desserts'


const DessertsPage = () => {
  const [cart, setCart] = useState([]);

  const onchange = (item) => {
    cart.push(item);
    setCart([...cart,item]);
    console.log(cart);
  }
  return (
    <div>
      
      <div className="product-list">
      {DessertsData.map((item) => (
        <Desserts key={item.id} item={item} onchange={onchange} />
      ))}
      </div>
    </div>
  )
}

export default DessertsPage