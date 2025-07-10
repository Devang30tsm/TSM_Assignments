import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartView from "./pages/Cart";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
     <Toaster position="top-right" reverseOrder={false} />
     <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CartView" element={<CartView/>}/>
        </Routes>
      </Router>
    </div>
    </>
   
  );
}

export default App;
