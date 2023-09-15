import { useState } from "react";
import Keypad from "../components/Keypad";
import Screen from "../components/Screen";
import TripleToggle from "../components/TripleToggle";
import "./App.css";

function App() {
  const [monitorValue, setMonitorValue] = useState("0");
  const [valueHolder, setValueHolder] = useState("");

  const updateScreen = (monitorVal, valHolder) => {
    setMonitorValue(monitorVal);
    setValueHolder(valHolder);
  };

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
        <Screen monitorVal={monitorValue} valHolder={valueHolder} />
        <Keypad updateScreen={updateScreen} />
      </main>
    </div>
  );
}

export default App;
