import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { animated, useTransition, useSpring } from 'react-spring'
import { options } from './CoverPage'

import Bg from '../images/child.jpg'
import Brick from '../images/children.jpg'
import Education from '../images/education.jpg'
import Parent from '../images/parent.jpg'
import Themes from '../images/themes.jpeg'

const LegoSuccess = () => {

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
      title: `Simplicity of a brick with endless possibilities`,
      picture: Brick,
      text: 'LEGO are the most versatile toy in recent history. They are high-quality, and the instructions are easy to follow along. These iconic bricks that allow children and adults to show their creativity and put their mental abilities to good use.'

    },
    {
      title: `Strong partnerships with the education sector`,
      picture: Education,
      text: 'LEGO has always promoted its plastic bricks as educational toys that empower children to become imaginative, engaged learners through play. This brand extends to the overall company, which has established strong partnerships with the education industry.'
    },
    {
      title: `Remains “parent-approved” at all costs`,
      picture: Parent,
      text: `Although kids remain a key target audience for LEGO, the company also understands LEGO's marketing strategy needs to appeal to their parents, who are the ultimate purchase maker. By continuing to promote the educational value of their toys and market them as a way to nurture a child.`
    },
    {
      title: 'Licensing and merchandising mentality',
      picture: Themes,
      text: 'The company has also partnered with Disney, Marvel, and DC Comics to create its popular Star Wars and superhero-themed playsets — which are vital marketing tools since they generate publicity and drive higher sales. '
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
    <section ref={head} id='success'>
      <div className="absolute front-layer">
        <animated.h2 style={down}>Why is LEGO successful?</animated.h2>
      </div>
      <div className="content">
        <ul>
          {content.map((content, i) => (
            <animated.li style={up} key={`item${i}`} className="item">
              <div className="cover thumbnail" style={{ backgroundImage: `url(${content.picture})` }} />
              <h3 style={{fontWeight: 600}}>{content.title}</h3>
              <p>{content.text}</p>
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

export default LegoSuccess