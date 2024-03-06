import React from 'react';
import './App.css'
import NavBar from './Components/navbar/navbar';
import ItemListContainer from './Components/itemListContainer/itemlistcontainer';
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailcontainer';
import checkout from './Components/checkout/checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/cart/cart';
import { CartProvider } from './context/cartContext';


function App() {


  return (
    <div>
      <CartProvider>
    <BrowserRouter>
    
    <div className="App">
      <NavBar/>
    </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/plant/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout"></Route>

    <>
      
      
    </>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
