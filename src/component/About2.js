import React from "react";
import { useNavigate } from "react-router-dom";
import about2wallpaper from "../assets/images/about2-wallpaper.png";
import treasureChest from "../assets/images/Treasure Chest.png";
import sunnyIsland from "../assets/images/Sunny Island.png";
import sticker from "../assets/images/flower-drink-sticker.png";
import stickerDesktop from "../assets/images/flower-drink-sticker-desktop.png";
import arrowLeft from "../assets/images/arrow-left.png";

function About2() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <section>
      <img
        className="about2-wallpaper mobile"
        src={about2wallpaper}
        alt="wallpaper"
      />
      <div className="about2-container">
        <img
          className="about2-arrow"
          src={arrowLeft}
          alt="arrow"
          onClick={handleBackClick}
        />
        <div className="about2-content-text">
          <h3 className="about-text about2-header">ABOUT US</h3>
          <h2 className=" about2-text">WHERE YOU EXPERIENCE GOOD TASTE</h2>

          <div className="about2-paragraph">
            <p>
              At Blossom Beverages, we take pride in crafting floral drinks that
              not only taste great but also offer health benefits. Our
              dedication to quality means using the finest natural ingredients,
              ensuring each sip is a delightful experience. We believe that
              beverages should do more than quench your thirst they should
              invigorate your senses and support your well-being.
            </p>

            <p className="desktop">
              Our journey began with a passion for the natural benefits of
              flowers. We meticulously source our ingredients from trusted
              growers who share our commitment to sustainability and quality.
              From classic flower infusions to innovative botanical blends,
              every drink is designed to bring a touch of nature to your daily
              hydration routine.
            </p>
          </div>

          <div className="about2-drinks">
            <img src={treasureChest} alt="treasure-chest" />
            <img src={sunnyIsland} alt="sunny-island" />
          </div>
        </div>
      </div>

      <div className="about2-content">
        <div className="cocktail-description">
          <div className=" description-card">
            <h3>COCKTAILS</h3>

            <p>
              Discover the art of cocktails with Blossom Beverages. Our floral
              drinks blend natural ingredients for a refreshing experience.
              Enjoy classic favorites or try innovative twists, each crafted to
              delight your taste buds. Our mixologists use traditional
              techniques and modern flair, selecting ingredients to enhance the
              natural flavors and health benefits.
            </p>
          </div>

          <div className=" description-card">
            <h3>MOCKTAILS</h3>

            <p>
              Discover the art of mocktails with Blossom Beverages. Our floral
              drinks blend natural ingredients for a refreshing experience.
              Enjoy classic favorites or try innovative twists, each crafted to
              delight your taste buds. Our mixologists use traditional
              techniques and modern flair, selecting ingredients to enhance the
              natural flavors and health benefits.
            </p>
          </div>

          <div className=" description-card">
            <h3>VODKA</h3>

            <p>
              Experience the essence of vodka with Blossom Beverages. Our vodka
              drinks blend natural ingredients for a refreshing taste. Enjoy
              classic flavors or explore innovative mixes, each crafted to
              satisfy your palate. Our experts combine traditional methods with
              modern twists, selecting ingredients to enhance flavors and health
              benefits.
            </p>
          </div>
        </div>
      </div>

      <img
        className="sticker mobile "
        src={sticker}
        alt="flower-drink-sticker"
      />
      <img
        className="sticker desktop-sticker  desktop"
        src={stickerDesktop}
        alt="flower-drink-sticker"
      />
    </section>
  );
}
export default About2;
