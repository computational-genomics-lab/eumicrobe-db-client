import React from "react";
import { useState } from "react";
import './App.css';
import Header from "./components/pages/Header";
import NAV from "./NAV";
import Trees from "./components/tree";


function App() {
 
    
      const [inputField , setInputField] = useState({
        first_name: ''
    })
   
    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    // const submitButton = () =>{
    //     alert(inputField.first_name)

    // }
  


return(
<div className="App">
      <NAV genomename={inputField.first_name}/>
      <Header title="EumicrobeDB"/>
      <div>
            <h15 style={{ textAlign:"left" }}> Organism ID Query Box </h15>
            <small style={{ textAlign:"left" }}> (Enter correct organism ID into this box and click on Jbrowse in Navbar above)</small>
            
        </div>
      <div> 
            <input 
            type="text" 
            name="first_name" 
           onChange={inputsHandler}
            placeholder="enter the organism id" 
            value={inputField.first_name}/>
            {/* <button onClick={inputsHandler}>Submit Now</button>  */}
            </div>
      <h3 style={{ textAlign:"left" }}> Organism List </h3> 
      <div>Organism ID Search Box </div> 
        <div> <Trees /> </div>
          
    </div>
    )

    
  } 
export default App;
