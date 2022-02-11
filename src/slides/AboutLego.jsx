import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { options } from './CoverPage'

import Left from '../layouts/Left'
import Bg from '../images/cover.jpg'

const AboutLego = () => {

  const [active, setActive] = useState(false)

  const head = useRef()

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        setActive(entry.isIntersecting)
      })
    }, options)
    observer.observe(head.current)
  })

  return (
    <section ref={head} id='overview'>
      <Left bg={Bg} active={active}>
        <div className='content-container'>
          <h2>What is LEGO</h2>
          <ul>
            {[
              {
                title: 'LEGO is a type of building toy created and made by The Lego Group, a company from Denmark. '
              },
              {
                title: 'LEGO are high-quality, interlocking plastic bricks that are simple, versatile and durable. The interlocking principle with its tubes makes it unique and offers unlimited building possibilities.'
              },
              {
                title: 'Instead of offering kids ready-made toys, LEGO gives them the opportunity to build their toys. When engaging with LEGO, children can be as adventurous as they want, allowing them to experiment, test out and build new ideas.'
              },
              {
                title: `The basic LEGO brick has remained the same since the 1950s, and this simple, child-friendly design has been credited with the toys' longevity.`
              }
            ].map((paragraph, i) => (
              <li key={`topic${i}`}>
                <p> {paragraph.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </Left>
    </section>
  )
}

export default AboutLego