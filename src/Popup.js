import React, { useRef } from 'react'
import "./popupStyle.css"

export default function Popup(props) {

  function restart() {
    window.location.reload();
  }

  return (
    <div className='popup'>
        <h2>{props.message}</h2>
        <h2>{props.word}</h2>
        <button onClick={restart}>Play Again</button>
    </div>
  )
}
