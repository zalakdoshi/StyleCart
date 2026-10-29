import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageGallery.css"; // Import your custom CSS file
import aim4 from "./images/aim4.jpg"; // Import the image directly
import aim6 from "./images/aim6.jpg";
import aim14 from "./images/aim14.jpg";
import aim1 from "./images/aim1.jpg";
import aim2 from "./images/aim2.jpg";
import aim19 from "./images/aim19.jpg";
import aim24 from "./images/aim24.jpg";
import aim8 from "./images/aim8.jpg";
import aim3 from "./images/aim3.jpg";
import aim7 from "./images/aim7.jpg";
import aim5 from "./images/aim5.jpg";
import aim9 from "./images/aim9.jpg";
import aim10 from "./images/aim10.jpg";
import aim11 from "./images/aim11.jpg";
import aim12 from "./images/aim12.jpg";

const ImageGallery = () => {
  const products = [
    { id: 1, title: "Product1", image: aim4 }, // Use the imported image
    { id: 2, title: "Product 2", image: aim11 },
    { id: 3, title: "Product 3", image: aim14 },
    { id: 4, title: "Product 4", image: aim12 },
    { id: 5, title: "Product 5", image: aim2 },
    { id: 6, title: "Product 6", image: aim19 },
    { id: 7, title: "Product 7", image: aim24 },
    { id: 8, title: "Product 8", image: aim8 },
    { id: 9, title: "Product 9", image: aim3 },
    { id: 10, title: "Product 10", image: aim7 },
    { id: 11, title: "Product 11", image: aim1 },
    { id: 12, title: "Product 12", image: aim9 },
    { id: 13, title: "Product 13", image: aim5 },
    { id: 14, title: "Product 14", image: aim10 },
    { id: 15, title: "Product 15", image: aim6 },
  ];

  return (
    <div className="featured-product">
      <h2>Image Gallery</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // Time between slides in milliseconds
      >
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image} // Use the imported image directly
              alt={product.title}
              className="carousel-image"
            />
            <p className="legend">{product.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
