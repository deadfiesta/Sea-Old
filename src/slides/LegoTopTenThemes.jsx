import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { animated, useTransition, useSpring } from 'react-spring'
import { options } from './CoverPage'
import { MdChevronRight } from "react-icons/md"

import Bg from '../images/studs-black.jpg'

import StarWars from '../images/legostarwars.webp'
import Ninjago from '../images/legoninjago.jpeg'
import Lord from '../images/legolordoftherings.jpg'
import HarryPotter from '../images/legoharrypotter.jpg'
import Superheroes from '../images/legosuperheroes.jpg'
import Architecture from '../images/legoarchitecture.jpg'
import Technic from '../images/legotechnic.jpeg'
import City from '../images/legocity.jpg'
import Space from '../images/legospace.jpeg'
import Movie from '../images/legomovie.jpg'

const LegoTopTenThemes = () => {

  const [active, setActive] = useState(false)

  const head = useRef()

  const up = useSpring({ opacity: active ? 1 : 0, y: active ? 0 : 200, config: { mass: 2, friction: 30 } })
  const down = useSpring({ opacity: active ? 1 : 0, y: active ? 0 : 100, config: { mass: .75 } })

  const transition = useTransition(active, {
    from: { opacity: 0 },
    enter: { opacity: .35 },
    leave: { opacity: 0, config: { mass: .25 } },
    config: { mass: 5 }
  })

  const content = [
    {
      title: `LEGO Star Wars`,
      picture: StarWars,
    },
    {
      title: `LEGO Ninjago`,
      picture: Ninjago,
    },
    {
      title: `LEGO Lord of The Rings`,
      picture: Lord,
    },
    {
      title: 'LEGO Harry Potter',
      picture: HarryPotter,
    },
    {
      title: 'LEGO Superheroes',
      picture: Superheroes,
    },
    {
      title: 'LEGO Architecture',
      picture: Architecture,
    },
    {
      title: 'LEGO Technic',
      picture: Technic,
    },
    {
      title: 'LEGO City',
      picture: City,
    },
    {
      title: 'LEGO Space',
      picture: Space,
    },
    {
      title: 'LEGO Movie',
      picture: Movie,
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
    <section ref={head} id='topten'>
      <div className="absolute front-layer">
        <animated.h2 style={down}>LEGO's Top 10 Themes </animated.h2>
      </div>
      <div className="content">
        <ul>
          {content.map((content, i) => (
            <animated.li style={up} key={`item${i}`} className="item">
              <div className="cover thumbnail" style={{ backgroundImage: `url(${content.picture})` }} />
              <div className="text">
                <span>{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                <h3 >{content.title}</h3>
                <p>{content.text}</p>
                {content.link && <a className='flex' style={{ gap: ".5rem" }} href={content.link} target="_blank" rel="noreferrer">{content.anchor} <MdChevronRight /></a>}
              </div>
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

export default LegoTopTenThemes