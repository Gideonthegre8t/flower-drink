import React, { useEffect } from "react";
import icon1 from "../assets/images/icon1.png";
import Drink5 from "../assets/images/Drink5.png";
import Drink4 from "../assets/images/Drink4.png";
import bloodyMaryCup from "../assets/images/bloody-mary-cup.png";

function Advert() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const items = document.querySelectorAll(".magarita-desktop");

      items.forEach((item, index) => {
        item.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="advert desktop">
        <div className="item-container magarita-desktop">
          <div className="item-frame">
            <img className="drink-image paloma" src={Drink4} alt="magarita" />
          </div>

          <div className="item-price">
            <div className="name-price">
              <p>Magarita</p>
              <p>$26</p>
            </div>
            <img src={icon1} alt="icon" />
          </div>
        </div>

        <div className="item-container magarita-desktop">
          <div className="item-frame">
            <img className="drink-image paloma" src={Drink5} alt="paloma" />
          </div>

          <div className="item-price">
            <div className="name-price">
              <p>Paloma</p>
              <p>$26</p>
            </div>
            <img src={icon1} alt="icon" />
          </div>
        </div>

        <div className="item-container magarita-desktop">
          <div className="item-frame">
            <img
              className="drink-image paloma"
              src={bloodyMaryCup}
              alt="bloody-mary"
            />
          </div>

          <div className="item-price">
            <div className="name-price bloody-name-price">
              <p>Bloody Mary</p>
              <p>$26</p>
            </div>
            <img className="icon" src={icon1} alt="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advert;
