import React from "react";
import icon1 from "../assets/images/icon1.png";
import Drink5 from "../assets/images/Drink5.png";
import tequila from "../assets/images/tequila.png";
import bloodyMary from "../assets/images/bloody-mary.png";
import tequilaSour from "../assets/images/tequila-sour.png";
import ranchWater from "../assets/images/ranch-water.png";

function Bar() {
    return(
        <section>
            <div className="paloma-container paloma-card">
          <div className="item-frame">
            <img className="drink-image paloma" src={Drink5} alt="paloma-drink" />
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
           <div className="bar-content">
            <div className="drink-card">
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
           </div>
        </section>
    );
}

export default Bar;