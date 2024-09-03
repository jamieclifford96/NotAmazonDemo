import React from 'react';
import './Header.css';
import NotAmazonLogo from '../assets/images/NotAmazonLogo.png';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img 
          src={NotAmazonLogo} 
          alt="NotAmazon Logo" 
        />
      </div>
      <div className="header-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search NotAmazon"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="search-button">🔍</button>
      </div>
      <div className="header-nav">
        <div className="nav-item">
          <span>Hello, Sign in</span>
          <strong>Account & Lists</strong>
        </div>
        <div className="nav-item">
          <span>Returns</span>
          <strong>& Orders</strong>
        </div>
        <div className="nav-item cart">
          <strong>Cart</strong>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
