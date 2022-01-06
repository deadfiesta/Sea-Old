import React from 'react'
import image from '../../../Images/img-sample.jpg'

const Image = () => {
  return (
    <img style={{width: "100%", height: "100%", borderRadius: ".25rem"}}  src={image} alt="" />
  )
}

export default Image
