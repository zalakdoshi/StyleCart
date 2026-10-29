import React, { useState } from "react";
import ProductCard from "./ProductCard";
import aim31 from "./images/aim31.png";
import aim36 from "./images/aim36.png";
import aim32 from "./images/aim32.png";
import aim33 from "./images/aim33.png";
import aim34 from "./images/aim34.png";
import aim35 from "./images/aim35.png";
import aim37 from "./images/aim37.png";
import aim38 from "./images/aim38.png";
import aim39 from "./images/aim39.png";
import aim40 from "./images/aim40.png";
import aim41 from "./images/aim41.png";
import aim42 from "./images/aim42.png";
import aim43 from "./images/aim43.png";
import aim44 from "./images/aim44.png";
import aim45 from "./images/aim45.png";
import aim46 from "./images/aim46.png";
import aim47 from "./images/aim47.png";
import aim48 from "./images/aim48.png";
import aim49 from "./images/aim49.png";
import aim50 from "./images/aim50.png";
import aim51 from "./images/aim51.png";

const productsData = [
  {
    id: 1,
    name: "Pink Self Design V-Neck A-Line Dress",
    image: aim31,
    price: 619,
    category: "women", // Add category property for each product
  },
  {
    id: 13,
    name: "Men Printed Pure Cotton T-shirt",
    image: aim43,
    price: 259,
    category: "men", // Add category property for each product
  },
  {
    id: 2,
    name: "Woman White Puff Sleeves Eva Top",
    image: aim32,
    price: 428,
    category: "women", // Add category property for each product
  },
  {
    id: 14,
    name: "Men Black Solid Denim Jacket",
    image: aim44,
    price: 1034,
    category: "men", // Add category property for each product
  },
  {
    id: 3,
    name: "Women Black Boyfriend Jeans",
    image: aim40,
    price: 619,
    category: "women", // Add category property for each product
  },
  {
    id: 15,
    name: "Men Navy Blue Regular Fit Casual Shirt",
    image: aim45,
    price: 1034,
    category: "men", // Add category property for each product
  },
  {
    id: 4,
    name: "Women Navy Blue & Red Striped T-shirt",
    image: aim34,
    price: 287,
    category: "women", // Add category property for each product
  },
  {
    id: 16,
    name: "Men Solid Hooded Sweatshirt",
    image: aim46,
    price: 599,
    category: "men", // Add category property for each product
  },
  {
    id: 5,
    name: "Green Printed Jumpsuit",
    image: aim35,
    price: 995,
    category: "women", // Add category property for each product
  },
  {
    id: 17,
    name: "Men Tailored Fit Formal Blazer",
    image: aim47,
    price: 500,
    category: "men", // Add category property for each product
  },
  {
    id: 6,
    name: "Women Black & White Straight Fit Trousers",
    image: aim36,
    price: 459,
    category: "women", // Add category property for each product
  },
  {
    id: 18,
    name: "Men Black Slim Jeans",
    image: aim48,
    price: 1700,
    category: "men", // Add category property for each product
  },
  {
    id: 7,
    name: "Women Kurti with Sharara & with Dupatta",
    image: aim37,
    price: 1990,
    category: "women", // Add category property for each product
  },
  {
    id: 19,
    name: "Men Green & Gold-Toned Short Kurta",
    image: aim49,
    price: 649,
    category: "men", // Add category property for each product
  },
  {
    id: 8,
    name: "Women Stylish Black Floral Tiered Dress",
    image: aim38,
    price: 645,
    category: "women", // Add category property for each product
  },
  {
    id: 20,
    name: "Printed Pure Cotton T-shirt",
    image: aim50,
    price: 399,
    category: "men", // Add category property for each product
  },
  {
    id: 9,
    name: "Blue Neck Top",
    image: aim39,
    price: 432,
    category: "women", // Add category property for each product
  },
  {
    id: 10,
    name: "Women Straight Fit High-RiseJeans",
    image: aim33,
    price: 779,
    category: "women", // Add category property for each product
  },
  {
    id: 11,
    name: "Women Black Oversized Crop T-shirt",
    image: aim41,
    price: 269,
    category: "women", // Add category property for each product
  },
  {
    id: 21,
    name: "Men Black Solid Slim-Fit Track Pants",
    image: aim51,
    price: 419,
    category: "men", // Add category property for each product
  },
  {
    id: 12,
    name: "Women Black Solid Basic Jumpsuit",
    image: aim42,
    price: 824,
    category: "women", // Add category property for each product
  },

  // Add more products here...
];

const Products = ({
  onAddToCart,
  onAddToWishlist,
  cartItems,
  wishlistItems,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); // Initialize with "all"

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = productsData.filter((product) => {
    // Filter based on the selected category and search query
    if (selectedCategory === "all" || product.category === selectedCategory) {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  const handleAddToWishlist = (product) => {
    onAddToWishlist(product);
  };

  return (
    <div>
      <h1>Products</h1>
      <br />
      <div className="category-buttons">
        <button onClick={() => handleCategoryFilter("all")}>All</button>
        <button onClick={() => handleCategoryFilter("men")}>Men</button>
        <button onClick={() => handleCategoryFilter("women")}>Women</button>
      </div>
      <br />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No matching items in your product</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              cartItems={cartItems}
              wishlistItems={wishlistItems}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
