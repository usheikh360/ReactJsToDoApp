import React from "react"

//below is the first method for adding the props
// function ToDoItem(props) {
//     return (
//         <div className="todo-item">
//             <input type="checkbox"></input>
//             <p>{props.item}</p>
//             {/* <p>Placeholder text here</p> */}
//         </div>
//     )
// }

//below is the second method for adding the props by providing an object
// function ToDoItem(props) {
//     return (
//         <div className="todo-item">
//             <input type="checkbox"></input>
//             <p>{props.itemName.item}</p>
//             {/* <p>Placeholder text here</p> */}
//         </div>
//     )
// }

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}></input>
            <p>{props.item.id} {props.item.text}</p>
            {/* <p>Placeholder text here</p> */}
        </div>
    )
}

export default ToDoItem