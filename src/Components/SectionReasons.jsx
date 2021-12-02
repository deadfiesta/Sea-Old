import React from 'react'
import SectionTitle from './SectionTitle'
import QualitySVG from './Icons/QualitySVG'
import CostSVG from './Icons/CostSVG'
import CustomerServiceSVG from './Icons/CustomerServiceSVG'
import CleaningImg from '../img/cleaning-02-full.jpg'
import AffordableImg from '../img/affordable-01-full.jpg'
import CustomerImg from '../img/customer-01-full.jpg'

const SectionReasons = () => {
  const data = {
    title: "3 Reasons for Choosing Us",
    subtitle: "Our reputation is spotless",
    cards: [
      {
        icon: <QualitySVG />,
        title: "Professional Service",
        image: CleaningImg,
        text: "Our service crews and housekeepers specialised in quality cleaning services. We provide professional cleaning services at the highest standards of cleanliness for you and your family."
      },
      {
        icon: <CostSVG />,
        title: "Affordable Rates",
        image: AffordableImg,
        text: "We offering competitive market rates to ensure they remain affordable to you while allowing us to maintain the highest possible quality of service."
      },
      {
        icon: <CustomerServiceSVG />,
        title: "Electricial Works",
        image: CustomerImg,
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
