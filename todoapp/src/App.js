import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import GreetingMessage from "./components/GreetingMessage"
import ToDoItem from "./components/ToDoItem"

//below is the first method for adding the props
// function App() {
//   return (
//     <div className="todo-list">
//       {/* <Header /> */}
//       {/* <GreetingMessage /> */}
//       <ToDoItem item="buy milk" />
//       <ToDoItem item="buy choclate cake" />
//       <ToDoItem item="buy pepsi" />
//     </div>
//   )
// }

//below is the second method for adding the props by providing an object
function App() {
  return (
    <div className="todo-list">
      {/* <Header /> */}
      {/* <GreetingMessage /> */}
      <ToDoItem itemName={{ item: "buy milk" }} />
      <ToDoItem itemName={{ item: "buy choclate cake" }} />
      <ToDoItem itemName={{ item: "buy pepsi" }} />
    </div>
  )
}
export default App;
