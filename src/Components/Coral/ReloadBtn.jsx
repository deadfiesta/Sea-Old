import React from 'react'
import { MdRefresh } from "react-icons/md";
const ReloadBtn = ({ onclick, children }) => {
  return (
    <button className="view-code reload" onClick={onclick}>{ children} <MdRefresh /></button>
  )
}

ReloadBtn.defaultProps = {
  children: "Reload"
}

export default ReloadBtn
