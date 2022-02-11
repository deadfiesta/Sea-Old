import React from 'react'
import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { options } from './CoverPage'
import { animated, useSpring, springRef } from 'react-spring'
import { MdNavigateNext } from "react-icons/md"


import Ole from '../images/history/woodenduck.jpg'
import OldLogo from '../images/history/legofirstlogo.jpg'
import InjectionMolding from '../images/history/injection-molding.jpg'
import Patent from '../images/history/patent.jpg'
import NewLogo from '../images/history/legologo1973.jpg'

const Title = styled.div`
padding: 3rem 4rem;`

const Group = styled.ul`
padding: 0 4rem;
display: flex;
flex-direction: column;
gap: 2rem;
@media (min-width: 1024px) {
  flex-direction: row;
}`

const InventionLego = () => {

  const [active, setActive] = useState(false)

  const appear = useSpring({ y: active ? 0 : 100, opacity: active ? 1 : 0, config: { mass: 1.5, }, ref: springRef  })
  const fade = useSpring({ opacity: active ? 1 : 0, y: active ? 0 : -20, config: {tension: 300}})

  const head = useRef()

  const content = [
    {
      image: Ole,
      year: '1932',
      text: 'LEGO blocks originated in the Billund, Denmark, workshop of Ole Kirk Christiansen, who began making wooden toys in 1932.'
    },
    {
      image: OldLogo,
      year: '1936',
      text: 'The Company was named after combining the two Danish words, “Leg Godt” meaning “Play Well,” creating the name LEGO.'
    },
    {
      image: InjectionMolding,
      year: '1949',
      text: 'LEGO ordered its first plastic injection moulding machine from Great Britain, producing forerunner to the LEGO brick we know today under the name Automatic Binding Bricks'
    },
    {
      image: Patent,
      year: '1958',
      text: 'LEGO coupling principle is patented, thus creating the LEGO brick we know today and opening up endless building possibilities.'
    },
    {
      image: NewLogo,
      year: '1973',
      text: 'This modern rendition of the logo appeared in 1973, the same year that LEGO began production and distribution in the US. It represents an attempt to cement a single worldwide logo and remains the most recognisable version of LEGO’s brand identity.'
    }
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
    <section ref={head} id='invention'>
      <Title>
        <animated.h2 style={fade}>LEGO Origin</animated.h2>
        <a className="flex" href="https://www.lego.com/en-us/aboutus/lego-group/the-lego-group-history/" target="_blank" rel="noreferrer"><div className="more">History of LEGO</div> <MdNavigateNext /></a>
      </Title>
      <div className="gridcenter">
        <Group>
          {content.map((item, i) => (
            <animated.li style={appear} className="item" key={`history${i}`}>
              <div className="cover" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="text-content">
                <h3>{item.year}</h3>
                <p>{item.text}</p>
              </div>
            </animated.li>
          ))}
        </Group>
      </div>
    </section>
  )
}

export default InventionLego