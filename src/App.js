import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './components/Marketplace';
import Product from './components/Product';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
