import React from 'react'
import { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import SeaLogo from '../../../Images/sea-logo.svg'
import QuestionOIcon from '@seaweb/coral/icons/QuestionO';
import UserIcon from '@seaweb/coral/icons/User';

const MenuBar = () => {

  const [tabActive, setTabActive] = useState('home')

  const [styles, api] = useSpring(() => ({ left: 0, width: 0, config: { tension: 200, friction: 10, mass: .125 } }))

  useEffect(() => {
    let active = document.getElementById(tabActive)
    active !== null && api.start({ left: active.offsetLeft, width: active.offsetWidth })
  }, [tabActive, api])

  return (
    <div className='coral menubar'>
      <div className="branding">
        <img src={SeaLogo} alt="SeaLogo" />
        <span className="divider" />
        <h3>Investment System</h3>
      </div>
      <ul className="menu-list">
        {['home', 'organisation', 'app center', 'settings'].map((tab, i) => (
          <li onClick={() => setTabActive(tab.replace(/\s/g, ''))} id={tab.replace(/\s/g, '')} className={tabActive === tab.replace(/\s/g, '') ? "menu active" : "menu"} key={`menu${i}`}>
            <span className='name'>{tab}</span>
          </li>
        ))}
        <animated.li style={styles} className="underline" />
      </ul>
      <div className="end">
        <QuestionOIcon />
        <span className="divider"></span>
        <div className="account">
          <div className="avatar">
            <UserIcon size={20} />
          </div>
          <span className="name">Charles Ong</span>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
