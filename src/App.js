import React, { useState } from 'react';
import Products from './Products';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import RicePage from './RicePage';
import NoodlesPage from './NoodlesPage';
import SoupPage from './SoupPage';
import CutletsPage from './CutletsPage';
import HotPotsPage from './HotPotsPage';
import DessertsPage from './DessertsPage';
import Cart from './Cart';







function App() {

  const [cart, setCart] = useState([]);
  const [show,setShow] = useState(true);
  return (
    <Router>
      <Routes>
      
      <Route path='/' element={<Products  />} />
      
      <Route path='/RicePage' element={<RicePage cart={cart} setCart={setCart} />} 
      setShow={setShow}
      />
      
      
      <Route path='/Noodles' element={<NoodlesPage cart={cart} setCart={setCart} />} />
      <Route path='/Soup' element={<SoupPage cart={cart} setCart={setCart} />} />
      <Route path='/Cutlets' element={<CutletsPage cart={cart} setCart={setCart} />} />
      <Route path='/HotPots' element={<HotPotsPage cart={cart} setCart={setCart}/>} />
      <Route path='/Desserts' element={<DessertsPage cart={cart} setCart={setCart} />} />
      <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>} />
      
      </Routes>
    
    </Router>

   
  );
}

export default App;
