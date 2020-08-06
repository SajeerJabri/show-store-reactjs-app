import React from "react";
import Background from "../../images/background.png";
import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="leftText">
          <h1>SHOE CARNIVAL ONLINE<br/> SHOE STORE</h1>
          <h3>
            SHOE CARNIVAL ONLINE SHOE STORE: SHOP SALES ON SHOES FOR THE ENTIRE
            FAMILY
          </h3>
          <p>
            We understand. We’re obsessed with shoes, too. But, at Shoe
            Carnival, we don’t want you to pay full price for your favorite
            brands. That’s why we offer money-saving Shoe Carnival coupons,
            discounts, and promo codes. You get a great looking pair of shoes
            and you save money at the same time. Now, that’s what we call a
            win-win!
          </p>
          <Link exact to="/product">See Products</Link>
        </div>
        <div className="rightImg">
          <img src={Background} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default Home;
