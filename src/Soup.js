import React from 'react'
import "./Rice.css"


const Soup = ({ item,onchange }) => {
    const {name,description, price, imageUrl } = Soup;
  return (
    <div className='Page'>
    <div className="product ">
    <img src={imageUrl} alt={name} />
    </div>
    <div className="product-detail mt-14 ">
    <h2 className=' text-pink-900'>{name}</h2>
   <h3 >{description}</h3>
    <p>Price: ${price}</p>
    <button onClick={() => onchange(item)}>Add to Cart</button>
      </div>
    </div>
   
  )
}

export default Soup;