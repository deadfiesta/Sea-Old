import React from 'react'

const UXNotes = ({id, title, description}) => {
  return (
    <li className="flex-container" style={{ flexDirection: "row", gap: "2rem" }}>
      <div className="number-container"><span className="number">{id+1}</span></div>
      <div className="notes stack" >
        <p className="title">{title}</p>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default UXNotes
