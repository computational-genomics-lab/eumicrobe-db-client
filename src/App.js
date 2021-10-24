import React from "react";
import './App.css';
import JSXReader from "./components/JSXReader";
import Header from "./components/pages/Header";
import NAV from "./NAV";
import Trees from "./components/tree";


function App() {
 
  return ( 
    <div className="App">
      <NAV />
      
      <Header title="EumicrobeDB"/>
    <div> <Trees /> </div>
    </div>
    
  )} 
export default App;
