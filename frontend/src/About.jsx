import React from "react";
import "./About.css";
import ImageGallery from "./ImageGallery";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>About Our Clothing Store</h1>
          <p>
            Welcome to [Your Brand Name], your ultimate destination for fashion
            and style. Our mission is to provide you with a diverse range of
            clothing and accessories that empower you to express your unique
            personality.
          </p>
          <p>
            We take pride in curating collections that cater to various tastes
            and occasions. Whether you're looking for casual wear, formal
            attire, or statement pieces, we have you covered.
          </p>
          <p>
            Our team is dedicated to sourcing high-quality products that combine
            the latest trends with timeless classics. We believe that every
            individual deserves to look and feel their best, and our products
            are designed to help you achieve that.
          </p>
          <p>
            Thank you for choosing [Your Brand Name]. Explore our image gallery
            to get a glimpse of our offerings, and don't miss our featured
            products section for the latest highlights.
          </p>
        </div>
        <ImageGallery />
      </div>
    </>
  );
}

export default About;
