import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { options } from './CoverPage'
import { FaChevronRight } from 'react-icons/fa'

import Left from '../layouts/Left'
import Bg from '../images/liberty.jpg'

const agenda = [
  {
    title: 'Cover',
    anchor: 'cover',
  },
  {
    title: 'Overview',
    anchor: 'overview'
  },
  {
    title: 'What is LEGO',
    anchor: 'about'
  },
  {
    title: 'The Invention of LEGO',
    anchor: 'invention'
  },
  {
    title: 'The LEGO Logo and Brand Values',
    anchor: 'logo'
  },
  {
    title: 'LEGO® Manufacturing Process',
    anchor: 'manufacturing'
  },
  {
    title: 'Why is LEGO Successful',
    anchor: 'success'
  },
  {
    title: 'The Fall of LEGO ',
    anchor: 'price'
  },
  {
    title: 'How Star Wars Saved LEGO',
    anchor: 'starwars'
  },
  {
    title: 'Top Selling LEGO Themes',
    anchor: 'themes'
  },
  {
    title: 'Sustainability and the Environment',
    anchor: 'sustainability'
  },
  {
    title: 'Personal Thoughts',
    anchor: 'thoughts'
  },
]

const Overview = ({ navigate }) => {

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
          <h2>Overview</h2>
          <ul>
            {agenda.slice(2).map((topic, i) => (
              <li style={{ cursor: 'pointer' }} onClick={navigate} id={topic.anchor} key={`topic${i}`}>
                <h3>{i + 1 < 10 ? `0${i + 1}` : i + 1}</h3>
                <h3 style={{ fontWeight: 400 }}> {topic.title} </h3>
                <div className="icon-container flex" style={{ flex: 1, justifyContent: 'flex-end' }}>
                  <FaChevronRight />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Left>
    </section>
  )
}

export default Overview
export { agenda }