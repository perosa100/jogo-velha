import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { JogoDaMemoria } from "./components/JogoDaMemoria";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <JogoDaMemoria />
    </div>
  );
}

export default App;
