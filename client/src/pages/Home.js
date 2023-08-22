import React from 'react';

import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Header from './Header'; // Import the Header component

const Home = () => {
  return (
    <div className="container">
      <Header /> {/* Add the Header component at the top */}

        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
 
  );
};

export default Home;

