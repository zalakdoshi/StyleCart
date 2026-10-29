import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({
  product,
  onAddToCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  cartItems = [],
  wishlistItems = [],
  isFavorite, // New prop to indicate whether the product is already in the wishlist
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      setAddedToCart(false);
      setOutOfStock(false);
    } else {
      setOutOfStock(true);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setAddedToCart(false);
      setOutOfStock(false);
    } else {
      setOutOfStock(true);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 10) {
      onAddToCart({ ...product, quantity });
      setAddedToCart(true);
      setOutOfStock(false);
    } else {
      setOutOfStock(true);
    }
  };

  const handleAddToWishlist = () => {
    if (isFavorite) {
      alert("Product is already in your wishlist!");
    } else {
      onAddToWishlist({ ...product });
      setAddedToWishlist(true);
    }
  };

  const handleRemoveFromWishlist = () => {
    onRemoveFromWishlist(product); // Call the provided remove from wishlist function
    setAddedToWishlist(false);
  };

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productInWishlist = wishlistItems.find(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">Rs {product.price}</p>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <br />
      {outOfStock ? (
        <p className="out-of-stock-msg">Product out of stock</p>
      ) : (
        <>
          <button
            className={`add-to-cart-button ${addedToCart ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={addedToCart || quantity > 10}
          >
            {addedToCart
              ? "Added to Cart"
              : productInCart
              ? `Update Cart (${productInCart.quantity})`
              : "Add to Cart"}
          </button>
          <br />
          <br />
          {addedToWishlist ? (
            <button
              className="add-to-wishlist-button added"
              onClick={handleRemoveFromWishlist}
            >
              Added to Wishlist
            </button>
          ) : (
            <button
              className="add-to-wishlist-button"
              onClick={handleAddToWishlist}
            >
              {productInWishlist ? "Already in Wishlist" : "Add to Wishlist"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCard;
