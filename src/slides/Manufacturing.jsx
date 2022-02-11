import React from 'react'
import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { options } from './CoverPage'
import { animated, useSpring, springRef } from 'react-spring'

import Abs from '../images/manufacturing/01.png'
import Molding from '../images/manufacturing/02.png'
import Inventory from '../images/manufacturing/03.png'
import Minifigure from '../images/manufacturing/04.png'
import Packaging from '../images/manufacturing/05.png'
import Boxing from '../images/manufacturing/06.png'

import AbsVideo from '../videos/manufacturing/01.mp4'
import MoldVideo from '../videos/manufacturing/02.mp4'
import StoreVideo from '../videos/manufacturing/03.mp4'
import PrintVideo from '../videos/manufacturing/04.mp4'
import BagVideo from '../videos/manufacturing/05.mp4'
import ShipVideo from '../videos/manufacturing/06.mp4'

const Title = styled.div`
z-index: 10;
padding: 3rem 4rem`

const Manufacturing = () => {

  const [active, setActive] = useState(false)

  const videos = [AbsVideo, MoldVideo, StoreVideo, PrintVideo, BagVideo, ShipVideo]
  const [index, setIndex] = useState(0)
  const [dim, setDim] = useState(false)

  const appear = useSpring({ y: active ? 0 : 100, opacity: active ? 1 : 0, config: { mass: 1.5, }, ref: springRef })
  const fade = useSpring({ opacity: active ? 1 : 0, y: active ? 0 : -20, config: { tension: 300 } })
  const fading = useSpring({ opacity: dim ? 0 : 1, y: dim ? 450 : 0, config: { friction: 14, mass: .5 } })
  const bgfade = useSpring({ opacity: !dim ? .25 : 1, cursor: dim ? "pointer" : "default" })
  const entry = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }})

  const head = useRef()

  const content = [
    {
      image: Abs,
      year: 'Plastic granules as raw material',
      text: 'Trucks transporting up to 28 tonnes of plastic granules is blasted into tall silos at the factory.',
      anchor: 'manufacture001',
    },
    {
      image: Molding,
      year: 'Melted plastic fed into Mold',
      text: 'The plastic granules are heated, dyed and melted down as they flow into the injection molding machines.',
      anchor: 'manufacture002'
    },
    {
      image: Inventory,
      year: 'Molded parts are inventorised',
      text: 'Molded plastic parts are transported and stored away in a warehouse ready to be taken to the packaging line.',
      anchor: 'manufacture003'
    },
    {
      image: Minifigure,
      year: 'Printing of graphical elements',
      text: 'Specialised decorated parts will move on the pipeline to get their prints',
      anchor: 'manufacture004',
    },
    {
      image: Packaging,
      year: 'Parts are counted and packed into bags ',
      text: 'Parts are transported to an automated counting machine where they are packed into plastic bags',
      anchor: 'manufacture005'
    },
    {
      image: Boxing,
      year: 'Bags of parts are put into boxes ready for shipping',
      text: 'Bags are later dropped into opened lego boxes along with instruction manual and sealed',
      anchor: 'manufacture006'
    }
  ]

  useEffect(()=> {
    if (!active) setIndex(null)
  }, [active, setIndex])

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        setActive(entry.isIntersecting)
      })
    }, options)
    observer.observe(head.current)
  })

  return (
    <section ref={head} id='manufacturing'>
      <Title>
        <animated.h2 style={fade}>Manufacturing Process</animated.h2>
      </Title>
      <animated.ul style={fading}>
        {content.map((item, i) => (
          <animated.li onClick={()=>setDim(!dim)} id={item.anchor} onMouseOver={()=>!dim && setIndex(i)} style={appear} className="item" key={`history${i}`}>
            <div className="cover" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="text-content">
              <div className="title-container"><span className="number">{i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}</span><h3>{item.year}</h3></div>
              <p>{item.text}</p>
            </div>
          </animated.li>
        ))}
      </animated.ul>
      <animated.div onClick={()=> dim && setDim(false)} style={bgfade} className="video-bg">
        {videos.map((video, i) => (
          index === i && <animated.video style={entry} key={i} data-keepplaying id="videocover" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </animated.video>
        ))}

      </animated.div>
    </section>
  )
}

export default Manufacturing