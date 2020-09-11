import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <input type="checkbox" id="grocery1" name="grocery1" value="Fruits"></input>
      <label for="grocery1"> Buy fruits</label><br></br>
      <input type="checkbox" id="grocery2" name="grocery2" value="Cake"></input>
      <label for="grocery2">Buy cake</label><br></br>
      <input type="checkbox" id="grocery3" name="grocery3" value="Pepsi"></input>
      <label for="vehicle3">Buy Pepsi</label><br></br>
    </div>
  )

}

export default App;
