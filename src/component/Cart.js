import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cartWallpaper from "../assets/images/cart-wallpaper-mobile.png";
import arrowLeft from "../assets/images/arrow-left.png";
import cartIcon from "../assets/images/cart-icon.png";
import cartSticker from "../assets/images/cart-sticker.png";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]); // Initial state should be passed from CartList
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section>
      <img
        className="cart-wallpaper"
        src={cartWallpaper}
        alt="background-wallpaper"
      />

      <div className="cart-list-container">
        <div className="cl-top">
          <img src={arrowLeft} alt="arrow" onClick={handleBackClick} />
          <h2>FLOWER DRINKS</h2>
          <img src={cartIcon} alt="cart-icon" />
        </div>

        <div className="order-tab ">
          <p className="cart-order-text">YOUR ORDER</p>
          <img src={cartSticker} alt="arrow" />
        </div>

        <div className="cart-text">
          {cartItems.length === 0 ? (
            <>
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
    </section>
  );
}

export default Cart;
