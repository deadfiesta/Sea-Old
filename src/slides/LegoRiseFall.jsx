import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { options } from './CoverPage'
import { MdChevronRight } from "react-icons/md"

import Left from '../layouts/Left'
import Bg from '../images/cries.jpg'

const LegoRiseFall = () => {

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
    <section ref={head} id='risefall'>
      <Left bg={Bg} active={active}>
        <div className='content-container'>
          <h2>LEGO wasn't always successful</h2>
          <ul>
            {[
              {
                title: 'From its founding in 1932 until 1998, Lego had never posted a loss. In 2003, Lego was $800 million in debt. Sales were down and the future was looking pretty bleak for the Danish toy company. '
              },
              {
                title: 'LEGO took an attempt to diversify its business by introducing jewelleries for girls, there were LEGO clothes, opening theme parks, and designing video games from scratch despite having no experience.'
              },
              {
                title: 'In 2001, Jorgen Vig Knudstorp, a former management consultant at McKinsey & Company, came on board and took over as CEO of Lego. He insisted that Lego must go “back to the brick” and focus on its core products.',
                link: 'https://www.wired.com/images_blogs/underwire/2024/01/in_legos_large.jpg',
                anchor: 'Infograph'
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

export default LegoRiseFall