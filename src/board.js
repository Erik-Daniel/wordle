import React, { useState, useEffect } from 'react'
import word from './Words.js'
import "./boardStyle.css"




export default function Board() {
    const [getLetters, setLetters] = useState([])
    const [getCurrentLetters, setCurrentLetters] = useState([]);
    const [getClassNames, setClassNames] = useState([]);
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
                    let array = [...getClassNames]
                    let wrongLetters = [];
                    for(let i = 0; i < givenWords.length; i++){
                        
                        if(givenWords[i] === getWord.charAt(i)){
                            array.push("correct");
                            
                        }
                        else {
                            array.push("")
                            wrongLetters.push(i);
                        }
                        console.log("wrong letters = " + wrongLetters)
                        // else {
                        //     let isThereLetter = false;
                        //     for(let z = 0; z < givenWords.length; z++){
                        //         if(givenWords[i] === getWord.charAt[z]){
                        //             array.push("correct-wrong-p");
                        //             isThereLetter = true;
                        //         }
                        //         if(isThereLetter){
                        //             break;

                        //         }
                        //     }
                        //     if(!isThereLetter){
                        //         array.push("wrong");
                        //     }
                        // }
                    }
                    for(let z = 0; z < wrongLetters.length; z++){
                        let isThereLetter = false;
                         for(let g = 0; g < wrongLetters.length; g++){
                            if(givenWords[wrongLetters[z]] === getWord.charAt(wrongLetters[g])){
                                
                                array.splice(wrongLetters[z],1,"correct-wrong-p");
                                isThereLetter = true;
                            }

                        }
                        if(!isThereLetter){
                            array.splice(wrongLetters[z],1,"wrong");
                        }
                    }
                    console.log(getClassNames)
                    // console.log(getWord)
                    // if(oneWord.toString() === getWord.toString()){
                    //     setStatus("You Won!");
                    // }
                    // else {
                    //     setStatus("You Lost!");
                    // }
                    setClassNames(array)

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
        </div> 
        <h1>{getWord}</h1>
        <h1>{getStatus}</h1>
    </div>
  )
}
