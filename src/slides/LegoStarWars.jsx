import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { options } from './CoverPage'
import { MdChevronRight } from "react-icons/md"

import Video from '../videos/starwars.mp4'
import Left from '../layouts/Left'
import Bg from '../images/legostarwars.jpg'

const LegoStarWars = () => {

  const [active, setActive] = useState(false)

  const head = useRef()

  const StarWarsVideo = ({ active }) => {
    const [on, set] = useState(false);
    const entry = useSpring({ opacity: active && on ? 1 : 0 })
    return (
      <animated.div onClick={()=>set(!on)} style={entry} className="video-container" >
        {active && <video id="starwarsvideo" data-keepplaying autoPlay muted loop playsInline>
          <source src={Video} type="video/mp4" />
        </video>}
      </animated.div>
    )
  }

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        setActive(entry.isIntersecting)
      })
    }, options)
    observer.observe(head.current)
  })

  return (
    <section ref={head} id='starwars'>
      <Left bg={Bg} active={active} component={<StarWarsVideo active={active} />}>
        <div className='content-container'>
          <h2>How Star Wars "Saved" LEGO</h2>
          <ul>
            {[
              {
                title: 'The first LEGO Star Wars video game came out in 2005 and might very well have saved the LEGO brand.'
              },
              {
                title: 'The LEGO video game arrived in 2005, just after Jorgen Vig Knudstorp took over the company and began turning its prospects around. The game was a massive hit and became an instant classic, prompting LEGO to never look back.'
              },
              {
                title: `The first LEGO Star Wars game was an ideal product for that place and time, despite being released to a fair amount of skepticism. In retrospect, it possessed all of the elements for fun, repeatable play. The template entailed various characters collecting coins and performing tasks in movie-appropriate settings rendered entirely as LEGO bricks. It provided a wide variety of gameplay -- from puzzle-solving to combat -- and LEGO's added charm gave the video game the unique feeling of playing with physical bricks.`,
              },
              {
                title: `LEGO Star Wars is the most popular among all LEGO themes. It is the number one theme that makes up a lot of company sales. Star Wars is a sci-fi dream come true as it allows you to build all the coolest iconic things from the Star Wars universe. It has the most epic Minifigures and sets that are so good that even people who are not a fan of Star Wars can enjoy it. `
              }
            ].map((item, i) => (
              <li key={`topic${i}`}>
                <p>{item.title}</p>
                {item.link && <a  className="flex" style={{ gap: '.5rem' }} href={item.link} target="_blank" rel="noreferrer">{item.anchor}<MdChevronRight /></a>}
              </li>
            ))}
          </ul>
        </div>
      </Left>
    </section>
  )
}

export default LegoStarWars