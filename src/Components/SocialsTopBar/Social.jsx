import React from 'react'

export default function Social(props) {
    let Link = props.Link
  return (
    <div onClick={() => window.location.replace(Link)} className='SocialDiv'>
        {props.icon}
    </div>
  )
}
