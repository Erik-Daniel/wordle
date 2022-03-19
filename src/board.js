import React, { useState, useEffect } from 'react'
import word from './Words.js'
import "./boardStyle.css"




export default function Board() {
    const [getLetters, setLetters] = useState([])
    const [getWord, setWord] = useState("");

    useEffect(() => {
        setWord(word);
        
    }, []);

    function handleKeyPress() {
        window.onkeydown = function(e) {
            if(e.keyCode >= 65 && e.keyCode <= 122){
                let array = [...getLetters];
                array.push(e.key);
                setLetters(array)

                // setLetters((prevState) => [...prevState, e.key])
            }
            else if(e.keyCode === 8){
                //backspace pressed
                let array = [...getLetters];
                array.pop();
                setLetters(array)
            }
            else if(e.keyCode === 13){
                //enter pressed
                let givenWords = getLetters;
                let oneWord = "";
                for(let i = 0; i < givenWords.length; i++){
                    oneWord = oneWord + givenWords[i];
                    console.log(getLetters[i])
                }
                console.log(getWord)
                if(oneWord.toString() === getWord.toString()){
                    console.log("You Won");
                }
                else {
                    console.log("You Lost");
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
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
            </div>
            <div className='boardContainer'>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
            </div>
            <div className='boardContainer'>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
            </div>
            <div className='boardContainer'>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
                <div className='board'></div>
            </div>
        </div>
        <h1>{getWord}</h1>
    </div>
  )
}
