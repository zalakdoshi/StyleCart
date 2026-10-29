import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const groupedCartItems = {};

  // Group cart items by product id
  cartItems.forEach((item) => {
    if (!groupedCartItems[item.id]) {
      groupedCartItems[item.id] = { ...item, totalQuantity: item.quantity };
    } else {
      groupedCartItems[item.id].totalQuantity += item.quantity;
    }
  });

  const handleIncrement = (product) => {
    if (product.totalQuantity < 10) {
      onUpdateQuantity(product, product.totalQuantity + 1);
    } else {
      // You can set a message state for the specific product here if needed
      // For example, setOutOfStockMessage(true) for that product
      alert("Out of Stock"); // Display out of stock message
    }
  };

  const handleDecrement = (product) => {
    if (product.totalQuantity > 1) {
      onUpdateQuantity(product, product.totalQuantity - 1);
    } else {
      // If the quantity is 1 or less, remove the product from the cart
      onRemoveFromCart(product);
    }
  };

  const handleRemove = (product) => {
    console.log("Removing product:", product);
    onRemoveFromCart(product);
  };

  // Calculate the total number of products in the cart
  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate the total price of all products in the cart
  const totalPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  // Filter cart items based on the search query
  const filteredCartItems = Object.values(groupedCartItems).filter((item) =>
    item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  // Add the search bar
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log("Search Query:", query); // Add this line for debugging
  };

  return (
    <>
      <h1>Your Cart</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="cart">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCartItems.map((item, index) => (
                <tr key={index} className="cart-item">
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>Rs {item.price}</p>
                  </td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrement(item)}>-</button>
                      <span>{item.totalQuantity}</span>
                      <button onClick={() => handleIncrement(item)}>+</button>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => handleRemove(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Display the total number of products and total price */}
      <div className="cart-summary">
        <p>Total Products: {totalProducts}</p>
        <p>Total Price: Rs {totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
};

export default Cart;
