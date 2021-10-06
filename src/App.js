import React from "react";
import { useState } from "react";
import './App.css';
import Header from "./components/pages/Header";
import NAV from "./NAV";
import CsvReader from "./components/csvreader";
function App() {
  
  return (
    <div className="App">
      <NAV />
      
      <Header title="EumicrobeDB"/>
      <CsvReader />
    </div>
     
    
  )} 
export default App;
