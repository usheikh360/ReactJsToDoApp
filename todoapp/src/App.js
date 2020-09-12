import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import GreetingMessage from "./components/GreetingMessage"
import ToDoItem from "./components/ToDoItem"
import Joke from "./components/Joke"
import Product from "./components/Product"
// import productsData from "productsData.json"
import todoData from "./todoData.js"

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
// function App() {
//   return (
//     <div className="todo-list">
//       {/* <Header /> */}
//       {/* <GreetingMessage /> */}
//       <ToDoItem itemName={{ item: "buy milk" }} />
//       <ToDoItem itemName={{ item: "buy choclate cake" }} />
//       <ToDoItem itemName={{ item: "buy pepsi" }} />
//       {/* <Joke joke={{ question: "question1", jokeAnswer: "jokeAnswer1" }} />
//       <Joke joke={{ question: "question2", jokeAnswer: "jokeAnswer2" }} />
//       <Joke joke={{ question: "question3", jokeAnswer: "jokeAnswer3" }} />
//       <Joke joke={{ question: "question4", jokeAnswer: "jokeAnswer4" }} />
//       <Joke joke={{ jokeAnswer: "jokeAnswer5" }} /> */}
//     </div>
//   )
// }

// function App2() {
//   const allProducts = productsData.map((p) => {
//     <Product key={p.id} id={p.id} name={p.name} price={p.price} description={p.description} />
//   })
//   return (
//     { allProducts }
//   )
// }

// function App() {
//   const toDos = todoData.map((item) => <ToDoItem key={item.id} item={item} />)
//   return (
//     <div className="todo-list" >
//       {toDos}
//     </div>
//   )
// }
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header username="umair" />
//         <Greeting />
//       </div>
//     )
//   }
// }

// state practise 1
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Jack",
      age: 22
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}

//state practise 2
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    }
  }

  render() {
    let response;
    if (this.state.loggedIn == true) {
      response = "in"
    } else {
      response = "out"
    }

    return (
      <div>
        <h1> You are currently logged {response}</h1>
      </div>
    )
  }
}

export default App;
