import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          functions as a virtual marketplace where businesses and individuals
          can showcase their products, interact with customers, and make
          transactions without physical presence. E-commerce websites have
          gained immense popularity due to the convenience, accessibility, and
          global reach they provide. E-commerce websites typically display
          products or services along with detailed descriptions, images, prices,
          and any available variations. Each product usually has its own page
          with related information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
