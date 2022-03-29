import "./style.css";
import Board from './Board.js';
import Popup from "./Popup.js";
import { useEffect, useState } from "react";

function App() {
  const [getStat, setStat] = useState();
  const [getPopup, setPopup] = useState(false);
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <hr></hr>
      <Board onWin={() => {setStat("Congratulations!\nYou figured out the word!"); setPopup(true)}} 
      onLose={() => {setStat("At least you know the word now!"); setPopup(true)}}></Board>
      {getPopup ? <Popup message={getStat}></Popup> : <></>}
      
    </div>
  );
}

export default App;
