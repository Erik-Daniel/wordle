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
      <Board style={getPopup ? {opacity: 0.5, transition: "0.5s"} : {opacity: 1}} initializeWord={(word) => {setWord(word)}} onWin={() => {setStat("Congratulations! You figured out the word!"); setPopup(true)}} 
      onLose={() => {setStat("At least you know the word now!"); setPopup(true)}}></Board>
      {getPopup ? <Popup style={{opacity: 1} } message={getStat} word={getWord.toUpperCase()}></Popup> : <></>}
      
    </div>
  );
}

export default App;
