import { useState } from "react";
import Keypad from "../components/Keypad";
import Screen from "../components/Screen";
import TripleToggle from "../components/TripleToggle";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main__bg">
      <header className="calculator__header">
        <h1 className="page__heading">calc</h1>
        <div className="theme__component">
          <h2 className="sub__heading">theme</h2>
          <TripleToggle />
        </div>
      </header>
      <main className="calculator__body">
        <Screen />
        <Keypad />
      </main>
    </div>
  );
}

export default App;
