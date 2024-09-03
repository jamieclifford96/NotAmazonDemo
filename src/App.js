import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="content">
        <ProductList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
