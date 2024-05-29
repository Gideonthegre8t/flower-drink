import React from "react"
import whatsapp from "../assets/images/whatsapp.png";
import facebook from "../assets/images/facebook.png";
import gmail from "../assets/images/google.png";
import instagram from "../assets/images/instagram.png"

function Footer () {
    return(
        <section>
        <div className="footer-container wrapper"> 
        <div className="footer-content">
        <div className="footer-content-top">
            <h3 className="contact-header">CONTACT US</h3>
             <div className="handles">
                <p><img src={whatsapp} alt="whatsapp"></img>+9061814241</p>
                <p><img src={facebook} alt="whatsapp"></img>Flower Mocktails</p>
                <p><img src={gmail} alt="whatsapp"></img>Flowermoctails@outlook.com</p>
                <p><img src={instagram} alt="whatsapp"></img>Flower_mocktails</p>                 
             </div>
        </div>

        <div className="location">
        <h4>LOCATION</h4>    
        <p className="address">Envato Level 13, 2 Elizabeth Victoria 3000 Australia</p>
        </div>
        
        <div className="website-container">
            <h4>Website</h4>
            <p className="website">flowerdrinkcocktails.com</p>
        </div>
        
        </div>
        </div>
        </section>
    )
}

export default Footer;