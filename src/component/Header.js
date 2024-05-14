import React from "react";
import Drink1 from "../assets/images/Drink1.png";
import Drink2 from "../assets/images/Drink2.png";
import Drink3 from "../assets/images/Drink3.png";
import Drink4 from "../assets/images/Drink4.png";
import icon1 from "../assets/images/icon1.png";
import arrowDown from "../assets/images/arrow-down.png";
import mobileWallpaper from "../assets/images/Background-mobile.png";
import banner from "../assets/images/banner.png";

function Header() {
  return (
    <header>
      <img
        className="header-wallpaper-mobile"
        src={mobileWallpaper}
        alt="header-wallpaper"
      />
      <div className="header-container">
        <div className="header-top">
          <p className="logo">FLOWER</p>
        </div>

        <h1 className="banner">
          {" "}
          <img className="cocktail-banner" src={banner} alt="cocktail-banner" />
        </h1>
        <p className="description">
          Quench your thirst with our delicious cocktail & mocktails! Refreshing
          options for everyone to enjoy. Cheers to a healthier choice!
        </p>

        <div className="content-container">
          <div className="drinks">
            <img className="drink-image" src={Drink1} alt="drink-image1" />
            <img className="drink-image" src={Drink2} alt="drink-image2" />
            <img className="drink-image" src={Drink3} alt="drink-image3" />
          </div>
          <div className="order">
            <h4>
              Place your order now!{" "}
              <img className="arrow-down" src={arrowDown} alt="arrow-down" />
            </h4>
            <button className="order-now">Order Now </button>
          </div>
        </div>

        <div className="item-container">
          <div className="item-frame">
            <img className="drink-image" src={Drink4} alt="drink-image4" />
          </div>

          <div className="item-price ">
            <div className="name-price">
              <p>Magarita</p>
              <p>$26</p>
            </div>

            <img src={icon1} alt="drink-image1" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
