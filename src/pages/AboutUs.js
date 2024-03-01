import React from "react";
import "./About.css";
//import CompanyImage from "./company-image.jpg"; // Replace with actual image path

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          feugiat ipsum, sed commodo sapien. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin nec est vitae arcu lacinia cursus vel in eros.
          Aliquam erat volutpat. Duis vel tempus odio. Ut eleifend fermentum
          odio nec interdum. Mauris blandit urna sed nulla tempor, nec egestas
          arcu fringilla. In eleifend lectus non ultricies. Suspendisse potenti.
          Mauris placerat id lectus sit amet bibendum.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2019/10/07/12/08/online-shopping-4532460_640.jpg"
          alt="Company"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default AboutUs;
