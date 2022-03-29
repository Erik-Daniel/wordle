import "./style.css";
import Board from './Board.js';
import { getStatus } from "./Board.js";
import Popup from "./Popup.js";
import { useEffect, useState } from "react";

function App() {
  const [getStat, setStat] = useState();

  useEffect(() => {
    function initializeStatus() {
      console.log(getStatus)
      const info = getStatus;
      if(info === 1){
        setStat("Congratulations! You figured out the Word!");
      }
      else {
        setStat("At least you now know the word!");
      }
    }
    initializeStatus();
  }, [getStatus])
  

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <hr></hr>
      <Board></Board>
      <Popup message={getStat}></Popup>
    </div>
  );
}

export default App;
