import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { animated, useTransition, useSpring } from 'react-spring'
import { options } from './CoverPage'
import { MdChevronRight } from "react-icons/md"

import Bg from '../images/heads.jpg'
import Brick from '../images/sustainablematerial.jpg'
import Education from '../images/recycled.jpg'
import Parent from '../images/sustainablepackaging.png'
import Themes from '../images/plant.jpg'

const LegoSustainability = () => {

  const [active, setActive] = useState(false)

  const head = useRef()

  const up = useSpring({ opacity: active ? 1 : 0, y: active ? 0 : 200, config: { mass: 2, friction: 30 } })
  const down = useSpring({ opacity: active ? 1 : 0, y: active ? 0 : 100, config: { mass: .75 } })

  const transition = useTransition(active, {
    from: { opacity: 0 },
    enter: { opacity: .25 },
    leave: { opacity: 0, config: { mass: .25 } },
    config: { mass: 5 }
  })

  const content = [
    {
      title: `Bricks from sustainable materials by 2030`,
      picture: Brick,
      text: `The brand has ramped up sustainability efforts in recent years, setting numerous targets.`,
      link: "https://www.lego.com/en-sg/sustainability/environment/sustainable-materials",
      anchor: "Sustainable Material",

    },
    {
      title: `Recycled material`,
      picture: Education,
      link: "https://www.lego.com/en-sg/sustainability/environment/recycledmaterials/",
      anchor: "Recycling",
      text: 'LEGO is research on making brick prototypes using recycled plastic from water bottles .'
    },
    {
      title: `Sustainable packaging`,
      picture: Parent,
      link: "https://www.lego.com/en-sg/sustainability/environment/sustainable-packaging/",
      anchor: "Sustainable packaging",
      text: `Some of the packaging contains single-use disposable plastic, which today isn't sustainable or in some cases able to be recycled. LEGO is taking urgent action to make all our packaging sustainable by 2025.`
    },
    {
      title: 'Bio-based material',
      picture: Themes,
      text: `LEGO work with our sugarcane suppliers to ensure they meet the Responsible Ethanol Sourcing Framework, which is based on best practices. LEGO botanical parts such as trees, leaves are made from plant sources!`
    },
  ]

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        setActive(entry.isIntersecting)
      })
    }, options)
    observer.observe(head.current)
  })

  return (
    <section ref={head} id='sustainability'>
      <div className="absolute front-layer">
        <animated.h2 style={down}>LEGO's Sustainability Efforts </animated.h2>
      </div>
      <div className="content">
        <ul>
          {content.map((content, i) => (
            <animated.li style={up} key={`item${i}`} className="item">
              <div className="cover thumbnail" style={{ backgroundImage: `url(${content.picture})` }} />
              <h3 style={{fontWeight: 600, fontSize: 16, lineHeight: '24px'}}>{content.title}</h3>
              <p>{content.text}</p>
              {content.link && <a className='flex' style={{gap: ".5rem"}} href={content.link} target="_blank" rel="noreferrer">{content.anchor} <MdChevronRight /></a>}
            </animated.li>
          ))}
        </ul>
      </div>
      {transition((style, show) =>
        show && (
          <animated.div className="cover background" style={{ ...style, backgroundImage: `url(${Bg})` }} />
        ))}
    </section>
  )
}

export default LegoSustainability