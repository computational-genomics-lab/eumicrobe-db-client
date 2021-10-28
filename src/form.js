// import React, {Component } from 'react'
// class FormsAndInputs extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             organismName: ''
//         }
//     }

// handleSubmit = (event) => {
//     event.preventDefault()
//     const data = this.state.organismName
//     console.log(data)
// }
// handleInputChange = (event) => {
//     event.preventDefault()
//     this.setState({
//         [event.target.name] : event.target.value
//     })
// }
// render () {
//     const {organismName} = this.state
//     return(
//         <div>
//            <h16> Enter the Organism ID</h16>
//             <form onSubmit = {this.handleSubmit}>
//         <p> <input type='text' placeholder ='Enter Organism ID'
//             name='organismName' onChange = {this.handleInputChange} />
//         </p>
//         <p><button>Submit Data</button></p>
//             </form>
//         </div>
//     )
// }}
// export default FormsAndInputs;

import React, {useState} from 'react';

function Submit() {

    const [inputField , setInputField] = useState({
        first_name: ''
    })
   
    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        alert(inputField.first_name)

    }
    return (
        <div>
            <input 
            type="text" 
            name="first_name" 
            onChange={inputsHandler} 
            placeholder="enter the organism id" 
            value={inputField.first_name}/>
            <button onClick={submitButton}>Submit Now</button> 
        </div>
    )
}

export default Submit

