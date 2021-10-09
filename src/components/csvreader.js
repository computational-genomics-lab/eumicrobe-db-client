import React, { Component }  from 'react';
import { useState } from 'react';

export default function CsvReader(){
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    // [{id: "", length: 0, organism_name: ""},{id: "", length: 0, organism_name: ""}]

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }

    return(
        <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}
            >
                Submit
            </button>
            <br/>
            <br/>
            {csvArray.length>0 ? 
            <div>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>length</th>
                        <th>Organism Name</th>
                    </thead>
                    <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.length}</td>
                                    <td>{item.organism_name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div> : null}
        </form>
    );

}

// const fs = require('fs');
// const papa = require('papaparse');
// const file = fs.createReadStream('public/organism_list.csv');
// var count = 0; // cache the running count
// papa.parse(file, {
//     worker: true, 
//     step: function(result) {
        
//     },
//     complete: function(results, file) {
//         console.log('parsing complete read', count, 'records.'); 
//     }
// });
// function CsvReader() {
//     document.write(csv_write)  
// }
// export default CsvReader;

