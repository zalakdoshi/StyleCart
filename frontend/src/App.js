import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]); // Declare wishlistItems here

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter(
      (product) => product.id !== productToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (updatedProduct, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === updatedProduct.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  // Define handleAddToWishlist to add products to the wishlist
  const handleAddToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  // Placeholder for handleRemoveFromWishlist
  const handleRemoveFromWishlist = (productToRemove) => {
    // Implement your logic for removing from the wishlist here
    const updatedWishlistItems = wishlistItems.filter(
      (product) => product.id !== productToRemove.id
    );
    setWishlistItems(updatedWishlistItems);
  };

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        onLogout={handleLogout}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
      >
        {!isLoggedIn ? (
          <>
            <NavLink exact to="/login" activeClassName="active">
              Login
            </NavLink>
            <NavLink exact to="/signup" activeClassName="active">
              Signup
            </NavLink>
          </>
        ) : (
          <>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </>
        )}
      </Navbar>

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Home onLogin={handleLogin} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              isLoggedIn ? (
                <Products
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist} // Pass wishlist handler
                />
              ) : (
                <Signup onLogin={handleLogin} />
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={wishlistItems}
                onRemoveFromWishlist={handleRemoveFromWishlist}
              />
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
