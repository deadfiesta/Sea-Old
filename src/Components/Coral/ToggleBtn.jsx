import React from 'react'

const ToggleBtn = ({ notext, children, click, checked, id, on, off }) => {
  return (
    <div className="toggle-container flex-container middle" style={{ gap: "1rem" }}>
      <span>{!notext && checked ? on : off}</span>
      <input onChange={click} checked={checked} type="checkbox" name={id} id={id} />
      <label className="toggle" htmlFor={id} />
    </div>
  )
}

ToggleBtn.defaultProps = {
  notext: true,
  children: "Load",
  click: () => console.log('Prop not passed'),
  checked: false,
}

export default ToggleBtn
