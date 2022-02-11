import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { options } from './CoverPage'
import { MdChevronRight, MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md"


import Left from '../layouts/Left'
import Bg from '../images/setup.jpg'

const PersonalThoughts = () => {

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
    <section ref={head} id='personal'>
      <Left bg={Bg} active={active}>
        <div className='content-container'>
          <h2>Personal Thoughts</h2>
          <ul>
            {[
              {
                color: "#2ec4b6",
                type: <MdThumbUpOffAlt />,
                title: 'Building experience - great calming activity for adults and bonding with kids.'
              },
              {
                color: "#2ec4b6",
                type: <MdThumbUpOffAlt />,
                title: 'LEGO system modularity allows you to be creative and reassemble and customise to your own imagination. '
              },
              {
                color: "#2ec4b6",
                type: <MdThumbUpOffAlt />,
                title: 'High quality engineered parts that looks great and lasting.'
              },
              {
                color: "#2ec4b6",
                type: <MdThumbUpOffAlt />,
                title: 'Company that teaches and nurture children through fun and play.'
              },
              {
                color: "#f94144",
                type: <MdThumbDownOffAlt />,
                title: 'Prices may be too expensive, especially here in Singapore LEGO are being taxed higher.'
              },
              {
                color: "#f94144",
                type: <MdThumbDownOffAlt />,
                title: 'Prices are slowly increasing despite soaring profits over the couple of years.'
              },
              {
                color: "#f94144",
                type: <MdThumbDownOffAlt />,
                title: 'White pieces turning yellowish - personal rant.'
              },
              {
                color: "#f94144",
                type: <MdThumbDownOffAlt />,
                title: 'Lack of good display solutions'
              },
            ].map((item, i) => (
              <li key={`topic${i}`}>
                <div className="flex" style={{gap: "1rem", color: item.color}}>{item.type}<p style={{color: 'white'}}>{item.title}</p></div>
                {item.link && <a  className="flex" style={{ gap: '.5rem' }} href={item.link} target="_blank" rel="noreferrer">{item.anchor}<MdChevronRight /></a>}
              </li>
            ))}
          </ul>
        </div>
      </Left>
    </section>
  )
}

export default PersonalThoughts