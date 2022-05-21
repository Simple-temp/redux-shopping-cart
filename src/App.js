import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';
import ProductDetailsScreen from './screen/ProductDetailsScreen';
import ProductsScreen from './screen/ProductsScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="inner-container d-flex flex-column">
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/product/:id" element={<ProductDetailsScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
