import React, { useState } from 'react'
import CutletsData from "./Cutlets.json"
import Cutlets from './Cutlet'


const CutletsPage = () => {
  const [cart, setCart] = useState([]);

  const onchange = (item) => {
    cart.push(item);
    setCart([...cart,item]);
    console.log(cart);
  }
  return (
    <div>
      
      <div className="product-list">
      {CutletsData.map((item) => (
        <Cutlets key={item.id} item={item} onchange ={onchange} />
      ))}
      </div>
    </div>
  )
}

export default CutletsPage