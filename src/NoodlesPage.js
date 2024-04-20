import React, { useState } from 'react'
import NoodlesData from './Noodles.json'
import Noodles from './Noodles'


const NoodlesPage = () => {
  const [cart,setCart ] = useState([]);

  const onchange = (item) => {
    cart.push(item);
    setCart([...cart,item]);
    console.log(cart);
  }
  return (
    <div>
      
      <div className="product-list">
      {NoodlesData.map((item) => (
        <Noodles key={item.id} item={item} onchange= {onchange} />
      ))}
      </div>
    </div>
  )
}

export default NoodlesPage