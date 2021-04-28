import './App.css';
import { useState } from 'react';
import Main from './Main';
import logo from "./logo.svg";
function App() {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <>
      <div style={{ display: isHidden ? 'none' : 'block' }}>
        <img src={logo} width="500" height="600" ></img>

      </div>
      <button onClick={() => { setIsHidden(!isHidden) }} style={{ position: 'relative', left: "93vw" }}>X</button>
      <Main />
    </>
  );
}

export default App;
