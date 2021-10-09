import React from "react";
import './App.css';
import JSXReader from "./components/JSXReader";
import Header from "./components/pages/Header";
import NAV from "./NAV";
// import * as d3 from 'd3';
// import data from 'public/organism_list.csv';





function App() {
 
  return ( 
    <div className="App">
      <NAV />
      {/* <div>
        d3.csv(data, function(data) { document.write(data)});
      </div> */}
      
      <Header title="EumicrobeDB"/>
    <div> <JSXReader /> </div>
    </div>
    
  )} 
export default App;
