import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Global, GlobalStyles } from "./components";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Global.Provider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Global.Provider>
  );
};

export default App;
