import React, { useState } from 'react'
import HotPots from './HotPots'
import HotPotsData from "./HotPots.json"



const HotPotsPage = () => {
  const [cart, setCart] = useState([]);

  const onchange = (item) => {
    cart.push(item);
    setCart([...cart,item]);
    console.log(cart);
  }
  return (
    <div>
      
      <div className="product-list">
      {HotPotsData.map((item) => (
        <HotPots key={item.id} item={item} onchange={onchange} />
      ))}
      </div>
    </div>
  )
}

export default HotPotsPage;