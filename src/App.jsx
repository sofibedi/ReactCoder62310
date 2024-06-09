import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { ProductsProvider } from './components/ProductsContext/ProductsContext';

const App = () => {
  return (
    <Router>
      <NavBar />
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProductsProvider>
    </Router>
  );
};

export default App;
