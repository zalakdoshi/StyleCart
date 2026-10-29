import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // After the component is mounted, set "loaded" to true after a brief delay
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust the delay as needed

    // Clear the timeout if the component is unmounted before the delay expires
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`home ${isLoaded ? "loaded" : ""}`}>
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
