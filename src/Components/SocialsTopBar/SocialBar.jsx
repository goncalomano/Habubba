// Quick social row with bootstrap.
// DONT FORGET TO ADD SocialIcon class to icon prop

import React from 'react'
import { useInView } from 'react-intersection-observer'
import Social from './Social'
import './SocialBar.css'
export default function SocialBar() {
    const {ref: SocialRef, inView:socialIsVisible} = useInView()

  return (
    <div ref={SocialRef} class={` ${"row"}  ${"ViewRow"} `}>
        <div className={`${"col-12"} ${"SocialsRow"} ${"SocialRowBoot"} ${ !socialIsVisible ? "BottomFixed AnimateDown" : ""}`}>
        <Social icon={<i class="bi bi-instagram SocialIcon"></i>} Link="https://instagram.com/imhububba"/>
        <Social icon={<i class="bi bi-twitter SocialIcon "></i>}  Link="https://twitter.com/hububba"/>
        </div>
    </div>
  )
}
