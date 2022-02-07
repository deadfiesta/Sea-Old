import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"

const ShowCodeBtn = ({ onclick, open, children }) => {
  return (
    <button onClick={onclick} className={open ? "view-code active" : "view-code"}>{open ? "Hide" : "View"} {children} <MdKeyboardArrowDown style={
      open
        ? {
          transform: "rotate(180deg)",
          transition: "transform .2s ease"
        }
        : {
          transition: "transform .2s ease"
        }
    } /></button>
  )
}

ShowCodeBtn.defaultProps = {
  children: "Code"
}

export default ShowCodeBtn
