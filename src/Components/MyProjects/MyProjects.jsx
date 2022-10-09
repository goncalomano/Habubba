import React from 'react'
import '../AboutMe/AboutMe.css'
import { useInView } from 'react-intersection-observer'
export default function MyProjects () {
    const {ref: StripeRef, inView:stripeIsVisible} = useInView()
  return (
    <div className="row">        
        <div className={`${"skewed"} ${stripeIsVisible ? "ToTheLeft" : ""}`} ref={StripeRef}>
        <div className='AboutMeHead'>
            <h1 scrollamount="15" className="AboutMeHeader "> MY SKILLS / MY SKILLS / MY SKILLS / MY SKILLS / MY SKILLS / MY SKILLS</h1>
        </div>
     </div>
    </div>
  )
}
