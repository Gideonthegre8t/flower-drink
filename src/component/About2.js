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
              Lorem i psum dolor sit amet, consectetur adipiscing elit. Etiam
              quis sagittis nisl. Morbi mi magna, congue id diam non, eleifend
              dignissim neque. Fusce convallis ex at eros feugiat elementum. Ut
              non luctus ante. In blandit purus a eros tempus. From classic
              cocktails to innovative twists and everything in between. Lorem i
              psum dolor sit amet, consectetur adipiscing elit. Etiam quis
              sagittis nisl lorem i psum dolor sit amet, consectetur adipiscing
              elit. Etiam quis sagittis nisl. Lorem i psum dolor sit amet,
              consectetur adipiscing elit. Etiam quis sagittis nisl.
            </p>

            <p className="desktop">
              From classic cocktails to innovative twists and everything in
              between, join us on a journey of taste and exploration as we
              celebrate the art of cocktail crafting. From classic cocktails to
              innovative twists and everything in between, join us on a journey
              of taste and exploration as we celebrate the art of cocktail
              crafting. Lorem i psum dolor sit amet, consectetur adipiscing
              elit. Etiam quis sagittis nisl. Morbi mi magna, congue id diam
              non, eleifend dignissim neque. Fusce convallis ex at eros feugiat
              elementum. Ut non luctus ante. In blandit purus a eros tempus.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis sagittis nisl. Morbi mi magna, congue id diam non, eleifend
              dignissim neque. Fusce convallis ex at eros feugiat elementum. Ut
              non luctus ant. Morbi mi magna, congue id diam non, eleifend
              dignissim neque. Fusce convallis ex at eros feugiat elementum. Ut
              non luctus ant
            </p>
          </div>

          <div className=" description-card">
            <h3>MOCKTAILS</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis sagittis nisl. Morbi mi magna, congue id diam non, eleifend
              dignissim neque. Fusce convallis ex at eros feugiat elementum. Ut
              non luctus ant. Morbi mi magna, congue id diam non, eleifend
              dignissim neque. Fusce convallis ex at eros feugiat elementum. Ut
              non luctus ant
            </p>
          </div>

          <div className=" description-card">
            <h3>VODKA</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis sagittis nisl. Morbi mi magna, congue id diam non, eleifend
              dignissim neque. Fusce convallis ex at eros feugiat elementum. Ut
              non luctus ant. Morbi mi magna, congue id diam non, eleifend
              dignissim neque. Fusce convallis ex at eros feugiat elementum. Ut
              non luctus ant
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
