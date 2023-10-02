import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feast from "./components/Feast";
import DataFetching from "./components/DataFetching";
import Card from "./components/Card";
import Button from "./components/Button";
import Developing from './components/Developing';
import Arrive from './components/Arrive';
import Deliver from './components/Deliver';
import CartPage from './components/CartPage';
import Store from "./components/Store";

function App() {

  return (
   
    <>
      {/* <Route path="/"></Route> */}
      <Router>
<Routes>
<Route path="/store" element={<Store />}/>

</Routes>
  
</Router>
      <Router>
        <Navbar />
        {/* <DataFetching /> */}
        {/* <Feast /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/feast" element={<Feast />}/>
          <Route path="/arrive" element={<Arrive />}/>
          <Route path="/delivered" element={<Deliver />}/>
          <Route path="/cart" element={<CartPage />}/>


        </Routes>

      </Router>

      
    </>
  );
}

export default App;
