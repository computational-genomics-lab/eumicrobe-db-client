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
<<<<<<< HEAD
    <div>
      <button className="btn" 
       onClick={closehandler}> Close </button>

      <button className="btn" 
      onClick={handler && getGenomes} >
      
        Show Genomes </button>
       {GenomeList.map((val,key)=>{
         return <div>{val.species}</div>
       })} 
       <a href = "http://localhost:5000/?config=test_data%2Fvolvox%2Fconfig.json&session=local-gd8yT_t0V"> JBrowse web application </a>
    </div>
    <div> <CsvReader /> </div>
=======
>>>>>>> c79d3cd3a86641ea0ab27247170524874d88122c
    </div>
     
    
  )} 
export default App;
