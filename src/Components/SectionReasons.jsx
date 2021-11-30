import React from 'react'
import SectionTitle from './SectionTitle'
import QualitySVG from './Icons/QualitySVG'
import CostSVG from './Icons/CostSVG'
import CustomerServiceSVG from './Icons/CustomerServiceSVG'

const SectionReasons = () => {
  const data = {
    title: "3 Reasons for Choosing Us",
    subtitle: "Our reputation is spotless",
    cards: [
      {
        icon: <QualitySVG />,
        title: "Handyman",
        image: "./images/cleaning-02-full.jpg",
        text: "Fixes common household repair jobs and carry out maintenance work on both exterior and interior of the house."
      },
      {
        icon: <CostSVG />,
        title: "Plumbing",
        image: "./images/affordable-01-full.jpg",
        text: "Our plumbers are trained and a registered specialist, certified by industry experts to carry out any plumbling repairs."
      },
      {
        icon: <CustomerServiceSVG />,
        title: "Electricial Works",
        image: "./images/customer-01-full.jpg",
        text: "Electrical applications installation and repair electrical power, communications, lighting and control systems."
      }
    ]
  }
  const ReasonList = () => {
    return (
      <ul className="reasons">
        {data.cards.map((reason, i) => (
          <li key={i}>
            <div className="image-container">
              <div className="image" style={{ backgroundImage: `url(${reason.image})` }}></div>
            </div>
            <div className="icon-container">
              {reason.icon}
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <section id="reasons">
      <div className="wrapper">
        <SectionTitle title={data.title} subtitle={data.subtitle} />
        <ReasonList />

      </div>
    </section>
  )
}

export default SectionReasons
