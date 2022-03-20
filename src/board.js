import React, { useState, useEffect } from 'react'
import word from './Words.js'
import "./boardStyle.css"




export default function Board() {
    const [getLetters, setLetters] = useState([])
    const [getCurrentLetters, setCurrentLetters] = useState([]);
    const [getWord, setWord] = useState("");
    const [getStatus, setStatus] = useState("");

    useEffect(() => {
        setWord(word);
        
    }, []);

    function handleKeyPress() {
        window.onkeydown = function(e) {
            if(e.keyCode >= 65 && e.keyCode <= 122){
                if(getCurrentLetters.length < 5){
                    let array = [...getLetters];
                    let currentArray = [...getCurrentLetters];
                    array.push(e.key);
                    currentArray.push(e.key);
                    setLetters(array)
                    setCurrentLetters(currentArray);
                    console.log(getCurrentLetters)
                }
                
                // setLetters((prevState) => [...prevState, e.key])
            }
            else if(e.keyCode === 8){
                //backspace pressed
                    if(getCurrentLetters.length > 0){
                        let array = [...getLetters];
                        let currentArray = [...getCurrentLetters];

                        // console.log("before " + getLetters)
                        currentArray.pop();
                        array.pop();
                        setLetters(array)
                        setCurrentLetters(currentArray)
                        // console.log("after " + getCurrentLetters)
                    }
            }
            else if(e.keyCode === 13){
                //enter pressed
                if(getCurrentLetters.length < 5){
                    alert("word must be at least 5 letters long");
                }
                else {
                    let givenWords = getCurrentLetters;
                    let oneWord = "";
                    for(let i = 0; i < givenWords.length; i++){
                        oneWord = oneWord + givenWords[i];
                        console.log(getLetters[i])
                    }
                    console.log(getWord)
                    if(oneWord.toString() === getWord.toString()){
                        setStatus("You Won!");
                    }
                    else {
                        setStatus("You Lost!");
                    }
                    setCurrentLetters([]);
                }    
            }
        }
    }
    handleKeyPress();
  return (
    <div>
        <div className='container'>
            <div className='boardContainer'>
                <div className='board'>{getLetters[0]}</div>
                <div className='board'>{getLetters[1]}</div>
                <div className='board'>{getLetters[2]}</div>
                <div className='board'>{getLetters[3]}</div>
                <div className='board'>{getLetters[4]}</div>
            </div>
            <div className='boardContainer'>
                <div className='board'>{getLetters[5]}</div>
                <div className='board'>{getLetters[6]}</div>
                <div className='board'>{getLetters[7]}</div>
                <div className='board'>{getLetters[8]}</div>
                <div className='board'>{getLetters[9]}</div>
            </div>
            <div className='boardContainer'>
                <div className='board'>{getLetters[10]}</div>
                <div className='board'>{getLetters[11]}</div>
                <div className='board'>{getLetters[12]}</div>
                <div className='board'>{getLetters[13]}</div>
                <div className='board'>{getLetters[14]}</div>
            </div>
            <div className='boardContainer'>
                <div className='board'>{getLetters[15]}</div>
                <div className='board'>{getLetters[16]}</div>
                <div className='board'>{getLetters[17]}</div>
                <div className='board'>{getLetters[18]}</div>
                <div className='board'>{getLetters[19]}</div>
            </div>
            <div className='boardContainer'>
                <div className='board'>{getLetters[20]}</div>
                <div className='board'>{getLetters[21]}</div>
                <div className='board'>{getLetters[22]}</div>
                <div className='board'>{getLetters[23]}</div>
                <div className='board'>{getLetters[24]}</div>
            </div>
        </div>
        <h1>{getWord}</h1>
        <h1>{getStatus}</h1>
    </div>
  )
}
