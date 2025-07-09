import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartView from "./pages/Cart";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CartView" element={<CartView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
