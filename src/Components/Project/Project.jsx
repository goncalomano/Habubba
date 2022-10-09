import React from 'react'
import { useInView } from 'react-intersection-observer'
import './Project.css'
function Project(props) {
    const {ref: StripeRef, inView:stripeIsVisible} = useInView()
    let URL = props.URL
  return (
    <div ref={StripeRef}  className={`${"ProjectDiv"} ${stripeIsVisible ? "Opacity1" : ""}`}>
        <h1 className="ProjectTitle">{props.Title}</h1>
        <h1 onClick={() => URL?  window.location.replace(URL) : "" } className="ProjectDescription">{props.Description}</h1>
    </div>
  )
}

export default Project