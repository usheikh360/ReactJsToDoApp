import React from "react"

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={console.log("Changed!")}></input>
            <p>{props.item.id} {props.item.text}</p>
            {/* <p>Placeholder text here</p> */}
        </div>
    )
}

export default ToDoItem