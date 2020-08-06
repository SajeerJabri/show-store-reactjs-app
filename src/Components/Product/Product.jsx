import React from "react";
import Shoes from "../../shoe.json";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <h1>SHOE CARNIVAL ONLINE SHOE STORE</h1>
      <div className="productContainer">
        {Object.keys(Shoes).map((item, ind) => {
          const shoe = Shoes[item];
          return (
            <div className="prodItem">
              <Link key={item} className="productLinks" to={`/product/${item}`}>
                <img src={shoe.img} alt="shoe" />
                <div className="prodDetail">
                  <span>{shoe.name}</span>
                  <br />
                  <span>{shoe.price}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
