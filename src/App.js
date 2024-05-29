import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Product from "./component/Product";
import Footer from "../src/component/Footer";
import Advert from "./component/Advert";

// import About2 from "./component/About2";

function App() {
  return (
    <div className="App">
      <Header />
      <Advert />
      <About />
      <Product />
      <Footer />

      {/* <About2 /> */}

    
    </div>
  );
}

export default App;
