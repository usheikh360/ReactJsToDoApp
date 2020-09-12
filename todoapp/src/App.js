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
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // todosData : []
      todos: todoData
    }
  }

  render() {
    // const todoItems = this.state.todos.map((item) => <TodoItem key = {this.state.id} item={this.state.item}/>)
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />)
    // console.log(this.state.todosData)
    return (
      <div className="todo-list">
        {todoItems}
      </div>)
  }
}

export default App;
