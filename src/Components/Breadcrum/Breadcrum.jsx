import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";
const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" />{" "}
      <Link style={{ textDecoration: "none" }} to="/">
        Shop
      </Link>{" "}
      <img src={arrow_icon} alt="" />
      <Link style={{ textDecoration: "none" }} to={`/${product.category}s`}>
        {product.category}
      </Link>
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
