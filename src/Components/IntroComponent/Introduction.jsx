import React from 'react'
import './Introduction.css'

export default function Introduction(props) {
  return (
    <div className="Introdiv">
      <h1 class="IntroTopText">Hi! I'm</h1>
      <h1 onClick={()=> document.getElementById('AboutMe').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})} class="IntroBottomText">{props.NAME}</h1>
    </div>
  )
}
