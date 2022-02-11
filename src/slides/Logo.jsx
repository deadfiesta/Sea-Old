import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { options } from './CoverPage'

import Left from '../layouts/Left'
import LogoChange from '../images/lego-logo-evolution.jpg'

const Logo = () => {

  const [active, setActive] = useState(false)

  const head = useRef()

  const Evolution = () => {
    return (
      <div className="evolution">
        <img src={LogoChange} alt="Logo" />
      </div>
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
    <section ref={head} id='logo'>
      <Left active={active} component={<Evolution />}>
        <div className='content-container'>
          <h2>LEGO Logo and Design Elements</h2>
          <ul>
            {[
              {
                title: 'This is the evolution of the Lego Logo. As you can see from 1934, the logo has gone through many changes. It seems they were trying to find their brand but struggling a bit. I think they finally nailed it in 1998.'
              },
              {
                title: 'The LEGO logo features the word “LEGO” spelled out in an original bubble-shaped font known as “LEGO Font.” The letters are white but are surrounded by thin borders of black and yellow and are set against a red, square background.'
              },
              {
                title: `It's thought that this background, - specifically, it's the shape - is a nod to the company's square blocks that they are famous for. The font of the logo is meant to be soft and lighthearted. Its rounded edge, bubble shape conveys an idea of fun and levity that represents the brand itself.`
              },
              {
                title: 'The logo is designed to be eye-catching, the latest and current version of the logo is noticeably more substantial than the previous versions, emplying bright, attention-getting colors such as red and yellow.'
              },
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

export default Logo