import './App.css'
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addnewmem from './Components/Addnewmem';
import Addtodaydetails from './Components/Addtodaydetails';
import AddFormer from "./Components/AddFormer";
import Home from './Components/Home';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/"  element={<Home />} />
       <Route path="/addtodaydetails" element={<Addtodaydetails />}/>
       <Route path="/addFormer" element={<AddFormer />}/>
     </Routes>
   </BrowserRouter>
  );
};

export default App
