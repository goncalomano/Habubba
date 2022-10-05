import React from 'react'
import './Introduction.css'

export default function Introduction(props) {
  return (
    <div className="Introdiv">
      <h1 class="IntroTopText">Hi! I'm</h1>
      <h1 class="IntroBottomText">{props.NAME}</h1>
    </div>
  )
}
