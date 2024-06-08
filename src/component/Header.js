import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Drink1 from "../assets/images/Drink1.png";
import Drink2 from "../assets/images/Drink2.png";
import Drink3 from "../assets/images/Drink3.png";
import Drink4 from "../assets/images/Drink4.png";
import icon1 from "../assets/images/icon1.png";
import arrowDown from "../assets/images/arrow-down.png";
import mobileWallpaper from "../assets/images/Background-mobile.png";
import desktopWallpaper from "../assets/images/Background-desktop.jpg";
import banner from "../assets/images/banner.png";
import BackToTopText from "./BackToTopText";

function Header() {
  const navigate = useNavigate();

  const handlePlaceOrderClick = () => {
    navigate("/cart-list");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const banner = document.querySelector(".cocktail-banner");
      const drinks = document.querySelector(".drinks");
      const headerWallpaperMobile = document.querySelector(
        ".header-wallpaper-mobile"
      );

      if (banner) {
        banner.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }

      if (drinks) {
        drinks.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }

      if (headerWallpaperMobile) {
        headerWallpaperMobile.style.transform = `translateY(${
          scrollPosition * 0.1
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="home">
      <img
        className="header-wallpaper-mobile mobile"
        src={mobileWallpaper}
        alt="header-wallpaper"
      />

      <img
        className="header-desktop-wallpaper desktop"
        src={desktopWallpaper}
        alt="header-wallpaper"
      />

      <div className="header-container">
        <div className="header-top">
          <p className="logo">FLOWER</p>
          <Navbar />
        </div>

        <div className="flex-box">
          <div className="banner-wrapper">
            <div className="banner">
              <img
                className="cocktail-banner"
                src={banner}
                alt="cocktail-banner"
              />
            </div>

            <div className="description">
              <p>Quench your thirst with our delicious cocktail & mocktails!</p>
              <p>
                Refreshing options for everyone to enjoy. Cheers to a healthier
                choice!
              </p>
            </div>

            <div className="order desktop-order desktop">
              <h4>
                Place your order now!{" "}
                <img className="arrow-down" src={arrowDown} alt="arrow-down" />
              </h4>
              <button className="order-now" onClick={handlePlaceOrderClick}>
                Order Now
              </button>
            </div>
          </div>
          <div className="header-description">
            <div className="drinks-container">
              <div className="drinks">
                <img className="drink-image" src={Drink1} alt="drink-image1" />
                <img className="drink-image" src={Drink2} alt="drink-image2" />
                <img className="drink-image" src={Drink3} alt="drink-image3" />
              </div>
            </div>
            <div className="banner-note">
              <div className="order mobile">
                <h4>
                  Place your order now!{" "}
                  <img
                    className="arrow-down"
                    src={arrowDown}
                    alt="arrow-down"
                  />
                </h4>
                <button className="order-now" onClick={handlePlaceOrderClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="item-container magarita mobile">
          <div className="item-frame">
            <img className="drink-image" src={Drink4} alt="drink-image4" />
          </div>

          <div className="item-price">
            <div className="name-price">
              <p>Magarita</p>
              <p>$26</p>
            </div>

            <img src={icon1} alt="icon" />
          </div>
        </div>
      </div>
      <BackToTopText />
    </header>
  );
}

export default Header;
