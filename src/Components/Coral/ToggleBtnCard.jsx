import React from 'react'

const ToggleBtnCard = ({ children, click, checked, id }) => {
  return (
    <div id={id} className="toggle-container flex-container middle" style={{ gap: "1rem" }}>
      <span className={checked ? "em accent" : null}>{checked ? `${children}ing` : `Start ${children}`}</span>
      <input onChange={click} checked={checked} type="checkbox" name="" id="toggle" />
      <label className="toggle" htmlFor="toggle" />
    </div>
  )
}

// ToggleBtn.defaultProps = {
//   children: "Load",
//   onclick: () => console.log('Prop not passed'),
//   checked: false,
// }

export default ToggleBtnCard
