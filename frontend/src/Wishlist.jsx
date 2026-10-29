import React, { useState } from "react";
import "./Wishlist.css";

const Wishlist = ({ wishlistItems, onRemoveFromWishlist }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Create a Set to store unique products based on their IDs
  const uniqueWishlistItems = new Set();

  // Iterate through the wishlistItems and add them to the Set
  wishlistItems.forEach((product) => {
    uniqueWishlistItems.add(product.id);
  });

  // Convert the Set back to an array of unique products
  const uniqueWishlistItemsArray = Array.from(uniqueWishlistItems);

  // Filter wishlist items based on the search query
  const filteredWishlistItems = uniqueWishlistItemsArray.filter((productId) => {
    // Find the product object by its ID
    const product = wishlistItems.find((item) => item.id === productId);

    // Check if the product name includes the search query (case-insensitive)
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleRemoveFromWishlist = (product) => {
    onRemoveFromWishlist(product);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Your Wishlist</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="wishlist-container">
        {filteredWishlistItems.length === 0 ? (
          <p className="empty-message">No matching items in your wishlist</p>
        ) : (
          <table className="wishlist-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredWishlistItems.map((productId) => {
                // Find the product object by its ID
                const product = wishlistItems.find(
                  (item) => item.id === productId
                );
                return (
                  <tr key={product.id} className="wishlist-item">
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="wishlist-item-image"
                      />
                    </td>
                    <td>
                      <p>{product.name}</p>
                    </td>
                    <td>
                      <p>Rs {product.price}</p>
                    </td>
                    <td>
                      <button onClick={() => handleRemoveFromWishlist(product)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
