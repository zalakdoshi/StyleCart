import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({
  isLoggedIn,
  username,
  onLogout,
  cartItems,
  wishlistItems,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/signup");
  };

  // Calculate the total number of items in the cart
  const cartItemCount = cartItems
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  // Create a Set to store unique product IDs in the wishlist
  const uniqueWishlistItemIds = new Set();

  // Iterate through the wishlistItems and add their IDs to the Set
  wishlistItems.forEach((item) => {
    uniqueWishlistItemIds.add(item.id);
  });

  // Calculate the total number of unique items in the wishlist
  const wishlistItemCount = uniqueWishlistItemIds.size;

  return (
    <div className={`navigation-bar ${isNavOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isNavOpen ? (
        <ul className="nav-list">
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Product</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">
                  <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItemCount > 0 && (
                      <span className="cart-item-count">
                        {cartItemCount === 1 ? "+1" : `+${cartItemCount}`}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <div className="wishlist-icon">
                    <FontAwesomeIcon icon={faHeart} />
                    {wishlistItemCount > 0 && (
                      <span className="wishlist-item-count">
                        {wishlistItemCount}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <span>Hello, {username}</span>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            // Render "Login" and "Signup" links only when not logged in
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
