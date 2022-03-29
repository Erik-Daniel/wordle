import "./style.css";
import Board from './Board.js';
import Popup from "./Popup.js";
import { useEffect, useState } from "react";

function App() {
  const [getStat, setStat] = useState();
  const [getPopup, setPopup] = useState(false);
  const [getWord, setWord] = useState();

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <hr></hr>
      <Board initializeWord={(word) => {setWord(word)}} onWin={() => {setStat("Congratulations! You figured out the word!"); setPopup(true)}} 
      onLose={() => {setStat("At least you know the word now!"); setPopup(true)}}></Board>
      {getPopup ? <Popup message={getStat} word={getWord}></Popup> : <></>}
      
    </div>
  );
}

export default App;
