import React from 'react'

const ToggleBtn = ({ notext, children, click, checked, id }) => {
  return (
    <div className="toggle-container flex-container middle" style={{ gap: "1rem" }}>
      <span>{!notext && checked ? `${children}ing` : children}</span>
      <input onChange={click} checked={checked} type="checkbox" name="" id={id} />
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
