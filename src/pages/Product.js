import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-container">
      <h2>Our Products</h2>
      <div className="product-list">
        <div className="product-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PYhXff7cxpnjusAlXVhQBD8zx56I1_I8uXWg1j26Hw&s"
            alt="Product 1"
          />
          <h3>Product 1</h3>
          <p>
            Discover the epitome of style at our fashion e-commerce platform.
            From timeless classics to cutting-edge trends, our collection
            encapsulates the essence of sophistication and individuality.
          </p>
        </div>
        <div className="product-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PYhXff7cxpnjusAlXVhQBD8zx56I1_I8uXWg1j26Hw&s"
            alt="Product 1"
          />
          <h3>Product 2</h3>
          <p>
            Indulge in luxurious fabrics, impeccable craftsmanship, and
            captivating designs that seamlessly blend comfort with elegance. our
            diverse range caters to every occasion and aesthetic preference.
          </p>
        </div>
        <div className="product-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PYhXff7cxpnjusAlXVhQBD8zx56I1_I8uXWg1j26Hw&s"
            alt="Product 1"
          />
          <h3>Product 3</h3>
          <p>
            Embrace the allure of statement pieces that exude personality and
            charm, each product embodies essence of contemporary fashion,
            empowering you to express your unique style effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
