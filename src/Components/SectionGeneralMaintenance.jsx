import React from 'react'
import { useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import WretchSVG from './Icons/WretchSVG'
import TieSVG from './Icons/TieSVG'
import ClipboardSVG from './Icons/ClipboardSVG'
import DashboardSVG from './Icons/DashboardSVG'
import LivingImg from '../img/living-01-full.jpg'
import DishwasherImg from '../img/kitchen-01-full.jpg'
import KitchenImg from '../img/kitchen-02-full.jpg'
import CoffeeImg from '../img/living-02-full.jpg'

const SectionGeneralMaintenance = () => {

  const data = {
    title: "General Maintenance",
    subtitle: "A complete peace of mind",
    image: "./images/living-01-full.jpg",
    cards: [
      {
        icon: <WretchSVG />,
        title: "Maintenance Check-up",
        text: "Regular health check-up and home maintenance schedule is important for every house's upkeep."
      },
      {
        icon: <TieSVG />,
        title: "Personal Home Manager",
        text: "Coordinate and arrange appointments to schedule home maintenance and repair work."
      },
      {
        icon: <ClipboardSVG />,
        title: "Personalised Maintenance Plan",
        text: "Maintenance plan and schedule that is catered specifically to your home needs."
      },
      {
        icon: <DashboardSVG />,
        title: "Digital Dashboard Access",
        text: "Track all your home maintenance status and schedules on the go at your convenience."
      },
    ]
  }

  const Maintenance = () => {
    const container = useRef(null)
    const images = [LivingImg, DishwasherImg, KitchenImg, CoffeeImg]
    const [bgImage, setBgImage] = useState({
      backgroundImage: `url(${LivingImg})`
    })

    const tickle = (e) => {
      setBgImage({ backgroundImage: `url(${images[e.currentTarget.id]})` })
      container.current.classList.add('anim')
      setTimeout(() => {
        container.current.classList.remove('anim')
      }, 300)
    }

    return (
      <div className="content-container">
        <div className="image-container">
          <div ref={container} className="image" style={bgImage} />
        </div>
        <div className="cards-container">
          <ul className="cards">
            {data.cards.map((card, i) => (
              <li onMouseEnter={tickle} id={i} key={i}>
                <div className="icon-container">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  return (
    <section id="general-maintenance">
      <div className="wrapper">
        <SectionTitle title={data.title} subtitle={data.subtitle} />
        <Maintenance />
      </div>
    </section>
  )
}

export default SectionGeneralMaintenance
