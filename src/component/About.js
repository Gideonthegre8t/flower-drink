import React from "react";
import { useNavigate } from "react-router-dom";
import aboutWallpaper1 from "../assets/images/wallpaper2-mobile.png";
import aboutWallpaper2 from "../assets/images/about-wallpaper-desktop.png";

function About() {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate("/about2");
  };

  return (
    <section id="about">
      <img
        className="about-wallpaper-mobile mobile"
        src={aboutWallpaper1}
        alt="about-wallpaper"
      />

      <div className="about-container">
        <div className="about-top">
          <h4>Expert Mixologists</h4>
          <h4>Very Affordable</h4>
          <h4>Excellent Taste</h4>
        </div>

        <div className="about-content">
          <div className="desktop">
            <img
              className="about-wallpaper"
              src={aboutWallpaper2}
              alt="about-wallpaper"
            />{" "}
          </div>
          <div className="about-text-wrapper">
            <h3 className="about-text">ABOUT US</h3>
            <h2 className="about-header">WHERE YOU EXPERIENCE GOOD TASTE</h2>

            <div className="paragraph">
              <p>
                From classic flower infusions to innovative botanical blends,
                join us on a journey of taste and exploration as we celebrate
                the art of floral beverages. Our passion for nature inspires us
                to create drinks that refresh and nourish, using only the finest
                natural ingredients. At Blossom Beverages, we believe in the
                power of flowers to elevate your hydration experience.
              </p>
              <p>
                Discover the perfect blend of flavor and wellness in every sip.
                Enjoy our floral drinks and bring a touch of nature to your
                daily routine.
              </p>
            </div>

            <div
              className="know-button centered-content"
              onClick={handleKnowMoreClick}
            >
              <p>Know more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
