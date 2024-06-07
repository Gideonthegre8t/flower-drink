import React from "react";
import { useNavigate } from "react-router-dom";
import icon1 from "../assets/images/icon1.png";
import Drink5 from "../assets/images/Drink5.png";
import tequila from "../assets/images/tequila.png";
import bloodyMary from "../assets/images/bloody-mary.png";
import tequilaSour from "../assets/images/tequila-sour.png";
import ranchWater from "../assets/images/ranch-water.png";
import hailMary from "../assets/images/Hail Mary.png";
import spicyMagarita from "../assets/images/Spicy Magarita.png";
import corpseReviver from "../assets/images/Corpse Reviver.png";
import harvey from "../assets/images/Harvey Wallbanger.png";
import bloodyMaryCup from "../assets/images/bloody-mary-cup.png";

function Product() {
  const navigate = useNavigate();

  const handlePlaceOrderClick = () => {
    navigate("/cart-list");
  };

  return (
    <section id="product">
      <div className="product-container">
        <div className="paloma-container paloma-card mobile">
          <div className="item-frame">
            <img
              className="drink-image paloma"
              src={Drink5}
              alt="paloma-drink"
            />
          </div>

          <div className="item-price ">
            <div className="name-price">
              <p>Paloma</p>
              <p>$26</p>
            </div>

            <img src={icon1} alt="icon" />
          </div>
        </div>
        <div className="bar-container">
          <h3 className="product-header">PRODUCTS</h3>
          <div className="bar-content rack1">
            <div className=" drink-card">
              <img src={tequila} alt="tequila" />
              <p>Tequila Sunrise</p>
            </div>

            <div className="drink-card">
              <img src={bloodyMary} alt="bloody mary" />
              <p>Bloody Mary</p>
            </div>

            <div className="drink-card">
              <img src={tequilaSour} alt="tequila sour" />
              <p>Tequila Sour</p>
            </div>

            <div className="drink-card">
              <img src={ranchWater} alt="ranch water" />
              <p>Ranch Water</p>
            </div>
          </div>

          <div className="bar-content rack2 desktop">
            <div className="drink-card">
              <img src={hailMary} alt="hail-mary" />
              <p>Hail Mary</p>
            </div>

            <div className="drink-card">
              <img src={spicyMagarita} alt="spicy magarita" />
              <p>Spicy Magarita</p>
            </div>

            <div className="drink-card">
              <img src={corpseReviver} alt="corpse reviver" />
              <p>Corpse Reviver</p>
            </div>
            <div className="drink-card">
              <img src={harvey} alt="harvey" />
              <p>Harvey Wallbanger</p>
            </div>
          </div>
        </div>

        <div className="bloody-mary-card  wrapper mobile">
          <div className="item-frame">
            <img
              className="drink-image paloma"
              src={bloodyMaryCup}
              alt="paloma-drink"
            />
          </div>

          <div className="item-price ">
            <div className="name-price bloody-name-price">
              <p>Bloody Mary</p>
              <p>$26</p>
            </div>

            <img src={icon1} alt="icon" />
          </div>
        </div>

        <div className="explore-button desktop" onClick={handlePlaceOrderClick}>
          <p>Place Order</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
