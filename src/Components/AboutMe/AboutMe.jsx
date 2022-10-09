import React from 'react'
import './AboutMe.css'
import { useInView } from 'react-intersection-observer'
export default function AboutMe () {
    const {ref: StripeRef, inView:stripeIsVisible} = useInView()
  return (
    <div className="row">        
        <div className={`${"skewed"} ${stripeIsVisible ? "ToTheLeft" : ""}`} ref={StripeRef}>
        <div className='AboutMeHead'>
            <h1 scrollamount="15" className="AboutMeHeader ">ABOUT ME / ABOUT ME / ABOUT ME / ABOUT ME / ABOUT ME / ABOUT ME / ABOUT ME </h1>
        </div>
     </div>
    </div>
  )
}
