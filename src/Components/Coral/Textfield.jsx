import React from 'react'

const Textfield = ({ notes }) => {
  return (
    <div className="field">
      <h3>Issues to note:</h3>
      <p>{notes}</p>  
    </div>
  )
}

Textfield.defaultProps = {
  notes: "Type here",
}

export default Textfield
