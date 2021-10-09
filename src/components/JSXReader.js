import { text } from "d3-fetch";
import React from "react";
//adding JSX elements list containing organism data
//curly braces contain a dynamic expression
const organism_data = [{
    id:"Phyra",
    name: "Phytophthora ramorum"},
    {id: "Phyli",
name: "Phytophthora li"},
    {id:"Phyag",
name: "Phytophthora agathicida"}]
function JSXReader(){
    return (
    <section>
        <h3 style={{ textAlign:"left" }}> Organism List </h3> 
        <ul>
            {organism_data.map((input) => {
                return <li key={input.id}>
                    {input.id} : {input.name}
                     </li>  
            })
            }
        </ul>  
        </section>
         
    );}
export default JSXReader;