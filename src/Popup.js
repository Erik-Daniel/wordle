import React from 'react'
import "./popupStyle.css"

export default function popup(message) {
    console.log(message)
  return (
    <div className='popup'>
        <h1>{message.message}</h1>
    </div>
  )
}
