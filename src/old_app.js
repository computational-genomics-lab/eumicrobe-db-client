import React from "react";
import { useState } from "react";
import './App.css';
import Header from "./components/pages/Header";
import Axios from "axios";
import NAV from "./NAV";
function App() {
  const [handler,Sethandler] = useState(true);
  const [GenomeList, setGenomeList] = useState([]);
  const getGenomes = () => {
    Axios.get("http://localhost:3001/organism").then((response) => {
      setGenomeList(response.data);
    });
  };
 function closehandler() {Sethandler(false);}

  return (
    <div className="App">
      <NAV />
      
      <Header title="EumicrobeDB"/>
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
    </div>
    
  )} 
export default App;

