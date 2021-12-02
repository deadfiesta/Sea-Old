import React from 'react'

const ToggleBtn = ({ children, click, checked, id }) => {
  return (
    <div className="toggle-container flex-container middle" style={{ gap: "1rem" }}>
      <span className={checked ? "em accent" : null}>{checked ? `${children}ing` : `Start ${children}`}</span>
      <input onChange={click} checked={checked} type="checkbox" name="" id={id} />
      <label className="toggle" htmlFor={id} />
    </div>
  )
}

ToggleBtn.defaultProps = {
  children: "Load",
  onclick: () => console.log('Prop not passed'),
  checked: false,
}

export default ToggleBtn
