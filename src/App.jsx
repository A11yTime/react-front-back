import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductInfoPage from './components/ProductInfoPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <h1>Welcome to the E-Commerce Store</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductInfoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
