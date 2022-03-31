import React, { useState, useEffect } from 'react'
import word from './Words.js'
import { check } from './Words.js'
import "./boardStyle.css"




export default function Board(props) {
    const [getLetters, setLetters] = useState([])
    const [getCurrentLetters, setCurrentLetters] = useState([]);
    const [getClassNames, setClassNames] = useState([]);
    const [getWord, setWord] = useState("");
    const [getKeys, setKeys] = useState(['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F',
    'G','H','J','K','L','ENTER','Z','X','C','V','B','N','M','⌫']);
    const [getError, setError] = useState("");
    const [getStatus, setStatus] = useState(-1);

    useEffect(() => {
        setWord(word);
        props.initializeWord(word);
    }, []);



    function handleKeyPress(letter) {
        
            if(getStatus != -1){return}
            if(letter === "ENTER"){
                //enter pressed
                if(getCurrentLetters.length < 5){
                    // alert("word must be at least 5 letters long");
                    setError("word must be at least 5 letters long");
                }
                else {
                    let givenWords = getCurrentLetters;
                    let word = getAsWord();
                    console.log(word);
                    if(!check(word.toLowerCase())){
                        setError("Must be a word");
                        return;
                    }
                    setError("");
                    let array = [...getClassNames]
                    let wrongLetters = [];
                    let wrongGetLetters = [];
                    let winNum = 0;
                    for(let i = 0; i < givenWords.length; i++){
                        
                        if(givenWords[i] === getWord.charAt(i)){
                            array.push("correct");
                            winNum += 1;
                        }
                        else {
                            array.push("")
                            wrongLetters.push(i);
                            wrongGetLetters.push(i)
                        }
                    }
                    if(winNum === 5){
                        onWin(1)
                    }
                    for(let z = 0; z < wrongLetters.length; z++){

                        let isThereLetter = false;
                         for(let g = 0; g < wrongLetters.length; g++){
                            
                            if(wrongGetLetters[g] === undefined) {break;}
                            if(givenWords[wrongLetters[z]] === getWord.charAt(wrongGetLetters[g])){
                                let indexToChange = array.length - 5 + wrongLetters[z];
                                array[indexToChange] = "correct-wrong-p";
                                isThereLetter = true;
                                wrongGetLetters.splice(g, 1)
                            }
                        }
                        if(!isThereLetter){
                            let indexToChange = array.length - 5 + wrongLetters[z];
                            array[indexToChange] = "wrong";
                        }
                    }
                    if(getLetters.length === 25){
                        lose();
                    }
                    setClassNames(array)
                    setCurrentLetters([]);
                }    
            }
            
            else if(letter === "⌫"){
                //backspace pressed
                    if(getCurrentLetters.length > 0){
                        let array = [...getLetters];
                        let currentArray = [...getCurrentLetters];
                        currentArray.pop();
                        array.pop();
                        setLetters(array)
                        setCurrentLetters(currentArray)
                    }
            }
            else {
                if(getCurrentLetters.length < 5){
                    console.log(getClassNames)
                    let array = [...getLetters];
                    let currentArray = [...getCurrentLetters];
                    array.push(letter);
                    currentArray.push(letter.toLowerCase());
                    setLetters(array)
                    setCurrentLetters(currentArray);
                }
            }
            
        // }
    }

    function getAsWord(){ 
        let word = "";

        for(let i = 0; i < getCurrentLetters.length; i++){
            word += getCurrentLetters[i];
        }
        return word;
    }
    

    function onWin() {
        setStatus(1);
        props.onWin();
        // window.removeEventListener("keydown", handleKeyPress);
        window.onkeydown = null;

        return;
    }

    function lose(){
        setStatus(1);
        props.onLose();
        // window.removeEventListener("keydown", handleKeyPress);
        window.onkeydown = null;
        return;
    }
    window.onkeydown = function(e) {
        let letter = e.key;
        if(letter === "Backspace"){
            letter = "⌫";
        }
        if(getKeys.includes(letter.toUpperCase())){
            handleKeyPress(letter.toUpperCase())

        }
    };
  return (
    <div>
        <h2 className='error'>{getError}</h2>
        <div className='container' style={getStatus != -1 ? {opacity: 0.5, transition: "2s"} : {opacity: 1}}>
             <div className='boardContainer'>
                <div className={`board ${getClassNames[0] === undefined ? "" : getClassNames[0]}`}>{getLetters[0]}</div>
                <div className={`board ${getClassNames[1] === undefined ? "" : getClassNames[1]}`}>{getLetters[1]}</div>
                <div className={`board ${getClassNames[2] === undefined ? "" : getClassNames[2]}`}>{getLetters[2]}</div>
                <div className={`board ${getClassNames[3] === undefined ? "" : getClassNames[3]}`}>{getLetters[3]}</div>
                <div className={`board ${getClassNames[4] === undefined ? "" : getClassNames[4]}`}>{getLetters[4]}</div>
            </div>
            <div className='boardContainer'>
                <div className={`board ${getClassNames[5] === undefined ? "" : getClassNames[5]}`}>{getLetters[5]}</div>
                <div className={`board ${getClassNames[6] === undefined ? "" : getClassNames[6]}`}>{getLetters[6]}</div>
                <div className={`board ${getClassNames[7] === undefined ? "" : getClassNames[7]}`}>{getLetters[7]}</div>
                <div className={`board ${getClassNames[8] === undefined ? "" : getClassNames[8]}`}>{getLetters[8]}</div>
                <div className={`board ${getClassNames[9] === undefined ? "" : getClassNames[9]}`}>{getLetters[9]}</div>
            </div>
            <div className='boardContainer'>
                <div className={`board ${getClassNames[10] === undefined ? "" : getClassNames[10]}`}>{getLetters[10]}</div>
                <div className={`board ${getClassNames[11] === undefined ? "" : getClassNames[11]}`}>{getLetters[11]}</div>
                <div className={`board ${getClassNames[12] === undefined ? "" : getClassNames[12]}`}>{getLetters[12]}</div>
                <div className={`board ${getClassNames[13] === undefined ? "" : getClassNames[13]}`}>{getLetters[13]}</div>
                <div className={`board ${getClassNames[14] === undefined ? "" : getClassNames[14]}`}>{getLetters[14]}</div>
            </div>
            <div className='boardContainer'>
                <div className={`board ${getClassNames[15] === undefined ? "" : getClassNames[15]}`}>{getLetters[15]}</div>
                <div className={`board ${getClassNames[16] === undefined ? "" : getClassNames[16]}`}>{getLetters[16]}</div>
                <div className={`board ${getClassNames[17] === undefined ? "" : getClassNames[17]}`}>{getLetters[17]}</div>
                <div className={`board ${getClassNames[18] === undefined ? "" : getClassNames[18]}`}>{getLetters[18]}</div>
                <div className={`board ${getClassNames[19] === undefined ? "" : getClassNames[19]}`}>{getLetters[19]}</div>
            </div>
            <div className='boardContainer'>
                <div className={`board ${getClassNames[20] === undefined ? "" : getClassNames[20]}`}>{getLetters[20]}</div>
                <div className={`board ${getClassNames[21] === undefined ? "" : getClassNames[21]}`}>{getLetters[21]}</div>
                <div className={`board ${getClassNames[22] === undefined ? "" : getClassNames[22]}`}>{getLetters[22]}</div>
                <div className={`board ${getClassNames[23] === undefined ? "" : getClassNames[23]}`}>{getLetters[23]}</div>
                <div className={`board ${getClassNames[24] === undefined ? "" : getClassNames[24]}`}>{getLetters[24]}</div>
            </div>
            <div className='keyboard'>
            {
            getKeys.map(key => 
                <button className={getCurrentLetters.length === 0 ? getLetters.lastIndexOf(key) != -1 ? getClassNames[getLetters.lastIndexOf(key)] : "" : getClassNames[getLetters.indexOf(key)]} key={key} onClick={() => handleKeyPress(key)}>{key}</button>)}
            </div>
        </div> 
        
        <h1>{getWord}</h1>
    </div>
  )
}
