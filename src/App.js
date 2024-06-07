import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/component/Header";
import About from "../src/component/About";
import Product from "../src/component/Product";
import Footer from "../src/component/Footer";
import Advert from "../src/component/Advert";
import About2 from "../src/component/About2";
import CartList from "../src/component/cartList";
import Cart from "../src/component/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Advert />
                <About />
                <Product />
                <Footer />
              </>
            }
          />
          <Route path="/cart-list" element={<CartList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about2" element={<About2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
