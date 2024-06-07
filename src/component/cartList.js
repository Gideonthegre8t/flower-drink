import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cartWallpaper from "../assets/images/cart-wallpaper-mobile.png";
import cartDesketoptWallpaper from "../assets/images/cart-desktop-wallpaper.png";
import cartIcon from "../assets/images/cart-icon.png";
import arrowLeft from "../assets/images/arrow-left.png";
import addSign from "../assets/images/add-symbol.png";
import magarita from "../assets/images/magarita.jpg";
import sunsetSmiles from "../assets/images/sunset-smiles.jpg";
import corpseReviver from "../assets/images/Corpse Reviver.png";
import ranchWater from "../assets/images/ranch-water.png";
import paloma2 from "../assets/images/paloma2.jpg";
import treasureChest from "../assets/images/Treasure Chest.png";
import Drink2 from "../assets/images/Drink2.png";
import sailorsWind from "../assets/images/sailors-wind.jpg";
import harvey from "../assets/images/Harvey Wallbanger.png";
import tequila from "../assets/images/tequila.png";
import spicyMagarita from "../assets/images/Spicy Magarita.png";
import hailMary from "../assets/images/Hail Mary.png";
import cartSticker from "../assets/images/cart-sticker.png";
import searchIcon from "../assets/images/search-icon.png";

const drinksData = {
  cocktails: [
    { name: "Sunset Smiles", image: sunsetSmiles, price: 45 },
    { name: "Corpse Reviver", image: corpseReviver, price: 45 },
    { name: "Paloma", image: paloma2, price: 45 },
    { name: "Ranch Water", image: ranchWater, price: 45 },
  ],
  mocktails: [
    { name: "Magarita", image: magarita, price: 45 },
    { name: "Treasure Chest", image: treasureChest, price: 45 },
    { name: "Lime Magic", image: Drink2, price: 45 },
    { name: "Sailors Wind", image: sailorsWind, price: 45 },
  ],
  vodka: [
    { name: "Harvey Wallbanger", image: harvey, price: 45 },
    { name: "Tequila", image: tequila, price: 45 },
    { name: "Spicy Magarita", image: spicyMagarita, price: 45 },
    { name: "Hail Mary", image: hailMary, price: 45 },
  ],
};

function CartList() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("cocktails");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (drink) => {
    setCartItems([...cartItems, drink]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const filteredDrinks = drinksData[activeTab].filter((drink) =>
    drink.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <section>
      <img
        className="cart-wallpaper mobile"
        src={cartWallpaper}
        alt="background-wallpaper"
      />
      <img
        className="cart-wallpaper desktop"
        src={cartDesketoptWallpaper}
        alt="background-wallpaper"
      />
      <div className="cl-top">
        <img src={arrowLeft} alt="arrow" onClick={handleBackClick} />
        <h2>FLOWER DRINKS</h2>
        <div className="cart-icon-container">
          <img src={cartIcon} alt="cart-icon" />
          <span className="cart-item-count">{cartItems.length}</span>
        </div>
      </div>
      <div className="cart-flex">
        <div className="cart-list-container">
          <div className="tab-container bar-option">
            {Object.keys(drinksData).map((tab) => (
              <h4
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={activeTab === tab ? "active" : ""}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </h4>
            ))}
          </div>

          <div className="search-bar">
            <img src={searchIcon} alt="search-icon" />
            <input
              type="text"
              placeholder="Search drinks..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="bar-card-container">
            {filteredDrinks.map((drink) => (
              <div className="bar-drink-card" key={drink.name}>
                <img
                  src={drink.image}
                  className="bar-card-image"
                  alt={drink.name}
                />
                <div className="bar-card-description">
                  <p className="bar-card-name">{drink.name}</p>
                  <p className="bar-card-text">
                    classic drink with a bold and savory flavour profile
                  </p>
                  <div className="bar-card-price">
                    <p>${drink.price.toFixed(2)}</p>
                    <img
                      src={addSign}
                      alt="add-symbol"
                      onClick={() => handleAddToCart(drink)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart">
          <div className="cart-tab-container">
            <p className="cart-order-text">YOUR ORDER</p>
          </div>
          <div className="cart-text">
            {cartItems.length === 0 ? (
              <>
                <img className="cart-sticker" src={cartSticker} alt="arrow" />
                <p>You've not added any products yet.</p>
                <p>When you do, you'll see them here!</p>
              </>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <p>
                      {item.name} - ${item.price.toFixed(2)}
                    </p>
                    <button onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <p>Total: ${totalAmount.toFixed(2)}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartList;
