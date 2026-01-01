import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UndoRedo from "./components/UndoRedo";
import Button from "./components/Button";
import History from "./components/History";

function App() {
  const [history, setHistory] = useState({
    past: [],
    present: 0, // current number
    future: [],
  });
  return (
    <div className="app">
      <h1 className="title">Undoable Counter</h1>

      <UndoRedo history={history} setHistory={setHistory} />

      <div className="counterRow">
        <Button val={-100} history={history} setHistory={setHistory} />
        <Button val={-10} history={history} setHistory={setHistory} />

        <h1 className="counterValue">{history.present}</h1>

        <Button val={10} history={history} setHistory={setHistory} />
        <Button val={100} history={history} setHistory={setHistory} />
      </div>

      <History history={history} />
    </div>
  );
}

export default App;
