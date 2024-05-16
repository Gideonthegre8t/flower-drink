import React from "react";
import mobileWallpaper2 from "../assets/images/wallpaper2-mobile.png";

function About() {
  return (
    <article>
      <img
        className="about-wallpaper-mobile"
        src={mobileWallpaper2}
        alt="header-wallpaper"
      />

      <div className="about-container">
        <div className="about-top">
          <h4>Expert Mixologists</h4>
          <h4>Very Affordable</h4>
          <h4>Excellent Taste</h4>
        </div>

        <div className="about-content">
          <div>
            <h3 className="about-text">ABOUT US</h3>
            <h2 className="about-header">WHERE YOU EXPERIENCE GOOD TASTE</h2>

            <div className="paragraph">
              <p>
                From classic cocktails to innovative twists and everything in
                between, join us on a journey of taste and exploration as we
                celebrate the art of cocktail crafting
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                quis sagittis nisl. Morbi mi magna, congue id diam non, eleifend
                dignissim neque. Fusce convallis ex at eros feugiat elementum.
                Ut non luctus ante. In blandit purus a eros tempus.
              </p>
            </div>

            <div className="know-button centered-content">
              <p>Know more</p>
            </div>
          </div>
        </div>
      </div>

    </article>
  );
}

export default About;
