// import React from "react"
import React, { Component } from "react"
import { createPortal } from "react-dom";

function GreetingMessage() {
    // const date = new Date(2018, 6, 31, 10);
    const date = new Date();
    // const hours = date.getHours;//getting a refrence to the function and not the actual value
    const hours = date.getHours();

    let timeOfDay;

    let greetingStyle = {
        // height: "90px"
        fontSize: "23px"
        // fontSize: 90
    }

    console.log("date :" + date);
    console.log("hours :" + date.getHours);

    if (hours < 12) {
        timeOfDay = "morning";
        greetingStyle.color = "green";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        greetingStyle.color = "red";
    } else {
        timeOfDay = "night";
        greetingStyle.color = "purple"
    }

    return (
        // <h1 style={{ color: "red" }}>Good {timeOfDay}</h1>
        <div>
            {/* <h1>Hour: {hours}</h1> */}
            <h1 style={greetingStyle}>Good {timeOfDay}</h1>
        </div>

    )
}

// class GreetingMessage extends React.Component() {
//     render() {
//         const date = new Date();
//         const hours = date.getHours();
//         let message;
//         if (hours < 12) {
//             message = "morning";
//         } else if (hours > 12 && hours < 17) {
//             message = "afternoon";
//         } else {
//             message = "night";
//         }
//         return (
//             <p>Good {message}!</p>
//         )
//     }
// }

// #2 CLASS
// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
// }

// #3
class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}
export default GreetingMessage;