import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const PrevNextContainer = ({ direction, click, anchor, topic, image, title, paragraph }) => {
  return (
    <div topic={topic} onClick={click} className="prevnext-container">
      <div className="title-container">
        {direction === 'next' ? <MdArrowForwardIos /> : <MdArrowBackIosNew />} <h3>Previous</h3>
      </div>
      <div anchor={anchor} className="image-container">
        <img key={image} src={image} className="image" alt="" />
      </div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  )
}

export default PrevNextContainer
