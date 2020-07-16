import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


const Demo = (props) => {

    return < div className = "mainDiv-style" >
            <h1> Hello {props.name} </h1>
            <p><h2>Welcome to my Page </h2></p>
         </div > 
}

export default Demo;

// propos get passed to component
//props are immutable (cannot change/modify)
//props - functional components
// this.pros- class components

// class Demo extends Component {
//     render() {
//         return <div className="mainDiv-style">
//             <h1> Hello World </h1>
//             <p><h2>Welcome  {this.props.name}</h2></p>
//         </div>
//     }
// }