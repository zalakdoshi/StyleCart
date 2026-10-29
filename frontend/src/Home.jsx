import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Clothing Store</h1>
        <p>Discover the latest trends in fashion</p>
        <Link to="/products">Shop Now</Link>
      </div>
      <div id="shop" className="product-list">
        {/* Featured product items */}
        {/* Render more product items here */}
      </div>
      <footer className="footer">
        <p>&copy; 2023 Clothing Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
