import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import GreetingMessage from "./components/GreetingMessage"
import ToDoItem from "./components/ToDoItem"

function App() {
  return (
    <div>
      <Header />
      <GreetingMessage />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>

  )
}


// function App() {
//   return (
//     <div>
//       <Header />
//       <GreetingMessage />
//       <MainContent />
//       <Footer />
//     </div>
//   )
// }

{/* <div>
  <input type="checkbox" id="grocery1" name="grocery1" value="Fruits"></input>
  <label for="grocery1"> Buy fruits</label><br></br>
  <input type="checkbox" id="grocery2" name="grocery2" value="Cake"></input>
  <label for="grocery2">Buy cake</label><br></br>
  <input type="checkbox" id="grocery3" name="grocery3" value="Pepsi"></input>
  <label for="vehicle3">Buy Pepsi</label><br></br>
</div> */}


export default App;
