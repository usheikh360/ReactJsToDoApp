import React from "react"


// function Joke(props) {
//     //METHOD 1 TO CHECK IF THE QUESTION PROPERTY IS NOT NULL
//     if (props.joke.question != null) {
//         return (
//             <div>
//                 <h1>Joke</h1>
//                 <p>Question: {props.joke.question}</p>
//                 <p>Joke: {props.joke.jokeAnswer}</p>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 <h1>Joke</h1>
//                 <p>PunchLine: {props.joke.jokeAnswer}</p>
//             </div>
//         )
//     }

// }


function Joke(props) {
    //METHOD 2 TO CHECK IF THE QUESTION PROPERTY IS NOT NULL

    return (
        <div>
            <h1>Joke</h1>
            {/* <p style={{ display: props.joke.question ? "block" : "none" }}>Question: props.joke.question</p> */}
            <p style={{ display: !props.joke.question && "none" }}>Question: props.joke.question</p>
            <p style={{ color: !props.joke.question && "#888888" }}>Answer {props.joke.answer}</p>
        </div>
    )
}

export default Joke