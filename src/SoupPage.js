import React, { useState } from 'react'
import SoupData from './Soup.json'
import Soup from './Soup'


const SoupPage = () => {
  const [cart,setCart ] = useState([]);

  const onchange = (item) => {
    cart.push(item);
    setCart([...cart,item]);
    console.log(cart);
  }
  
  return (
    <div>
      
      <div className="product-list">
      {SoupData.map((item) => (
        <Soup key={item.id} item={item} onchange={onchange} />
      ))}
      </div>
    </div>
  )
}

export default SoupPage