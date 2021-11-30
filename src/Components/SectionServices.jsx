import React from 'react'
import SectionTitle from './SectionTitle'
import HandymanSVG from './Icons/HandymanSVG'
import PlumberSVG from './Icons/PlumberSVG'
import ElectricianSVG from './Icons/ElectricianSVG'
import EmergencySVG from './Icons/EmergencySVG'
import PestSVG from './Icons/PestSVG'
import DengueSVG from './Icons/DengueSVG'
import OnDemandJobSVG from './Icons/OnDemandJobSVG'
import MaterialSVG from './Icons/MaterialSVG'

const SectionServices = () => {
  const data = {
    title: "Services",
    subtitle: "Wait, there’s more",
    cards: [
      {
        icon: <HandymanSVG />,
        title: "Handyman",
        private: false,
        text: "Fixes common household repair jobs and carry out maintenance work on both exterior and interior of the house."
      },
      {
        icon: <PlumberSVG />,
        title: "Plumbing",
        private: false,
        text: "Our plumbers are trained and a registered specialist, certified by industry experts to carry out any plumbling repairs."
      },
      {
        icon: <ElectricianSVG />,
        title: "Electricial Works",
        private: false,
        text: "Electrical applications installation and repair electrical power, communications, lighting and control systems."
      },
      {
        icon: <EmergencySVG />,
        title: "Emergency Call-out",
        private: false,
        text: "We are available for service in the event of unforeseen emergencies that require immediate attention. "
      },
      {
        icon: <PestSVG />,
        title: "Pest Control",
        private: false,
        text: "Our pest control specialists are trained to handle and remove pest infestations safely."
      },
      {
        icon: <DengueSVG />,
        title: "Dengue Prevention",
        private: false,
        text: "We look out for any hazard that might be a potential breeding ground during all of our maintenace and cleaning works."
      },
      {
        icon: <OnDemandJobSVG />,
        title: "On Demand Jobs",
        private: true,
        text: "Separate charges may apply."
      },
      {
        icon: <MaterialSVG />,
        title: "Any Other Material Costs",
        private: true,
        text: "Separate charges may apply"
      },
    ]
  }

  const Services = () => {

    return (
      <ul className="cards">
        {data.cards.map((card, i)=> (
          <li key={i}>
            <div className="icon-container">
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            {card.private && <span className="label">Private Property Only</span>}
            <p>{card.text}</p>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section id="services">
      <div className="wrapper">
        <SectionTitle title={data.title} subtitle={data.subtitle} />
        <Services />
      </div>
      
    </section>
  )
}

export default SectionServices
