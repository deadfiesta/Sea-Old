import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="title-container">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

SectionTitle.defaultProps = {
  title: "Section Title Here",
  subtitle: "Subtitle Goes Here"
}

export default SectionTitle
