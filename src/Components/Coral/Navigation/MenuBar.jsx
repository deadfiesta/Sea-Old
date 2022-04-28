import React from 'react'
import { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import SeaLogo from '../../../Images/sea-logo.svg'
import QuestionOIcon from '@seaweb/coral/icons/QuestionO';
import UserIcon from '@seaweb/coral/icons/User';

const MenuBar = () => {

  const [tabActive, setTabActive] = useState(0)
  const tabNames = ['Home', 'Organisation', 'App Center', 'Settings']

  const [styles, api] = useSpring(() => ({ left: 0, width: 0, config: { tension: 200, friction: 10, mass: .125 } }))

  useEffect(() => {
    let active = document.querySelector('.menu-list').childNodes[tabActive]
    active !== null && api.start({ left: active.offsetLeft, width: active.offsetWidth })
  })

  return (
    <div className='coral menubar'>
      <div className="branding">
        <img src={SeaLogo} alt="SeaLogo" />
        <span className="divider" />
        <h3>Investment System</h3>
      </div>
      <ul className="menu-list">
        {tabNames.map((tab, i) => (
          <li onClick={()=>setTabActive(i)} className={tab && tabActive === i ? 'menubar-item active' : 'menubar-item'} key={`tab${i}`}><div className="name">{tab}</div></li>
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
