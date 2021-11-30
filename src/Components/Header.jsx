import React from 'react'

const Header = () => {
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
