
  
import { text } from "d3-fetch";
import React from "react";
//adding JSX elements list containing organism data
//curly braces contain a dynamic expression
const organism_data = [{
    id:"Phyag_NZFS3770",
    name: "Phytophthora agathidicida",
    Size: 37238500
  }]
function JSXReader(){
    return (
    <section>
        <h3 style={{ textAlign:"left" }}> Organism List </h3> 
        <ul>
            {organism_data.map((input) => {
                return <li key={input.id}>
                    <a href= "http://10.0.0.220:3000/jbrowse/jbrowse"> {input.id} </a>
                    {input.Size}   {input.name}
                     </li>  
            })
            }
        </ul>  
        </section>
         
    );}
export default JSXReader;

// read excel file first
// excel to json parser (WE CAN WORK ON THIS LATER)
// import * as XLSX from 'xlsx';
// let f = "src/components/pages/Genome_data_summary_with_all_information.xlsx"
// let name = f.name;
// const reader = new FileReader();
// reader.onload = (evt) => { // evt = on_file_select event
//     /* Parse data */
//     const bstr = evt.target.result;
//     const wb = XLSX.read(bstr, {type:'binary'});
//     /* Get first worksheet */
//     const wsname = wb.SheetNames[0];
//     const ws = wb.Sheets[wsname];
//     /* Convert array of arrays */
//     const data = XLSX.utils.sheet_to_csv(ws, {header:1});
//     /* Update state */
//     console.log("Data>>>"+data);
// };
// function JSXReader(){
//   return(reader.readAsBinaryString(f));
// }
// export default JSXReader;
