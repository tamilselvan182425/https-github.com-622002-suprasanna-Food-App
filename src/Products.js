import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import logo from "../src/Assets/Rice1.jfif"
import logo1 from "../src/Assets/Noodles.jfif"
import logo2 from "../src/Assets/Soup.jpg"
import logo3 from "../src/Assets/Cutlets.jpg"
import logo4 from "../src/Assets/Hotpots.webp"
import logo5 from "../src/Assets/deserts.jpg"
import {  FaOpencart } from "react-icons/fa6";


const Product = ({setShow}) => {
 
 

  
  return (
    <>
    <span>
    <div className='cart' onClick={() => setShow(true)}>
    <a href='cart'><FaOpencart onClick={() => setShow(true)}/></a>
    </div>
    </span>
    
    <h1 className='text-3xl justify-center text-center mt-20 text-black font-bold' >Our Products</h1>
    <div className='product-Page'>
    <div className="product-details backdrop-blur-2xl rounded-3xl ">
    <img src={logo} alt="" />
    <h2 className=' text-pink-900'>Rice</h2>
   <Link to={`/RicePage`}>viewDetails</Link>
      </div>
    <div className="product-details backdrop-blur-2xl rounded-3xl ">
    <img src={logo1} alt="" />
    <h2 className=' text-pink-900'>Noodles</h2>
   <Link to={`/Noodles`}>viewDetails</Link>
      </div>
    <div className="product-details backdrop-blur-2xl rounded-3xl ">
    <img src={logo2} alt="" />
    <h2 className=' text-pink-900'>Soup</h2>
   <Link to={`/Soup`}>viewDetails</Link>
      </div>
    <div className="product-details backdrop-blur-2xl rounded-3xl ">
    <img src={logo3} alt="" />
    <h2 className=' text-pink-900'>Cutlets</h2>
   <Link to={`/Cutlets`}>viewDetails</Link>
      </div>
    <div className="product-details backdrop-blur-2xl rounded-3xl ">
    <img src={logo4} alt="" />
    <h2 className=' text-pink-900'>HotPots</h2>
   <Link to={`/HotPots`}>viewDetails</Link>
      </div>
    <div className="product-details backdrop-blur-2xl rounded-3xl ">
    <img src={logo5} alt="" />
    <h2 className=' text-pink-900'>Desserts</h2>
   <Link to={`/Desserts`}>viewDetails</Link>
      </div>
      
    
    

   

    </div>
    </>
    
  );
};

export default Product;