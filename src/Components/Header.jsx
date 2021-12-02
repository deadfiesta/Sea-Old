import React from 'react'

const Header = () => {

  const parallex = () => {
    let background = document.querySelector('header')
    let scroll = window.scrollY
    let amount = scroll/10
    if (50 - amount >= 0) {
      background.style.backgroundPositionY = 50 - amount + "%"
    } else {
      background.style.backgroundPositionY = "0%"
    }
    
  }

  window.onscroll = parallex
  const copy = {
    title: "Pricing",
    subtitle: "Quality service. Unmatched value."
  }
  return (
    <header>
      <div className="wrapper">
        <div className="header-container">
          <h1>{copy.title}</h1>
          <h2>{copy.subtitle}</h2>
        </div>
      </div>
    </header>
  )
}

export default Header
