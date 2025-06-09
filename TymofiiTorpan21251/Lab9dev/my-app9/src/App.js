import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
import Hello from './Hello';
function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}
import React, { useState } from "react"
import Counter from "./Counter"

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Zwiększ:
        {count}</button>
      <Counter onLog={() => console.log("Licznik:", count)} />
    </div>
  )
}
