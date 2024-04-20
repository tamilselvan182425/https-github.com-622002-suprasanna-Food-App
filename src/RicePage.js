import React, { useState } from 'react'
import RiceData from './Rice.json'
import Rice from './Rice'






const RicePage = () => {
  const [cart,setCart ] = useState([]);
  
  const onchange = (item) => {
   cart.push(item);
    setCart([...cart,item]);
    console.log(item)
  }
  
  return (
    <div>
      
      <div className="product-list" >
      {RiceData.map((item) => (
        <Rice key={item.id} item={item} onchange={onchange} />
      ))}
      </div>
    </div>
  )
}

export default RicePage

