import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SofaSVG from './Icons/SofaSVG'
import { Spiral as Hamburger } from 'hamburger-react'

const Nav = ({ open, setOpen }) => {

  console.log('Render Nav.jsx')

  const pathname = useLocation().pathname;
  const [active, setActive] = useState({
    left: 0,
    width: 0,
  })

  const update = () => {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active')
      tab.getAttribute('anchor') === pathname && tab.classList.add('active')
    })

    document.querySelector('.active') !== null &&
      setActive({
        left: document.querySelector('.active').offsetLeft,
        width: document.querySelector('.active').clientWidth
      })
  }

  document.addEventListener('scroll', () => {
    if (window.scrollY > 10) { document.querySelector('nav').classList.add('scrolled') }
    else { document.querySelector('nav').classList.remove('scrolled') }
  })

  window.onresize = update

  useEffect(() => {
    update()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <nav>
      <div className="wrapper">
        <ul className={open ? "open menu-container" : "menu-container"}>
          <li className={open ? "backing branding" : "branding"}><SofaSVG classname="sofa" />HomeGuru+ <div className="hamburger-container"><Hamburger toggled={open} toggle={setOpen} /></div></li>
          <li><span className="divider"></span></li>
          <li className="tab" anchor="/about"><Link to="/about">About Us</Link></li>
          <li className="tab active" anchor="/"><Link to="/">Pricing</Link></li>
          <li className="tab" anchor="/how"><Link to="/how">How It Works</Link></li>
          <li className="tab" anchor="/faq"><Link to="/faq">FAQ</Link></li>
          <li className="contact"><button className="contact-us" type="button">Contact Us</button></li>
          <li className="underliner" style={{ left: active.left, width: active.width }}></li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav
